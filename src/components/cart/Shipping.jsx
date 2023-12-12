import { useState } from "react";
import Popup from 'reactjs-popup';
import countries from "../../countriesData"

const Shipping = () => {

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  // useState for phone number pattern verification
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleChange = (e) => {
    let inputValue = e.target.value
    setPhoneNumber(inputValue)
  }

  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          {/* House number input*/}
          <div>
            <label>H.No.</label>
            <input 
              type="text" 
              placeholder="Enter House No." 
            />
          </div>
          {/* City input */}
          <div>
            <label>City</label>
            <input 
              type="text" 
              placeholder="Enter City" 
            />
          </div>
          {/* Country select */}
          <div>
            <label>Country</label>
            <select 
              value={selectedCountry} 
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="">Select Country</option>
              {countries.map(country => (
                <option key={country.id} value={country.countryName}>
                  {country.countryName}
              </option>
              ))}        
            </select>
          </div>
              {/*State select*/}
          <div>
              <label>State</label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                <option value="">Select State</option>
                {selectedCountry && 
                countries.find(country => country.countryName === selectedCountry)
                ?.states.map(state => (
                  <option
                    key={state} 
                    value={state}
                  >
                    {state}
                  </option>
                ))
                }
              </select>
          </div>
          {/* Pin code input */}
          <div>
            <label>Pin Code</label>
            <input 
              type="number" 
              placeholder="Enter Pincode" 
            />
          </div>
                {/* Phone number input */}
          <div>
            <label>Contact
              <span>{phoneNumber.match(/[0-9]{3}-[0-9]{3}-[0-9]{4}/) ? '✓' : '✗'}</span>
            </label>
            <input 
              type="tel" 
              placeholder="123-456-7890" 
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value={phoneNumber}
              onChange={handleChange}
              />
          </div>        
          {/* Submit button */}
          <Popup trigger=
                {<button type = "button">Confirm Order</button>}
                position="right center">
                <div style={{color:"red",position: 'absolute', top: '50%', right: '100%', transform: 'translateY(-50%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>Order Placed</div>
               
            </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
