import React, { useState } from 'react';
import './AdminPanel.css';
import { Link } from 'react-router-dom';
import { Dropdown, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Read from '../Read/Read';

function AdminPanel() {
  const [selectedOperation, setSelectedOperation] = useState('');
  const friendOptions = [
    {
      key: 'Get a Record',
      text: 'Get a Record',
      value: 'Read',
    },
    {
      key: 'Update a Record',
      text: 'Update a Record',
      value: 'Update',
    },
    {
      key: 'Delete a Record',
      text: 'Delete a Record',
      value: 'Delete',
    },
  ]
  const navigateToPage = () => {
    console.log(selectedOperation);
    if (selectedOperation === "Get a Record") {
      window.location.href="/get";
    }
    if (selectedOperation === "Update a Record") {
      window.location.href="/update";
    }

    if (selectedOperation === "Delete a Record") {
      window.location.href="/delete";
    }
  }
  
  

  return (
    <div>
      <Dropdown
        placeholder='Please Select An Operation'
        onChange={e => setSelectedOperation(e.target.innerText)}
        fluid
        selection
        options={friendOptions}
      /> 
      {/* <Link to={linkURL}> */}
        <Button positive type='submit' onClick={navigateToPage}>Positive Button</Button>
      {/* </Link> */}
    </div>

  );
}
export default AdminPanel;