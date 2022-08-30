
/**
 * @function windowLoad 
 * ao abrir a janela, o jogo inicializa, onde é apresentado a
 * janela modal de tutoral do jogo
 */

const windowLoad = () => {
    const infoPlayer = document.getElementById('steps')
    addEventListener('load', function(){
        
        root.innerHTML = (`
            <!-- Modal tutorial -->
            <div class="content-modal">
                <div class="modal-spanded animation-open">
                    <div class="modal-header">
                        <span>
                            <h4>Tutorial game</h4>
                            <a href="#" id="closed-modal" class="btn-closed">X</a>
                        </span>
                        <hr>
                    </div>
                    <div class="modal-elements" id="modal-steps">
                        <div class="content-items" id="steps">
                            <div class="steps-elements">
                                <h2>Seja-bem vindo ao shot game</h2>
                                <p>Nesse jogo de prática de tiro, você terá como desafio apenas acertar alvos que estão se movimentando a todo momento.<p>
                                <p>Mas lembre-se não somente acertar os alvos, o jogo funciona para impulsionar suas tecnicas de tiro, em jogos FPS, então</p>
                                <p>algumas vezes você tera que usar apertas algumas teclas em seu teclado para acompanhar tudo o que acontece. Caso não tenha entendido,
                                fique tranquilo, nós vamos ajudas você vai ter nossa ajuda a todo momento no jogo. Vamos iniciar os ensinamentos sobre como funciona o jogo.</p>
    
                            </div>

                            <div class="steps-elements">
                                <h2>Veja na teoria como funciona</h2>
                                <p>Bem simples né? A ideia é mostrar criar um ambiente semelhante a um mapa de FPS, onde diversos inimigos aparecem para você. Imagine
                                que cada alvo é um HEAD SHOT, e conforme você se desenvolve vamos aumentando o ritmo.</p>
                                <img src="src/assets/vid/exemple.gif" alt="" width="100%" height="100%">
                                <hr>
                            </div>

                        </div>
                        <div class="steps">
                        
                            <div class="next">
                                <a href="#previous" id="" onclick="moveNext(-1015, 0)"><<</a>
                                <a href="#next" id="" onclick="movePrevious(1016, 0)">>></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Modal tutorial -->
        `)

    })

    
}

function moveNext(x, y){
    const elementMove = document.getElementById('steps')
    elementMove.scrollBy(x, y);
}

function movePrevious(x, y){
    const elementMove = document.getElementById('steps')

    elementMove.scrollBy(x, y);
}


windowLoad()