import styled from 'styled-components'
import globalStyle from '../../styles/base'

const FooterContainer = styled.footer`
  ${globalStyle.flex};
  ${globalStyle.alignItemCenter};
  background-color: ${globalStyle.orange};
  color: rgba(255, 255, 255, 0.3);
  @media (min-width: ${globalStyle.small}) {
    height: 48px;
  }
  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
    ${globalStyle.flex};
    ${globalStyle.column};
    flex: 1 auto;
    @media (min-width: ${globalStyle.small}) {
      ${globalStyle.row};
      flex: 1 auto;
    }
    li {
      ${globalStyle.flex};
      list-style: none;
      ${globalStyle.justifyContentCenter};
      margin-left: 15px;
      margin-right: 15px;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        right: -15px;
        width: 1px;
        height: 12px;
        background-color: rgba(255, 255, 255, 0.2);
        top: 0;
        bottom: 0;
        margin: auto;
      }
      &:last-child {
        &:before {
          display: none;
        }
      }
      a {
        font-size: 14px;
        text-decoration: none;
        color: rgba(255, 255, 255, 0.3);
      }
    }
  }
`
export { FooterContainer }
