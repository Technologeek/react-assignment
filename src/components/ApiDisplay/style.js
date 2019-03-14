import styled from 'styled-components'
import globalStyle from '../../styles/base'

const ApiDisplayWrapper = styled.div`
  ${globalStyle.flex};
  ${globalStyle.flexCenter};
  ${globalStyle.alignItemCenter};
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  .modal-register {
    ${globalStyle.flex};
    ${globalStyle.column};
    ${globalStyle.flexCenter};
    ${globalStyle.alignItemCenter};
    background: ${globalStyle.white} url('/static/modal.png') no-repeat top
      center;
    background-size: cover;
    border-radius: 5px;
    width: 80%;
    z-index: 110;
    padding: 50px 25px;
    position: relative;
    @media (min-width: ${globalStyle.small}) {
      width: 550px;
      padding: 50px 75px;
    }
    .err-message {
      color: #f00;
    }

    .modal-close {
      background: url('https://i.ibb.co/8KPbWSg/close.png') no-repeat top;
      cursor: pointer;
      width: 17px;
      height: 18px;
      position: absolute;
      top: 15px;
      right: 15px;
    }

    /* We are here */
    .logo-heading {
      ${globalStyle.flex};
      ${globalStyle.row};
      ${globalStyle.alignItemCenter};
      img {
        margin: 0 10px;
        &.logo-heading__nine {
          height: 40px;
        }
        &.logo-heading__sportsbook {
          height: 18px;
        }
      }
      @media (min-width: ${globalStyle.small}) {
        img {
          &.logo-heading__nine {
            height: 50px;
          }
          &.logo-heading__sportsbook {
            height: 23px;
          }
        }
      }
    }

    h3 {
      color: #091e31;
      font-size: 40px;
      font-weight: 300;
      margin: 34px 0 20px;
      padding: 0;
      text-align: center;
    }
    .modal-register__form {
      margin: 0;
      width: 100%;
      ${globalStyle.flex};
      ${globalStyle.alignItemCenter};
      ${globalStyle.column};
    }
    .input-field {
      ${globalStyle.flex};
      ${globalStyle.column};
      ${globalStyle.alignItemCenter};
      width: 100%;
      .form-group {
        ${globalStyle.flex};
        ${globalStyle.column};
        margin: 0 0 20px;
        width: 100%;
        input {
          border: 0;
          outline: 0;
          background: transparent;
          border-bottom: 1px solid #b3b2b2;
          color: #b3b2b2;
          font-size: 18px;
          padding: 15px 10px 12px 28px;
          &::placeholder {
            color: #b3b2b2;
            opacity: 1;
          }
          &:-ms-input-placeholder {
            color: #b3b2b2;
          }

          &::-ms-input-placeholder {
            color: #b3b2b2;
          }
        }
        .err {
          color: #f00;
          padding: 7px 0 0 28px;
        }
      }
      button {
        color: #fefefe;
        width: 250px;
        font-size: 18px;
        padding: 20px 0;
        margin: 30px 0 10px;
        border-radius: 30px;
        background-color: #ff7700;
      }
    }
  }
  .backdrop {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    z-index: 100;
  }
`

export { ApiDisplayWrapper }
