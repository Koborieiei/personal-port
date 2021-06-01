import mq from "../utils/mediaQuery"
import styled, { css } from "styled-components"

const gridBreak = ({
  column = 3,
  height = 50,
  columnGap = 20,
  rowGap = 10,
  breakToRow = mq.l,
  breakToColumn = mq.s,
  breakToRowHeight = 155,
  maxWidth = "100%",
}) => css`
  grid-template-columns: repeat(${column}, 1fr);
  grid-column-gap: ${columnGap}px;
  grid-row-gap: ${rowGap}px;
  grid-auto-rows: ${height}px;
  max-width: ${maxWidth};

  ${breakToColumn} {
    grid-template-columns: 1fr;
    grid-auto-rows: ${breakToRowHeight};
  }
`
const GridRow = styled.div`
  display: grid;
  ${gridBreak};
`
export { GridRow }
