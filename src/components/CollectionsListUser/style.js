import styled from 'styled-components'
import globalStyle from '../../styles/base'

const CollectionListWrapper = styled.div`
  ${globalStyle.flex};
  ${globalStyle.flexCenter};
  ${globalStyle.alignItemCenter};
  padding-top: 20px;
  .custom_width {
    width: 100px !important;
    margin-left: 43px;
  }
  .set_color {
    color: #ff5006e8 !important;
    border-bottom: 0.1px #ff8900 solid;
  }
  .custom_color {
    color: #ff5006bf !important;
  }
  .cell_width {
    width: 100% !important;
  }
`

export { CollectionListWrapper }
