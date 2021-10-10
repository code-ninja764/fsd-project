import React, { useState } from 'react';
import { Button, Form, Checkbox } from 'semantic-ui-react';
import axios from 'axios';
import './Create.css';
import { useHistory } from 'react-router';

function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [prefix, setPrefix] = useState('');
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  let history = useHistory();

  const callMockAPI = () => {
    console.log(prefix + " " + firstName + " " + lastName + " " + telephoneNumber);

    const formData = {
      firstName,
      lastName,
      prefix,
      telephoneNumber,
      addressLine1,
      addressLine2,
      city,
      zipCode
    }

    //lukas - const endpointURL = "https://6151d17e4a5f22001701d459.mockapi.io/ap1/v1/people";
    const endpointURL = "https://6151d1824a5f22001701d45d.mockapi.io/api/v1/carInsurance";
    axios.post(endpointURL, formData)
      .then(() => history.push("/read"))
      .catch(err => console.log(err));
  }

  const options = [
    { text: 'Mr', value: 'Mr' },
    { text: 'Mrs', value: 'Mrs' },
    { text: 'Miss', value: 'Miss' },
    { text: 'Ms', value: 'Ms' },
    { text: 'Dr', value: 'Dr' },
  ]
  

  function validatePhoneNumber(telephoneNumber) {
    var regexNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(telephoneNumber.match(regexNum)) {
      setTelephoneNumber(telephoneNumber)
      return true;
    }
    else {
      alert("Please enter telephone number in correct format");
      return false;
    }
  }

  return (
    <div>
      <h3>Please enter details about you and your car</h3>
      <h4>Please answer these questions honestly</h4>
      <Form>
        <div>
        <Form.Group >
          <Form.Select
            fluid
            label='Prefix'
            options={options}
            placeholder='Prefix'
            onChange={e => setPrefix(e.target.textContent)}
            width={2} />

          <Form.Input fluid label='First name' placeholder='First name'
            onChange={e => setFirstName(e.target.value)}
            width={5} />
          <Form.Input fluid label='Last name' placeholder='Last name'
            onChange={e => setLastName(e.target.value)}
            width={5} />
          <Form.Input fluid label='Telephone Number' placeholder='Telephone Number'
            onBlur={e => validatePhoneNumber(e.target.value)}
            width={4} />
        </Form.Group>
        </div>

        <div>
        <Form.Field> <label>Address Line 1</label> 
        <input placeholder='Address Line 1' 
        onChange={e=>setAddressLine1(e.target.value)}/> </Form.Field>
          <Form.Field> <label>Address Line 2</label> 
          <input placeholder='Address Line 2' 
          onChange={e=>setAddressLine2(e.target.value)}/> </Form.Field>
          <Form.Field> <label>City</label> 
          <input placeholder='City' 
          onChange={e=>setCity(e.target.value)}/> </Form.Field>
          <Form.Field> <label>Post Code</label> 
          <input placeholder='Zip Code' 
          onChange={e=>setZipCode(e.target.value)}/> </Form.Field>
        </div>

        <div>
      
        </div>

        <Button
          type='submit'
          onClick={callMockAPI}
        >Submit</Button>
      </Form>
    </div>
  );
}

export default Create;
