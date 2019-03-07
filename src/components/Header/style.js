import styled from 'styled-components'
import globalStyle from '../../styles/base'
import base from '../../styles/base'

const HeaderContainer = styled.header`
  background-image: linear-gradient(to top, #132b41, #041b31);
  color: #ffffff;
  ${globalStyle.flex};
  ${globalStyle.row};
  ${globalStyle.alignItemCenter};
  padding: 10px 20px;
  height: 50px;
  @media (min-width: ${globalStyle.small}) {
    height: 79px;
  }
  .leftNav,
  .rightNav {
    ${globalStyle.flex};
    ${globalStyle.alignItemCenter};
    ${globalStyle.row};
    height: 100%;
  }
  .leftNav {
    .log {
      ${globalStyle.flex};
      ${globalStyle.alignItemCenter};
      ${globalStyle.row};
      height: 100%;
      a {
        margin-right: 15px;
        text-decoration: none;
        cursor: pointer;
      }
      img {
        &:nth-child(1) {
          @media (max-width: ${globalStyle.small}) {
            width: 30px;
          }
        }
        &:nth-child(2) {
          margin-right: 10px;
          @media (max-width: ${globalStyle.small}) {
            width: 40px;
          }
        }
        &:nth-child(3) {
          @media (max-width: ${globalStyle.small}) {
            width: 130px;
          }
        }
      }
    }
  }
  .rightNav {
    ${globalStyle.contentflexEnd};
    @media (max-width: ${globalStyle.small}) {
      display: none;
    }
    @media (min-width: ${globalStyle.small}) {
      flex: 1;
    }
    ul {
      ${globalStyle.flex};
      ${globalStyle.alignItemCenter};
      ${globalStyle.row};
      list-style: none;
      margin: 0px;
      padding: 0px;
      li {
        ${globalStyle.flex};
        ${globalStyle.justifyContentCenter};
        margin-left: 15px;
        margin-right: 15px;
        a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 13px;
        }
        &:last-child {
          a {
            background-color: #027bb2;
            color: rgba(255, 255, 255, 1);
            padding: 6px 25px;
            border-radius: 20px;
          }
        }
      }
    }
  }
`

export { HeaderContainer }
