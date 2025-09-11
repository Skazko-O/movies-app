import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

function YearInput({ year, setYear }) {
  return (
    <Col xs={2}>
      <Form.Control
        value={year}
        onChange={(e) => setYear(e.target.value)}
        type="number"
        id="year"
        min="1900"
        max="2000"
      />
    </Col>
  );
}

export default YearInput;
