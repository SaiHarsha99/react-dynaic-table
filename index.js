import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import './style.css';
import Table from './table';

const App = () => {
  const [tabledata, settabledata] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json'
      )
      .then((res) => {
        settabledata(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <h2>Dynamic Table</h2>
      <Table tdata={tabledata} />
    </>
  );
};

render(<App />, document.getElementById('root'));
