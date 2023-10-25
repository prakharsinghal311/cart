import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "./store/items";

export const Cart = () => {
  const dispatch = useDispatch();
  const shirts = useSelector((state) => state.items.shirts);
  const pants = useSelector((state) => state.items.pants);

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
        "No. of shirts in cart :"{shirts}{" "}
        <div>
          shirt <button onClick={addShirtHandler}>add</button>
          <button onClick={removeShirtHandler}>remove</button>
        </div>{" "}
      </div>
      <div>
        "No. of pants in cart :"{pants}{" "}
        <div>
          Pant <button onClick={addPantHandler}>add</button>
          <button onClick={removePantHandler}>remove</button>
        </div>{" "}
      </div>
    </div>
  );
};
