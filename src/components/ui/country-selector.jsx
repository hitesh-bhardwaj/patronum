import { COUNTRIES } from "@/lib/countries";
import { SearchIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export default function CountrySelector({
  id,
  open,
  disabled = false,
  onToggle,
  onChange,
  selectedValue,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target) && open) {
        onToggle();
        setQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onToggle]);

  const [query, setQuery] = useState("");

  return (
    <div ref={ref}>
      <div className="mt-1 relative">
        <button
          type="button"
          className="relative lg:h-10 md:h-[8vw] h-10 w-full border-b border-[#a1a1a1] bg-[#fdfdfd] px-3 py-2 lg:text-[1vw] text-[4vw] md:text-[3vw] placeholder:text-gray-300 focus:outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-50"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          onClick={onToggle}
          disabled={disabled}
        >
          <span className="truncate flex items-center">
            <img
              alt={`${selectedValue.value}`}
              src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${selectedValue.value}.svg`}
              className={"inline mr-3 relative lg:h-4 md:h-6 h-4 rounded-sm"}
            />
            <span className="pl-3 relative after:left-0 after:top-0 after:absolute after:block after:h-full after:w-[2px] after:bg-gray-200 after:rounded-2xl">
                {selectedValue.title}
            </span>
          </span>
          <span
            className={`absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none ${
              disabled ? "hidden" : ""
            }`}
          >
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

          {open && (
            <ul
              data-lenis-prevent
              className="absolute z-10 mt-2 w-full bg-white shadow-lg max-h-80 rounded-md text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
              tabIndex={-1}
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-option-3"
            >
             <div className="sticky top-0 z-10 bg-white">
                <li className=" text-gray-900 cursor-default select-none relative py-2 px-3 flex items-center gap-x-4">
                    <SearchIcon className="text-gray-400 h-5"/>
                    <input
                        type="search"
                        name="search"
                        autoComplete={"off"}
                        className="block w-full rounded-md focus:outline-none"
                        placeholder={"Search country"}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </li>
                <hr />
              </div>

              <div
                className={
                  "max-h-64 scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-600 scrollbar-thumb-rounded scrollbar-thin overflow-y-scroll"
                }
              >
                {COUNTRIES.filter((country) =>
                  country.title.toLowerCase().startsWith(query.toLowerCase())
                ).length === 0 ? (
                  <li className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
                    No countries found
                  </li>
                ) : (
                  COUNTRIES.filter((country) =>
                    country.title.toLowerCase().startsWith(query.toLowerCase())
                  ).map((value, index) => {
                    return (
                      <li
                        key={`${id}-${index}`}
                        className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 flex items-center hover:bg-gray-50 transition"
                        id="listbox-option-0"
                        role="option"
                        onClick={() => {
                          onChange(value.value);
                          setQuery("");
                          onToggle();
                        }}
                      >
                        <img
                          alt={`${value.value}`}
                          src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${value.value}.svg`}
                          className={"inline mr-2 h-4 rounded-sm"}
                        />

                        <span className="font-normal truncate">
                          {value.title}
                        </span>
                        {value.value === selectedValue.value ? (
                          <span className="text-blue-600 absolute inset-y-0 right-0 flex items-center pr-8">
                            <svg
                              className="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        ) : null}
                      </li>
                    );
                  })
                )}
              </div>
            </ul>
          )}
      </div>
    </div>
  );
}
