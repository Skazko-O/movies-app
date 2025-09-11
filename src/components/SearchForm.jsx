import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import SearchInput from './SearchInput';
import TypeSelector from './TypeSelector';
import YearInput from './YearInput';
import SearchButton from './SearchButton';
import { useState } from 'react';

function SearchForm({onSearch}) {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('multi');
  const [year, setYear] = useState('');  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search.trim()) return alert('Enter movie name');
    onSearch(search, type, year);
  };

  return (
    <Card className="mb-4">
      <Card.Body>
        <Form id="search-form" onSubmit={handleSubmit}>
          <Row>
            <SearchInput search={search} setSearch={setSearch} />
            <TypeSelector type={type} setType={setType} />
            <YearInput year={year} setYear={setYear} />
            <SearchButton />
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default SearchForm;
