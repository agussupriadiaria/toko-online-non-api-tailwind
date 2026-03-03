import { PRODUCT_DATA } from "./data/products";

function App() {
  const products = PRODUCT_DATA;

  return (
    // min-h-screen  : tinggi minimum 100vh (full tinggi layar)
    // w-screen      : lebar 100vw (full lebar layar)
    // bg-[#1a1a1a]  : background warna custom hex #1a1a1a
    // text-white    : semua teks default berwarna putih
    // py-12         : padding atas & bawah (3rem)
    // px-4          : padding kiri & kanan (1rem)
    // md:px-10      : padding kiri & kanan (2.5rem) saat layar >= md
    <div className="min-h-screen w-screen bg-[#1a1a1a] text-white py-12 px-4 md:px-10">

      {/* w-full       : lebar 100%
          flex         : aktifkan flexbox
          flex-col     : arah flex vertikal (column)
          items-center : align item ke tengah secara horizontal */}
      <div className="w-full flex flex-col items-center">

        {/* text-center : teks rata tengah
            mb-10       : margin bawah (2.5rem) */}
        <header className="text-center mb-10">

          {/* text-4xl       : ukuran font besar (2.25rem)
              font-bold      : font tebal
              tracking-tight : jarak antar huruf lebih rapat */}
          <h1 className="text-4xl font-bold tracking-tight">
            Katalog Produk Online
          </h1>
        </header>

        {/* w-full : lebar penuh */}
        <div className="w-full">

          {/* grid                  : aktifkan CSS grid
              grid-cols-1         : 1 kolom default
              sm:grid-cols-2      : 2 kolom saat >= sm
              lg:grid-cols-3      : 3 kolom saat >= lg
              xl:grid-cols-4      : 4 kolom saat >= xl
              2xl:grid-cols-5     : 5 kolom saat >= 2xl
              gap-8               : jarak antar item (2rem)
              justify-items-center: item grid rata tengah horizontal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 justify-items-center">

            {products.map((product) => (
              <div
                key={product.id}
                /* bg-white        : background putih
                   rounded-2xl    : border radius besar
                   shadow-xl      : bayangan besar
                   border         : aktifkan border
                   border-gray-200: warna border abu terang
                   overflow-hidden: sembunyikan konten yg keluar batas
                   w-full         : lebar penuh dalam grid cell
                   max-w-[340px]  : maksimal lebar 340px
                   transition-all : animasi untuk semua perubahan properti
                   hover:scale-105: saat hover membesar 105%
                   hover:shadow-2xl: saat hover bayangan lebih besar */}
                className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden w-full max-w-[340px] transition-all hover:scale-105 hover:shadow-2xl"
              >
                {/* w-full      : lebar penuh mengikuti card
                    h-80        : tinggi tetap (20rem)
                    object-cover: gambar memenuhi area tanpa distorsi */}
                <img
                  src={product.images[0].src}
                  alt={product.name}
                  className="w-full h-80 object-cover"
                />

                {/* p-6        : padding semua sisi (1.5rem)
                    text-center: teks rata tengah */}
                <div className="p-6 text-center">

                  {/* font-bold       : teks tebal
                      text-xl         : ukuran font besar
                      mb-2            : margin bawah kecil
                      text-gray-900   : warna teks abu gelap
                      leading-tight   : line-height rapat
                      h-14            : tinggi tetap (3.5rem)
                      flex            : aktifkan flexbox
                      items-center    : center vertikal
                      justify-center  : center horizontal */}
                  <h5 className="font-bold text-xl mb-2 text-gray-900 leading-tight h-14 flex items-center justify-center">
                    {product.name}
                  </h5>

                  {/* text-green-600 : warna hijau
                      font-black     : font sangat tebal
                      mb-5           : margin bawah (1.25rem)
                      text-2xl       : ukuran font besar */}
                  <p className="text-green-600 font-black mb-5 text-2xl">
                    Rp {parseInt(product.price).toLocaleString("id-ID")}
                  </p>

                  {/* w-full             : tombol lebar penuh
                      bg-gray-900        : background abu sangat gelap
                      text-white         : teks putih
                      py-3.5             : padding atas bawah (0.875rem)
                      rounded-xl         : sudut membulat
                      font-bold          : teks tebal
                      hover:bg-black     : saat hover jadi hitam
                      transition-colors  : animasi perubahan warna */}
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
