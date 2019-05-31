// Abre opções de acordo com o público alvo selecionado
$(document).ready(function() {
  $('input[name=alvo]:radio').click(function() {
    if($(this).val()=="0") {
        $('#interno,#externo').show();
    } else if($(this).val()=="1") {
      $('#interno').show();
      $('#externo').hide();
    } else {
      $('#interno').hide();
      $('#externo').show();
    }
  });
});

// Abre opções de acordo com o tipo de conteúdo selecionado
$(document).ready(function() {
  $('input[name=tipo]:radio').click(function() {
    if($(this).val()=="0") {
        $('#texto,#midias').show();
        $('#quiz,#pesquisa').hide();
    } else if($(this).val()=="1") {
      $('#texto,#midias,#quiz').hide();
      $('#pesquisa').show();
    } else if($(this).val()=="2") {
      $('#texto,#midias,#pesquisa').hide();
      $('#quiz').show();
    }
  });
});

//Exibe conteúdo Mini-Pesquisa de acordo com tipo de pergunta
$(document).ready(function() {
  $('input[name=tipoPergunta]:radio').click(function() {
    if($(this).val()=="0") {
        $('#respostasP').show();
    } else {
      $('#respostasP').hide();
    }
  });
});

// Abre árvore das Diretorias selecionadas
var arrayDiretoria = [];
function optionCheckDiretoria(){
        var arr = [];
        var option = document.getElementById("diretoria").getElementsByTagName("option");
        for(var i=0;i<option.length;i++){
              if (option[i].selected){
                arr.push(option[i].value);
          }
        }
        arrayDiretoria = arr;
        //cuspindo os dados para o html
        var area = document.getElementById('area');
        area.innerHTML = "";
        for (var i=0; i < arrayDiretoria.length; i++) {

          area.insertAdjacentHTML('beforeend',
          '<li onclick="abreSub(this);"><i class="far fa-plus-square"></i>' + arrayDiretoria[i] + '</li>' +
          '<ul class="sub-arvore" style="display: none;">' +
            '<li>Gerência 1</li>' +
            '<li>Gerência 2</li>' +
            '<li>Gerência 3</li>' +
            '<li>Gerência 4</li>' +
            '<li>Gerência 5</li>' +
          '</ul>');
        }
}

//Editor WYSIWYG
$(document).ready(function() {
$('#artigo').summernote({
      lang: 'pt-br',
      height: 350,
      toolbar: [
            ['edit',['undo','redo']],
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['textsize', ['fontsize']],
            ['alignment', ['ul', 'ol']]
        ]
    });
});

// EXIBIR IMAGEM UPLOAD
function exibirImg(input){
  if (input.files && input.files[0]) {
    var galeria = document.getElementById("galeria");
    var reader = new FileReader();

    reader.onload = function (e) {
        galeria.insertAdjacentHTML('beforeend',
        '<div class="item-galeria">' +
        '<img src="' + e.target.result + '" onclick="abreModalImagem(this);" />' +
        '<button type="button" class="btn btn-danger btn-block" onclick="deleteImg(this);"><i class="fas fa-trash-alt"></i> Deletar</button>' +
        '</div>');
    };

    reader.readAsDataURL(input.files[0]);
  }
}

//DELETAR IMAGEM
function deleteImg (button) {
  var div = button.parentNode;
  div.parentNode.removeChild(div);
}

//DELETAR TODAS AS IMAGENS
function deleteAllImg () {
  var div = document.getElementById("galeria");
  div.innerHTML = "";
}

//MODAL IMAGEM
function abreModalImagem(img){
  // Get the modal
  var modal = document.getElementById('modal-img');
  var modalImg = document.getElementById("img-modal");

  modal.style.display = "block";
  modalImg.src = img.src;

  // Get the <span> element that closes the modal
  var span = document.getElementById("close");

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
}

//EXIBIR VÍDEO UPLOAD PC
function exibirVideoPc(input) {
  if(input.files.length > 0) {
    var file = input.files[0];
    var blobURL = URL.createObjectURL(file);

    document.getElementById("embed-video").innerHTML = '<video width="480" height="240" controls controlsList="nodownload">'
     +'<source src="'+ blobURL +'" id="video_here">'
     +'Seu navegador não suporta vídeo HTML5.</video>';

    document.querySelector("video").play();

    document.getElementById("btn-video").style.display = "none";
    document.getElementById("video-delete").style.display = "block";
  }
}

function deleteVideoInput() {
  document.getElementById("vid").value = "";
  document.getElementById("embed-video").innerHTML = "Não há arquivo selecionado. Selecionar arquivo...";
  document.getElementById("btn-video").style.display = "block";
  document.getElementById("video-delete").style.display = "none";
}

//FUNÇÃO EXIBIR NOME ARQUIVO SELECIONADO
function exibirNomeArquivo(input) {
  if(input.files.length > 0) {
    var span = document.getElementById("nome-arquivo");
    var nome = input.files[0].name;
    span.innerHTML = nome;
    document.getElementById("btn-file").style.display = "none";
    document.getElementById("file-delete").style.display = "block";
  }
}

function deleteFileInput() {
  document.getElementById("file").value = "";
  document.getElementById("nome-arquivo").innerHTML = "Não há arquivo selecionado. Selecionar arquivo...";
  document.getElementById("btn-file").style.display = "block";
  document.getElementById("file-delete").style.display = "none";
}

//REPRODUZIR ÁUDIO UPLOAD PC
function previewAudio(input) {
  if(input.files.length > 0) {
    var file = input.files[0];
    var blobURL = URL.createObjectURL(file);

    document.getElementById("embed-audio").innerHTML = '<audio id="audioplayer" controls controlsList="nodownload">' +
      '<source src="' + blobURL + '" type="audio/mp4" />' +
    '</audio>';

    document.getElementById("btn-audio").style.display = "none";
    document.getElementById("audio-delete").style.display = "block";
  }
}

function deleteAudioInput() {
  document.getElementById("audio-file").value = "";
  document.getElementById("embed-audio").innerHTML = "Não há arquivo selecionado. Selecionar arquivo...";
  document.getElementById("audio-delete").style.display = "none";
  document.getElementById("btn-audio").style.display = "block";
}

var rp = 2
function addRespostaP() {
  var div = document.getElementById("respostasP");
  rp++;
  div.insertAdjacentHTML('beforeend',
  '<div id="resp' + rp + 'pergunta">' +
  '<div class="input-group mt-2">' +
    '<input type="text" class="form-control" name="resp' + rp + 'pergunta" placeholder="Resposta ' + rp + '" required>' +
  '</div>' +
  '</div>');
}

function removeRespostaP() {
  var div = document.getElementById("resp" + rp + "pergunta");
  div.parentNode.removeChild(div);
  rp--;
}

var rq = 2;
function addRespostaQ() {
  var div = document.getElementById("respostasQ");
  rq++;
  div.insertAdjacentHTML('beforeend',
    '<div id="resp' + rq + 'quiz">' +
    '<div class="input-group mt-2">' +
      '<div class="input-group-prepend">' +
        '<div class="input-group-text">' +
          '<input type="radio" name="correto">' +
        '</div>' +
      '</div>' +
      '<input type="text" class="form-control" name="resp' + rq + 'quiz" placeholder="Resposta ' + rq + '" required>' +
    '</div>' +
    '</div>');

}

function removeRespostaQ() {
  var div = document.getElementById("resp" + rq + "quiz");
  div.parentNode.removeChild(div);
  rq--;

}

function abreSub(li){
  var sub = li.nextElementSibling;
  var i = li.children[0];
  if(sub != null) {
    if (sub.value != 0) {
      if (sub.style.display == "none") {
        sub.style.display = "block";
        i.classList.remove("fa-plus-square");
        i.classList.add("fa-minus-square");
      } else {
        sub.style.display = "none";
        i.classList.remove("fa-minus-square");
        i.classList.add("fa-plus-square");
      }
    } else {
      if (i.classList.contains("fa-plus-square")) {
        i.classList.remove("fa-plus-square");
        i.classList.add("fa-minus-square");
      } else {
        i.classList.remove("fa-minus-square");
        i.classList.add("fa-plus-square");
      }
    }
  } else {
    if (i.classList.contains("fa-plus-square")) {
      i.classList.remove("fa-plus-square");
      i.classList.add("fa-minus-square");
    } else {
      i.classList.remove("fa-minus-square");
      i.classList.add("fa-plus-square");
    }
  }
}

window.onload = function () {
  var limenu = document.getElementById("menu").getElementsByTagName("li");
  for (var li of limenu) {
      var sub = li.nextElementSibling;
      var i = li.children[0];
      if(sub == null || sub.value == 0) {
        i.style.color = "grey";
      }
  }
}

//LIMITE CARACATERES
$(document).on("input", "#titulo", function () {
    var caracteresDigitados = $(this).val().length;

    $(".crt-titulo").text(caracteresDigitados + "/200");
});
$(document).on("input", "#desc", function () {
    var caracteresDigitados = $(this).val().length;

    $(".crt-desc").text(caracteresDigitados + "/500");
});
$(document).on("input", "#chave", function () {
    var caracteresDigitados = $(this).val().length;

    $(".crt-chave").text(caracteresDigitados + "/200");
});

//Drag and Drop Itens da Lista de Mídia
$(document).ready(function() {
  $( function() {
    $( ".list-midia" ).sortable();
    $( ".list-midia" ).disableSelection();
  } );
});
