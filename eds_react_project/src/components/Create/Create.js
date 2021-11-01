import React, { useState } from 'react';
import { Button, Form, Checkbox, Grid, TextArea } from 'semantic-ui-react';
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
  const [vehicleType, setVehicleType] = useState('');
  const [engineSize, setEngineSize] = useState('');
  const [additionalDrivers, setAdditionalDrivers] = useState('');
  const [commercialPurposes, setCommercialPurposes] = useState(false);
  const [usedOutsideState, setUsedOutsideState] = useState(false);
  const [dateRegistered, setDateRegistered] = useState(new Date());
  const [currentValue, setCurrentValue] = useState('');
  const [comments, setComments] = useState('');
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
      zipCode,
      vehicleType,
      engineSize,
      additionalDrivers,
      commercialPurposes,
      usedOutsideState,
      dateRegistered,
      currentValue,
      comments
    }

    //lukas - const endpointURL = "https://6151d17e4a5f22001701d459.mockapi.io/ap1/v1/people";
    //const endpointURL = "https://6151d1824a5f22001701d45d.mockapi.io/api/v1/carInsurance";
    const endpointURL = "http://localhost:8080/applicants";
    axios.post(endpointURL, formData)
      .then(() => history.push("/"))
      .catch(err => console.log(err));
  }

  const options = [
    { text: 'Mr', value: 'Mr' },
    { text: 'Mrs', value: 'Mrs' },
    { text: 'Miss', value: 'Miss' },
    { text: 'Ms', value: 'Ms' },
    { text: 'Dr', value: 'Dr' },
  ]

  const vehicleOptions = [
    { text: 'Cabriolet', value: 'Cabriolet' },
    { text: 'Coupe', value: 'Coupe' },
    { text: 'Estate', value: 'Estate' },
    { text: 'Hatchback', value: 'Hatchback' },
    { text: 'Other', value: 'Other' }
  ]

  const engineSizeOptions = [
    { text: '1000', value: '1000' },
    { text: '1600', value: '1600' },
    { text: '2000', value: '2000' },
    { text: '2500', value: '2500' },
    { text: '3000', value: '3000' },
    { text: 'Other', value: 'Other' }
  ]

  const additionalDriversOptions = [
    { text: '0', value: '0' },
    { text: '1', value: '1' },
    { text: '2', value: '2' },
    { text: '3', value: '3' },
    { text: '4', value: '4' }
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
      <p>It is essential that you answer all questions in this form honestly
         and to the best of your knowledge. </p>
         <p>Failure to be honest could result in
          your policy being cancelled and criminal proceedings for insurance fraud.</p>
      <Form>
        <div>
        <h3> Customer Details </h3>
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
          <Form.Field> <label>Zip Code</label> 
          <input placeholder='Zip Code' 
          onChange={e=>setZipCode(e.target.value)}/> </Form.Field>
        </div>

        <div>
          
        <h3> Vehicle Details </h3>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Form.Select
                fluid
                id='vehicleType'
                label='Vehicle Type'
                options={vehicleOptions}
                placeholder='Vehicle Type'
                onChange={e => setVehicleType(e.target.textContent)}
              />

              <Form.Select
                fluid
                id='engineSize'
                label='Engine Size'
                options={engineSizeOptions}
                placeholder='Engine Size'
                onChange={e => setEngineSize(e.target.textContent)}
              />
              <Form.Select
                fluid
                id='additionalDrivers'
                label='Additional Drivers'
                options={additionalDriversOptions}
                placeholder='Additional Drivers'
                onChange={e => setAdditionalDrivers(e.target.textContent)}
              />

            </Grid.Column>
            <Grid.Column>
              <Form.Field fluid>
                <label>What is the current value of the vehicle? ($)</label>
                <input type="number" id="currentValue" name="currentValue" onChange={e => setCurrentValue(e.target.value)}
                  min="00" max="50000" />
              </Form.Field>

              <Form.Field>
                <label>Date vehicle was first registered</label>
                <div class="col-8">
                  <input id="dateRegistered" name="dateRegistered" type="date" required="required" class="form-control" onChange={e => setDateRegistered(e.target.value)} />
                </div>
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Form.Field>
          <Checkbox
            id='commercialPurposes'
            label='Will the vehicle be used for commerical purposes? (Tick if yes)'
            onChange={e => setCommercialPurposes(e.target.checked)} />
        </Form.Field>
        <Form.Field>
          <Checkbox
            id='usedOutsideState'
            label='Will the vehicle be used outside the registered state? (Tick if yes)'
            onChange={e => setUsedOutsideState(e.target.checked)} />
        </Form.Field>

        <Form.Field fluid>
          <label>Additional Information</label>
          <TextArea
            id='comments'
            label='Comments'
            placeholder='If you have any additional information, please provide it here.'
            onChange={e => setComments(e.target.value)} />
        </Form.Field>
      
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
