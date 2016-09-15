import {StyleSheet, css} from 'aphrodite';

const theme = StyleSheet.create({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: 4,
    margin: '40px 0px',
  },
  handles: {
    position: 'absolute',
    top: '50%',
    left: '0px',
    right: '0px',
  },
  handle: {
    position: 'absolute',
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 0,
    height: 0,
    ':hover': {
      handleDot: {
        transform: 'scale(2)',
      },
      handleToolTip: {
        opacity: 1,
      },
    },

  },
  handleDot: {
    backgroundColor: '#3E82F7',
    width: 10,
    height: 10,
    borderRadius: 5,
    flexShrink: 0,
    transition: 'transform 0.1s ease',
  },
  handleActive: {
    handleDot: {
      transform: 'scale(2)',
    },
    handleTooltip: {
      opacity: 1,
    },
  },
  handleTooltip: {
    fontSize: '0.8em',
    padding: '0.3em 0.5em',
    borderRadius: '0.3em',
    position: 'absolute',
    top: '-40px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    opacity: 0,
    transition: 'opacity 0.1s ease',
    pointerEvents: 'none',
  },
  tracks: {
    width: '100%',
    height: '4px',
    display: 'flex',
  },
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
      backgroundColor: 'yellow',
    },
  },
  bounds: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
  },

  bound: {
    position: 'absolute',
    top: '0.6em',
    color: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontSize: '0.8em',
    width: 0,
    height: 0,
  },

  boundMin: {
    left: 0,
  },

  boundMax: {
    right: 0,
  },
});

export default theme;
