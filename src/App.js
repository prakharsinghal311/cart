import { useState } from "react";
import { useDispatch } from "react-redux";
import { itemsActions } from "./store/items";
import { Cart } from "./Cart";

function App() {
  const dispatch = useDispatch();
  const [cart, setCart] = useState(false);

  const cartHandler = () => {
    setCart(true);
  };

  const addShirtHandler = () => {
    dispatch(itemsActions.addShirts());
  };

  const addPantHandler = () => {
    dispatch(itemsActions.addPants());
  };

  const removeShirtHandler = () => {
    dispatch(itemsActions.removeShirts());
  };

  const removePantHandler = () => {
    dispatch(itemsActions.removePants());
  };

  return (
    <div>
      <div>
        shirt <button onClick={addShirtHandler}>add</button>
        <button onClick={removeShirtHandler}>remove</button>
      </div>
      <div>
        Pant <button onClick={addPantHandler}>add</button>
        <button onClick={removePantHandler}>remove</button>
      </div>
      {/* <div>
        Coat <button onClick={addCoatHandler}>add</button>
        <button onClick={removeCoatHandler}>remove</button>
      </div> */}
      <button onClick={cartHandler}>Cart</button>
      <div>{cart && <Cart />}</div>
    </div>
  );
}

export default App;
