const criarInput = document.getElementById('criarInput')
const root = document.getElementById('root')
let balls = 50
let score = [];
const elementPlacar = document.getElementById('score')



/**
 *  @function capturaClick 
 *  função determinada a capturar o click inicial do jog
 *  e inicializar os processos do lading page game
 *  chamando as outras funções subsequentes.
 */

const capturaClick = () => {
    addEventListener('click', function (event) {
        if (event.target == criarInput) {

            const button = document.createElement('button')
            const titleButtonAlert = document.createTextNode('Deseja iniciar o game!')
            button.appendChild(titleButtonAlert)
            button.id = "button-effects"
            button.classList.add('root-effects')
            root.appendChild(button)
            criarInput.classList.add('disabled')
        }
    })
}

/**
 * @function daoEffectsX
 * função de renderização dos alvos e elementos
 * do jogo sob o eixo x, todos os movimentos
 * em seu eixo ficam sob controle dessa função  
 */
const daoEffectsX = () => {
    addEventListener('click', function (event) {
        //score = 0;
        const clickER = document.getElementById('button-effects')
        if (event.target == clickER) {

            for (let i = 0; i < balls; i++) {

                const divGame = document.createElement('div')
                root.appendChild(divGame)
                divGame.classList.add('div-effects')
                divGame.id = i

            }


            clickER.classList.add('disabled')

            const controlEffects = setInterval(function () {

                let randomNumber = Math.floor(Math.random() * balls)

                const alvoSelected = document.getElementById(randomNumber)
                
                alvoSelected.classList.add('actived-alvo-x')
                const removeSelected = document.getElementById(randomNumber)

                addEventListener('click', (e) => {

                    if (e.target == document.getElementById(randomNumber)) {

                        score.push(100)
                        //console.log(score)
                        let soma = 0;
                        for (let i = 0; i < score.length; i++) {
                            soma += score[i];
                        }

                        //console.log(soma)
                        elementPlacar.innerHTML = 'Pontuação de shoting:' + soma

                    }

                })
                setInterval(function () {
                    removeSelected.classList.remove('actived-alvo-x')
                }, 1600)

            }, 1500)


        }
    })
}

/**
 * @function daoEffectsY 
 * função de renderização dos alvos e elementos
 * do jogo sob o eixo y, todos os movimentos
 * em seu eixo ficam sob controle dessa função  
 */

const daoEffectsY = () => {
    addEventListener('click', function (event) {
        //score = 0;
        const clickER = document.getElementById('button-effects')
        if (event.target == clickER) {


            for (let i = 0; i < balls; i++) {

                const divGame = document.createElement('div')
                root.appendChild(divGame)
                divGame.classList.add('div-effects-y')
                //const idDiv = document.createTextNode(i)
                            //divGame.appendChild(idDiv)
                divGame.id = i

            }


            clickER.classList.add('disabled')

            const controlEffects = setInterval(function () {

                let randomNumber = Math.floor(Math.random() * balls)

                const alvoSelected = document.getElementById(randomNumber)
                
                alvoSelected.classList.add('actived-alvo-y')
                const removeSelected = document.getElementById(randomNumber)

                addEventListener('click', (e) => {

                    if (e.target == document.getElementById(randomNumber)) {

                        score.push(100)
                        //console.log(score)
                        let soma = 0;
                        for (let i = 0; i < score.length; i++) {
                            soma += score[i];
                        }

                        //console.log(soma)
                        elementPlacar.innerHTML = 'Pontuação de shoting:' + soma

                    }


                })
                setInterval(function () {
                    removeSelected.classList.remove('actived-alvo-y')
                }, 1600)

            }, 1500)


        }
    })
}

/**
 * @function widthWindow
 * responsavel por identificar o tamanho da tela
 * e assim atribuir o número correto de alvos a 
 * serem renderizados por partida
 */

const widthWindow = () => {

    let width = window.screen.width;

    if(width < 600){
        balls = 20
    }

}


widthWindow()
capturaClick()
daoEffectsX()
daoEffectsY()