import { PRODUCT_DATA } from "./data/products";
import Example from "./components/Navbar";

function App() {
  const products = PRODUCT_DATA;

  return (
    <div>
      <Example />
      <div className="bg-white text-black w-screen min-h-screen py-12 px-8 md:px-10">
        <div>
          <header>
            <h1 className="text-5xl font-bold text-center">
              Katalog Produk Shopee
            </h1>
          </header>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="shadow-2xl rounded-2xl overflow-hidden"
                >
                  <div>
                    <img
                      className="h-80 w-full object-cover"
                      src={product.images[0].src}
                      alt={product.name}
                    />
                    <div className="p-4 text-center">
                      <h4 className="font-bold mb-2">{product.name}</h4>
                      <h5 className="font-bold text-green-600 mb-1">
                        Rp {parseInt(product.price).toLocaleString("id-ID")}
                      </h5>
                      <button className="bg-blue-500 w-full rounded-2xl text-white">
                        Detail Product
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
