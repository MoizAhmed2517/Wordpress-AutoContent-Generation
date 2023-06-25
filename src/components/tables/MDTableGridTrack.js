import * as React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';

// Material UI Icons
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import WebhookOutlinedIcon from '@mui/icons-material/WebhookOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import RestorePageOutlinedIcon from '@mui/icons-material/RestorePageOutlined';

// Material UI component
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { IconButton, Box, Tooltip, Menu, MenuItem } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const columns = [
  { id: 'id', label: "ID", minWidth: 20 },
  { id: 'name', label: 'Competitor', minWidth: 50 },
  { id: 'topic', label: 'Topic Name', minWidth: 50 },
  { id: 'descr', label: 'Description', minWidth: 100},
  { id: 'time', label: 'Time Elapse', minWidth: 100},
];

const del = {
    id: 'copy',
    label: 'Copy',
    minWidth: 17,
    align: 'center',
}

const view = {
    id: 'view',
    label: 'View',
    minWidth: 17,
    align: 'center',
}

const edit = {
    id: 'scrap',
    label: 'Scrap',
    minWidth: 17,
    align: 'center',
}

const ai = {
    id: 're',
    label: 'Regenerate',
    minWidth: 50,
    align: 'center',
}


function createData(id, name, topic, descr, time, link ) {
  return { id, name, topic, descr, time, link };
}

const rows = [
    createData(1, 'xyz', 'Cryptocurrency Regulation', 'With the increasing popularity of cryptocurrencies like Bitcoin and Ethereum, governments around the world are grappling with how to regulate this new form of digital currency to protect investors and ensure financial stability.', '2 days', 'https://stackoverflow.com/questions/58666189/getting-the-value-in-the-react-material-ui-autocomplete'),
    createData(2, 'xyz', 'Artificial Intelligence in Healthcare', 'AI is revolutionizing the healthcare industry by aiding in disease diagnosis, drug discovery, and patient monitoring. It has the potential to improve patient outcomes and reduce healthcare costs.', '2 days', 'https://www.techtarget.com/searchenterpriseai/definition/AI-Artificial-Intelligence#:~:text=Artificial%20intelligence%20is%20the%20simulation,speech%20recognition%20and%20machine%20vision.'),
    createData(3, 'xyz', 'Climate Change Activism', 'The urgency of climate change has spurred a global movement for action. Activists are calling for sustainable practices, renewable energy adoption, and policy changes to combat the environmental crisis.', '2 days', 'https://stackoverflow.com/questions/58666189/getting-the-value-in-the-react-material-ui-autocomplete'),
    createData(4, 'xyz', 'Virtual Reality Gaming', 'Virtual reality (VR) gaming is gaining momentum with immersive experiences and realistic graphics. It offers gamers a whole new level of engagement and interactivity.', '2 days', 'https://stackoverflow.com/questions/58666189/getting-the-value-in-the-react-material-ui-autocomplete'),
    createData(5, 'xyz', 'Remote Work Revolution', 'The COVID-19 pandemic has accelerated the adoption of remote work globally. Companies are embracing remote work policies, leading to changes in work dynamics, productivity, and work-life balance.', '2 days', 'https://stackoverflow.com/questions/58666189/getting-the-value-in-the-react-material-ui-autocomplete'),
    createData(6, 'xyz', 'Space Exploration', 'Private space companies like SpaceX and Blue Origin are pushing the boundaries of space exploration. With missions to Mars, lunar landings, and satellite launches, humanity\'s presence in space is rapidly expanding.', '2 days', 'https://stackoverflow.com/questions/58666189/getting-the-value-in-the-react-material-ui-autocomplete'),
    createData(7, 'xyz', 'Mental Health Awareness', 'Increasing awareness about mental health issues has prompted conversations and initiatives aimed at reducing stigma, providing support, and improving access to mental healthcare services.', '2 days', 'https://stackoverflow.com/questions/58666189/getting-the-value-in-the-react-material-ui-autocomplete'),
    createData(8, 'xyz', 'Sustainable Fashion', 'Consumers are becoming more conscious of the environmental impact of fast fashion. Sustainable fashion focuses on ethical sourcing, eco-friendly production methods, and promoting fair labor practices.', '2 days', 'https://stackoverflow.com/questions/58666189/getting-the-value-in-the-react-material-ui-autocomplete'),
    createData(9, 'xyz', 'Plant-Based and Alternative Protein', 'The rise of plant-based diets and alternative protein sources, such as lab-grown meat, is driven by concerns about animal welfare, health benefits, and sustainability.', '2 days', 'https://stackoverflow.com/questions/58666189/getting-the-value-in-the-react-material-ui-autocomplete'),
    createData(10, 'xyz', '5G Technology', 'The deployment of 5G networks promises faster speeds, reduced latency, and enhanced connectivity, paving the way for advancements in autonomous vehicles, Internet of Things (IoT), and smart cities.', '2 days', 'https://stackoverflow.com/questions/58666189/getting-the-value-in-the-react-material-ui-autocomplete'),
    createData(11, 'xyz', 'Electric Vehicles', 'The shift towards electric vehicles (EVs) is gaining traction as a means to reduce carbon emissions and combat climate change. EVs offer greater energy efficiency and lower environmental impact compared to traditional gasoline-powered cars.', '2 days', 'https://stackoverflow.com/questions/58666189/getting-the-value-in-the-react-material-ui-autocomplete'),
    createData(12, 'xyz', 'Online Learning and EdTech', 'The pandemic forced a rapid shift to online learning, leading to the growth of educational technology platforms. These platforms offer personalized learning experiences, accessible education, and skill development opportunities.', '2 days', 'https://stackoverflow.com/questions/58666189/getting-the-value-in-the-react-material-ui-autocomplete'),
    createData(13, 'xyz', 'Influencer Culture and Brand Partnerships', 'Social media influencers have become powerful marketing channels, leading to collaborations between brands and popular influencers to reach wider audiences and promote products or services.', '2 days', 'https://stackoverflow.com/questions/58666189/getting-the-value-in-the-react-material-ui-autocomplete'),
    createData(14, 'xyz', 'Biohacking and Personal Optimization', 'Biohacking involves using science, technology, and lifestyle modifications to optimize physical and mental performance. It encompasses practices such as nootropics, intermittent fasting, and wearables to track health data.', '2 days', 'https://stackoverflow.com/questions/58666189/getting-the-value-in-the-react-material-ui-autocomplete'),
    createData(15, 'xyz', 'Drone Technology', 'Drones are being utilized across various industries, including delivery services, aerial photography, agriculture, and disaster management. Their versatility and efficiency make them a trending topic in technology and innovation.', '2 days', 'https://stackoverflow.com/questions/58666189/getting-the-value-in-the-react-material-ui-autocomplete')
];

const MDTableGridTrack = () => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [selectRow, setSelectedRow]   = React.useState(null);
    const [isloading, setIsLoading] = React.useState([]);
    const [enable, setEnable] = React.useState(true);
    const [color, setColor] = React.useState("primary");
    const [menuCopy, setMenuCopy] = React.useState(null);

    const dummyText = 'Hi! Dummy content is generated';
    const { enqueueSnackbar } = useSnackbar();
    const openCopyMenu = Boolean(menuCopy);

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const handleCopy = (event) => {
        setMenuCopy(event.currentTarget);
    }

    const handleGenerate = (row) => {
        setEnable(true)
        setIsLoading([...isloading, row.id]);
        setSelectedRow(row)
        setTimeout(() => {
            setColor('success');
        }, 3500);
        setTimeout(() => {
            setIsLoading((prevLoading) => prevLoading.filter((id) => id !== row.id));
            setColor('primary');
        }, 5000);
    }

    const handleAI = (row) => {
        setEnable(false)

    }

    const handleView = (row) => {
        window.open(row.link, '_blank')
    }

    const handleCopyOriginal = (variant) => {
        navigator.clipboard.writeText(dummyText)
            .then(() => {
                enqueueSnackbar('Orginal Content Copied on Clipboard', { variant });
            })
            .catch((error) => {
                console.log('Error copying text to clipboard', error);
            });
    };

    const handleCopyGenerated = (variant) => {
        navigator.clipboard.writeText(dummyText)
          .then(() => {
            enqueueSnackbar('Ai Generated Content Copied on Clipboard', { variant });
          })
          .catch((error) => {
            console.log('Error copying Ai text to clipboard', error);
          });
    };

    const handleCloseMenu = () => {
        setMenuCopy(null);
    };
  
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

                <TableCell key={view.id} align={view.align} style={{ minWidth: view.minWidth }}>
                    {view.label}
                </TableCell>

                <TableCell key={edit.id} align={edit.align} style={{ minWidth: edit.minWidth }}>
                    {edit.label}
                </TableCell>

                <TableCell key={ai.id} align={ai.align} style={{ minWidth: ai.minWidth }}>
                    {ai.label}
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

                      <TableCell key={view.id} align={view.align}>
                        <Tooltip title="Click to view">
                            <IconButton onClick={() => handleView(row)} ><VisibilityOutlinedIcon /></IconButton>
                        </Tooltip>
                      </TableCell>

                      <TableCell key={edit.id} align={edit.align}>
                        <Tooltip title="Scrap Blog Data">
                            <IconButton onClick={() => handleGenerate(row)}>
                                {isloading.includes(row.id) ? <CircularProgress color={color}  /> : <WebhookOutlinedIcon />}
                            </IconButton>
                        </Tooltip>
                      </TableCell>

                      <TableCell key={ai.id} align={ai.align}>
                        <Tooltip title="Generate AI content">
                            <IconButton onClick={() => handleAI(row)} ><RestorePageOutlinedIcon /></IconButton>
                        </Tooltip>
                      </TableCell>

                      <TableCell key={del.id} align={del.align}>
                        
                        <IconButton onClick={(event) => handleCopy(event)} disabled={selectRow !== row}><MoreVertOutlinedIcon /></IconButton>
                        
                      </TableCell>

                    </TableRow>
                  );
                })}

            </TableBody>

          </Table>

        </TableContainer>

        <Menu
            id="basic-menu"
            anchorEl={menuCopy}
            open={openCopyMenu}
            onClose={handleCloseMenu}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={() => handleCopyOriginal('success')}>Copy Original</MenuItem>
            <MenuItem onClick={() => handleCopyGenerated('success')} disabled={enable}>Copy AI Generated</MenuItem>
        </Menu>

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

export default MDTableGridTrack