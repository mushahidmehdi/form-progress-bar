import React from 'react';
import 'react-step-progress-bar/styles.css';
import { ProgressBar, Step } from 'react-step-progress-bar';
import styled from 'styled-components';
import vectorIcon from '../assests/Vector.svg';
import ellipseIcon from '../assests/Ellipse.svg';
import ellipseGrayIcon from '../assests/EllipseGray.svg';

const StepProgressBar = ({ step, totalStep, progessBarConfig }) => {
  const stepped = ((step - 1) * 100) / totalStep;

  return (
    <ProgressBarWrapper>
      <ProgressBar
        percent={stepped}
        filledBackground='#0466CC'
        unfilledBackground='#E3E3E3'
        height='2px'
      >
        {progessBarConfig?.map(({ stepTitle }, key) => (
          <Step transition='scale' key={key}>
            {({ accomplished, index }) => (
              <Steps accomplished={accomplished} index={index} step={step}>
                {accomplished ? (
                  index === step - 1 ? (
                    <img src={ellipseIcon} alt='' />
                  ) : (
                    <img src={vectorIcon} alt='' />
                  )
                ) : (
                  <img src={ellipseGrayIcon} alt='' />
                )}
                <p>{stepTitle}</p>
              </Steps>
            )}
          </Step>
        ))}
      </ProgressBar>
    </ProgressBarWrapper>
  );
};

const ProgressBarWrapper = styled.div`
  padding-block: 1rem;
  margin: 0 auto;
  max-width: 40rem;
`;

const Steps = styled.div`
  width: 1.4rem;
  height: 1.4rem;
  background-color: ${({ theme, accomplished }) =>
    accomplished ? theme.primary.shade[500] : theme.gray[100]};
  border-radius: 999rem;
  display: flex;
  justify-content: center;
  align-items: center;

  > p {
    font-size: 0.85rem;
    position: absolute;
    top: 100%;
    width: 7rem;
    color: ${({ theme, accomplished }) =>
      accomplished ? theme.primary.default : theme.gray[200]};
    font-weight: ${({ step, index }) => (step - 1 === index ? 400 : 300)};
  }
  @media only screen and (max-width: 35.99em) {
    > p {
      display: none;
    }
  }
`;

export default StepProgressBar;
