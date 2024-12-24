import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Label,
} from "@headlessui/react";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import { useState, ReactNode } from "react";
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
  const [query, setQuery] = useState("");

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) => {
          return option?.value?.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div>
      <Combobox
        value={selected}
        onChange={onSelect}
        onClose={() => setQuery("")}
      >
        <div className="relative">
          <RenderIf condition={!!label}>
            <Label htmlFor={id} className="text-[10px] font-medium text-text2">
              {label}
            </Label>
          </RenderIf>
          <ComboboxInput
            className={clsx(
              "w-full rounded-lg border-[1px] py-1.5 pr-8 pl-3 text-sm/6 text-type",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:border-secondary_1",
              `${disabled ? "bg-grey-50" : "bg-[#F1F1F1]"}`
            )}
            displayValue={(option: { label: string }) => option?.label}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={placeholder}
          />
          <ComboboxButton className="absolute right-2 top-1/2">
            <Icon
              icon="ph:caret-down"
              className="size-4 fill-white/60 group-data-[hover]:fill-white"
            />
          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "w-[var(--input-width)] rounded-xl border border-text2 bg-text2 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
          )}
        >
          {filteredOptions.map((option) => (
            <ComboboxOption
              key={option.value}
              value={option.value}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
            >
              {/* <Icon
                icon="ph:caret-down"
                className="invisible size-4 fill-black group-data-[selected]:visible"
              /> */}
              <div className="text-sm/6 text-white">{option.label}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
}
