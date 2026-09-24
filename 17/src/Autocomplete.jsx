import axios from 'axios';
import React from 'react';

// BEGIN (write your solution here)
const Autocomplete = () => {
  const [value, setValue] = useState('');
  const [countries, setCountries] = useState([]);

  const handleChange = async (e) => {
    const term = e.target.value;
    setValue(term);

    if (term === '') {
      setCountries([]);
      return;
    }

    const res = await axios.get('/countries', { params: { term } });
    setCountries(res.data);
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Country"
          value={value}
          onChange={handleChange}
        />
      </form>
      <ul>
        {countries.map((country) => (
          <li key={country}>{country}</li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
// END
