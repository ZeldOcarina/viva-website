function respond(breakpoint, css) {
  switch (breakpoint) {
    case "iphone-5":
      return `@media only screen and (max-width: 21.875em) {
                ${css}
              }`; // 350px
    case "phone-port":
      return `@media only screen and (max-width: 28.125em) {
                ${css}
              }`; // 450px
    case "phone-land":
      return `@media only screen and (max-width: 51.25em) {
                ${css}
              }`; // 820px
    case "tab-port":
      return `@media only screen and (max-width: 56.25em) {
                ${css}
              }`; // 900px
    case "tab-land":
      return `@media only screen and (max-width: 75em) {
                ${css}
              }`; // 1200px
    case "laptop":
      return `@media only screen and (max-width: 102.18em) {
                ${css}
              }`; // 450px
    case "big-laptop":
      return `@media only screen and (max-width: 115em) {
                ${css}
              }`; // 1740px
    case "big-desktop":
      return `@media only screen and (min-width: 112.5em) {
                ${css}
              }`; // 1740px
    case "4k-tv":
      return `@media only screen and (min-width: 237.5em) {
                ${css}
              }`; // 3800px
    default:
      return new Error("Invalid Media Query");
  }
}

export default respond;
