import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import { monstersLoader } from '../loaders';

function Home() {
  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',

  };

  const zeldaFontStyle = {
    fontFamily: 'ZeldaFont',
  };

  const [monstersData, setMonstersData] = useState([]);

  useEffect(async () => {
    const monsters = await monstersLoader();
    setMonstersData(monsters);
  }, []);

  const monstersMarkup = (
    <div style={centerStyle}>
      <h1 style={zeldaFontStyle}>Felled Monsters of Hyrule</h1>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center" style={{ margin: '2 auto' }}>
        {monstersData.map((monster, index) => (
          <Col key={index} className="mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={monster.image} />
              <Card.Body>
                <Card.Title>{monster.name}</Card.Title>
                <Card.Text>
                  {monster.description}
                </Card.Text>
                <Button variant="success">More details</Button>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{monster.difficulty}</ListGroup.Item>
                <ListGroup.Item>{monster.tips}</ListGroup.Item>
                <ListGroup.Item>{monster.date}</ListGroup.Item>

    backgroundImage: 'url("https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700703052.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '20px',
  };

  const zeldaFontStyle = {
    fontFamily: 'ZeldaFont',
  };

  return (
    <div style={centerStyle}>
      <h1 style={zeldaFontStyle}>Felled Monsters of Hyrule</h1>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center" style={{ margin: '2 auto' }}>
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx} className="mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://botw-compendium.herokuapp.com/api/v2/entry/blue_moblin/image" />
              <Card.Body>
                <Card.Title>Blue Moblin</Card.Title>
                <Card.Text>
                  These heavyweight monsters can be found all over Hyrule. They're much tougher than their standard counterparts and often have much stronger weapons equipped.
                </Card.Text>
                <Button variant="success">Go somewhere</Button>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>

              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );

  return monstersData.length > 0 ? monstersMarkup : <div>Loading</div>;
}

export default Home;
