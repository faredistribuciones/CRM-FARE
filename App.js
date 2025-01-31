import React, { useEffect, useState } from 'react';
import { getDataFromSheet } from './googleSheetsAPI';
import { Container, Typography, List, ListItem } from '@mui/material';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const sheetData = await getDataFromSheet();
      setData(sheetData);
      console.log(sheetData); // Muestra los datos de la hoja en la consola
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        CRM Vendedores
      </Typography>
      <List>
        {data.map((row, index) => (
          <ListItem key={index}>{row.join(' - ')}</ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;
