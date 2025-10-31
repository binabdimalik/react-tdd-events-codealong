import React, { useState } from "react";

function App() {
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);

  return (
    <div>
      <h1>Select Pizza Toppings</h1>
      <label>
        <input
          type="checkbox"
          checked={pepperoniIsChecked}
          onChange={(e) => setPepperoniIsChecked(e.target.checked)}
        />
        Add pepperoni
      </label>
      <ul>
        <li>Cheese</li>
        {pepperoniIsChecked && <li>Pepperoni</li>}
      </ul>
    </div>
  );
}

export default App;
