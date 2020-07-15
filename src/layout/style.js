import styled from "styled-components";
import { $headerHeight, $headerBgColor } from "../style/variables";

export const Layoutwrapper = styled.div`
  height: 100%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: ${$headerHeight};
  background-color: ${$headerBgColor};
  padding-right: 36px;
`;

export const HeaderLeft = styled.div`
  padding: 14px 14px 0 8px;
`;

export const HeadeRight = styled.div`
  display: flex;
  align-items: center;
  .search-wrap {
    margin-right: 16px;
  }
`;
