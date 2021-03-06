import styled from 'styled-components';
import { textProps, sizeProps } from './propReceivers';

const Text = styled.div`
  ${textProps};
  ${sizeProps};
  font-family: 'Roboto';
`;

export default Text;
