type ButtonProp = {
  label: string;
  buttonType?: "button" | "submit" | "reset" ;
  onClick?: () => void | undefined;
};

export const Button = ({ label, buttonType, onClick }: ButtonProp) => {
  return (
    <button
      type={buttonType}
      onClick={onClick}
      className=" bg-main-color hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded cursor-pointer"
    >
      {label}
    </button>
  );
};
