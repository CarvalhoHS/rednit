
document.getElementById("submit-button").addEventListener("click", calculateResult);

function calculateResult() {
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
        q3: document.querySelector('input[name="q3"]:checked').value,
        q4: document.querySelector('input[name="q4"]:checked').value
    };

    let result = "";


    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `Pontuação: de 3`;

    if (answers.q1 === "a" ) {
        if(answers.q2 === "a"){
            coreDisplay.textContent ="Um piquenique no parque das nações com: suco, bolo de cenoura, empadas"
        }else if (answers.q2 === "b"){
            scoreDisplay.textContent ="Um piquenique no parque das nações com: um bom vinho, queijos e frutas";
        }else if (answers.q2 === "c"){
            scoreDisplay.textContent ="Um piquenique no parque das nações com: Coquinha de vidro, sanduiches naturais e pastel";
        }else {
            scoreDisplay.textContent ="Um piquenique no parque das nações com: um bom vinho, queijos e frutas";
        }
    } else if (answers.q1 === "b") {
        if(answers.q2 === "a"){
            scoreDisplay.textContent ="Gostaria de te convidar pra gente ir no restaurante Forneria Casaluce em criciuma no domingo, pela estética do lugar me parece que combina muito com as suas escolhas";
        }else if (answers.q2 === "b"){
            scoreDisplay.textContent ="Gostaria de te convidar pra gente ir no restaurante Forno D' Italia Pizzeria em criciuma no domingo, é um dos melhores restaurantes de criciuma de acordo com o tripadvisor e adoraria conhecer com você";
        }else if (answers.q2 === "c"){
            scoreDisplay.textContent ="Gostaria de te convidar pra gente ir na Hamburgueria 1335 em criciuma no domingo, assim como você escolheu COQUINHA GELADA essa é a melhor opção procurei as hambuguerias de criciuma e essa é a mais recomendada";
        }
    } else if (answers.q1 === "c"){
        if(answers.q2 === "a"){
            scoreDisplay.textContent ="eu te buscar em criciuma e irmos até o arroio passar uma tarde com um piquinique";
        }else if (answers.q2 === "b"){
            scoreDisplay.textContent ="eu te preparar um jantar aqui em casa, não irei dar spoiler da receita mas acho que você vai gostar";
        }else if (answers.q2 === "c"){
            scoreDisplay.textContent ="Maratonarmos alguma coisa juntos, filmes do adam sandler, reality shows de heterotops, tudo com direito a salgadinhos e pipoca durante a tarde";
        }else {
            scoreDisplay.textContent ="preparar para você um jantar aqui em casa, não irei dar spoiler da receita mas acho que você vai gostar";
        }
    } else if (answers.q1 ==="d"){
        if(answers.q2 === "d"){
            scoreDisplay.textContent ="Não Sei";
        }else if (answers.q4 === "d"){
            scoreDisplay.textContent ="é serio??? você teria essa cara de pau de simplesmente me operar? depois de todos esses 7 dias conversando.... eu esperava mais";
        }else if (answers.q4 === "b"){
            scoreDisplay.textContent ="A procura do antitodo só pra poder vender pra insdustria farmaceutica, não sabia que tava intessado na proxima sucessora do ELLON MUSK";
        }else if (answers.q4 === "a"){
            scoreDisplay.textContent ="Eu não sei também o que me deu, de verdade tu só me deu boa noite e me veio a ideia de criar isso daqui, ai fui pro PC programar, espero que tenha ficado bom";
        }else if (answers.q5 === "d"){
            scoreDisplay.textContent ="SE COMUNICAR COM FRUTA, DE TODAS AS COISAS DE HIPONGA DE PESSOA QUE FAZ BIOLOGIA ESSA DEVE SER A PIOR DELAS, TU ACHA QUE A MAÇÃ VAI TE RESPONDER O QUE???";
        }else if (answers.q3 === "b"){
            scoreDisplay.textContent ="Pior que esses parques de trampolim parecem interessantes, mas tem muito cara de moda passageira que todo mundo vai cansar em 2 meses";
        }else if (answers.q5 === "a"){
            scoreDisplay.textContent ="eu pensei nisso no caso pra nunca mais ter que pisar em sujeira no chão ou então escapar da areia quente quando estiver na praia, até que é util";
        }else if (answers.q5 === "c"){
            scoreDisplay.textContent ="Carregando....";
        }else{
            scoreDisplay.textContent ="quando você escolhe a OPÇÃO D na primeira pergunta, tem chance de cair em varias respostas unicas! boa sorte em achar elas!"
        };
    }

    const quizContainer = document.querySelector(".quiz-container");
    const resultContainer = document.querySelector(".result-container");
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    // Você pode adicionar mais resultados e lógica aqui
}
