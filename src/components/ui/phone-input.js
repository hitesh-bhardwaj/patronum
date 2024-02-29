import React, { forwardRef, useCallback } from "react";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import 'react-phone-number-input/style.css';

// Utility function for combining classNames (assuming it's not provided elsewhere)
const cn = (className1, className2) => `${className1} ${className2}`;

// PhoneInput component
const PhoneInput = forwardRef((props, ref) => (
  <RPNInput.default
    ref={ref}
    className={cn("flex", props.className)}
    flagComponent={FlagComponent}
    countrySelectComponent={CountrySelect}
    inputComponent={InputComponent}
    onChange={(value) => props.onChange(value || "")}
    {...props}
  />
));

PhoneInput.displayName = "PhoneInput";

// InputComponent component
const InputComponent = forwardRef((props, ref) => (
  <Input className={cn("rounded-s-none rounded-e-lg", props.className)} {...props} ref={ref} />
));

InputComponent.displayName = "InputComponent";

// CountrySelect component
const CountrySelect = ({ disabled, value, onChange, options }) => {
  const handleSelect = useCallback(
    (country) => {
      onChange(country);
    },
    [onChange]
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant={"outline"}
          className={cn("flex gap-1 rounded-e-none rounded-s-lg pr-1 pl-3", disabled ? "disabled" : "")}
          disabled={disabled}
        >
          <FlagComponent country={value} countryName={value} />
          <ChevronsUpDown className={cn("h-4 w-4 opacity-50", disabled ? "hidden" : "opacity-100")} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[300px]">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search country..." />
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {options
                .filter((option) => option.value)
                .map((option) => (
                  <CommandItem
                    className="gap-2"
                    key={option.value}
                    onSelect={() => handleSelect(option.value)}
                  >
                    <FlagComponent country={option.value} countryName={option.label} />
                    <span className="text-sm flex-1">{option.label}</span>
                    {option.value && (
                      <span className="text-sm text-foreground/50">
                        {`+${RPNInput.getCountryCallingCode(option.value)}`}
                      </span>
                    )}
                    <CheckIcon
                      className={cn("ml-auto h-4 w-4", option.value === value ? "opacity-100" : "opacity-0")}
                    />
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const FlagComponent = ({ country, countryName }) => {
    const Flag = flags[country];
  
    return (
      <span className="flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20">
        {Flag && <Flag title={countryName} />}
      </span>
    );
  };
  FlagComponent.displayName = "FlagComponent";
  

export { PhoneInput };

