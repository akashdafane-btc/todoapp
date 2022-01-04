import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Axios from "axios";

const ApiData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res.data);
    });
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>name</th>
          <th>email</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.length > 0 &&
          data.map((value, index) => (
            <tr>
              <td>{value.name}</td>
              <td>{value.email}</td>
              <td>{value.website}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default ApiData;
