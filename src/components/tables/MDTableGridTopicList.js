import * as React from 'react';

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
import DeleteConfirmation from '../modal/DeleteConfirmation';
import AddNewTopics from '../modal/AddNewTopics';

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


function createData(id, mTopic, sTopic, date ) {
    return { id, mTopic, sTopic, date };
  }
  
const rows = [
    createData(1, "Artificial Intelligence in Healthcare", "Diagnosis and Treatment Assistance", "12-Jan-2023"),
    createData(2, "Sustainable Fashion and Eco-friendly Brands", "Ethical Manufacturing Practices", "20-Feb-2023"),
    createData(3, "Mindfulness and Meditation Practices", "Mindfulness Meditation", "05-Mar-2023"),
    createData(4, "Digital Marketing Strategies for Small Businesses", "Social Media Marketing", "15-Apr-2023"),
    createData(5, "Home Organization and Decluttering Tips", "Minimalist Living", "28-Apr-2023"),
    createData(6, "Renewable Energy Technologies and Innovations", "Solar Power", "10-May-2023"),
    createData(7, "Effective Time Management Techniques", "Prioritization and Planning", "22-Jun-2023"),
    createData(8, "Healthy Cooking and Nutritious Recipes", "Plant-Based Diet", "03-Jul-2023"),
    createData(9, "Personal Finance and Investment Strategies", "Budgeting and Saving Tips", "14-Aug-2023"),
    createData(10, "DIY Crafts and Creative Projects", "Paper Crafts", "25-Sep-2023"),
    createData(11, "Cybersecurity Best Practices for Individuals and Businesses", "Password Security", "06-Oct-2023"),
    createData(12, "Travel Destinations Off the Beaten Path", "Adventure Travel", "18-Nov-2023"),
    createData(13, "Effective Communication Skills for Professionals", "Active Listening", "30-Nov-2023"),
    createData(14, "Mental Health and Self-Care Practices", "Stress Management Techniques", "12-Dec-2023"),
    createData(15, "Fitness and Workout Routines for Busy Individuals", "High-Intensity Interval Training (HIIT)", "24-Dec-2023")
];

const MDTableGridTopicList = (props) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [openConfirm, setOpenConfirm] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [delValue, setDelValue] = React.useState('');
    const [defaultTopic, setDefaultTopic] = React.useState({});
  
    const handleConfirmClose = () => {
        setOpenConfirm(false);
    };

    const handleEditClose = () => {
      setOpenEdit(false);
  };
  
    const handleChangePage = (newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    const handleDelete = (row) => {
        setDelValue(row.mTopic)
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
  
        <DeleteConfirmation openModal={openConfirm} handleClose={handleConfirmClose} setOpen={setOpenConfirm} topic={delValue} />

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