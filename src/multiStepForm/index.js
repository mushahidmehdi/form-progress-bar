import React from 'react';
import ProgressBar from './ProgressBar';
import styled from 'styled-components';

const MultiStepForm = ({ active, totalStep, progessBarConfig }) => {
  return (
    <ProgressBarWrapper>
      <ProgressBar
        step={active}
        totalStep={totalStep}
        progessBarConfig={progessBarConfig}
      />
      {progessBarConfig.map(({ step, stepTitle }) => {
        return active - 1 === step ? (
          <ProgressBarTitle>{stepTitle}</ProgressBarTitle>
        ) : (
          ''
        );
      })}
    </ProgressBarWrapper>
  );
};

const ProgressBarWrapper = styled.div`
  margin: 0 auto;
  padding-inline: 5rem;
`;

const ProgressBarTitle = styled.div`
  @media only screen and (min-width: 36em) {
    display: none;
  }
  color: ${({ theme }) => theme.primary.shade[700]};
  font-size: 0.95rem;
  font-weight: 500;
  margin-inline-start: -0.5rem;
`;

export default MultiStepForm;
