type TextInputProp = {
  label: string;
  name?: string | undefined;
  description?: string | null;
  type?: string | "text";
  isRequired?: boolean | false;
  value?: string | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
};

export default function TextInput({
  label,
  isRequired,
  description,
  name,
  type,
  value,
  onChange,
  onBlur,
}: TextInputProp) {
  return (
    <>
      <p>
        <label className="font-bold">
          {label} <span className="text-red-600">{isRequired ? "*" : ""}</span>
        </label>
      </p>
      {description && (
        <p
          className="text-gray-7
     00"
        >
          {description}
        </p>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="w-full h-[40px] rounded-xl border border-gray-400  px-[8px] outline-none focus:border-main-color focus:border-b-4 "
      ></input>
    </>
  );
}
