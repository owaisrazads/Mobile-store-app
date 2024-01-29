
// axios.get('https://v6.exchangerate-api.com/v6/8d1871f3346f291a82a32991/latest/USD')
//   .then((res) => {
//     const data = res.data;
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error("Error:", err.message); // Log the error message
//   });

fetch('https://v6.exchangerate-api.com/v6/8d1871f3346f291a82a32991/latest/USD')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

