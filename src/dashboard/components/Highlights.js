import React from 'react';
import styled from 'styled-components';
import OverviewControl from './OverviewControl';

const TextItem = styled.div`
  font-size: 14px;
  color: #F5A623;
  font-weight: 300;
`;

const Link = styled.a`
  color: blue;
  
  &:visited {
     color: blue;
  }
}
`;

const Highlights = () => (
  <OverviewControl icon="rocket" title="Highlights" height="35px">
    <TextItem>
      We didn&apos;t recognize Retirment deductions in your account,&nbsp;
      <Link href="https://www.honestdollar.com/" target="_blank" rel="noopener noreferrer">
        enroll Retirment Plan
      </Link>
    </TextItem>
    <br />
    <TextItem>
      We didn&apos;t recognize Health Insurance deductions in your account,&nbsp;
      <Link href="https://www.stridehealth.com/" target="_blank" rel="noopener noreferrer">
        enroll Health Insurance Plan
      </Link>
    </TextItem>
  </OverviewControl>
);

export default Highlights;
