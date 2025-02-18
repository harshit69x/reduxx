import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCustomer } from "./customerSlice";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customer); // ✅ Get customer state

  function handleClick() {
    if (!fullName || !nationalId) return;
    dispatch(createCustomer(fullName, nationalId));
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>

      {/* ✅ Display customer details safely */}
      {customer.fullName && (
        <div>
          <h3>Customer Details:</h3>
          <p>Customer Name: {customer.fullName}</p>
          <p>National ID: {customer.nationalId}</p>
        </div>
      )}
    </div>
  );
}

export default Customer;
