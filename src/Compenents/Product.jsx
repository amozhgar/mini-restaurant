import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart";

const Product = ({ id, image, title, price, category }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white w-80 h-auto	 shadow-md	rounded-lg my-6">
      <div className="">
        <img src={image} alt={title} className="rounded-lg w-full h-56" />
      </div>
      <div className="my-2">
        <h3 className="text-lg">{title}</h3>
        <h3 className="text-lg">Category: {category}</h3>
        <h3 className="text-lg">Price: ${price}</h3>
      </div>
      <div className="my-4">
        <button
          className="bg-gradient-to-r from-cyan-500 to-blue-500  p-2 rounded-md"
          onClick={() => dispatch(addToCart({ id, image, title, price }))}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
