import { css } from 'styled-components'

export default {
  // Flex
  flex: css`
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
  `,

  // Align
  flexCenter: css`
    align-items: center;
    justify-content: center;
  `,
  justifyContentCenter: css`
    justify-content: center;
  `,
  alignItemCenter: css`
    align-items: center;
  `,
  alignItemflexStart: css`
    align-items: flex-start;
  `,
  flexStretch: css`
    align-items: stretch;
  `,
  contentflexEnd: css`
    justify-content: flex-end;
  `,

  // Direction
  column: css`
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  `,
  row: css`
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  `,
  // Color
  black: css`#000000`,
  white: css`#ffffff`,
  red: css`red`,
  darkBlue: `#091e31`,
  // View Port
  small: css`600px`,
}
