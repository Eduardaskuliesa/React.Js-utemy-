import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContexProvider } from "./store/CartContex";
import { UserProgressContextProvider } from "./store/UserProgressContex";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContexProvider>
        <Header />
        <Cart/>
        <Checkout/>
        <Meals />
      </CartContexProvider>
    </UserProgressContextProvider>
  );
}

export default App;
