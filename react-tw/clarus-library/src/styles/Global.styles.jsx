import { createGlobalStyle } from "styled-components";
import logo from "../assets/logo4.jpg";
export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Shantell+Sans:wght@300;400;600;700&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Shantell Sans', cursive;
  
}
body{
/* .dark{
    background-color: #000000;
    
 color: white; */
/* } */
/* background-color: #bebe  */
    /* background-color: ${({ theme }) => theme.colors.dark};
    color: white; */
    background-image: url(${logo});
    background-position: center;
   

}





`;
