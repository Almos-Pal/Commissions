import React, { FormEvent } from "react";

function AddCommissionForm() {
  async function AddNewCommission(event: FormEvent) {}

  return (
    <form onSubmit={AddNewCommission(event)}>
      <div>
        <label htmlFor="description">Description: </label>
        <input type="text" id="description" required />
        <label htmlFor="price">Price: </label>
        <input type="number" id="price" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddCommissionForm;
