import React, { useState } from "react";

function NewTransfer({ createTransfer }) {
  const [transfer, setTransfer] = useState(undefined);

  const updateTransfer = (e, field) => {
    e.preventDefault();
    const value = e.target.value;

    setTransfer({ ...transfer, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTransfer(transfer);
  };

  return (
    <>
      <h2 className="text-center">Create Transfer</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="amount"
            onChange={(e) => updateTransfer(e, "amount")}
          />
          <label htmlFor="floatingInput">Amount</label>
        </div>

        <label htmlFor="floatingInput">To</label>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="receipeint"
            onChange={(e) => updateTransfer(e, "to")}
          />
          <label htmlFor="floatingInput">Receipient</label>
        </div>

        <button type="submit" className="btn btn-primary">Create Transfer</button>
      </form>
    </>
  );
}

export default NewTransfer;
