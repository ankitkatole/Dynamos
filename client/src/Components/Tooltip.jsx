// Tooltip.jsx

// eslint-disable-next-line react/prop-types
const Tooltip = ({ text, children }) => {
  return (
    <div className="relative flex items-center group">
      {children}
      <div className="absolute bottom-full mb-2 hidden group-hover:block px-2 py-1 bg-gray-700 text-white text-xs rounded shadow-lg">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
