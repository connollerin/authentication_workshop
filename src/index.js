import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
// all imports go at the top

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('main'));
