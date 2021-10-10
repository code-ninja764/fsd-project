
import React, { useState, useEffect } from 'react'
import './Update.css';
import axios from 'axios';
import { useHistory } from 'react-router';
import { Button, Form } from 'semantic-ui-react'

function Update() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [id, setId] = useState(null);
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [idForUpdate, setidForUpdate] = useState([]);

  const [tableData2, setTableData2] = useState([]);

  let history = useHistory();

  function callMockApiWithAxiosPUT() {

    const formData = {
      firstName,
      lastName,
      id,
      telephoneNumber
    };

    const endpointURL = `https://6151d1824a5f22001701d45d.mockapi.io/api/v1/carInsurance/${idForUpdate}`;
    axios.put(endpointURL, formData)
      .then(() => history.push("/admin"))
      .catch(
        (err) => { console.log(err) }
      );

  }

  const callMockAPIToGetRecord= () => {
   
    const endpointURL = `https://6151d1824a5f22001701d45d.mockapi.io/api/v1/carInsurance/${idForUpdate}`;
    axios.get(endpointURL)
     .then(response => setTableData2(response.data));
  };


useEffect(() => {
  setFirstName(tableData2.firstName);
  setLastName(tableData2.lastName);
  setId(tableData2.id);
  setTelephoneNumber(tableData2.telephoneNumber)
}, [])

return (
  <div>
    <div>
      <Form>
      <Form.Field>
        <label>ID</label>
        <input 
          name="idForUpdate"
          onChange={e => setidForUpdate(e.target.value)}
          placeholder='ID'
          value={idForUpdate} />
      </Form.Field>
      <Form.Button positive
          type='submit'
          onClick={callMockAPIToGetRecord}
        >Fetch</Form.Button>
      </Form>

      </div>
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input 
          name="firstName"
          onChange={e => setFirstName(e.target.value)}
          placeholder='First Name'
          value={tableData2.firstName} 
          disabled='true'
          />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input 
          name="lastName"
          onChange={e => setLastName(e.target.value)}
          placeholder='Last Name'
          value={tableData2.lastName} //Value is absaloute and the user cannot change the text
          disabled='true'
          />
      </Form.Field>
      <Form.Field>
        <label>Telephone Number</label>
        <input 
          name="telephoneNumber"
          onChange={e => setTelephoneNumber(e.target.value)}
          placeholder='Telephone Number'
          defaultValue={tableData2.telephoneNumber} //Default value allows the user to edit the field
          />
      </Form.Field>
      <Button type='submit' onClick={callMockApiWithAxiosPUT}>Update</Button>
    </Form>
  </div>
)
}
export default Update;
