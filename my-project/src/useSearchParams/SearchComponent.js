import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function SearchComponent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || ''); //[]第一個值為網址上的query參數值，第二個值為設定query參數的函式

  useEffect(() => {
    // Simulate fetching data based on the search query
    const data = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
    const results = data.filter(item =>
      item.toLowerCase().includes(searchParams.get('query') || '')
    );
    console.log('Filtered results:', results);
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ query });
    setQuery('');
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>

        <p>Current search query: {searchParams.get('query')}</p>
    </div>
  );
}

export default SearchComponent;