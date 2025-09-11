import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function SearchButton() {
  return (
    <Col xs={2}>
      <Button type="submit" variant="success">
        Search
      </Button>
    </Col>
  );
}

export default SearchButton;
