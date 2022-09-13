const base_url = "https://viacep.com.br/ws/:cep/json/";

const pesquisar = document.querySelector("#pesquisa");

const cep = document.querySelector("#cep");
const end = document.querySelector("#end");

pesquisar.addEventListener("click", () => {
  aa();
});

function aa() {
  var url = base_url.replace(":cep", cep.value);

  console.log("test");
  // fetch(url)
  //   .then(function (res) {
  //     res.json().then(function (res2) {
  //       end.innerHTML = JSON.stringify(res2);
  //     });
  //   })
  //   .catch(function () {
  //     alert("erro");
  //   });

  const promise = fetch(url); //retorna uma promessa

  console.log("identificador", promise);

  promise.then((response) => {
    // executa quando a promessa estiver pronta
    const promise2 = response.json();
    console.log("identificador2", promise2);
    promise2.then((response2) => {
      // esperando para poder transforma em json
      //o json ja esta pronto
      end.innerHTML = JSON.stringify(response2);
    });
  });
}

async function a() {
  var url = base_url.replace(":cep", cep.value);
  const response = await fetch(url);

  const dados = await response.json();

  console.log(dados);

  end.innerHTML = JSON.stringify(dados);
}
