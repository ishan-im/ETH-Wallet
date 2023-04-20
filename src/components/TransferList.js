import React from "react";

function TransferList({ transfer,approveTransfers }) {

  console.log("transfer", transfer);

  return (
    <div>
      <h2 className="text-center">Transfer List</h2>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
           
            <th scope="col">Id</th>
            <th scope="col">Amount</th>
            <th scope="col">To</th>
            <th scope="col">Approvals</th>
            <th scope="col">Approve</th>
            <th scope="col">Sent</th>
          </tr>
        </thead>
        <tbody>
          {transfer.map((transfer, key) => {
            return (
              <tr key={key}>
                <th scope="row">{key+1}</th>
                <td>{transfer.id}</td>
                <td>{transfer.amount}</td>
                <td>{transfer.to}</td>
                <td>
                    <span className="mx-2">{transfer.approvals}</span>
                    <button className="btn btn-warning"  onClick={()=> approveTransfers(transfer.id)}>Approve</button>
                    </td>
                <td>{transfer.sent?'yes': 'no'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TransferList;
