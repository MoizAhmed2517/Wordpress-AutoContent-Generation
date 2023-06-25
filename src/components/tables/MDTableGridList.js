import * as React from 'react';

// Material UI Icons
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

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

const columns = [
  { id: 'id', label: "ID", minWidth: 20 },
  { id: 'name', label: 'Competitor Blog', minWidth: 50 },
  { id: 'descr', label: 'Description', width: 250 },
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


function createDate(id, name, descr, link ) {
    return { id, name, descr, link };
  }
  
const rows = [
    createDate(1, "The Minimalists", "Inspiring and practical tips on embracing a minimalist lifestyle.", "https://www.theminimalists.com"),
    createDate(2, "Brain Pickings", "Curated insights on art, science, literature, and philosophy for intellectual exploration.", "https://www.brainpickings.org"),
    createDate(3, "Lifehacker", "Expert advice and tips for optimizing your life, covering topics like technology, productivity, and self-improvement.", "https://lifehacker.com"),
    createDate(4, "Smitten Kitchen", "Delicious recipes, kitchen experiments, and delightful food photography.", "https://smittenkitchen.com"),
    createDate(5, "Zen Habits", "A blog focused on simplicity, mindfulness, and finding balance in life.", "https://zenhabits.net"),
    createDate(6, "The Sartorialist", "Capturing street style fashion from around the world with stunning photography.", "http://www.thesartorialist.com"),
    createDate(7, "The Financial Diet", "Practical advice on personal finance, budgeting, and saving money.", "https://thefinancialdiet.com"),
    createDate(8, "Mashable", "News, trends, and entertainment in the digital and tech world.", "https://mashable.com"),
    createDate(9, "Cup of Jo", "A lifestyle blog covering topics like motherhood, relationships, travel, and design.", "https://cupofjo.com"),
    createDate(10, "TED Blog", "Insights and ideas worth sharing from the world of TED Talks.", "https://blog.ted.com"),
    createDate(11, "The Everygirl", "A resourceful blog for career-driven women, providing advice on work, life, and style.", "https://theeverygirl.com"),
    createDate(12, "TechCrunch", "Reporting on the latest technology news, startups, and product reviews.", "https://techcrunch.com"),
    createDate(13, "A Beautiful Mess", "DIY projects, home decor inspiration, and creative lifestyle ideas.", "https://abeautifulmess.com"),
    createDate(14, "The Art of Manliness", "A blog dedicated to reviving the lost art of manliness, covering topics like self-improvement, relationships, and hobbies.", "https://www.artofmanliness.com"),
    createDate(15, "The Pioneer Woman", "Recipes, home cooking tips, and stories from the life of a modern pioneer woman.", "https://thepioneerwoman.com")
];

const MDTableGridList = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [openConfirm, setOpenConfirm] = React.useState(false);
    const [delValue, setDelValue] = React.useState('');

    const handleConfirmClose = () => {
        setOpenConfirm(false);
    };
  
    const handleChangePage = (newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    const handleDelete = (row) => {
        setDelValue(row.name)
        setOpenConfirm(true);
    }
  
    const handleView = (row) => {
        window.open(row.link, '_blank')
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
                          <IconButton onClick={() => handleView(row)}>
                              <VisibilityOutlinedIcon />
                          </IconButton>
                        </TableCell>
  
                        <TableCell key={del.id} align={del.align}>
                          <IconButton onClick={() => handleDelete(row)}><DeleteOutlineOutlinedIcon /></IconButton>
                        </TableCell>
  
                      </TableRow>
                    );
                  })}
  
              </TableBody>
  
            </Table>
  
          </TableContainer>

          <DeleteConfirmation openModal={openConfirm} handleClose={handleConfirmClose} setOpen={setOpenConfirm} topic={delValue} />
  
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

export default MDTableGridList