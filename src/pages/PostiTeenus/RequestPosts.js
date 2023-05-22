const app = document.querySelector('#app');

fetch('http://localhost:8000')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log('Õnnestus!\n', data);
    app.innerHTML = `
      Eesnimi: ${data.eesnimi}<br>
      Perenimi: ${data.perenimi}<br>
      ${data.desc}
    `
  })
  .catch(function() {
    // handle the error
    console.log('Ei õnnestunud. Täitsa pekkis!');
  });