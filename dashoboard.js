const colors = ['#8b5e3c','#a8744f','#c89b6a','#6b4a36','#d2b48c'];

// GÊNERO (BARRAS)
new Chart(document.getElementById('genero'),{
  type:'bar',
  data:{
    labels:['Ficção','Romance','Fantasia','Terror','Outros'],
    datasets:[{
      data:[37,24,16,13,10],
      backgroundColor:colors
    }]
  },
  options:{
    plugins:{legend:{display:false}},
    scales:{y:{beginAtZero:true}}
  }
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