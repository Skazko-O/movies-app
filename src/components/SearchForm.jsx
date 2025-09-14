import { Form, Row, Card, Col, Button } from 'react-bootstrap';
import { useState } from 'react';

function SearchForm({ onSearch }) {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('multi');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return alert('Enter movie name');
    onSearch(search, type, year);
  };

  return (
    <Card className="mb-4">
      <Card.Body>
        <Form id="search-form" onSubmit={handleSubmit}>
          <Row>
            <Col xs={6}>
              <Form.Control
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Enter movie name"
                id="search-inp"
              />
            </Col>
            <Col xs={2}>
              <Form.Select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="multi">-=All types=-</option>
                <option value="movie">Movie</option>
                <option value="tv">Series</option>
              </Form.Select>
            </Col >
            <Col xs={2}>
              <Form.Control
                value={year}
                onChange={(e) => setYear(e.target.value)}
                type="number"
                id="year"
                min="1900"
                max="2025"
              />
            </Col>
            <Col xs={2}>
              <Button type="submit" variant="success">
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default SearchForm;
