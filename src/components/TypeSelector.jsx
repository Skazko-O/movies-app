import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

function TypeSelector({ type, setType }) {
  return (
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
  );
}

export default TypeSelector;
