function respond(breakpoint, css) {
  switch (breakpoint) {
    case "iphone-5":
      return `@media only screen and (max-width: ${350 / 16}em) {
                ${css}
              }`; // 350px
    case "phone-port":
      return `@media only screen and (max-width: ${450 / 16}em) {
                ${css}
              }`; // 450px
    case "small-phone-land":
      return `@media only screen and (max-width: ${736 / 16}em) {
                ${css}
              }`; // 926px
    case "phone-land":
      return `@media only screen and (max-width: ${926 / 16}em) {
                ${css}
              }`; // 926px
    case "tab-port":
      return `@media only screen and (max-width: ${1024 / 16}em) {
                ${css}
              }`; // 900px
    case "tab-land":
      return `@media only screen and (max-width: ${1366 / 16}em) {
                ${css}
              }`; // 1366px
    case "laptop":
      return `@media only screen and (max-width: ${1635 / 16}em) {
                ${css}
              }`; // 450px
    case "big-laptop":
      return `@media only screen and (max-width: ${1740 / 16}em) {
                ${css}
              }`; // 1740px
    case "big-desktop":
      return `@media only screen and (min-width: 112.5em) {
                ${css}
              }`; // 1740px
    case "4k-tv":
      return `@media only screen and (min-width: ${3800 / 16}em) {
                ${css}
              }`; // 3800px
    default:
      return new Error("Invalid Media Query");
  }
}

export default respond;
