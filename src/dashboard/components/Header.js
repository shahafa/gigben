import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Humanize from 'humanize-plus';
import SimpleLineIcon from 'react-simple-line-icons';
import { Logo } from 'common/components';
import HeaderItem from './HeaderItem';

const Wrapper = styled.div`
  width: 100%;
  height: 280px;
  background-image: linear-gradient(to bottom, #736efe, #5efce8);
  padding: 25px 50px 0 50px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoutButton = styled.div`
  cursor: pointer;
`;

const HeaderItemsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const Header = ({
  onLogoutClick,
  bankBalance,
  creditCards,
  loans,
  investments,
  // retiermentBalance,
}) => (
  <Wrapper>
    <Container>
      <Logo color="white" size="40px" />

      <LogoutButton onClick={onLogoutClick}>
        <SimpleLineIcon name="logout" color="white" />
      </LogoutButton>
    </Container>

    <HeaderItemsWrapper>
      <HeaderItem label="Total Balance" value={`$${Humanize.intComma(bankBalance)}`} />
      <HeaderItem label="Credit Cards" value={`$${Humanize.intComma(creditCards)}`} />
      <HeaderItem label="Loans" value={`$${Humanize.intComma(loans)}`} />
      <HeaderItem label="Savings" value={`$${Humanize.intComma(investments)}`} />
      {/*
        <HeaderItem label="Retierment Balance" value={`$${Humanize.intComma(retiermentBalance)}`} />
      */}
    </HeaderItemsWrapper>
  </Wrapper>
);

Header.propTypes = {
  onLogoutClick: PropTypes.func.isRequired,
  bankBalance: PropTypes.number.isRequired,
  creditCards: PropTypes.number.isRequired,
  loans: PropTypes.number.isRequired,
  investments: PropTypes.number.isRequired,
  // retiermentBalance: PropTypes.number,
};

Header.defaultProps = {
  // retiermentBalance: 0,
};

export default Header;
