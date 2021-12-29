import { useState } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [num, setNum] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <div className="App">
      <form className="form">
        <div className="form-dt">
          <label>Name</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-dt">
          <label>Last Name</label>
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="form-dt">
          <label>Gender: </label>
          <label>Male</label>
          <input
            type="radio"
            id="Male"
            name="gender"
            value="Male"
            onChange={(e) => setGender(e.target.value)}
          />
          <label>Female</label>
          <input
            type="radio"
            id="Female"
            name="gender"
            value="Female"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
      </form>
      <div className="content">
        <p>{name}</p>
        <p>{lastName}</p>
        <p>{gender}</p>
      </div>
    </div>
  );
}

export default App;
