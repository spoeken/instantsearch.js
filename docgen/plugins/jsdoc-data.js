import collectJson from 'collect-json';
import jsdocParse from 'jsdoc-parse';
import forEach from 'lodash/forEach';
import groupBy from 'lodash/groupBy';

export default function(opts) {
  if (!opts.src) throw new Error('opts.src must be defined');

  return function(files, metalsmith, done) {
    const src = metalsmith.path(opts.src);
    jsdocParse({src, json: true}).pipe(collectJson(dataReady));

    function dataReady(unfilteredSymbols) {
      const symbolsByCategory = groupBy(
        unfilteredSymbols.filter(o => !o.deprecated && o.category),
        'category'
      );

      forEach(symbolsByCategory, (symbols, category) => {
        forEach(symbols, data => {
          const filename = `${category}/${data.name}.html`;
          const customTags = parseCustomTags(data.customTags);
          files[filename] = { // eslint-disable-line quote-props
            ...data,
            ...customTags,
            mode: '0764',
            contents: '',
            title: `${data.name} ${data.category}`,
            layout: `${data.category}.pug`,
            'nav_groups': [category],
          };
        });
      });

      done();
    }
  };
}

const customTagParsers = {
  proptype: v => {
    const parsed = (/\{(\S+)\} (?:(\S+) - )?(.+)/).exec(v);
    if (!parsed) return null;
    return {
      type: parsed[1],
      name: parsed[2],
      description: parsed[3],
    };
  },
  providedproptype: v => {
    const parsed = (/\{(\S+)\} (?:(\S+) - )?(.+)/).exec(v);
    if (!parsed) return null;
    return {
      type: parsed[1],
      name: parsed[2],
      description: parsed[3],
    };
  },
  themekey: v => {
    const parsed = (/(?:(\S+) - )?(.+)/).exec(v);
    if (!parsed) return null;
    return {
      key: parsed[1],
      description: parsed[2],
    };
  },
};

function parseCustomTags(customTagObjects) {
  const res = {};
  customTagObjects.forEach(({tag, value}) => {
    const tagValueParser = customTagParsers[tag];
    if (!tagValueParser) return;
    res[tag] = res[tag] || [];
    res[tag].push(tagValueParser(value));
  });
  return res;
}
