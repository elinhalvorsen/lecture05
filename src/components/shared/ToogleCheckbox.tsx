import React from "react";
interface IToogleCheckbox {
  title: string;
  isChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  lableOn: string;
  lableOff: string;
}

const ToogleCheckbox = ({
  lableOn,
  lableOff,
  title,
  isChecked,
  onChange,
}: IToogleCheckbox) => {
  return (
    <>
      <label>
        <input type="checkbox" checked={isChecked} onChange={onChange} />
        {isChecked ? lableOff : lableOn}
        {title}
      </label>
    </>
  );
};
export default ToogleCheckbox;
