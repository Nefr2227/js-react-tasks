import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import React from 'react';

// BEGIN (write your solution here)

const LogComponent = () => {
  const [values, setValues] = useState([]);

  const last = values[0] ?? 0;

  const handleAdd = (delta) => {
    setValues((prev) => [ (prev[0] ?? 0) + delta, ...prev ]);
  };

  const handleLogClick = (index) => {
    setValues((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="btn-group font-monospace" role="group">
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={() => handleAdd(1)}
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => handleAdd(-1)}
        >
          −
        </button>
      </div>

      {values.length > 0 && (
        <div className="list-group">
          {values.map((value, index) => (
            <button
              key={`${value}-${index}`}
              type="button"
              className="list-group-item list-group-item-action"
              onClick={() => handleLogClick(index)}
            >
              {value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LogComponent;
// END
