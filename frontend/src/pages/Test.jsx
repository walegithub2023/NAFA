// Import necessary libraries and components
import React from "react";
import DataTable from "react-data-table-component";
import { useState } from "react";

const Test = () => {
  // Define columns
  const columns = [
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Email", selector: (row) => row.email, sortable: true },
    { name: "Age", selector: (row) => row.age, sortable: true },

    // Add more columns as needed
  ];

  // Sample data
  const data = [
    { id: 1, name: "John Doe", email: "yousaf@gmail.com", age: 23 },
    { id: 2, name: "John Doe", email: "yousaf@gmail.com", age: 23 },
    { id: 3, name: "John Doe", email: "yousaf@gmail.com", age: 23 },
    { id: 4, name: "John Doe", email: "yousaf@gmail.com", age: 23 },
    { id: 5, name: "John Doe", email: "yousaf@gmail.com", age: 23 },
    { id: 6, name: "John Doe", email: "yousaf@gmail.com", age: 23 },
    { id: 7, name: "John Doe", email: "yousaf@gmail.com", age: 23 },
    { id: 8, name: "John Doe", email: "yousaf@gmail.com", age: 23 },
    // Add more data as needed
  ];

  const [records, setRecords] = useState(data);

  function handleFilter(event) {
    const newData = data.filter((row) => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  }

  return (
    <div>
      <div className="text-end">
        <input type="text" onChange={handleFilter} />
      </div>
      <DataTable
        title="User Data"
        columns={columns}
        data={records}
        selectableRows
        pagination
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 15]}
        highlightOnHover
        striped
        responsive
        fixedHeader
      />
    </div>
  );
};

export default Test;
