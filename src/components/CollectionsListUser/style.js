import styled from 'styled-components'
import globalStyle from '../../styles/base'

const CollectionListWrapper = styled.div`
  ${globalStyle.flex};
  ${globalStyle.flexCenter};
  ${globalStyle.alignItemCenter};
  .custom_width {
    width: 100px !important;
    margin-left: 43px;
  }
`

export { CollectionListWrapper }
