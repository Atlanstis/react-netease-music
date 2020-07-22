import styled from "styled-components";
import {
  $headerHeight,
  $miniPlayerHeight,
  $layoutContentMinWidth,
  $centerContentMaxWidth,
} from "@/style/variables";

export const Layoutwrapper = styled.div`
  height: 100%;
`;

export const LayoutBody = styled.div`
  display: flex;
  height: calc(100% - ${$headerHeight});
`;

// 侧边栏
export const LayoutSider = styled.div`
  height: calc(100% - ${$miniPlayerHeight});
`;

// 内容
export const LayoutContent = styled.div`
  flex: 1;
  overflow-y: auto;
  min-width: ${$layoutContentMinWidth};
  margin-bottom: ${$miniPlayerHeight};

  .router-view-center {
    max-width: ${$centerContentMaxWidth};
    margin: auto;
  }
`;
