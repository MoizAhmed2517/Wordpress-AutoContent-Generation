import * as React from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

// Material UI Icons
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

// Material UI component
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { IconButton, Box, Tooltip } from '@mui/material';
import AddNewTopics from '../modal/AddNewTopics';
import DeleteConfirmationTopic from '../modal/DeleteConfirmationTopic';

const columns = [
  { id: 'id', label: "ID", minWidth: 20 },
  { id: 'mTopic', label: 'Main Topic', minWidth: 50 },
  { id: 'sTopic', label: 'Sub Topic', width: 250 },
  { id: 'date', label: 'Added Date', width: 250 },
];

const del = {
    id: 'del',
    label: 'Delete',
    minWidth: 17,
    align: 'center',
}

const edit = {
    id: 'view',
    label: 'View',
    minWidth: 17,
    align: 'center',
}

function createData(id, mTopic, sTopic, date, topic_id ) {
  return { id, mTopic, sTopic, date, topic_id };
}
  
// let rows = [];

const MDTableGridTopicList = (props) => {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [delValue, setDelValue] = React.useState({});
  const [defaultTopic, setDefaultTopic] = React.useState({});
  const [rows, setRows] = React.useState([]);

  const { enqueueSnackbar } = useSnackbar();

  React.useMemo(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://mujtabatasneem.pythonanywhere.com/api/topics/");
        const newRows = res.data.map((item, index) => {
          let dt = new Date(item.datetime);
          let formattedDate =
            ("0" + dt.getDate()).slice(-2) +
            "-" +
            ("0" + (dt.getMonth() + 1)).slice(-2) +
            "-" +
            dt.getFullYear();
          return createData(index+1, item.topic_name, item.sub_topic, formattedDate, item.id);
        });
        setRows(newRows); // Update the rows state
      } catch (e) {
        enqueueSnackbar(e);
      }
    };
    fetchData();
  }, []);

  const handleConfirmClose = () => {
      setOpenConfirm(false);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = (row) => {
    setDelValue(row)
    setOpenConfirm(true);
  }

  const handleView = (row) => {
    setDefaultTopic(row)
    setOpenEdit(true)
  }
  
  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>

      <TableContainer sx={{ maxHeight: 360 }}>

        <Table stickyHeader aria-label="sticky table">

          <TableHead>

            <TableRow>

              {columns.map((column, index) => (
                <TableCell
                  key={index}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}

              <TableCell key={edit.id} align={edit.align} style={{ minWidth: edit.minWidth }}>
                  {edit.label}
              </TableCell>

              <TableCell key={del.id} align={del.align} style={{ minWidth: del.minWidth }}>
                  {del.label}
              </TableCell>

            </TableRow>

          </TableHead>

          <TableBody>

            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover tabIndex={-1} key={index}>

                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                          <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                          );
                      })
                    }

                    <TableCell key={edit.id} align={edit.align}>
                      <Tooltip title='View in seprate tab'>
                        <IconButton onClick={() => handleView(row)}>
                            <EditOutlinedIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>

                    <TableCell key={del.id} align={del.align}>
                      <Tooltip title='Delete highlighted blog'>
                        <IconButton onClick={() => handleDelete(row)}><DeleteOutlineOutlinedIcon /></IconButton>
                      </Tooltip>
                    </TableCell>

                  </TableRow>
                );
              })}

          </TableBody>

        </Table>

      </TableContainer>

      <DeleteConfirmationTopic openModal={openConfirm} handleClose={handleConfirmClose} setOpen={setOpenConfirm} delKey={delValue} />

      <AddNewTopics openModal={openEdit} handleClose={handleEditClose} setOpen={setOpenEdit} topic={defaultTopic} />

      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

    </Box>
  );
}

export default MDTableGridTopicList