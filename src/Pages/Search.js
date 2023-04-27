import React, { useState } from "react";

export default function Search(props) {
  const [ searchLang, setSearchLang] = useState('language')
  const [ searchCountry, setSearchCountry] = useState('country')
  return (
    <div className="search">
      <form>
        <select>
          <option value="country">Select Country</option>
          <option value="language">Select Language</option>
        </select>
        <input placeholder="search" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
