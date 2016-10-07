import forEach from 'lodash/forEach';

export default function() {
  return function(files, metalsmith, done) {
    const categories = {};
    forEach(files, (data, path) => {
      if (!path.match(/\.html$/)) return;
      const category = data.category || 'other';
      categories[category] = categories[category] || [];
      categories[category].push({
        path,
        title: data.title,
      });
    });

    forEach(files, (data, path) => {
      if (!path.match(/\.html$/)) return;
      const category = data.category || 'other';
      data.navigation = categories[category];
      data.nav_path = path;
    });

    done();
  };
}
