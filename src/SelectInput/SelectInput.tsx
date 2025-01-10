import {
  ChangeEvent,
  DialogHTMLAttributes,
  useMemo,
  useRef,
  useState,
} from "react";
import { InputField, Props as InputProps } from "../InputField/InputField";
import { Dropdown } from "../Dropdown/Dropdown";
import classes from "./SelectInput.module.css";

interface Props extends InputProps {
  values: string[];
  isSelected: boolean;
  setIsSelected: (state: boolean) => void;
  dialogProps?: DialogHTMLAttributes<HTMLDialogElement>;
}

let timeout: NodeJS.Timeout;
export function SelectInput({
  values,
  isSelected,
  setIsSelected,
  id,
  dialogProps,
  ...props
}: Props) {
  const [search, setSearch] = useState("");

  const result = useMemo(
    () =>
      values.filter((value) =>
        value.toLowerCase().includes(search.toLowerCase() ?? "")
      ),
    [search, values]
  );

  function handleSelect(e: ChangeEvent<HTMLInputElement>) {
    if (inputRef.current) {
      inputRef.current.value = e.target.id;
    }
    setIsSelected(true);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    console.log("change", isSelected);
    if (isSelected) {
      setIsSelected(false);
    }

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setSearch(e.target.value);
    }, 500);
  }

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <InputField id={id} onChange={handleChange} ref={inputRef} {...props} />
      {search && !isSelected && (
        <Dropdown
          className={classes.selectInputDropdown}
          label={null}
          id={`${id}-dropdown`}
          onChange={handleSelect}
          {...dialogProps}
        >
          {result.map((value) => (
            <div className={classes.valueWrapper} key={value}>
              <label htmlFor={value}>{value}</label>
              <input
                type="radio"
                name={`${id}-values`}
                id={value}
                className="invisible-checkbox"
              />
            </div>
          ))}
        </Dropdown>
      )}
    </div>
  );
}
