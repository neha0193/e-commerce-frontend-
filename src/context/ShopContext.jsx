import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₹";
  const delivery_fee = 50;
  const [search,setSearch] =useState('')
  const [showSearch, setShowSearch] = useState(false)
  // creating add to cart feature
  // const [cartItems,setCartItems]= useState({})
   
  // const AddToCart = async(itemId,size) =>{
  //   let cartData = structuredClone (cartItems)
  //   if (cartData[itemId]) {
  //     if (cartData[itemId][size]) {
        
  //     }
      
  //   }
  // }

  const value = {
    products,
    currency,
    delivery_fee,
    search, setSearch, showSearch, setShowSearch
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
