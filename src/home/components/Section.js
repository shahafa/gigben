import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 75px 15% 75px 15%;
  ${props => props.backgroundColor && `background-color: ${props.backgroundColor}`};
`;

const Title = styled.h1`
  color: #424242;
  text-align: center;
  font-weight: 300;
  margin: 0 0 40px 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

`;

const Section = ({
  htmlRef,
  title,
  backgroundColor,
  children,
}) => (
  <Main backgroundColor={backgroundColor} ref={htmlRef}>
    <Title>{title}</Title>

    <Content>{children}</Content>
  </Main>
);

Section.propTypes = {
  htmlRef: PropTypes.func,
  title: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
};

Section.defaultProps = {
  htmlRef: null,
  backgroundColor: 'white',
};

export default Section;
