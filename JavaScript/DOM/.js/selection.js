function selectById() {
    const titulo = document.getElementById("titulo"); // seleciona o elemento com o id "titulo"
    console.log(titulo);
}

function selectByClass() {
    const titulo = document.getElementsByClassName("paragrafo"); // seleciona todos os elementos com a classe paragrafo
    console.log(titulo);
}

function selectByTag() {
    const titulo = document.getElementsByTagName("li"); // seleciona todos os elementos <li> ou pode ser qualquer tag
    console.log(titulo);
}

selectById();
selectByClass();
selectByTag();