import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
.d-none {
    display: none !important;
  }
  
  .hidden {
    visibility: hidden !important;
  
    &--file-input {
      position: absolute;
    }
  }
  
  .text-center {
    text-align: center !important;
  }
  
  .light-primary {
    color: var(--color-primary-light !important);
  }
  
  .image-bw {
    filter: grayscale(100%);
    opacity: 0.6;
  }
  
  .bold {
    font-weight: bold;
  }
  
  .italics {
    font-style: italic;
  }
  
  .hide-mobile {
    @include respond(phone-land) {
      display: none;
    }
  }
  
  .hide-desktop {
    display: none;
  
    @include respond(phone-land) {
      display: block;
    }
  }
  
  .disabled-link {
    opacity: 0.5;
    pointer-events: none;
  }
  
  .invisible {
    opacity: 0;
  }
  
  .bold {
    font-weight: 700;
  }
  
  .underlined {
    text-decoration: underline;
  }
  
  .mb-1 {
    margin-bottom: 1rem !important;
  }
  .mb-2 {
    margin-bottom: 2rem !important;
  }
  .mb-3 {
    margin-bottom: 3rem !important;
  }
  .mb-4 {
    margin-bottom: 4rem !important;
  }
  .mb-5 {
    margin-bottom: 5rem !important;
  }
  .mt-1 {
    margin-top: 1rem !important;
  }
  .mt-2 {
    margin-top: 2rem !important;
  }
  .mt-3 {
    margin-top: 3rem !important;
  }
  .mt-4 {
    margin-top: 4rem !important;
  }
  .mt-5 {
    margin-top: 5rem !important;
  }
  
  .bg-dark {
    background-color: var(--black);
  }
  `;
