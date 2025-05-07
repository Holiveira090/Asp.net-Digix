class CustomModal {
    constructor() {
        this.modal = document.createElement('div'); // Cria o elemento div para o modal
        this.modal.className = 'modal-overlay';
        this.modal.innerHTML = `
            <div class="modal-content" style="background-color: white; border-radius: 8px">
                <div class="modal-header">
                    <h3 class="modal-title">Pessoas responsaveis</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    
                </div>
                <div class="modal-footer"></div>
            </div>
        `;
        // appendChild é um método que adiciona um elemento filho a um elemento pai
        document.body.appendChild(this.modal);
        this.modal.querySelector('.modal-close').addEventListener('click', () => this.hide()); // Adicionando um evento de clique ao botão de fechar do modal, que chama hide
    }

    show(title, body, buttons = []) { // metodo que mostra o modal
        this.modal.querySelector('.modal-title').textContent = title; // define o titulo do modal
        this.modal.querySelector('.modal-body').innerHTML = body; // define o conteudo do copo do moodal

        const footer = this.modal.querySelector('.modal-footer');
        footer.innerHTML = ''; // aqui to limpando o conteudo no rodape da pagina, da nova telinha que será criada

        buttons.forEach(btn => {
            const button = document.createElement("button"); // cria um novo modal
            button.className = `btn btn-${btn.type || 'secondary'}`;
            button.textContent = btn.text;
            button.addEventListener('click', () => { // vou colocar um evento no click desse modal
                if (btn.handler) btn.handler(); // se um manipulador de eventos for fornecido vou chama-lo
                if (btn.close !== false) this.hide(); // se close não for definido como false, chama o metodo hide para fechar o modal
            });
            footer.appendChild(button);
        });

        this.modal.classList.add(`active`); // adiciona a classe active ao modal para torna-lo visivel
        document.body.style.overflow = 'hidden'; // define o estilo de overflow do body como hidden para evitar rolagem de fundo
    }

    hide() { // método para esconder o modal
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}
