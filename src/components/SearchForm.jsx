import { Form, Row, Card, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

function SearchForm({ onSearch }) {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('multi');
  const [year, setYear] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (!search.trim()) return toast.warning('Enter movie name, please');
    if (search.trim().length < 2) return toast.warning('Please enter at least 2 characters');
    onSearch(search, type, year);
  };

  return (
    <>
      <Card className="mb-4">
        <Card.Body>
          <Form id="search-form" onSubmit={submitHandler}>
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
      <ToastContainer position='top-center' />
    </>
  );
}

export default SearchForm;
