function Personalprovince() {
  return (
    <div className="col-md-6">
      <label for="inputCity" className="form-label">
        <h6>State:</h6>
      </label>
      <select id="inputState" className="form-select">
        <option>Western Province</option>
        <option>Central Province</option>
        <option selected>Southern Province</option>
        <option>Uva Province</option>
        <option>Sabaragamuwa Province</option>
        <option>North Western Province</option>
        <option>North Central Province</option>
        <option>Nothern Province</option>
        <option>Estern Province</option>
      </select>
    </div>
  );
}
export default Personalprovince;