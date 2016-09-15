import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';
import {
  InstantSearch,
  SearchBox,
  HierarchicalMenu,
  RefinementList,
  Range,
  Hits,
  SortBy,
  Stats,
  Pagination,
  CurrentFilters,
  createConnector,
} from '../packages/react-instantsearch';
import {StyleSheet, css} from 'aphrodite';
import style from './defaultRangeStyle.css';
import {withKnobs, text, boolean, number, object} from '@kadira/storybook-addon-knobs';
import {Button} from 'react-toolbox/lib/button';

const stories = storiesOf('Styling', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

stories
  .add('Default', () => {
    return <InstantSearch
      className="container-fluid"
      appId="latency"
      apiKey="6be0576ff61c053d5f9a3225e2a90f76"
      indexName="ikea"
    >
      <Range attributeName="price"/>
    </InstantSearch>;
  })
  .add('Aphrodite', () => {
    const theme = StyleSheet.create({
      track: {
        height: '100%',
        background: 'rgba(0, 0, 0, 0.15)',
        ':first-child': {
          borderTopLeftRadius: 2,
          borderBottomLeftRadius: 2,
        },
        ':last-child': {
          borderTopRightRadius: 2,
          borderBottomRightRadius: 2,
        },
        ':nth-child(2)': {
          backgroundColor: 'purple',
        },
      },
    });

    const aphroditeMerged = {...Range.defaultTheme, ...theme};

    return <InstantSearch
      className="container-fluid"
      appId="latency"
      apiKey="6be0576ff61c053d5f9a3225e2a90f76"
      indexName="ikea"
    >
      <Range theme={[aphroditeMerged, css]} attributeName="price"/>
    </InstantSearch>;
  })
  .add('CSS Modules', () => {
    const cssModuleMerged = {...Range.defaultStyle, ...style};
    return <InstantSearch
      className="container-fluid"
      appId="latency"
      apiKey="6be0576ff61c053d5f9a3225e2a90f76"
      indexName="ikea"
    >
      <Range theme={cssModuleMerged} attributeName="price"/>
    </InstantSearch>;
  });


