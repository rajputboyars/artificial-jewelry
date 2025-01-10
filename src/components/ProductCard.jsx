const ProductCard = ({ product }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 flex flex-col">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-40 object-cover rounded"
        />
        <h2 className="text-secondary text-lg font-semibold mt-2">
          {product.title}
        </h2>
        <p className="text-primary text-xl font-bold mt-1">${product.price}</p>
        <div className="mt-auto flex space-x-2">
          <button className="bg-primary text-white py-1 px-4 rounded hover:bg-secondary">
            Buy Now
          </button>
          <button className="bg-secondary text-white py-1 px-4 rounded hover:bg-primary">
            Add to Cart
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  