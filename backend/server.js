const express = require('express');
const cors = require('cors');
const xlsx = require('xlsx');
const app = express();
const port = 5000;

app.use(cors());

// Function to read Excel file and convert to JSON
const readExcel = (filePath) => {
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  return xlsx.utils.sheet_to_json(worksheet);
};

// Endpoint to get restaurants data
app.get('/api/restaurants', (req, res) => {
  const data = readExcel('restaurants.xlsx');
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
