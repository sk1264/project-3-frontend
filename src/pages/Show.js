import React from 'react'
import './Show.css'
import Figure from 'react-bootstrap/Figure';
import Accordion from 'react-bootstrap/Accordion';
		  
function Show() {
    return (
		<div className="show">
		<Figure>
			<Figure.Image
				width={171}
				height={180}
				alt="171x180"
				src="https://botw-compendium.herokuapp.com/api/v2/entry/thunderblight_ganon/image"
			/>
			<Figure.Caption>
				Thunderblight Ganon
		  	</Figure.Caption>
		</Figure>

			<Accordion>
				<Accordion.Item eventKey="0">
			  	<Accordion.Header>Location</Accordion.Header>
			  	<Accordion.Body>
				  Divine Beast Vah Naboris
			  	</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
			  	<Accordion.Header>Description</Accordion.Header>
			  	<Accordion.Body>
				  This phantom of Ganon attacked the Divine Beast Vah Naboris and was responsible for the demise of the Champion Urbosa. It specializes in quick, lightning-based attacks.
			  	</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="2">
			  	<Accordion.Header>Difficulty</Accordion.Header>
			  	<Accordion.Body>
				  ⭐️⭐️⭐️⭐️⭐️
			  	</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="3">
			  	<Accordion.Header>Tips</Accordion.Header>
			  	<Accordion.Body>
				  Just don't get hit. Matt said he got hit a ton and if he just didn't he would have won.
			  	</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="4">
			  	<Accordion.Header>Defeated</Accordion.Header>
			  	<Accordion.Body>
				  ✅
			  	</Accordion.Body>
				</Accordion.Item>
		  </Accordion>

		</div>
	)
}
		  
export default Show