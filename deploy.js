const axios = require('axios');

const accessToken = 'nfp_FsRjLrVFCugbutQog684LW8CFDCUknJLc1c4';
const siteId = '38e72bbb-12f1-49cd-be9f-176de8ffeccd';  // Gantikan dengan ID situs Anda

const deployUrl = `https://api.netlify.com/api/v1/sites/${siteId}/deploys`;

const main = async () => {
  try {
    const response = await axios.post(
      deployUrl,
      {},
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );

    console.log('Deploy initiated successfully:', response.data);
  } catch (error) {
    console.error('Error initiating deploy:', error.response ? error.response.data : error.message);
  }
};

main();
