import { useDispatch } from "react-redux";
import { removeFromCart, addItemQuantity, subtractItemQuantity } from "../redux/cart";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { image, title, price, quantity } = props;

  return (
    <div className="h-20  flex flex-row  justify-between m-10 shadow-md rounded-md">
      <div className="">
        <img src={image} alt={title} className="h-full w-20 rounded-md"/>
      </div>
      <div className=" w-80 flex items-center	justify-between">
        <h2 className="text-center text-lg font-bold" >{title}</h2>
        <h2 className="text-center font-bold">${price}</h2>
        <button className="bg-cyan-600 p-2 rounded-md"
        onClick={() => dispatch(removeFromCart(props))}>
          Remove from cart
        </button>
      </div>
      <div className="w-20 flex items-center	justify-between">
        <button onClick={() => dispatch(subtractItemQuantity(props))}>
          <IoRemoveSharp />
        </button>
        <p className="text-center" >{quantity}</p>
        <button onClick={() => dispatch(addItemQuantity(props))}>
          <IoAddSharp />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
