import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import './Show.css';
import Figure from 'react-bootstrap/Figure';
import Accordion from 'react-bootstrap/Accordion';

function Show() {
  const [monster, setMonsterState] = useState(null);

  const [number, setNumber] = useState(5);
 
  const { id } = useParams();
  console.log(useParams());
  const url = `https://zelda-backend.onrender.com/monsters/${id}`; 
 
  useEffect(() => {
  
  }, []); 

  useEffect(() => {
    const fetchMonster = async () => {
      console.log("going to fetch person with id of: ", id);
      try {
        const responseData = await fetch(url);
        const monsterData = await responseData.json(); //converting our html response that we got from the server into a useable person {object}.
        console.log(monsterData); //usable person
        console.log(
          "Setting state, about to rerender..(not remount, just re-render)."
        );
        setMonsterState(monsterData);
      } catch (error) {}
    };
    //this is the code that gets activated
    console.log("#2: inside useeffect...component mounted, now we are here.");

    fetchMonster(); //fetching data and setting state
  }, [id, number]);

//   useEffect(() => {
//     const fetchedMonster = {
//       name: 'Monster Name',
//       image: 'monster-image-url',
//       commonLocation: 'Monster Location',
//       description: 'Monster Description',
//       difficulty: 'Monster Difficulty',
//       tips: 'Monster Tips',
//       date: 'Monster Date',
//       defeated: true,
//     };

//     setMonster(fetchedMonster);
//   }, []);

//   if (!monster) {
//     return <div>Loading...</div>;
//   }

  return (
    <div className="show">
      <Figure className='img'>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src={monster.image}
        />
        <Figure.Caption>
          {monster.name}
        </Figure.Caption>
      </Figure>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{monster.commonLocation}</Accordion.Header>
          <Accordion.Body>
            Divine Beast Vah Naboris
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>{monster.description}</Accordion.Header>
          <Accordion.Body>
            {monster.description}
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>{monster.difficulty}</Accordion.Header>
          <Accordion.Body>
            {monster.difficulty}
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Tips</Accordion.Header>
          <Accordion.Body>
            {monster.tips}
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>Defeated</Accordion.Header>
          <Accordion.Body>
            {monster.defeated ? '✅' : '❌'}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Show;
