const criarInput = document.getElementById('criarInput')
const root = document.getElementById('root')
let score = [];
const elementPlacar = document.getElementById('score')

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


const daoEffectsX = () => {
    addEventListener('click', function (event) {
        //score = 0;
        const clickER = document.getElementById('button-effects')
        if (event.target == clickER) {

            for (let i = 0; i < 50; i++) {

                const divGame = document.createElement('div')
                root.appendChild(divGame)
                divGame.classList.add('div-effects')
                divGame.id = i

            }


            clickER.classList.add('disabled')

            const controlEffects = setInterval(function () {

                let randomNumber = Math.floor(Math.random() * 50)

                const alvoSelected = document.getElementById(randomNumber)
                
                alvoSelected.classList.add('actived-alvo-x')
                const removeSelected = document.getElementById(randomNumber)

                addEventListener('click', (e) => {

                    if (e.target == document.getElementById(randomNumber)) {

                        score.push(100)
                        console.log(score)
                        let soma = 0;
                        for (let i = 0; i < score.length; i++) {
                            soma += score[i];
                        }

                        console.log(soma)
                        elementPlacar.innerHTML = 'Pontuação de shoting:' + soma

                    }

                })
                setInterval(function () {
                    removeSelected.classList.remove('actived-alvo-x')
                }, 1300)

            }, 1200)


        }
    })
}

const daoEffectsY = () => {
    addEventListener('click', function (event) {
        //score = 0;
        const clickER = document.getElementById('button-effects')
        if (event.target == clickER) {


            for (let i = 0; i < 50; i++) {

                const divGame = document.createElement('div')
                root.appendChild(divGame)
                divGame.classList.add('div-effects-y')
                //const idDiv = document.createTextNode(i)
                            //divGame.appendChild(idDiv)
                divGame.id = i

            }


            clickER.classList.add('disabled')

            const controlEffects = setInterval(function () {

                let randomNumber = Math.floor(Math.random() * 50)

                const alvoSelected = document.getElementById(randomNumber)
                
                alvoSelected.classList.add('actived-alvo-y')
                const removeSelected = document.getElementById(randomNumber)

                addEventListener('click', (e) => {

                    if (e.target == document.getElementById(randomNumber)) {

                        score.push(100)
                        console.log(score)
                        let soma = 0;
                        for (let i = 0; i < score.length; i++) {
                            soma += score[i];
                        }

                        console.log(soma)
                        elementPlacar.innerHTML = 'Pontuação de shoting:' + soma

                    }


                })
                setInterval(function () {
                    removeSelected.classList.remove('actived-alvo-y')
                }, 1400)

            }, 1300)


        }
    })
}


capturaClick()
daoEffectsX()
daoEffectsY()