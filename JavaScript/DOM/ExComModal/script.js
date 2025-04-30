document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector("#modal");
    const abrir = document.querySelector("#abrirModal");
    const fechar = document.querySelector("#fecharModal");

    abrir.onclick = () => modal.style.display = "block";
    fechar.onclick = () => modal.style.display = "none";

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
