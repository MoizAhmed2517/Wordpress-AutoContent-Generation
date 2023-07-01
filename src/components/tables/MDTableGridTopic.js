import * as React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';

// Material UI Icons
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

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
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

const columns = [
  { id: 'id', label: "ID", minWidth: 20 },
  { id: 'topic', label: 'Topic Name', minWidth: 50 },
  { id: 'descr', label: 'Description', width: 250 },
];

const del = {
    id: 'copy',
    label: 'Copy',
    minWidth: 17,
    align: 'center',
}

const edit = {
    id: 'gen',
    label: 'Generate',
    minWidth: 17,
    align: 'center',
}


function createData(id, topic, descr ) {
  return { id, topic, descr };
}

let rows = [
    // createData(1, 'Cryptocurrency Regulation', 'With the increasing popularity of cryptocurrencies like Bitcoin and Ethereum, governments around the world are grappling with how to regulate this new form of digital currency to protect investors and ensure financial stability.'),
    // createData(2, 'Artificial Intelligence in Healthcare', 'AI is revolutionizing the healthcare industry by aiding in disease diagnosis, drug discovery, and patient monitoring. It has the potential to improve patient outcomes and reduce healthcare costs.'),
    // createData(3, 'Climate Change Activism', 'The urgency of climate change has spurred a global movement for action. Activists are calling for sustainable practices, renewable energy adoption, and policy changes to combat the environmental crisis.'),
    // createData(4, 'Virtual Reality Gaming', 'Virtual reality (VR) gaming is gaining momentum with immersive experiences and realistic graphics. It offers gamers a whole new level of engagement and interactivity.'),
    // createData(5, 'Remote Work Revolution', 'The COVID-19 pandemic has accelerated the adoption of remote work globally. Companies are embracing remote work policies, leading to changes in work dynamics, productivity, and work-life balance.'),
    // createData(6, 'Space Exploration', 'Private space companies like SpaceX and Blue Origin are pushing the boundaries of space exploration. With missions to Mars, lunar landings, and satellite launches, humanity\'s presence in space is rapidly expanding.'),
    // createData(7, 'Mental Health Awareness', 'Increasing awareness about mental health issues has prompted conversations and initiatives aimed at reducing stigma, providing support, and improving access to mental healthcare services.'),
    // createData(8, 'Sustainable Fashion', 'Consumers are becoming more conscious of the environmental impact of fast fashion. Sustainable fashion focuses on ethical sourcing, eco-friendly production methods, and promoting fair labor practices.'),
    // createData(9, 'Plant-Based and Alternative Protein', 'The rise of plant-based diets and alternative protein sources, such as lab-grown meat, is driven by concerns about animal welfare, health benefits, and sustainability.'),
    // createData(10, '5G Technology', 'The deployment of 5G networks promises faster speeds, reduced latency, and enhanced connectivity, paving the way for advancements in autonomous vehicles, Internet of Things (IoT), and smart cities.'),
    // createData(11, 'Electric Vehicles', 'The shift towards electric vehicles (EVs) is gaining traction as a means to reduce carbon emissions and combat climate change. EVs offer greater energy efficiency and lower environmental impact compared to traditional gasoline-powered cars.'),
    // createData(12, 'Online Learning and EdTech', 'The pandemic forced a rapid shift to online learning, leading to the growth of educational technology platforms. These platforms offer personalized learning experiences, accessible education, and skill development opportunities.'),
    // createData(13, 'Influencer Culture and Brand Partnerships', 'Social media influencers have become powerful marketing channels, leading to collaborations between brands and popular influencers to reach wider audiences and promote products or services.'),
    // createData(14, 'Biohacking and Personal Optimization', 'Biohacking involves using science, technology, and lifestyle modifications to optimize physical and mental performance. It encompasses practices such as nootropics, intermittent fasting, and wearables to track health data.'),
    // createData(15, 'Drone Technology', 'Drones are being utilized across various industries, including delivery services, aerial photography, agriculture, and disaster management. Their versatility and efficiency make them a trending topic in technology and innovation.')
];

const MDTableGridTopic = (props) => {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [selectRow, setSelectedRow]   = React.useState(null);
  const [isloading, setIsLoading] = React.useState([]);
  const [enable, setEnable] = React.useState(true);
  const [color, setColor] = React.useState("primary");
  const [generatedData, setGeneratedData] = React.useState('')

  React.useMemo(() => {
    rows = []
    Object.entries(props.context).map((item, index) => {
      rows.push(createData(index+1, item[0], item[1]))
    })
  },[props.context]);

  const { enqueueSnackbar } = useSnackbar();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleCopy = (variant) => {
    navigator.clipboard.writeText(generatedData)
      .then(() => {
        enqueueSnackbar('Content Copied on Clipboard', { variant });
      })
      .catch((error) => {
        console.log('Error copying text to clipboard', error);
      });
  }

  const handleGenerate = async (row, variant="error") => {

      const item = {
        prompt: row.topic
      }

      setIsLoading([...isloading, row.id]);
      setEnable(false);
      try {
        const res = await axios.post("http://mujtabatasneem.pythonanywhere.com/api/generate-topic-content/", item);
        setSelectedRow(row)
        setGeneratedData(res.data);
        setIsLoading((prevLoading) => prevLoading.filter((id) => id !== row.id));
      } catch (error) {
        enqueueSnackbar('Content Copied on Clipboard', { variant });
        setIsLoading((prevLoading) => prevLoading.filter((id) => id !== row.id));
      }
      // setTimeout(() => {
          
      //     setColor('primary');
      // }, 5000);
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
                        <IconButton onClick={() => handleGenerate(row)}>
                            {isloading.includes(row.id) ? <CircularProgress color={color}  /> : <ArticleOutlinedIcon />}
                        </IconButton>
                      </TableCell>

                      <TableCell key={del.id} align={del.align}>
                        <IconButton onClick={() => handleCopy('success')} disabled={selectRow !== row}><ContentCopyOutlinedIcon /></IconButton>
                      </TableCell>

                    </TableRow>
                  );
                })}

            </TableBody>

          </Table>

        </TableContainer>

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

export default MDTableGridTopic