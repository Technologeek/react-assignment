import styled from 'styled-components'
import globalStyle from '../../styles/base'

const CollectionListWrapper = styled.div`
  ${globalStyle.flex};
  ${globalStyle.flexCenter};
  ${globalStyle.alignItemCenter};
  .set_color {
    color: #ff5006e8 !important;
    border-bottom: 0.1px #ff8900 solid;
  }
  .custom_color {
    color: #ff5006bf !important;
  }
  .custom_color_2 {
    color: #ff5006e8 !important;
    padding-top: 10px;
  }
  .icon_color {
    color: #fa0236e8 !important;
  }
  .new_color {
    color: #ff262f;
  }
`

export { CollectionListWrapper }
