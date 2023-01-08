import {useState} from 'react';
import db from './firebase';
import React from 'react';
import { ref, set } from "firebase/database";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
  
function App() {
  const [name , setName] = useState();
  const [age , setAge] = useState();
      
  // Push Function
  const Push = () => {
    set(ref(db, 'users/' + name), {
      name: name,
      age: age,
    });
    setName('');
    setAge('');
  }
  return (
    <div className="App" style={{marginTop : 250}}>
      <center>
      <h1>Sign UP</h1>
      <br />
      <input placeholder="Enter your name" value={name} 
      onChange={(e) => setName(e.target.value)}/>
      <br/><br/>
      <input placeholder="Enter your age" value={age} 
      onChange={(e) => setAge(e.target.value)}/>
      <br/><br/> 
      
      </center>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control placeholder="Enter your age" value={age} 
      onChange={(e) => setAge(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={Push}>
        Submit
      </Button>
    </Form>
      
    </div>
    
  );
}
  
export default App;