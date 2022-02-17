import React from "react";

function Personaldistrict() {
    return (
      <div className="col-md-3">
        <label for="inputCity" className="form-label">
          <h6>Province:</h6>
        </label>
        <select id="inputState" className="form-select">
          <option selected>Galle</option>
          <option>Matara</option>
          <option>Hambantota</option>
        </select>
      </div>
    );
  }
  export default Personaldistrict;
  