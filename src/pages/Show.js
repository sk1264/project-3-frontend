import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import './Show.css';
import Figure from 'react-bootstrap/Figure';
import Accordion from 'react-bootstrap/Accordion';

function Show() {
  const [monsterState, setMonsterState] = useState("");

  const [number, setNumber] = useState();
 
  const { id } = useParams();
  console.log(useParams());
  const url = `https://zelda-backend.onrender.com/monsters/${id}`; 
 
  useEffect(() => {
  
  }, []); 

  useEffect(() => {
    const fetchMonster = async () => {
      console.log("going to fetch monster with id of: ", id);
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

  return (
    <div className="show">
      <Figure className='img'>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src={monsterState.image}
        />
        <Figure.Caption>
          {monsterState.name}
        </Figure.Caption>
      </Figure>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Monster Location</Accordion.Header>
          <Accordion.Body>
		  {monsterState.commonLocation}
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Description</Accordion.Header>
          <Accordion.Body>
            {monsterState.description}
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Difficulty</Accordion.Header>
          <Accordion.Body>
            {monsterState.difficulty}
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Tips</Accordion.Header>
          <Accordion.Body>
            {monsterState.tips}
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>Defeated</Accordion.Header>
          <Accordion.Body>
            {monsterState.defeated ? '✅' : '❌'}
          </Accordion.Body>
        </Accordion.Item>

		<Link to={`/${monsterState._id}/edit`}>
			<button>Edit</button>
		</Link>
      </Accordion>
    </div>
  );
}

export default Show;
