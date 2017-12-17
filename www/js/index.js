/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = {
 modelo: {'notas': [{'titulo': 'Comprar pan', 'contenido': 'Que sea integral'}]},
 inicio: function () {
 this.iniciaBotones();
 
 this.refrescarLista();
 },
 iniciaBotones: function () {
    var salvar = document.querySelector('#salvar');
    var anadir = document.querySelector('#anadir');
    anadir.addEventListener('click', this.mostrarEditor, false);
    salvar.addEventListener('click', this.salvarNota, false);
 },
 mostrarEditor: function () {
    document.getElementById('titulo').value = "";
    document.getElementById('comentario').value = "";
    document.getElementById("note-editor").style.display = "block";
    document.getElementById('titulo').focus();
 },
 salvarNota: function () {
    app.construirNota();
    app.ocultarEditor();
    app.refrescarLista();
 
 },
 construirNota: function () {
    var notas = app.modelo.notas;
    notas.push({"titulo": app.extraerTitulo(), "contenido": app.extraerComentario()});
 },
 extraerTitulo: function () {
 return document.getElementById('titulo').value;
 },
 extraerComentario: function () {
 return document.getElementById('comentario').value;
 },
 ocultarEditor: function () {
    document.getElementById("note-editor").style.display = "none";
 },
 refrescarLista: function () {
    var div = document.getElementById('notes-list');
    div.innerHTML = this.anadirNotasALista();
 },
 anadirNotasALista: function () {
    var notas = this.modelo.notas;
    var notasDivs = '';
    for (var i in notas) {
    var titulo = notas[i].titulo;
    notasDivs = notasDivs + this.anadirNota(i, titulo);
 }
 return notasDivs;
  },
 anadirNota: function (id, titulo) {
    return "<div class='note-item' id='notas[" + id + "]'>" + titulo + "</div>";
 },
}
if ('addEventListener' in document) {
    document.addEventListener('deviceready', function () {
    app.inicio();
    }, false);
}