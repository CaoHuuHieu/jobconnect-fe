type ButtonProp = {
  label: string;
  onClick: () => void;
};

export const Button = ({ label, onClick }: ButtonProp) => {
  return (
    <button
      onClick={onClick}
      className=" bg-main-color hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded"
    >
      {label}
    </button>
  );
};
