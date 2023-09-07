import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import axios from 'axios';

function App() {

  const sendEmail = async(e) => {
    e.preventDefault();
    
    const data = {
      email
    }

    const res = await axios.post('http://localhost:5000/api/sendemail',data)
    console.log(res.data);
  }

  const [email,setEmail] = useState("");

  return (
    <div className="--flex-center --bg-primary --100vh">
      <div className="--width-500px --card --p --bg-light">
        <form className="--form-control" onSubmit={sendEmail}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="--btn --btn-primary">
            Send Email
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
