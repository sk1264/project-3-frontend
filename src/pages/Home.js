import React from 'react';
import './styles.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Home.css';

function Home(props) {
  const centerStyle = {
    textAlign: 'center',
    fontFamily: 'ZeldaFont'
  };

  return (
    <>
      <h1 style={centerStyle}>Felled Monsters of Hyrule</h1>
      <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx} className="mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Home;