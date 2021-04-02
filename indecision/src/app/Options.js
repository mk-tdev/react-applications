import React from "react";

const Options = ({ options, handleDeleteOption, handleSingleDeleteOption }) => {
  return (
    <div>
      <div className="options-head">
        <h2>Your options</h2>
        <button disabled={options.length === 0} onClick={handleDeleteOption}>
          Remove All
        </button>
      </div>

      {options.length > 0 ? (
        <ol>
          {options.map((op, i) => (
            <li key={op}>
              <div className="li-option">
                <span>{op}</span>
                <span
                  className="single-delete"
                  onClick={() => handleSingleDeleteOption(i)}
                >
                  X
                </span>
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default Options;
