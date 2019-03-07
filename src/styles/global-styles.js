import { createGlobalStyle } from 'styled-components'
import globalStyle from './base'

export default () => createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700');
  *, :after, :before {
    background-repeat: no-repeat;
    box-sizing: inherit;
  }
  html, body {
    font-family: 'Open Sans', sans-serif;
    height: 100%;
    width: 100%;
    font-weight: 400;
  }
  body {
    margin: 0px;
    padding: 0px;
  }
  button {
    border-radius: 30px;
    background-color: #027bb2;
    color: ${globalStyle.white};
    font-size: 13px;
    padding: 10px 15px;
    min-width: 100px;
    cursor: pointer;
    border: none;
    &:focus {
      outline: none;
    }
  }
  .pageWrapper {
    ${globalStyle.flex};
    ${globalStyle.row};
  }
  .pageContentWrapper {
    ${globalStyle.flex};
    ${globalStyle.column};
    flex: 1 auto;
  }
  .pageContent {
    ${globalStyle.flex};
    ${globalStyle.column};
    flex: 1 auto;
    background-color: #03090f;
    background-image: url('https://res.cloudinary.com/sportsbook/image/upload/v1534244079/homePageBg.png');
    background-position: center 50px;
    background-size: cover;
    position: relative;
    @media (max-width: ${globalStyle.small}) {
      background-size: auto 60%;
    }
  }
  
  .headlineWrapper {
    ${globalStyle.flex};
    ${globalStyle.alignItemflexStart};
    margin-top: 15px;
    .headlineBox {
      ${globalStyle.flex};
      ${globalStyle.column};
      ${globalStyle.alignItemflexStart};
      ${globalStyle.justifyContentCenter};
      background-color: rgba(0, 174, 239, 0.15);
      padding: 10px 20px;
      flex: 80% 0;
      position: relative;
      @media (min-width: ${globalStyle.small}) {
        flex: 50% 0;
      }
      h2 {
        margin: 0px;
        color: ${globalStyle.white};
        font-size: 25px;
        font-weight: 700;
        line-height: normal;
        @media (min-width: ${globalStyle.small}) {
          font-size: 50px;
        }
      }
      p {
        margin: 0px;
        color: ${globalStyle.white};
        font-size: 14px;
        font-weight: 300;
        line-height: normal;
        @media (min-width: ${globalStyle.small}) {
          font-size: 25px;
        }
      }
      &:before {
				content: "";
				width: 100px;
				height: 100%;
				position: absolute;
				top: 0;
				right: 0;
				background-color: #03090f;
				clip-path: polygon(100% 100%,0px 100%,100% 0px);
      }
    }
  }

	.grid {
		border-radius: 5px;
    padding: 15px;
    ${globalStyle.flex};
    // flex: 1;
    flex-direction: column;
    .gridrow {
      ${globalStyle.flex};
    }
  }

  .green {
    color: rgba(94, 255, 124, 0.8);
  }
  .red {
    color: rgba(247, 120, 120, 0.8);
  }
`
