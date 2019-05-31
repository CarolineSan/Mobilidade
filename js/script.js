// Desabilita envio de formulário se tiver campo Obrigatório vazio
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // pega os formulários que precisam de validação
    var forms = document.getElementsByClassName('needs-validation');
    // Loop pelos formulários para evitar o envio
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

function openTab(tabName, indicator) {
  var content = document.getElementById(tabName);
  var t = document.getElementById(indicator);

  if (content.style.display === "block") {
      content.style.display = "none";
      t.innerHTML = "+";
      t.style.fontSize = "20px";
    } else {
      content.style.display = "block";
      t.innerHTML = "-";
      t.style.fontSize = "30px";
    }
}

// Desabilita input quando selecionado a opção Todos
function checkTodos(put, box) {
  var input = document.getElementById(put);
  var checkbox = document.getElementById(box);
  if(checkbox.checked == true) {
    input.disabled = !this.checked;
  } else {
    input.disabled = this.checked;
  }
}
