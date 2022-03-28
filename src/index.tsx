import React, { FC } from 'react';
import styled, { css, keyframes } from 'styled-components';

export enum WifiStatusType {
  Excellent = 'Excellent',
  Good = 'Good',
  Fair = 'Fair',
  Poor = 'Poor',
  Unavailable = 'Unavailable',
  Error = 'Error',
  Searching = 'Searching',
}

export interface IWifiStatusProps {
  status: WifiStatusType;
  color?: string;
  errorColor?: string;
  offlineColor?: string;
}

export const WifiStatus: FC<IWifiStatusProps> = ({
  status = WifiStatusType.Excellent,
  color = '#148742',
  errorColor = '#D32F2F',
  offlineColor = '#CFCFCF',
}) => {
  const isLevel1 = status === WifiStatusType.Excellent;
  const isLevel2 = status === WifiStatusType.Good || isLevel1;
  const isLevel3 = status === WifiStatusType.Fair || isLevel1 || isLevel2;
  const isLevel4 =
    status === WifiStatusType.Poor || isLevel1 || isLevel2 || isLevel3;

  const SearchingKeyFrames = keyframes`
    0% {
      opacity: 0.2;
    }
    25% {
      opacity: 1;
    }
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 0.2;
    }
  `;

  const animation = () => css`
    ${SearchingKeyFrames} 2s ease infinite
  `;

  const SVG = styled.svg`
    width: 475px;
    height: 350px;
  `;

  const Level1Path = styled.path`
    opacity: ${isLevel1 ? 1 : 0.2};
    animation: ${WifiStatusType.Searching === status ? animation : ''};
    animation-delay: 1.5s;
  `;

  const Level2Path = styled.path`
    opacity: ${isLevel2 ? 1 : 0.2};
    animation: ${WifiStatusType.Searching === status ? animation : ''};
    animation-delay: 1s;
  `;

  const Level3Path = styled.path`
    opacity: ${isLevel3 ? 1 : 0.2};
    animation: ${WifiStatusType.Searching === status ? animation : ''};
    animation-delay: 0.5s;
  `;

  const Level4Path = styled.path`
    opacity: ${isLevel4 ? 1 : 0.2};
    animation: ${WifiStatusType.Searching === status ? animation : ''};
  `;

  return (
    <SVG viewBox="0 0 475 350" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Level1Path
        id="level1"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M33.9277 129.879C87.4393 80.3039 159.061 50 237.76 50C316.199 50 387.606 80.1032 441.06 129.387L474.988 92.659C412.62 35.1371 329.294 0 237.76 0C145.966 0 62.4254 35.3378 0 93.1516L33.9277 129.879Z"
        fill={color}
      />
      <Level2Path
        id="level2"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M101.783 203.335C137.467 170.236 185.251 150 237.76 150C290.009 150 337.579 170.035 373.205 202.843L407.132 166.115C362.592 125.069 303.104 100 237.76 100C172.156 100 112.453 125.27 67.8555 166.607L101.783 203.335Z"
        fill={color}
      />
      <Level3Path
        id="level3"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M169.639 276.791C187.495 260.168 211.44 250 237.76 250C263.82 250 287.551 259.968 305.349 276.298L339.277 239.571C312.565 215.002 276.914 200 237.76 200C198.345 200 162.481 215.202 135.711 240.063L169.639 276.791Z"
        fill={color}
      />
      <Level4Path
        id={'level4'}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M203.567 313.519L237.266 350L271.421 313.027C262.537 304.934 250.725 300 237.76 300C224.535 300 212.509 305.135 203.567 313.519Z"
        fill={color}
      />
      <path
        display={status === WifiStatusType.Unavailable ? 'block' : 'none'}
        id="wifi-status-off"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.0473388 92.9563L1.24574e-05 92.9051C62.3966 35.2374 145.83 0 237.494 0C329.158 0 412.592 35.2374 474.988 92.9052L474.946 92.9503L475 93L435.111 136.074L237.494 350L237.267 349.754L237 350L236.266 349.321L236.32 349.263L0 93L0.0473388 92.9563Z"
        fill={offlineColor}
      />
      <path
        display={status === WifiStatusType.Error ? 'block' : 'none'}
        id="wifi-status-error"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M220 27C214.477 27 210 31.4771 210 37V250.343C210 255.866 214.477 260.343 220 260.343H254C259.523 260.343 264 255.866 264 250.343V37C264 31.4772 259.523 27 254 27H220ZM220 273.307C214.477 273.307 210 277.784 210 283.307V313C210 318.523 214.477 323 220 323H254C259.523 323 264 318.523 264 313V283.307C264 277.784 259.523 273.307 254 273.307H220Z"
        fill={errorColor}
      />
    </SVG>
  );
};
