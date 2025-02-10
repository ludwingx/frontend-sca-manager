import { useState } from "react";
import Link from "next/link";
import ClickOutside from "@/components/ClickOutside";

const DropdownBusiness = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState("Mil Sabores");

  const businesses = [
    { name: "Mil Sabores", href: "/mil-sabores" },
    { name: "Tortas Express", href: "/tortas-express" },
  ];

  const handleSelect = (business: string) => {
    setSelectedBusiness(business);
    setDropdownOpen(false);
  };

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4 p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <span className="text-sm font-medium text-gray-900 dark:text-white">
          {selectedBusiness}
        </span>
        <svg
          className={`fill-current transition-transform ${
            dropdownOpen ? "rotate-180" : ""
          }`}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill="currentColor"
          />
        </svg>
      </button>

      {dropdownOpen && (
        <div className="absolute  mt-2 w-48 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg">
          <ul className="py-2">
            {businesses.map((business) => (
              <li key={business.name}>
                <Link
                  href={business.href}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => handleSelect(business.name)}
                >
                  {business.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </ClickOutside>
  );
};

export default DropdownBusiness;
