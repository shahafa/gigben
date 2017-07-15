import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Input from 'material-ui/Input';

const styleSheet = createStyleSheet('Input', () => ({
  input: {
    textAlign: 'center',
  },
}));

const InputCenterAligned = ({ classes, ...rest }) => (
  <Input
    {...rest}
    classes={{
      input: classes.input,
    }}
  />
);

InputCenterAligned.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(InputCenterAligned);
