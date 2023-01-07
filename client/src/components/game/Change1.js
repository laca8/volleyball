import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
const Change1 = ({ players, deleteChange }) => {
  return (
    <Table striped bordered hover style={{}}>
      <thead>
        <tr>
          <th>in</th>
          <th>out</th>
        </tr>
      </thead>
      <tbody>
        {players?.map((p, i) => (
          <tr>
            <td>{p.inn}</td>
            <td>{p.out}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Change1;
