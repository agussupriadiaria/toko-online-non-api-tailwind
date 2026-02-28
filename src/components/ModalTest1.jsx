function ModalTest1({ data, onClose }) {
  if (!data) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4">{data.name}</h2>

        <img
          src={data.images[0].src}
          alt={data.name}
          className="w-full rounded-md mb-4"
        />

        <p className="mb-4 text-gray-600">{data.description}</p>

        <h4 className="text-blue-600 font-bold text-lg">
          Rp {parseInt(data.price).toLocaleString("id-ID")}
        </h4>
      </div>
    </div>
  );
}

export default ModalTest1;
