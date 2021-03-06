import { keyframes } from "styled-components";

const SlideOutBottom = keyframes`
from {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

to {
  visibility: hidden;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
}
`;

export default SlideOutBottom;