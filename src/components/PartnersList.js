import React from "react";

function PartnersList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Partner ID</th>
          <th>Partner Name</th>
          <th>Logo</th>
          <th>About</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {props.partners.map((partner) => {
          return (
            <tr key={partner.id}>
              <td>{partner.abbrName}</td>
              <td>{partner.logoUrl}</td>
              <td>{partner.about}</td>
              <td>{partner.notes}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default PartnersList;
