import React from "react";

export default function Alert() {
  return (
    <div
      className="bg-teal-50 border-t-2 border-teal-500 rounded-lg p-4 dark:bg-teal-800/30"
      role="alert"
    >
      <div className="flex">
        <div className="flex-shrink-0"></div>
        <div className="ms-3">
          <h3 className="text-gray-800 font-semibold dark:text-white">
            Successfully updated.
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            You have successfully updated your email preferences.
          </p>
        </div>
      </div>
    </div>
  );
}
