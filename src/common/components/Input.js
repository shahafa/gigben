import React from 'react';
import PropTypes from 'prop-types';
// import { withStyles, createStyleSheet } from 'material-ui/styles';
import InputBase from 'material-ui/Input';

// const styleSheet = createStyleSheet('Input', () => ({
//   input: {
//     textAlign: 'center',
//   },
// }));

const Input = ({
  classes,
  textAlignCenter,
  ...rest
}) => (
  <InputBase
    {...rest}
    classes={textAlignCenter ? { input: classes.input } : {}}
  />
);

Input.defaultProps = {
  textAlignCenter: false,
};

Input.propTypes = {
  classes: PropTypes.object.isRequired,
  textAlignCenter: PropTypes.bool,
};

// export default withStyles(styleSheet)(Input);
export default Input;
