// Navegación de pestañas
function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(sectionId).classList.add('active');
    event.target.classList.add('active');

    if (sectionId === 'simulador') updateSimulation();
}

// Simulador HTTP
function updateSimulation() {
    const method = document.getElementById('sim-method').value;
    const format = document.getElementById('sim-format').value;
    
    const reqBox = document.getElementById('request-code');
    const resBox = document.getElementById('response-code');

    const mime = format === 'XML' ? 'application/xml' : 'application/json';

    let requestText = `${method} /api/alumnos HTTP/1.1\nHost: api.educa.es\nContent-Type: ${mime}\n\n`;
    let responseText = `HTTP/1.1 200 OK\nContent-Type: ${mime}\n\n`;

    if (method === 'POST') {
        if (format === 'XML') {
            requestText += `<alumno>\n  <nombre>Juan</nombre>\n</alumno>`;
            responseText += `<respuesta>\n  <estado>Creado</estado>\n  <id>101</id>\n</respuesta>`;
        } else {
            requestText += `{\n  "nombre": "Juan"\n}`;
            responseText += `{\n  "estado": "Creado",\n  "id": 101\n}`;
        }
    } else {
        requestText += `(Sin cuerpo en petición GET)`;
        if (format === 'XML') {
            responseText += `<alumnos>\n  <alumno id="1">Juan</alumno>\n</alumnos>`;
        } else {
            responseText += `[\n  { "id": 1, "nombre": "Juan" }\n]`;
        }
    }

    reqBox.textContent = requestText;
    resBox.textContent = responseText;
}

// Preguntas del Cuestionario
const questions = [
    {
        q: "¿Qué método HTTP se recomienda para solicitar información sin modificar datos?",
        options: ["POST", "GET", "PUT", "DELETE"],
        correct: 1
    },
    {
        q: "¿Qué cabecera (Header) indica que el contenido enviado es un archivo XML?",
        options: ["Content-Type: text/html", "Content-Type: application/json", "Content-Type: application/xml", "Accept: text/plain"],
        correct: 2
    },
    {
        q: "¿Cuál de los siguientes formatos se considera más ligero para APIs REST modernas?",
        options: ["XML", "HTML", "JSON", "CSV"],
        correct: 2
    }
];

let currentQ = 0;

function loadQuestion() {
    const qData = questions[currentQ];
    document.getElementById('question-text').textContent = qData.q;
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('next-btn').style.display = 'none';

    qData.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(idx);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIdx) {
    const feedback = document.getElementById('feedback');
    const correctIdx = questions[currentQ].correct;

    if (selectedIdx === correctIdx) {
        feedback.textContent = "¡Correcto! 🎉";
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = "Incorrecto. Inténtalo de nuevo.";
        feedback.className = "feedback incorrect";
    }
    
    document.getElementById('next-btn').style.display = 'inline-block';
}

function nextQuestion() {
    currentQ = (currentQ + 1) % questions.length;
    loadQuestion();
}

// Inicializar el quiz
loadQuestion();