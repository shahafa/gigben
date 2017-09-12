import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import InputBase from 'material-ui/Input';

const styles = {
  input: {
    textAlign: 'center',
  },
};

const Input = ({
  classes,
  textAlignCenter,
  ...rest
}) => (
  <InputBase
    {...rest}
    classes={{
      input: classes.input,
    }}
  />
);

Input.defaultProps = {
  textAlignCenter: false,
};

Input.propTypes = {
  classes: PropTypes.object.isRequired,
  textAlignCenter: PropTypes.bool,
};

export default withStyles(styles)(Input);
