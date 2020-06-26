
function getRequest() {
    console.log('Carregou')
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            mountPosts(response.data)
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .then(function () {
        // always executed
        });
  
}

function mountPosts(data) {
    var postItem = ""

    data.forEach(element => {
        postItem += `<div>
                        <h4>Título</h4>
                        <h2>${element.title}</h2>
                        <h5>Descricao</h5>
                        <p>${element.body}</p>
                        <br/>
                    </div>`
    });


    document.getElementById('dataList').innerHTML = postItem;
}

function postData(titulo, descricao) {
    
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: titulo,
        body: descricao
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
