import styled from 'styled-components';
import { flexboxProps, marginProps, paddingProps, sizeProps, backgroundProps } from './propReceivers';

const Container = styled.div`
  ${flexboxProps}
  ${marginProps}
  ${paddingProps}
  ${sizeProps}
  ${backgroundProps}
  ${props => props.boxShadow && `box-shadow: ${props.boxShadow}`};
  ${props => props.borderRadius && `border-radius: ${props.borderRadius}`};
  ${props => props.cursorPointer && 'cursor: pointer'};  
`;

export default Container;
