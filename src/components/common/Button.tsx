type ButtonProp = {
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void | undefined;
};

export const Button = ({ label, type, onClick }: ButtonProp) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className=" bg-blue-color hover:bg-blue-800 text-white font-semibold px-3 py-2 rounded-xl cursor-pointer"
    >
      {label}
    </button>
  );
};
