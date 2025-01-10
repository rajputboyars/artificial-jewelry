import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link
      href={`/products/${product.id}`} className="bg-white group shadow-md rounded-lg p-4 flex flex-col">
      <div className="relative">
        <div className="absolute w-0 h-0 bg-black opacity-50 transition-all duration-700 group-hover:w-full group-hover:h-full bottom-0 left-0" />
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-auto aspect-square object-cover rounded"
        />
      </div>
      <h2 className="text-secondary text-lg font-semibold mt-2">
        {product.title}
      </h2>
      <p className="text-primary text-xl font-bold mt-1 w-full flex justify-between">${product.price} <span className="line-through font-normal">${product.price + 500}</span></p>
      {/* <div className="mt-auto flex flex-col space-y-2">
          <button className="bg-primary text-white py-1 px-4 rounded hover:bg-secondary">
            Buy Now
          </button>
          <button className="bg-secondary text-white py-1 px-4 rounded hover:bg-primary">
            Add to Cart
          </button>
        </div> */}
    </Link>
  );
};

export default ProductCard;
