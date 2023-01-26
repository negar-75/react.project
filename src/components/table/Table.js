import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import useGetApi from '../../hooks/useGetApi';
import { getTopTwentyData, deletRow } from '../../api/user.services';

Table.propTypes = {
  setIsModalOpen: PropTypes.func,
  setModalId: PropTypes.func,
};

function Table({ setIsModalOpen, setModalId }) {
  const [rowsInTable, setRowsInTable] = useState([]);
  const getData = useGetApi(getTopTwentyData);
  const { data, error, loading, request } = getData;

  useEffect(() => {
    request();
  }, []);
  useEffect(() => {
    setRowsInTable(data);
  }, [data]);

  const handleDelet = (id) => {
    try {
      const res = deletRow(id);
      setRowsInTable(rowsInTable.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const showModal = (id) => {
    setIsModalOpen(true);
    setModalId(id);
  };

  const cols = [
    {
      field: 'id',
      headerName: '#',
      width: 200,
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 300,
    },
    {
      field: 'body',
      headerName: 'Body',
      width: 500,
    },
  ];

  const action = [
    {
      field: 'edit',
      headerName: 'Edit',
      width: 150,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      renderCell: (param) => {
        return (
          <Box sx={{ width: '50%', display: 'flex', gap: 3 }}>
            <EditIcon sx={{ color: 'primary.main', cursor: 'pointer' }} onClick={() => showModal(param.id)} />
            <DeleteIcon sx={{ color: 'crimson', cursor: 'pointer' }} onClick={() => handleDelet(param.id)} />
          </Box>
        );
      },
    },
  ];

  return (
    <div className="prosuct-list-table" style={{ height: '500px', marginRight: '20px' }}>
      <DataGrid
        rows={rowsInTable?.length > 0 ? rowsInTable : []}
        columns={cols.concat(action)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        sx={{
          width: {
            xs: '750px',
            sm: '750px',
            md: '795px',
            lg: '1150px',
            xl: '1150px',
          },
          backgroundColor: 'white',
        }}
        hideFooterSelectedRowCount
      />
    </div>
  );
}

export default Table;
