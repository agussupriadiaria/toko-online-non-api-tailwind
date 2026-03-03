function ModalTest1({ data, onClose }) {
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg overflow-hidden rounded-xl bg-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-1 text-gray-500 hover:text-black transition"
        >
          ✕
        </button>
        <div className="p-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">{data.name}</h2>

          <img
            src={data.images[0].src}
            alt={data.name}
            className="mb-4 h-64 w-full rounded-lg object-cover"
          />

          <p className="mb-6 text-gray-600 leading-relaxed">
            {data.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Harga:</span>
            <h4 className="text-xl font-extrabold text-blue-600">
              Rp {parseInt(data.price).toLocaleString("id-ID")}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalTest1;
