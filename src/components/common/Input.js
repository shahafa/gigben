import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import { textProps, sizeProps } from './propReceivers';

const Input = styled(TextField)`
  ${textProps};
  ${sizeProps};
`;

export default (Input);
