const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const dataPath = path.join(__dirname, '../data.json');
const dummyDataUrl = 'https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json';

// Initialization script to fetch and store dummy data
const initializeData = async () => {
  try {//checking if file exist and not empty
    if (!fs.existsSync(dataPath) || fs.readFileSync(dataPath, 'utf-8').length === 0) {
      const response = await axios.get(dummyDataUrl);
      //writing the data to file
      fs.writeFileSync(dataPath, JSON.stringify(response.data, null, 2));
      console.log('Dummy data initialized.');
    }
  } catch (error) {
    console.error('Error fetching dummy data:', error);
  }
};
//run the script
initializeData();

module.exports = router;
