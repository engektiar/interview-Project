import React from "react";
import Table from "react-bootstrap/Table";
const ListViews = () => {
  return (
    <div>
      <Table striped bordered hover className="listviewstable">
        <thead>
          <tr>
            <th>Date</th>
            <th>Employe Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ListViews;
