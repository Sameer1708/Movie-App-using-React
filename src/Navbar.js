import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  height: 70px;
  background: linear-gradient(#210205, #0d664d, #c7b9ba);
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  align-items: center;
  padding: 0 20px;
`;


const Title = styled.div`
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  margin-left: 20px;

`;
const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
`;
const CartIcon = styled.img`
  height: 48px;
  margin-right: 20px;
`;

const CartCount = styled.span`
  background: ${(props) => props.color};
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  top: -5px;
  font-size: 12px;
  visibility : ${(props) => props.show? "visible" : "hidden"};
`;







class Navbar extends React.Component {
  render() {
    const {cartCount} = this.props;
    return (
      <>
        <Nav>
          <Title> Movie App </Title>
          <CartContainer>
            <CartIcon alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/891/891462.png"/>
            <CartCount color = "#e4f2f1" show = {true} >{cartCount}</CartCount>
          </CartContainer>
        </Nav>
      </>
    );
  }
}
export default Navbar;
// const styles = {
//   nav: {
//     height: "70px",
//     background: "#035e9e",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems : "center",
//     padding : "relative"
//   },
//   title :{
//     fontSize : 30,
//     color : "#fff",
//     fontWeight : 600,
//     fontFamily : '"Montsarret", "sans-serif"',
//     textTransform : "uppercase",
//     marginLeft : 20
//   },
//   cartContainer : {
//     position : "relative",
//     cursor: "Pointer"
//   },
//   cartIcon :{
//     height : 48,
//     marginRight : 20
//   },
//   cartCount : {
//     background : "white",
//     borderRadius : "50%",
//     padding : "4px 8px",
//     position: "absolute",
//     right :10,
//     top : -5,
//     fontSize : 12
//   }
// };
