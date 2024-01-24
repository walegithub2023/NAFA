/* import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

const TableOne = () => {
  const [data, setData] = useState([]);

  // Define your columns
  const columns = [
    {
      name: 'ID',
      selector: 'id',
      sortable: true,
    },
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    // Add more columns as needed
  ];

  // Define your DataTable component
  const MyDataTable = ({ data }) => {
    return (
      <DataTable
        columns={columns}
        data={data}
        pagination
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 20, 50]}
        highlightOnHover
        striped
        responsive
      />
    );
  };

  useEffect(() => {
    // Fetch your data here (e.g., from an API)
    const fetchData = async () => {
      try {
        const response = await fetch('your-api-endpoint');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return <MyDataTable data={data} />;
};

export default TableOne; */