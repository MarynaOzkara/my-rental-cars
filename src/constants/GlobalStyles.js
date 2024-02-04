import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`


:root{
    /* colors */
   --color-wight: #fff;
   --color-black: #121417;
   --color-text: rgba(18, 20, 23, 0.50);
   --color-label: rgb(138, 138, 137); 
   --color-brend: #3470FF;
   --color-acsent: #0B44CD;
   --color-fav-active: rgb(52, 112, 255);
   --color-fav-normal: rgba(255, 255, 255, 0.8);
   --color-input: rgb(247, 247, 251);
   --color-modal-backdrop: rgba(18, 20, 23, 0.5);
   --shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
  0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

   /* typography */
   --family: 'Manrope', Helvetica;
   --fw-bold: 700;
   --fw-semi-bold: 600;
   --fw-normal: 500;
   --fw-light: 400;
   --fs-ss: 12px;
   --fs-sm: 14px;
   --fs-md: 16px;
   --fs-lg: 18px;
   --fs-xl: 24px;
   --fs-xxl: 32px
}
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--family);
  font-weight: var(--fw-light);
  font-size: var(--fs-ss);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--color-wight);
  color: var(--color-text);
}
a, button {
  cursor: pointer;
}
h1,h2,h3,h4,h5,p{
  margin: 0;
  padding: 0;
}
ol, ul{
  margin: 0;
  padding: 0;
  list-style: none;
}
img {
  display: block;
  width: 100%;
  
}
`;
