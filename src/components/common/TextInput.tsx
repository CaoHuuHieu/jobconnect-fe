type TextInputProp = {
  label: string;
  name: string;
  isRequired: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TextInput({
  label,
  isRequired,
  name,
  value,
  onChange,
}: TextInputProp) {
  return (
    <>
      <p>
        <label>
          {label} <span className="text-red-600">{isRequired ? "*" : ""}</span>
        </label>
      </p>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full h-[40px] rounded-xl border border-gray-400  px-[8px] outline-none focus:border-main-color focus:border-b-4 "
      ></input>
    </>
  );
}
