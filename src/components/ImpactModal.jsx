const ImpactModal = ({ impact, onClose }) => {
  if (!impact) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 modal-animate"
      onClick={onClose}
    >
      <div
        className="backdrop-blur-lg bg-white/10 text-white border border-white/10 shadow-xl rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 relative modal-content-animate mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-white transition text-xl font-bold"
        >
          &times;
        </button>
        <div className="mb-4">
          <img
            className="w-full h-48 object-cover rounded-lg mb-4"
            src={impact.image}
            alt="Impact image"
          />
          <h3 className="text-2xl font-bold mb-2">{impact.title}</h3>
          <p className="text-gray-300 mb-4">{impact.content}</p>
          <p className="text-gray-400 italic text-sm">{impact.footer}</p>
        </div>
      </div>
    </div>
  );
};

export default ImpactModal;
