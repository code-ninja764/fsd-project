import './Get.css';

import React, { useEffect, useState } from 'react';

import { Button, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form } from 'semantic-ui-react';

function Get() {
  const [tableData, setTableData] = useState([]);
  const [idForUpdate, setidForUpdate] = useState([]);
  const [tableData2, setTableData2] = useState([]);
  



  const callMockApiWithAxiosGET = () => {
    //LUKAS API: const endpointURL = "https://6151d17e4a5f22001701d459.mockapi.io/ap1/v1/people";
    // Ed's API Below
    //const endpointURL = "https://6151d1824a5f22001701d45d.mockapi.io/api/v1/carInsurance";
    const endpointURL = "http://localhost:8080/applicants"
    axios.get(endpointURL)
      .then(response => setTableData(response.data));
  };

  //for retrieving id 
  const callMockAPIToGetRecord= () => {
   
    //const endpointURL = `https://6151d1824a5f22001701d45d.mockapi.io/api/v1/carInsurance/${idForUpdate}`;
    const endpointURL = `http://localhost:8080/applicants/id?id=${idForUpdate}`;
    axios.get(endpointURL)
      .then(response => setTableData2(response.data));
  };

  console.log(idForUpdate);

  function setLocalStorage(data) {
    console.log(data.id);
    localStorage.setItem("id", data.id);
    localStorage.setItem("firstName", data.firstName);
    localStorage.setItem("lastName", data.lastName);
    localStorage.setItem("telephoneNumber", data.telephoneNumber);
  }

  useEffect(() => {
    callMockApiWithAxiosGET();
  }, []);

  return (
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

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Prefix</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Telephone Number</Table.HeaderCell>
            <Table.HeaderCell>Address Line One</Table.HeaderCell>
            <Table.HeaderCell>Address Line Two</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Zip Code</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
                <Table.Row>
                  <Table.Cell>{tableData2.prefix}</Table.Cell>
                  <Table.Cell>{tableData2.firstName}</Table.Cell>
                  <Table.Cell>{tableData2.lastName}</Table.Cell>
                  <Table.Cell>{tableData2.telephoneNumber}</Table.Cell>
                  <Table.Cell>{tableData2.addressLine1}</Table.Cell>
                  <Table.Cell>{tableData2.addressLine2}</Table.Cell>
                  <Table.Cell>{tableData2.city}</Table.Cell>
                  <Table.Cell>{tableData2.zipCode}</Table.Cell>
                </Table.Row>
          }
        </Table.Body>
        </Table>

        <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Vehicle body style</Table.HeaderCell>
            <Table.HeaderCell>Engine capacity</Table.HeaderCell>
            <Table.HeaderCell>Additional drivers</Table.HeaderCell>
            <Table.HeaderCell>Curent value</Table.HeaderCell>
            <Table.HeaderCell>Commercial purposes?</Table.HeaderCell>
            <Table.HeaderCell>Outside state?</Table.HeaderCell>
            <Table.HeaderCell>Date registered</Table.HeaderCell>
            <Table.HeaderCell>Comments</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
                <Table.Row>
                  <Table.Cell>{tableData2.vehicleType}</Table.Cell>
                  <Table.Cell>{tableData2.engineSize}</Table.Cell>
                  <Table.Cell>{tableData2.additionalDrivers}</Table.Cell>
                  <Table.Cell>{tableData2.currentValue}</Table.Cell>
                  <Table.Cell>{tableData2.commercialPurposes}</Table.Cell>
                  <Table.Cell>{tableData2.usedOutsideState}</Table.Cell>
                  <Table.Cell>{tableData2.dateRegistered}</Table.Cell>
                  <Table.Cell>{tableData2.comments}</Table.Cell>
                </Table.Row>
          }
        </Table.Body>
        </Table>

        <Link to="/admin">
           <Button color="green"
           >Back to admin panel</Button>
         </Link>
    </div>


  );
}


export default Get;
