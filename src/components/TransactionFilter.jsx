import React, { useState } from 'react';

const TransactionFilter = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onFilterChange(term);
  };

  return (
    <div>
      <label>
        Search by Description:
        <input
          type="text"
          placeholder="Enter search term..."
          value={searchTerm}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default TransactionFilter;