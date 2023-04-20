import React from "react";

function Header({ approvers, quorum }) {

  console.log("approvers", approvers);

  return (
    <header className="my-5 px-4 text-center">
      <ul className="list-group list-group-flush">
        {
          approvers?.map((approver, index) => {
            return <li className="list-group-item" key={index}><h6>Approver {index+1}: {approver}</h6></li>
          })
        }
        <li className="list-group-item"><h6>Quorum: {quorum}</h6></li>
      </ul>
    </header>
  );
}

export default Header;
