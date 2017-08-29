import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

const TitleText = styled.div`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #4a4a4a;
`;


const Content = styled.div`
  flex: 1;
`;

const OverviewControl = ({
  Icon,
  title,
  children,
}) => (
  <Wrapper>
    <Title>
      <Icon />
      <TitleText>
        {title}
      </TitleText>
    </Title>

    <Content>
      {children}
    </Content>
  </Wrapper>
);

OverviewControl.propTypes = {
  Icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
};

export default OverviewControl;
