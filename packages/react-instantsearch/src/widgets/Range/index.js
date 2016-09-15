import connect from './connect';
import Range from './Range';
import style from './defaultThemeCssModule.css';
import theme from './defaultThemeAphrodite';

const Connected = connect(Range);
Connected.connect = connect;
Connected.defaultTheme = theme;
/*
Connected.defaultStyle = style;
*/
export default Connected;
