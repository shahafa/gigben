import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 20px;
  line-height: 1.67;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
`;

const Value = styled.div`
  font-weight: bold;
  color: #ffffff;
`;

const HeaderItem = ({
  value,
  label,
}) => (
  <Wrapper>
    <Value>{value}</Value>
    {label}
  </Wrapper>
);

HeaderItem.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default HeaderItem;
