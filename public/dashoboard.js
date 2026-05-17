const colors = ['#8b5e3c','#a8744f','#c89b6a','#6b4a36','#d2b48c'];


function buscarTotalUsuarios() {

    console.log("KPI FOI CHAMADA");

    fetch("http://localhost:5000/usuarios/totalUsuarios")
        .then(res => res.json())
        .then(dados => {

            console.log("RESPOSTA KPI:", dados);

            document.querySelector("#kpiUsuarios h2").innerHTML =
                dados.totalUsuarios;

        });
}

document.addEventListener("DOMContentLoaded", buscarTotalUsuarios);

// GÊNERO (BARRAS)
fetch("http://localhost:5000/generos")

.then(function(resposta){

    return resposta.json();

})

.then(function(dados){

    let nomes = [];

    let quantidades = [];

    for(let i = 0; i < dados.length; i++){

        nomes.push(dados[i].genero);

        quantidades.push(dados[i].quantidade);

    }

    new Chart(document.getElementById('graficoGenero'),{
// tava genero nao graficogenero
        type:'bar',

        data:{

            labels: nomes,

            datasets:[{

                data: quantidades,

                backgroundColor: colors

            }]

        },

       options: {
  scales: {
    y: {
      ticks: {
        font: {
          size: 20
        }
      }
    },
    x: {
      ticks: {
        font: {
          size: 20
        }
      }
    }
  }
}

    });

});

// FREQUÊNCIA (HORIZONTAL)
new Chart(document.getElementById('freq'),{
  type:'bar',
  data:{
    labels:['Diária','Semanal','Mensal','Raramente'],
    datasets:[{
      data:[18,42,25,15],
      backgroundColor:colors
    }]
  },
  options:{
    indexAxis:'y',
    plugins:{legend:{display:false}},
    scales:{x:{beginAtZero:true}}
  }
});

// PÁGINAS (DOUGHNUT)
new Chart(document.getElementById('paginas'),{
  type:'doughnut',
  data:{
    labels:['200-400','100-200','400-600','600+'],
    datasets:[{
      data:[48,28,14,10],
      backgroundColor:colors
    }]
  }
});