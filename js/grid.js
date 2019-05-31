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
  var dados = linha.getElementsByTagName("td");
  var buttons = document.getElementsByClassName('btn-success');

  if(linha.classList.contains("selecionado")) {
    linha.classList.remove("selecionado");
    buttons[0].disabled=false;
    buttons[1].disabled=true;
    buttons[2].disabled=true;
    buttons[3].disabled=true;
    buttons[4].disabled=true;
  } else {
  if(!multiplos){
  	var linhas = linha.parentElement.getElementsByTagName("tr");
        for(var i = 0; i < linhas.length; i++){
           var linha_ = linhas[i];
           linha_.classList.remove("selecionado");
        }
  }
  linha.classList.toggle("selecionado");
  if (dados[3].innerHTML == "Sim") {
    buttons[0].disabled=true;
    buttons[1].disabled=true;
    buttons[2].disabled=false;
    buttons[3].disabled=false;
    buttons[4].disabled=false;
  }
  if (dados[3].innerHTML == "Não") {
    buttons[0].disabled=true;
    buttons[1].disabled=false;
    buttons[2].disabled=true;
    buttons[3].disabled=false;
    buttons[4].disabled=false;
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
