import { ReactNode } from "react";
import "./Checkbox.css";

interface Props {
  label?: string | ReactNode;
  // eslint-disable-next-line no-unused-vars
  onChange?: (checked: boolean) => void;
  id: string;
  className?: string;
  checked: any;
  disabled?: boolean;
}

export const Checkbox = ({
  label,
  onChange,
  id,
  className,
  checked,
  disabled,
}: Props) => {
  return (
    <div className={`${className} flex items-center cursor-pointer text-text2`}>
      <input
        checked={checked}
        disabled={disabled}
        type="checkbox"
        data-testid={`checkbox-${id}`}
        id={id}
        className={`${
          disabled ? "cursor-default" : "cursor-pointer"
        } shrink-0 checked:bg-primary `}
        onChange={(e) => onChange && onChange(e.target.checked)}
      />
      {label && (
        <label
          htmlFor={id}
          className={`text-xs font-normal ml-[12px] cursor-pointer w-full`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
