/**
 * @module widgets/Hits
 */
import connect from './connect';
import HitsComponent from './Hits';

/**
 * Hits is the widget for displaying the results returned
 * by Algolia
 * @kind component
 * @category widget
 * @propType {number} hitsPerPage - How many hits should be displayed for every page.
 *   Ignored when a `HitsPerPage` component is also present.
 * @propType {Component} itemComponent - Component used for rendering each hit from
 *   the results. If it is not provided the rendering defaults to displaying the
 *   hit in its JSON form. The component will be called with a `hit` prop.
 */
const Hits = connect(
  HitsComponent
);
Hits.connect = connect;
export default Hits;
