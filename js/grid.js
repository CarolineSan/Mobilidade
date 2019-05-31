//Seleciona item Tabela Grid de Publicaçõe
function seleciona(tr) {
  var tbody = document.getElementById('publicacoes').getElementsByTagName('tr');

  for(var i = 0; i < tbody.length; i++){
  	var linha = tbody[i];
    if (linha == tr) {
      //Adicionar ao atual
  		selLinha(linha, false); //Selecione apenas um
      //selLinha(this, true); //Selecione quantos quiser
    }
  }
}

function selLinha(linha, multiplos){
  if(linha.classList.contains("selecionado")) {
    linha.classList.remove("selecionado");
  } else {
  if(!multiplos){
  	var linhas = linha.parentElement.getElementsByTagName("tr");
        for(var i = 0; i < linhas.length; i++){
           var linha_ = linhas[i];
           linha_.classList.remove("selecionado");
        }
  }
  linha.classList.toggle("selecionado");
  }
}

//Estiliza cores de acordo com o status
window.onload = function() {
  var tabela = document.getElementById('publicacoes').getElementsByTagName('tr');
  for(var i = 0; i < tabela.length; i++){
  	var linha = tabela[i];
    var dados = linha.getElementsByTagName("td");
    if (dados[3].innerHTML == "Publicado") {
      dados[3].style.color = "#10b246";
    }
    if (dados[3].innerHTML == "Cancelado") {
      dados[3].style.color = "red";
    }
  }
}

//BUSCA PUBLICAÇÕES INPUT
$(document).ready(function(){
  $("#inputBusca").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#publicacoes tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
