import React from 'react'
import './New.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

		  
function New() {

	// function NewMonster() {
	// 	const [nameState, setNameState] = useState("");
	// 	const [imageState, setImageState] = useState("");
	// 	const [locationState, setLocationState] = useState("");
	// 	const [descriptionState, setDescriptionState] = useState("");
	// 	const [difficultyState, setDifficultyState] = useState("");
	// 	const [tipsState, setTipsState] = useState("");

    return (
		<div className="new">
		<Form>

		<Form.Group className="mb-3" controlId="formName">
		  <Form.Label>Name</Form.Label>
		  <Form.Control type="name" placeholder="Enter name" />
		  <Form.Text className="text-muted">
			Add monster name/color
		  </Form.Text>
		</Form.Group>
  
		<Form.Group className="mb-3" controlId="formDescription">
		  <Form.Label>Description</Form.Label>
		  <Form.Control type="description" placeholder="Description" />
		</Form.Group>

		<Form.Group className="mb-3" controlId="formLocation">
		  <Form.Label>Location Found</Form.Label>
		  <Form.Control type="location" placeholder="Location" />
		</Form.Group>

		<Form.Group className="mb-3" controlId="formDifficulty">
		  <Form.Label>Difficulty Rating</Form.Label>
		  <Form.Control type="difficulty" placeholder="Difficulty" />
		</Form.Group>

		<Form.Group className="mb-3" controlId="formTips">
		  <Form.Label>Tips and Tricks</Form.Label>
		  <Form.Control type="tips" placeholder="Tips" />
		</Form.Group>

		<Form.Group className="mb-3" controlId="formBasicCheckbox">
		  <Form.Check type="checkbox" label="Defeated" />
		</Form.Group>

		<Button variant="primary" type="submit">
		  Submit
		</Button>
	  </Form>  
		</div>
	)
}
		  
export default New