import { useState } from "react";
import MedicineForm from "./components/Form/MedicineForm";
import Header from "./components/Header/Header";
import CartProvider from "./components/store/CartProvider";
import Cart from "./components/Cart/Cart";
function App() {

  const [isVisible,setIsVisible]=useState(false);
  const showCartHandler=props=>{
    setIsVisible(true);
  }
  const hideCartHanler=props=>{
    setIsVisible(false)
  }
  return (
    <CartProvider>

      {isVisible && <Cart onClose={hideCartHanler}></Cart>}

      <Header onShowCart={showCartHandler}/>
    

    <main>
      <MedicineForm/>
    </main>

    </CartProvider>
  );
}

export default App;
