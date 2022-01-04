import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const DisplayData = () => {
  const getAllTodos = useSelector((state) => state.todos);
  return (
    <Table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {getAllTodos.todos.map((value, index) => (
          <tr key={index}>
            <td>{value.title}</td>
            <td>{value.details}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DisplayData;
