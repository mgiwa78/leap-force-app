import { Field, Label, Select } from "@headlessui/react";
import clsx from "clsx";
import React, { ReactNode } from "react";
import { RenderIf } from "@/components/hoc/RenderIf";

type Option = { label: string; value: string };

interface IDropdownProps {
  options: Option[];
  selected: string;
  onSelect: (option: Option | Option[]) => void;
  label?: string | ReactNode;
  id: string;
  placeholder?: string;
  disabled?: boolean;
}

export default function Dropdown({
  options,
  selected,
  onSelect,
  label,
  id,
  placeholder,
  disabled,
}: IDropdownProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );
    if (selectedOption) {
      onSelect(selectedOption);
    }
  };

  return (
    <div>
      <Field className="flex flex-col gap-2" disabled={disabled}>
        <RenderIf condition={!!label}>
          <Label htmlFor={id} className="text-[10px] font-medium text-text2">
            {label}
          </Label>
        </RenderIf>

        <Select
          value={selected}
          onChange={handleChange}
          disabled={disabled}
          // transition
          className={clsx(
            "w-[var(--input-width)] text-xs text-type rounded-xl h-[40px]  border-none p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0",
            ` ${disabled ? "bg-grey-50" : "bg-[#F1F1F1]"}`
          )}
        >
          {placeholder && (
            <option value="" disabled className="text-xs text-gray-300">
              {placeholder}
            </option>
          )}
          {options?.map((option) => (
            <option
              className="text-xs text-type"
              value={option.value}
              key={option.value}
            >
              {option.label}
            </option>
          ))}
        </Select>
      </Field>
    </div>
  );
}
