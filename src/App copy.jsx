// Mengimpor hook useState dari React untuk mengelola state
import { useState } from "react";

// Mengimpor komponen ModalTest1 untuk menampilkan detail produk
import ModalTest1 from "./components/ModalTest1";

// Mengimpor data produk dari file lokal
import { PRODUCT_DATA } from "./data/products";

// Membuat komponen utama bernama App
function App() {
  // Menyimpan semua produk ke dalam variabel products
  const products = PRODUCT_DATA;

  // State untuk menyimpan teks yang sedang diketik di input
  const [searchTerm, setSearchTerm] = useState("");

  // State untuk menyimpan kata kunci pencarian yang sudah dikonfirmasi
  const [searchQuery, setSearchQuery] = useState("");

  // State untuk menyimpan produk yang dipilih (untuk ditampilkan di modal)
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fungsi untuk menjalankan pencarian (mengisi searchQuery dari searchTerm)
  const handleSearch = () => setSearchQuery(searchTerm);

  // Fungsi untuk mendeteksi tombol keyboard
  const handleKeyPress = (e) => {
    // Jika tombol yang ditekan adalah Enter, jalankan pencarian
    if (e.key === "Enter") handleSearch();
  };

  // Menyaring produk berdasarkan searchQuery
  const filteredProducts = products.filter((p) =>
    // Membandingkan nama produk dengan kata kunci (tanpa membedakan huruf besar/kecil)
    p.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Mengembalikan tampilan JSX
  return (
    // Container utama dengan tinggi minimal layar penuh dan background gelap
    <div className="min-h-screen w-screen bg-[white] text-black py-12 px-4 md:px-10">
      {/* Wrapper agar konten berada di tengah */}
      <div className="w-full flex flex-col items-center">
        {/* Bagian header */}
        <header className="text-center mb-10">
          {/* Judul utama */}
          <h1 className="text-4xl font-bold tracking-tight">
            Katalog Produk Online
          </h1>
        </header>

        {/* Bagian pencarian */}
        <div className="flex justify-center mb-16 w-full">
          <div className="flex w-full max-w-2xl gap-3">
            {/* Input pencarian */}
            <input
              type="text" // Tipe input teks
              placeholder="Cari produk..." // Placeholder input
              className="flex-1 border border-gray-600 rounded-lg px-5 py-3 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" // Styling Tailwind
              value={searchTerm} // Nilai input diambil dari state searchTerm
              onChange={(e) => setSearchTerm(e.target.value)} // Update state saat diketik
              onKeyDown={handleKeyPress} // Jalankan fungsi saat tombol ditekan
            />

            {/* Tombol cari */}
            <button
              onClick={handleSearch} // Jalankan pencarian saat diklik
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors" // Styling tombol
            >
              Cari
            </button>
          </div>
        </div>

        {/* Container grid produk */}
        <div className="w-full">
          {/* Grid responsif */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 justify-items-center">
            {/* Looping produk yang sudah difilter */}
            {filteredProducts.map((product) => (
              <div
                key={product.id} // Key unik untuk setiap item
                className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden w-full max-w-85 transition-all hover:scale-105 hover:shadow-2xl" // Styling card
              >
                {/* Gambar produk */}
                <img
                  src={product.images[0].src} // Ambil gambar pertama dari array images
                  alt={product.name} // Alt text untuk aksesibilitas
                  className="w-full h-80 object-cover" // Styling gambar
                />

                {/* Bagian konten card */}
                <div className="p-6 text-center">
                  {/* Nama produk */}
                  <h5 className="font-bold text-xl mb-2 text-gray-900 leading-tight h-14 flex items-center justify-center">
                    {product.name}
                  </h5>

                  {/* Harga produk */}
                  <p className="text-green-600 font-black mb-5 text-2xl">
                    {/* Format harga ke rupiah */}
                    Rp {parseInt(product.price).toLocaleString("id-ID")}
                  </p>

                  {/* Tombol detail */}
                  <button
                    onClick={() => setSelectedProduct(product)} // Set produk yang dipilih
                    className="w-full bg-gray-900 text-white py-3.5 rounded-xl font-bold hover:bg-black transition-colors" // Styling tombol detail
                  >
                    Detail Info
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Jika tidak ada produk ditemukan */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl italic">
                Produk "{searchQuery}" tidak ditemukan.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Komponen modal untuk menampilkan detail produk */}
      <ModalTest1
        data={selectedProduct} // Mengirim data produk yang dipilih
        onClose={() => setSelectedProduct(null)} // Menutup modal dengan mengosongkan selectedProduct
      />
    </div>
  );
}

// Mengekspor komponen App agar bisa digunakan di file lain
export default App;
