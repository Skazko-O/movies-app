import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

function SearchInput({search, setSearch}) {
  return (
    <Col xs={6}>
      <Form.Control
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Enter movie name"
        id="search-inp"        
      />
    </Col>
  );
}

export default SearchInput;
