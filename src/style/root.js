import { createGlobalStyle } from "styled-components";
import { $bodyBgColor, $fontSize } from "./variables";

export const Globalstyle = createGlobalStyle`
#root {
  height: 100%;
  background-color: ${$bodyBgColor};
  font-size: ${$fontSize};
}

.nav-link {
  text-decoration: none;
}
`;
