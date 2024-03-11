import React, { FormEvent, useRef } from "react";

function AddCommissionForm() {
  const url = "http://localhost:3000/commissions";
  const descriptionRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  async function AddNewCommission(event: FormEvent) {
    event.preventDefault();
    const description = descriptionRef.current?.value;
    const price = priceRef.current?.value;
    const commission = { description: description, price: price };

    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(commission),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      console.log("New Item successfully updated!");
      descriptionRef.current!.value = "";
      priceRef.current!.value = "";
    }
  }

  return (
    <form
      onSubmit={(event) => AddNewCommission(event)}
      className="w-full max-w-md mx-auto"
    >
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700">
          Description:
        </label>
        <input
          type="text"
          id="description"
          required
          ref={descriptionRef}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700">
          Price:
        </label>
        <input
          type="number"
          id="price"
          required
          ref={priceRef}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add new
        </button>
      </div>
    </form>
  );
}

export default AddCommissionForm;
