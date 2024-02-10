import Header from "./components/Header.jsx";
import CartContextProvider from "./store/Shoping-cart-context.jsx";
import Shop from "./components/Shop.jsx";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Shop />
    </CartContextProvider>
  );
}

export default App;
