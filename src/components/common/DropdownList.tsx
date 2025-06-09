type DropdownListProps = {
  label?: string | undefined;
  name?: string | undefined;
  value?: string | undefined;
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>
    | undefined;
  items: KeyValue[];
};

type KeyValue = {
  key: string;
  value: string;
};

const DropdownList = ({
  label,
  name,
  value,
  onChange,
  items,
}: DropdownListProps) => {
  return (
    <>
      <label className="block font-bold text-gray-700">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="block h-[40px] w-full border border-gray-400 rounded-xl p-2  focus:border-main-color focus:border-b-4"
      >
        {items.map((item) => (
          <option key={item.key} value={item.key}>
            {item.value}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropdownList;
