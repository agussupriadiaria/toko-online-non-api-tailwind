import { PRODUCT_DATA } from "./data/products";

function App() {
  const products = PRODUCT_DATA;

  return (
    <div className="min-h-screen w-screen bg-[#1a1a1a] text-white py-12 px-4 md:px-10">
      <div className="w-full flex flex-col items-center">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight">
            Katalog Produk Online
          </h1>
        </header>

        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 justify-items-center">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden w-full max-w-85 transition-all hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={product.images[0].src}
                  alt={product.name}
                  className="w-full h-80 object-cover"
                />

                <div className="p-6 text-center">
                  <h5 className="font-bold text-xl mb-2 text-gray-900 leading-tight h-14 flex items-center justify-center">
                    {product.name}
                  </h5>

                  <p className="text-green-600 font-black mb-5 text-2xl">
                    Rp {parseInt(product.price).toLocaleString("id-ID")}
                  </p>

                  <button className="w-full bg-gray-900 text-white py-3.5 rounded-xl font-bold hover:bg-black transition-colors">
                    Detail Info
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
