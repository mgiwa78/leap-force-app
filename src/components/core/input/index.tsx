import React, { ReactNode, useRef, useState, useEffect } from "react";
import { RenderIf } from "@/components/hoc/RenderIf";
import "./input.css";
import { Icon } from "@iconify/react";

interface InputProps {
  className?: string;
  label?: string;
  optional?: string | ReactNode;
  caption?: string | ReactNode;
  disabled?: boolean;
  readOnly?: boolean;
  error?: any;
  onChange?: any;
  id: string;
  placeholder?: string;
  type?: string;
  name?: string;
  allowDecimals?: boolean;
  variant?: string; // this is classes for the input  box itself
  leftIcon?: string | ReactNode;
  rightIcon?: string | ReactNode;
  [x: string]: unknown;
}

export const InputComponent = ({
  className,
  label,
  optional,
  id,
  onChange,
  disabled,
  readOnly,
  error,
  caption,
  type,
  name,
  variant,
  allowDecimals,
  leftIcon,
  rightIcon,
  ...props
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [passwordView, setPasswordView] = useState(false);

  const preventDecimal = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!allowDecimals && (event.key === "." || event.key === ",")) {
      event.preventDefault();
    }
  };

  const preventDecimalInput = (event: React.FormEvent<HTMLInputElement>) => {
    if (!allowDecimals) {
      const input = event.target as HTMLInputElement;
      input.value = input.value.replace(/[^0-9]/g, "");
    }
  };

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (document.activeElement === inputRef.current) {
        event.preventDefault();
      }
    };

    const handleArrowKeys = (event: KeyboardEvent) => {
      if (
        (event.key === "ArrowUp" || event.key === "ArrowDown") &&
        document.activeElement === inputRef.current
      ) {
        event.preventDefault();
      }
    };

    const inputElement = inputRef.current;
    inputElement?.addEventListener("wheel", handleWheel);
    inputElement?.addEventListener("keydown", handleArrowKeys);

    return () => {
      inputElement?.removeEventListener("wheel", handleWheel);
      inputElement?.removeEventListener("keydown", handleArrowKeys);
    };
  }, []);

  return (
    <div className={className}>
      <RenderIf condition={!!label}>
        <div className="space-y-1 pb-2">
          <div className="flex justify-between">
            <label htmlFor={id} className="text-[10px] font-medium text-text2">
              {label}
            </label>
            <RenderIf condition={!!optional}>{<div>{optional}</div>}</RenderIf>
          </div>
          <RenderIf condition={!!caption}>
            <div>{caption}</div>
          </RenderIf>
        </div>
      </RenderIf>
      <div className="relative w-full input-container">
        <RenderIf condition={!!leftIcon}>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {leftIcon}
          </div>
        </RenderIf>
        <input
          type={
            (type === "password" && (passwordView ? "text" : "password")) ||
            type
          }
          readOnly={readOnly}
          ref={inputRef}
          disabled={disabled}
          id={id}
          onChange={onChange}
          name={name}
          autoComplete="off"
          onKeyDown={(e) => {
            if (type === "number") preventDecimal(e);
          }}
          onInput={(e) => {
            if (type === "number") preventDecimalInput(e);
          }}
          className={`  ${variant}
                    p-[12px] h-[40px] text-sm text-primary_100 w-full outline-0 border-grey_1 hide_tap border-1
                    rounded-[12px] focus:border-secondary_1 placeholder:text-[12px] ${
                      error ? "border-" : ""
                    }
                    ${disabled ? "bg-grey-50" : "bg-[#F1F1F1]"} ${
            leftIcon ? "pl-10" : ""
          } ${rightIcon ? "pr-10" : ""}
            `}
          {...props}
        />
        <RenderIf condition={type === "password"}>
          <button
            onClick={() => setPasswordView(!passwordView)}
            type="button"
            data-testid={!passwordView ? "show" : "hide"}
            className="flex items-center absolute top-0 right-[13.48px] cursor-pointer hide_tap h-full"
          >
            {!passwordView ? (
              <Icon icon="ph:eye" className="w-4 h-4 text-primary_100" />
            ) : (
              <Icon icon="ph:eye-slash" className="w-4 h-4 text-primary_100" />
            )}
          </button>
        </RenderIf>
        <RenderIf condition={!!rightIcon}>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            {rightIcon}
          </div>
        </RenderIf>
      </div>
      <RenderIf condition={!!error}>
        <span className="w-full text-right text-xs text-primary open-sans">
          {error}
        </span>
      </RenderIf>
    </div>
  );
};
