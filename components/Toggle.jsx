/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Toggle({ toggleCheckMKT }) {
  const [enabled, setEnabled] = useState(true);

  function toggleCheck() {
    setEnabled(!enabled);
    toggleCheckMKT(!enabled);
  }

  return (
    <Switch.Group as="div" className="flex items-center mb-3">
      <Switch
        checked={enabled}
        onChange={toggleCheck}
        className={classNames(
          enabled ? "bg-indigo-600" : "bg-gray-200",
          "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none "
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
          )}
        />
      </Switch>
      <Switch.Label as="span" className="ml-3">
        <span className="text-sm font-medium text-gray-900">
          Check Link for
        </span>
        <span className="text-sm text-gray-500"> mkt_code</span>
      </Switch.Label>
    </Switch.Group>
  );
}
