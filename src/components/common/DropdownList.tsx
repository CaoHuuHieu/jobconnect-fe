type DropdownListProps = {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
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
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 block h-[40px] w-full border border-gray-400 rounded-md p-2  focus:border-main-color focus:border-b-4"
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
