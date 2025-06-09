type ButtonProp = {
  label: string;
  type?: "button" | "submit" | "reset" ;
  onClick?: () => void | undefined;
};

export const Button = ({ label, type, onClick }: ButtonProp) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className=" bg-main-color hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded cursor-pointer"
    >
      {label}
    </button>
  );
};
