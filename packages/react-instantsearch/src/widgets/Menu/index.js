import connect from './connect';
import Menu from './Menu';
import MenuSelect from './MenuSelect';

/**
 * @class 
 * @borrows 
 */
const Connected = connect(Menu);
Connected.Select = connect(MenuSelect);
Connected.connect = connect;
export default Connected;
