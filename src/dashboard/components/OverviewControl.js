import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SimpleLineIcon from 'react-simple-line-icons';

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
  ${props => `height: ${props.height}`};
`;

const OverviewControl = ({
  icon,
  title,
  children,
  height,
}) => (
  <Wrapper>
    <Title>
      <SimpleLineIcon name={icon} />
      <TitleText>
        {title}
      </TitleText>
    </Title>

    <Content height={height}>
      {children}
    </Content>
  </Wrapper>
);

OverviewControl.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
  height: PropTypes.string,
};

OverviewControl.defaultProps = {
  height: '160px',
};

export default OverviewControl;
