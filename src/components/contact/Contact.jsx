import { useState } from "react";
import burger2 from "../../assets/burger2.png"


function Contact() {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errorMessage, setErrorMessage] = useState("");


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
            return setErrorMessage("Please provide a name, an email and a message.")
        };

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setErrorMessage('Please enter a valid email address.');
        return;
        }

        setErrorMessage('');

        setFormSubmitted(true);
    }
  return (
    <div className="contact">
      <form className="contact-form">
        <h2>Contact Us</h2>
        <input 
        type="text"
        name="name" 
        placeholder="Your Name" 
        value={formData.name}
        onChange={handleChange}
        />
        <input
        name="email" 
        type="email" 
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange} 
        />
        <textarea
        rows="10"
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange} 
        ></textarea>
        {formSubmitted && (
        <div className="pop-up">
            <p>Thank you for contacting us! We will get back to you shortly.</p>
        </div>
        )}
        <button 
        type="submit" 
        onClick={handleSubmit}>Submit</button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </form>

      <div className="formBorder">
        <div>
          <img src={burger2} alt="Your Image" />
        </div>
      </div>
    </div>
  )
}

export default Contact
