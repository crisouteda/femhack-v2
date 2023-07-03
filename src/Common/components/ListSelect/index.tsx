import { Select } from "antd";
import { Dispatch, SetStateAction } from "react";

type Props = {
  data: string[];
  onChange: Dispatch<SetStateAction<string[]>>;
  placeholder: string;
  initialValue: string;
};

const ListMultiSelect: React.FC<Props> = ({
  data,
  onChange,
  placeholder,
  initialValue,
}: Props) => {
  const options = data.map((item) => ({ label: item, value: item }));
  return (
    <>
      <Select
        defaultValue={[initialValue]}
        mode='multiple'
        allowClear
        placeholder={placeholder}
        optionFilterProp='label'
        showSearch
        onChange={onChange}
        options={options}
        filterOption
        className='w-full mb-4'
      />
    </>
  );
};

export default ListMultiSelect;
