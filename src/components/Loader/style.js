import styled from 'styled-components'
import globalStyle from '../../styles/base'
const LoaderContainer = styled.div`
  ${globalStyle.flex};
  ${globalStyle.column};
  ${globalStyle.alignItemCenter};
  .lds-hourglass {
    ${globalStyle.flex};
    ${globalStyle.column};
    ${globalStyle.alignItemCenter};
    justify-content: center;
    height: 20px;
  }
  .lds-hourglass:after {
    content: ' ';
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 6px;
    box-sizing: border-box;
    border: 20px solid #fed;
    border-color: #fed transparent #fed transparent;
    animation: lds-hourglass 1.2s infinite;
  }
  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`
export { LoaderContainer }