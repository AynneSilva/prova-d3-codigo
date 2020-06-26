
function getRequest() {
    console.log('Carregou')
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
        // handle success
        console.log(response);
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .then(function () {
        // always executed
        });
  
}

function postData(titulo, descricao) {
    
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        titulo: titulo,
        descricao: descricao
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
