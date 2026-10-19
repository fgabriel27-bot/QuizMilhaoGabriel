// ==========================================
// BANCO DE PERGUNTAS
// ==========================================
const perguntas = [
    // =========================
    // PORTUGUÊS
    // =========================
    {
        materia: "Português",
        pergunta: "Qual é o plural de 'cidadão'?",
        alternativas: [
            "Cidadões",
            "Cidadãos",
            "Cidadães",
            "Cidadans"
        ],
        correta: 1
    },
    {
        materia: "Português",
        pergunta: "Qual palavra é um substantivo?",
        alternativas: [
            "Bonito",
            "Correr",
            "Casa",
            "Rapidamente"
        ],
        correta: 2
    },
    {
        materia: "Português",
        pergunta: "Qual é o antônimo de 'alegre'?",
        alternativas: [
            "Feliz",
            "Animado",
            "Triste",
            "Divertido"
        ],
        correta: 2
    },
    {
        materia: "Português",
        pergunta: "Qual é o sinônimo de 'rápido'?",
        alternativas: [
            "Lento",
            "Veloz",
            "Fraco",
            "Pesado"
        ],
        correta: 1
    },
    {
        materia: "Português",
        pergunta: "Quantas sílabas possui a palavra 'computador'?",
        alternativas: [
            "2",
            "3",
            "4",
            "5"
        ],
        correta: 2
    },
    {
        materia: "Português",
        pergunta: "Qual destas palavras é um verbo?",
        alternativas: [
            "Escola",
            "Bonito",
            "Correr",
            "Azul"
        ],
        correta: 2
    },
    {
        materia: "Português",
        pergunta: "Qual é o aumentativo de 'casa'?",
        alternativas: [
            "Casinha",
            "Casarão",
            "Casebre",
            "Casita"
        ],
        correta: 1
    },
    {
        materia: "Português",
        pergunta: "Qual é o diminutivo de 'casa'?",
        alternativas: [
            "Casarão",
            "Caseiro",
            "Casinha",
            "Casão"
        ],
        correta: 2
    },
    {
        materia: "Português",
        pergunta: "Qual destas palavras está escrita corretamente?",
        alternativas: [
            "Excessão",
            "Exceção",
            "Eseção",
            "Exessão"
        ],
        correta: 1
    },
    {
        materia: "Português",
        pergunta: "Qual sinal é usado para indicar uma pergunta?",
        alternativas: [
            ".",
            ",",
            "!",
            "?"
        ],
        correta: 3
    },
    {
        materia: "Português",
        pergunta: "Quem escreveu 'Dom Casmurro'?",
        alternativas: [
            "Machado de Assis",
            "Monteiro Lobato",
            "Carlos Drummond",
            "José de Alencar"
        ],
        correta: 0
    },
    {
        materia: "Português",
        pergunta: "Qual destas palavras é um adjetivo?",
        alternativas: [
            "Correr",
            "Bonito",
            "Casa",
            "Rapidamente"
        ],
        correta: 1
    },
    {
        materia: "Português",
        pergunta: "Qual é o plural de 'animal'?",
        alternativas: [
            "Animais",
            "Animals",
            "Animalis",
            "Animalões"
        ],
        correta: 0
    },
    {
        materia: "Português",
        pergunta: "Qual palavra apresenta um encontro consonantal?",
        alternativas: [
            "Prato",
            "Avião",
            "Casa",
            "Ovo"
        ],
        correta: 0
    },
    {
        materia: "Português",
        pergunta: "Qual destas palavras é oxítona?",
        alternativas: [
            "Médico",
            "Lâmpada",
            "Café",
            "Árvore"
        ],
        correta: 2
    },
    {
        materia: "Português",
        pergunta: "Qual é a função principal de um ponto final?",
        alternativas: [
            "Indicar pergunta",
            "Encerrar uma frase",
            "Indicar surpresa",
            "Separar sílabas"
        ],
        correta: 1
    },
    // =========================
    // MATEMÁTICA
    // =========================
    {
        materia: "Matemática",
        pergunta: "Quanto é 12 × 8?",
        alternativas: [
            "86",
            "96",
            "108",
            "112"
        ],
        correta: 1
    },
    {
        materia: "Matemática",
        pergunta: "Qual é a raiz quadrada de 144?",
        alternativas: [
            "10",
            "11",
            "12",
            "14"
        ],
        correta: 2
    },
    {
        materia: "Matemática",
        pergunta: "Quanto é 25% de 200?",
        alternativas: [
            "25",
            "40",
            "50",
            "75"
        ],
        correta: 2
    },
    {
        materia: "Matemática",
        pergunta: "Quanto é 150 ÷ 5?",
        alternativas: [
            "20",
            "25",
            "30",
            "35"
        ],
        correta: 2
    },
    {
        materia: "Matemática",
        pergunta: "Qual é o resultado de 7²?",
        alternativas: [
            "14",
            "21",
            "49",
            "56"
        ],
        correta: 2
    },
    {
        materia: "Matemática",
        pergunta: "Quanto é 3/4 em porcentagem?",
        alternativas: [
            "25%",
            "50%",
            "75%",
            "80%"
        ],
        correta: 2
    },
    {
        materia: "Matemática",
        pergunta: "Qual é o perímetro de um quadrado com lado de 5 cm?",
        alternativas: [
            "10 cm",
            "15 cm",
            "20 cm",
            "25 cm"
        ],
        correta: 2
    },
    {
        materia: "Matemática",
        pergunta: "Quanto é 15 + 27?",
        alternativas: [
            "32",
            "42",
            "52",
            "62"
        ],
        correta: 1
    },
    {
        materia: "Matemática",
        pergunta: "Qual número é primo?",
        alternativas: [
            "9",
            "15",
            "21",
            "17"
        ],
        correta: 3
    },
    {
        materia: "Matemática",
        pergunta: "Quanto é 1000 - 375?",
        alternativas: [
            "525",
            "625",
            "675",
            "725"
        ],
        correta: 1
    },
    {
        materia: "Matemática",
        pergunta: "Qual é a área de um quadrado com lado de 6 cm?",
        alternativas: [
            "12 cm²",
            "24 cm²",
            "36 cm²",
            "42 cm²"
        ],
        correta: 2
    },
    {
        materia: "Matemática",
        pergunta: "Quanto é 9 × 9?",
        alternativas: [
            "72",
            "81",
            "90",
            "99"
        ],
        correta: 1
    },
    {
        materia: "Matemática",
        pergunta: "Qual é a metade de 250?",
        alternativas: [
            "100",
            "115",
            "125",
            "150"
        ],
        correta: 2
    },
    {
        materia: "Matemática",
        pergunta: "Quanto é 2³?",
        alternativas: [
            "4",
            "6",
            "8",
            "9"
        ],
        correta: 2
    },
    {
        materia: "Matemática",
        pergunta: "Quanto é 45 + 55?",
        alternativas: [
            "90",
            "100",
            "110",
            "120"
        ],
        correta: 1
    },
    {
        materia: "Matemática",
        pergunta: "Qual é o valor de 10% de 500?",
        alternativas: [
            "25",
            "50",
            "75",
            "100"
        ],
        correta: 1
    },
    // =========================
    // HISTÓRIA
    // =========================
    {
        materia: "História",
        pergunta: "Em que ano ocorreu a Independência do Brasil?",
        alternativas: [
            "1500",
            "1822",
            "1889",
            "1930"
        ],
        correta: 1
    },
    {
        materia: "História",
        pergunta: "Quem proclamou a Independência do Brasil?",
        alternativas: [
            "Dom Pedro I",
            "Getúlio Vargas",
            "Tiradentes",
            "Dom João VI"
        ],
        correta: 0
    },
    {
        materia: "História",
        pergunta: "Em que ano começou a Primeira Guerra Mundial?",
        alternativas: [
            "1914",
            "1918",
            "1939",
            "1945"
        ],
        correta: 0
    },
    {
        materia: "História",
        pergunta: "Em que ano terminou a Segunda Guerra Mundial?",
        alternativas: [
            "1939",
            "1942",
            "1945",
            "1950"
        ],
        correta: 2
    },
    {
        materia: "História",
        pergunta: "Qual civilização construiu as pirâmides de Gizé?",
        alternativas: [
            "Romanos",
            "Gregos",
            "Egípcios",
            "Maias"
        ],
        correta: 2
    },
    {
        materia: "História",
        pergunta: "Quem foi Tiradentes?",
        alternativas: [
            "Um líder da Inconfidência Mineira",
            "Um imperador romano",
            "Um presidente",
            "Um navegador português"
        ],
        correta: 0
    },
    {
        materia: "História",
        pergunta: "Quem foi o primeiro presidente do Brasil?",
        alternativas: [
            "Getúlio Vargas",
            "Deodoro da Fonseca",
            "Juscelino Kubitschek",
            "Dom Pedro II"
        ],
        correta: 1
    },
    {
        materia: "História",
        pergunta: "A Revolução Francesa começou em qual ano?",
        alternativas: [
            "1789",
            "1808",
            "1822",
            "1889"
        ],
        correta: 0
    },
    {
        materia: "História",
        pergunta: "Qual acontecimento marcou o fim da escravidão no Brasil?",
        alternativas: [
            "Lei Áurea",
            "Lei de Terras",
            "Constituição de 1824",
            "Proclamação da República"
        ],
        correta: 0
    },
    {
        materia: "História",
        pergunta: "Quem assinou a Lei Áurea?",
        alternativas: [
            "Princesa Isabel",
            "Dom Pedro I",
            "Getúlio Vargas",
            "Deodoro da Fonseca"
        ],
        correta: 0
    },
    {
        materia: "História",
        pergunta: "Qual povo antigo criou a democracia em Atenas?",
        alternativas: [
            "Egípcios",
            "Gregos",
            "Romanos",
            "Persas"
        ],
        correta: 1
    },
    {
        materia: "História",
        pergunta: "Quem foi o primeiro imperador do Brasil?",
        alternativas: [
            "Dom Pedro I",
            "Dom Pedro II",
            "Dom João VI",
            "Deodoro da Fonseca"
        ],
        correta: 0
    },
    {
        materia: "História",
        pergunta: "Qual foi o período da Ditadura Militar no Brasil iniciado em 1964?",
        alternativas: [
            "1945–1950",
            "1964–1985",
            "1985–1990",
            "1930–1945"
        ],
        correta: 1
    },
    {
        materia: "História",
        pergunta: "Qual império tinha Roma como capital?",
        alternativas: [
            "Império Romano",
            "Império Asteca",
            "Império Inca",
            "Império Egípcio"
        ],
        correta: 0
    },
    {
        materia: "História",
        pergunta: "Quem chegou ao Brasil em 1500 segundo a narrativa histórica tradicional?",
        alternativas: [
            "Cristóvão Colombo",
            "Pedro Álvares Cabral",
            "Vasco da Gama",
            "Fernão de Magalhães"
        ],
        correta: 1
    },
    {
        materia: "História",
        pergunta: "Qual evento marcou o início da Revolução Industrial?",
        alternativas: [
            "Expansão das máquinas e fábricas",
            "Queda do Império Romano",
            "Descobrimento da América",
            "Independência do Brasil"
        ],
        correta: 0
    },
    // =========================
    // INGLÊS
    // =========================
    {
        materia: "Inglês",
        pergunta: "Qual é a tradução de 'house'?",
        alternativas: [
            "Carro",
            "Casa",
            "Escola",
            "Rua"
        ],
        correta: 1
    },
    {
        materia: "Inglês",
        pergunta: "Qual é o passado de 'go'?",
        alternativas: [
            "Goed",
            "Gone",
            "Went",
            "Going"
        ],
        correta: 2
    },
    {
        materia: "Inglês",
        pergunta: "O que significa 'beautiful'?",
        alternativas: [
            "Feio",
            "Bonito",
            "Rápido",
            "Grande"
        ],
        correta: 1
    },
    {
        materia: "Inglês",
        pergunta: "Complete: 'She ___ a student.'",
        alternativas: [
            "am",
            "are",
            "is",
            "be"
        ],
        correta: 2
    },
    {
        materia: "Inglês",
        pergunta: "Qual é o plural de 'child'?",
        alternativas: [
            "Childs",
            "Children",
            "Childes",
            "Childrens"
        ],
        correta: 1
    },
    {
        materia: "Inglês",
        pergunta: "O que significa 'book'?",
        alternativas: [
            "Livro",
            "Caneta",
            "Mesa",
            "Caderno"
        ],
        correta: 0
    },
    {
        materia: "Inglês",
        pergunta: "Complete: 'They ___ playing soccer.'",
        alternativas: [
            "is",
            "am",
            "are",
            "be"
        ],
        correta: 2
    },
    {
        materia: "Inglês",
        pergunta: "Qual é o contrário de 'hot'?",
        alternativas: [
            "Cold",
            "Big",
            "Fast",
            "New"
        ],
        correta: 0
    },
    {
        materia: "Inglês",
        pergunta: "O que significa 'teacher'?",
        alternativas: [
            "Aluno",
            "Professor",
            "Médico",
            "Motorista"
        ],
        correta: 1
    },
    {
        materia: "Inglês",
        pergunta: "Qual é a tradução de 'water'?",
        alternativas: [
            "Fogo",
            "Água",
            "Terra",
            "Ar"
        ],
        correta: 1
    },
    {
        materia: "Inglês",
        pergunta: "Complete: 'I ___ from Brazil.'",
        alternativas: [
            "am",
            "is",
            "are",
            "be"
        ],
        correta: 0
    },
    {
        materia: "Inglês",
        pergunta: "Qual palavra significa 'família'?",
        alternativas: [
            "Friend",
            "Family",
            "Father",
            "People"
        ],
        correta: 1
    },
    {
        materia: "Inglês",
        pergunta: "Qual é o passado de 'eat'?",
        alternativas: [
            "Eated",
            "Ate",
            "Eaten",
            "Eating"
        ],
        correta: 1
    },
    {
        materia: "Inglês",
        pergunta: "O que significa 'morning'?",
        alternativas: [
            "Noite",
            "Tarde",
            "Manhã",
            "Madrugada"
        ],
        correta: 2
    },
    {
        materia: "Inglês",
        pergunta: "Qual palavra significa 'amigo'?",
        alternativas: [
            "Friend",
            "Brother",
            "Teacher",
            "Father"
        ],
        correta: 0
    },
    {
        materia: "Inglês",
        pergunta: "Complete: 'He ___ football every Sunday.'",
        alternativas: [
            "play",
            "plays",
            "playing",
            "played"
        ],
        correta: 1
    },
    // =========================
    // PROGRAMAÇÃO
    // =========================
    {
        materia: "Programação",
        pergunta: "O que significa HTML?",
        alternativas: [
            "HyperText Markup Language",
            "High Technology Machine Language",
            "Home Tool Markup Language",
            "Hyperlink Text Machine"
        ],
        correta: 0
    },
    {
        materia: "Programação",
        pergunta: "Qual linguagem é usada para estilizar páginas web?",
        alternativas: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        correta: 1
    },
    {
        materia: "Programação",
        pergunta: "Qual linguagem é usada para adicionar interatividade a páginas web?",
        alternativas: [
            "CSS",
            "HTML",
            "JavaScript",
            "SQL"
        ],
        correta: 2
    },
    {
        materia: "Programação",
        pergunta: "Qual tag HTML cria um título principal?",
        alternativas: [
            "<p>",
            "<h1>",
            "<title2>",
            "<header1>"
        ],
        correta: 1
    },
    {
        materia: "Programação",
        pergunta: "Qual tag HTML cria um parágrafo?",
        alternativas: [
            "<p>",
            "<text>",
            "<paragraph>",
            "<h1>"
        ],
        correta: 0
    },
    {
        materia: "Programação",
        pergunta: "Qual comando JavaScript mostra uma mensagem no console?",
        alternativas: [
            "print()",
            "console.log()",
            "message()",
            "show()"
        ],
        correta: 1
    },
    {
        materia: "Programação",
        pergunta: "O que é uma variável?",
        alternativas: [
            "Um tipo de computador",
            "Um espaço usado para armazenar um valor",
            "Uma página web",
            "Um navegador"
        ],
        correta: 1
    },
    {
        materia: "Programação",
        pergunta: "Qual símbolo é usado para comentário de uma linha em JavaScript?",
        alternativas: [
            "//",
            "##",
            "<!--",
            "**"
        ],
        correta: 0
    },
    {
        materia: "Programação",
        pergunta: "Qual método adiciona um item ao final de um array em JavaScript?",
        alternativas: [
            "add()",
            "push()",
            "insert()",
            "append()"
        ],
        correta: 1
    },
    {
        materia: "Programação",
        pergunta: "Qual propriedade CSS altera a cor do texto?",
        alternativas: [
            "background",
            "font-size",
            "color",
            "text-style"
        ],
        correta: 2
    },
    {
        materia: "Programação",
        pergunta: "Qual propriedade CSS altera o tamanho da fonte?",
        alternativas: [
            "font-size",
            "text-size",
            "size-font",
            "letter"
        ],
        correta: 0
    },
    {
        materia: "Programação",
        pergunta: "Qual linguagem é muito utilizada para programação e análise de dados?",
        alternativas: [
            "Python",
            "HTML",
            "CSS",
            "XML"
        ],
        correta: 0
    },
    {
        materia: "Programação",
        pergunta: "O que significa CSS?",
        alternativas: [
            "Computer Style System",
            "Cascading Style Sheets",
            "Creative Style Software",
            "Code Style System"
        ],
        correta: 1
    },
    {
        materia: "Programação",
        pergunta: "Qual estrutura é usada para repetir um bloco de código?",
        alternativas: [
            "loop",
            "style",
            "title",
            "header"
        ],
        correta: 0
    },
    {
        materia: "Programação",
        pergunta: "Qual operador significa 'igual estritamente' em JavaScript?",
        alternativas: [
            "=",
            "==",
            "===",
            "!="
        ],
        correta: 2
    },
    {
        materia: "Programação",
        pergunta: "O que é um array?",
        alternativas: [
            "Uma lista de valores",
            "Uma imagem",
            "Uma página",
            "Um navegador"
        ],
        correta: 0
    },
    // =========================
    // FILOSOFIA
    // =========================
    {
        materia: "Filosofia",
        pergunta: "Quem é conhecido pela frase 'Só sei que nada sei'?",
        alternativas: [
            "Platão",
            "Sócrates",
            "Aristóteles",
            "Descartes"
        ],
        correta: 1
    },
    {
        materia: "Filosofia",
        pergunta: "Quem foi professor de Aristóteles?",
        alternativas: [
            "Sócrates",
            "Platão",
            "Descartes",
            "Nietzsche"
        ],
        correta: 1
    },
    {
        materia: "Filosofia",
        pergunta: "Qual área da filosofia estuda o conhecimento?",
        alternativas: [
            "Ética",
            "Epistemologia",
            "Estética",
            "Política"
        ],
        correta: 1
    },
    {
        materia: "Filosofia",
        pergunta: "Qual filósofo escreveu 'O Príncipe'?",
        alternativas: [
            "Maquiavel",
            "Platão",
            "Kant",
            "Sócrates"
        ],
        correta: 0
    },
    {
        materia: "Filosofia",
        pergunta: "A ética estuda principalmente:",
        alternativas: [
            "O comportamento moral",
            "Os planetas",
            "A matemática",
            "A linguagem HTML"
        ],
        correta: 0
    },
    {
        materia: "Filosofia",
        pergunta: "Quem escreveu 'Discurso do Método'?",
        alternativas: [
            "Descartes",
            "Aristóteles",
            "Platão",
            "Nietzsche"
        ],
        correta: 0
    },
    {
        materia: "Filosofia",
        pergunta: "O que significa filosofia?",
        alternativas: [
            "Amor à sabedoria",
            "Amor à guerra",
            "Estudo dos números",
            "Ciência da natureza"
        ],
        correta: 0
    },
    {
        materia: "Filosofia",
        pergunta: "Quem foi Aristóteles?",
        alternativas: [
            "Filósofo grego",
            "Imperador romano",
            "Pintor italiano",
            "Cientista inglês"
        ],
        correta: 0
    },
    {
        materia: "Filosofia",
        pergunta: "Qual filósofo é associado ao pensamento 'Penso, logo existo'?",
        alternativas: [
            "Descartes",
            "Sócrates",
            "Platão",
            "Aristóteles"
        ],
        correta: 0
    },
    {
        materia: "Filosofia",
        pergunta: "A estética estuda principalmente:",
        alternativas: [
            "A beleza e a arte",
            "A economia",
            "A matemática",
            "A política"
        ],
        correta: 0
    },
    {
        materia: "Filosofia",
        pergunta: "Qual filósofo escreveu 'A República'?",
        alternativas: [
            "Platão",
            "Aristóteles",
            "Kant",
            "Descartes"
        ],
        correta: 0
    },
    {
        materia: "Filosofia",
        pergunta: "O que é lógica?",
        alternativas: [
            "Estudo do raciocínio",
            "Estudo dos esportes",
            "Estudo das artes",
            "Estudo da música"
        ],
        correta: 0
    },
    {
        materia: "Filosofia",
        pergunta: "Nietzsche foi um filósofo de qual país?",
        alternativas: [
            "Alemanha",
            "França",
            "Brasil",
            "Itália"
        ],
        correta: 0
    },
    {
        materia: "Filosofia",
        pergunta: "Qual filósofo escreveu 'Crítica da Razão Pura'?",
        alternativas: [
            "Immanuel Kant",
            "Platão",
            "Sócrates",
            "Maquiavel"
        ],
        correta: 0
    },
    {
        materia: "Filosofia",
        pergunta: "A filosofia busca principalmente:",
        alternativas: [
            "Questionar e refletir sobre questões fundamentais",
            "Apenas decorar informações",
            "Resolver apenas cálculos",
            "Criar programas"
        ],
        correta: 0
    },
    {
        materia: "Filosofia",
        pergunta: "O que é uma reflexão filosófica?",
        alternativas: [
            "Uma análise crítica e racional de uma questão",
            "Uma conta matemática",
            "Uma atividade esportiva",
            "Uma programação"
        ],
        correta: 0
    },
    // =========================
    // SOCIOLOGIA
    // =========================
    {
        materia: "Sociologia",
        pergunta: "O que a Sociologia estuda?",
        alternativas: [
            "A sociedade",
            "Somente os animais",
            "Somente os planetas",
            "Somente os números"
        ],
        correta: 0
    },
    {
        materia: "Sociologia",
        pergunta: "Quem é considerado um dos fundadores da Sociologia?",
        alternativas: [
            "Auguste Comte",
            "Isaac Newton",
            "Albert Einstein",
            "Charles Darwin"
        ],
        correta: 0
    },
    {
        materia: "Sociologia",
        pergunta: "O que é cultura?",
        alternativas: [
            "Conjunto de valores, costumes e práticas de um grupo",
            "Apenas música",
            "Apenas comida",
            "Apenas religião"
        ],
        correta: 0
    },
    {
        materia: "Sociologia",
        pergunta: "O que é sociedade?",
        alternativas: [
            "Conjunto de pessoas que convivem e estabelecem relações",
            "Um prédio",
            "Uma máquina",
            "Uma empresa apenas"
        ],
        correta: 0
    },
    {
        materia: "Sociologia",
        pergunta: "O que é desigualdade social?",
        alternativas: [
            "Diferenças de acesso a recursos e oportunidades",
            "Diferença de idade",
            "Diferença de altura",
            "Diferença de idioma apenas"
        ],
        correta: 0
    },
    {
        materia: "Sociologia",
        pergunta: "Quem escreveu sobre a luta de classes?",
        alternativas: [
            "Karl Marx",
            "Platão",
            "Newton",
            "Darwin"
        ],
        correta: 0
    },
    {
        materia: "Sociologia",
        pergunta: "O que são normas sociais?",
        alternativas: [
            "Regras e expectativas de comportamento em uma sociedade",
            "Leis da física",
            "Fórmulas matemáticas",
            "Códigos de programação"
        ],
        correta: 0
    },
    {
        materia: "Sociologia",
        pergunta: "O que é socialização?",
        alternativas: [
            "Processo pelo qual aprendemos normas e valores sociais",
            "Uma competição esportiva",
            "Uma operação matemática",
            "Uma linguagem de programação"
        ],
        correta: 0
    },
    {
        materia: "Sociologia",
        pergunta: "Qual é uma instituição social?",
        alternativas: [
            "Família",
            "Planeta",
            "Computador",
            "Calculadora"
        ],
        correta: 0
    },
    {
        materia: "Sociologia",
        pergunta: "O que é preconceito?",
        alternativas: [
            "Julgamento ou opinião prévia sem conhecimento adequado",
            "Uma regra matemática",
            "Uma lei da física",
            "Um tipo de esporte"
        ],
        correta: 0
    },
    {
        materia: "Sociologia",
        pergunta: "O que é cidadania?",
        alternativas: [
            "Exercício de direitos e deveres na sociedade",
            "Apenas votar",
            "Apenas trabalhar",
            "Apenas estudar"
        ],
        correta: 0
    },
    {
        materia: "Sociologia",
        pergunta: "O que é mobilidade social?",
        alternativas: [
            "Mudança de posição social ou econômica",
            "Mudança de cidade apenas",
            "Mudança de escola apenas",
            "Mudança de idioma"
        ],
        correta: 0
    },
    {
        materia: "Sociologia",
        pergunta: "O que é um grupo social?",
        alternativas: [
            "Pessoas que possuem relações ou características em comum",
            "Um grupo de computadores",
            "Um conjunto de números",
            "Um conjunto de planetas"
        ],
        correta: 0
    },
    {
        materia: "Sociologia",
        pergunta: "O que é identidade cultural?",
        alternativas: [
            "Características culturais que ajudam a identificar um grupo ou pessoa",
            "Uma senha",
            "Um documento",
            "Uma fórmula"
        ],
        correta: 0
    },
    {
        materia: "Sociologia",
        pergunta: "O que é trabalho na Sociologia?",
        alternativas: [
            "Uma atividade social e econômica que produz bens ou serviços",
            "Apenas estudar",
            "Apenas descansar",
            "Apenas praticar esportes"
        ],
        correta: 0
    },
    {
        materia: "Sociologia",
        pergunta: "O que é democracia?",
        alternativas: [
            "Uma forma de organização política baseada na participação dos cidadãos",
            "Uma religião",
            "Uma profissão",
            "Uma modalidade esportiva"
        ],
        correta: 0
    },
    // =========================
    // EDUCAÇÃO FÍSICA
    // =========================
    {
        materia: "Educação Física",
        pergunta: "Qual esporte utiliza uma bola e uma cesta?",
        alternativas: [
            "Vôlei",
            "Basquete",
            "Tênis",
            "Natação"
        ],
        correta: 1
    },
    {
        materia: "Educação Física",
        pergunta: "Quantos jogadores formam uma equipe de futebol em campo?",
        alternativas: [
            "9",
            "10",
            "11",
            "12"
        ],
        correta: 2
    },
    {
        materia: "Educação Física",
        pergunta: "Qual esporte é praticado em uma piscina?",
        alternativas: [
            "Natação",
            "Futebol",
            "Judô",
            "Basquete"
        ],
        correta: 0
    },
    {
        materia: "Educação Física",
        pergunta: "O alongamento pode ajudar principalmente:",
        alternativas: [
            "Na flexibilidade",
            "Na visão",
            "Na audição",
            "Na memória"
        ],
        correta: 0
    },
    {
        materia: "Educação Física",
        pergunta: "Qual esporte utiliza uma rede dividindo a quadra?",
        alternativas: [
            "Vôlei",
            "Atletismo",
            "Natação",
            "Judô"
        ],
        correta: 0
    },
    {
        materia: "Educação Física",
        pergunta: "Qual é uma capacidade física?",
        alternativas: [
            "Força",
            "Ortografia",
            "Memória RAM",
            "Geografia"
        ],
        correta: 0
    },
    {
        materia: "Educação Física",
        pergunta: "O futebol é jogado principalmente com:",
        alternativas: [
            "Os pés",
            "As mãos",
            "Os cotovelos",
            "A cabeça apenas"
        ],
        correta: 0
    },
    {
        materia: "Educação Física",
        pergunta: "Qual esporte é conhecido como esporte de raquete?",
        alternativas: [
            "Tênis",
            "Futebol",
            "Natação",
            "Boxe"
        ],
        correta: 0
    },
    {
        materia: "Educação Física",
        pergunta: "Qual atividade é considerada exercício aeróbico?",
        alternativas: [
            "Corrida",
            "Xadrez",
            "Leitura",
            "Desenho"
        ],
        correta: 0
    },
    {
        materia: "Educação Física",
        pergunta: "O que é aquecimento?",
        alternativas: [
            "Atividade que prepara o corpo para o exercício",
            "Descanso após o exercício",
            "Uma competição",
            "Uma alimentação"
        ],
        correta: 0
    },
    {
        materia: "Educação Física",
        pergunta: "Qual esporte é praticado sobre uma bicicleta?",
        alternativas: [
            "Ciclismo",
            "Vôlei",
            "Futebol",
            "Judô"
        ],
        correta: 0
    },
    {
        materia: "Educação Física",
        pergunta: "Qual esporte é uma arte marcial?",
        alternativas: [
            "Judô",
            "Natação",
            "Tênis",
            "Atletismo"
        ],
        correta: 0
    },
    {
        materia: "Educação Física",
        pergunta: "Qual é uma função importante da atividade física?",
        alternativas: [
            "Contribuir para a saúde e o condicionamento físico",
            "Substituir o sono",
            "Eliminar a necessidade de alimentação",
            "Impedir qualquer doença"
        ],
        correta: 0
    },
    {
        materia: "Educação Física",
        pergunta: "O atletismo inclui provas de:",
        alternativas: [
            "Corrida e saltos",
            "Natação apenas",
            "Futebol apenas",
            "Xadrez"
        ],
        correta: 0
    },
    {
        materia: "Educação Física",
        pergunta: "Qual esporte utiliza uma bola oval?",
        alternativas: [
            "Rugby",
            "Vôlei",
            "Tênis",
            "Basquete"
        ],
        correta: 0
    },
    {
        materia: "Educação Física",
        pergunta: "Por que a hidratação é importante durante atividades físicas?",
        alternativas: [
            "Para ajudar a manter o equilíbrio de líquidos do corpo",
            "Para aumentar a altura",
            "Para substituir o aquecimento",
            "Para evitar qualquer cansaço"
        ],
        correta: 0
    },
    // =========================
    // EDUCAÇÃO FINANCEIRA
    // =========================
    {
        materia: "Educação Financeira",
        pergunta: "O que é orçamento?",
        alternativas: [
            "Planejamento de receitas e despesas",
            "Apenas dinheiro guardado",
            "Uma dívida",
            "Um investimento"
        ],
        correta: 0
    },
    {
        materia: "Educação Financeira",
        pergunta: "O que significa economizar?",
        alternativas: [
            "Guardar ou utilizar o dinheiro de forma planejada",
            "Gastar tudo",
            "Fazer dívidas",
            "Comprar sem planejamento"
        ],
        correta: 0
    },
    {
        materia: "Educação Financeira",
        pergunta: "O que é juros?",
        alternativas: [
            "Valor cobrado ou recebido pelo uso do dinheiro ao longo do tempo",
            "Um tipo de imposto apenas",
            "Um salário",
            "Um desconto"
        ],
        correta: 0
    },
    {
        materia: "Educação Financeira",
        pergunta: "O que é uma despesa?",
        alternativas: [
            "Um gasto",
            "Um salário",
            "Um investimento",
            "Uma renda"
        ],
        correta: 0
    },
    {
        materia: "Educação Financeira",
        pergunta: "O que é receita?",
        alternativas: [
            "Dinheiro que entra",
            "Dinheiro que sai",
            "Uma dívida",
            "Uma compra"
        ],
        correta: 0
    },
    {
        materia: "Educação Financeira",
        pergunta: "Qual é uma boa prática financeira?",
        alternativas: [
            "Planejar os gastos",
            "Gastar mais do que ganha",
            "Ignorar dívidas",
            "Comprar tudo por impulso"
        ],
        correta: 0
    },
    {
        materia: "Educação Financeira",
        pergunta: "O que é uma reserva de emergência?",
        alternativas: [
            "Dinheiro guardado para situações inesperadas",
            "Dinheiro para gastar imediatamente",
            "Uma dívida",
            "Um cartão de crédito"
        ],
        correta: 0
    },
    {
        materia: "Educação Financeira",
        pergunta: "O que é investimento?",
        alternativas: [
            "Aplicação de dinheiro buscando determinado retorno",
            "Uma compra qualquer",
            "Uma dívida",
            "Um imposto"
        ],
        correta: 0
    },
    {
        materia: "Educação Financeira",
        pergunta: "O que é consumo consciente?",
        alternativas: [
            "Comprar considerando necessidade, preço e impacto",
            "Comprar tudo que aparece",
            "Nunca comprar nada",
            "Usar crédito sem limite"
        ],
        correta: 0
    },
    {
        materia: "Educação Financeira",
        pergunta: "O cartão de crédito permite:",
        alternativas: [
            "Realizar compras para pagamento posterior, conforme as regras do cartão",
            "Ganhar dinheiro automaticamente",
            "Eliminar todas as dívidas",
            "Comprar sem precisar pagar"
        ],
        correta: 0
    },
    {
        materia: "Educação Financeira",
        pergunta: "O que é inflação?",
        alternativas: [
            "Aumento generalizado dos preços ao longo do tempo",
            "Queda de todos os preços",
            "Aumento do salário apenas",
            "Redução dos impostos"
        ],
        correta: 0
    },
    {
        materia: "Educação Financeira",
        pergunta: "Qual é a diferença entre necessidade e desejo?",
        alternativas: [
            "Necessidade é algo essencial; desejo é algo que queremos",
            "São exatamente a mesma coisa",
            "Desejo sempre é mais importante",
            "Necessidade nunca custa dinheiro"
        ],
        correta: 0
    },
    {
        materia: "Educação Financeira",
        pergunta: "O que é uma dívida?",
        alternativas: [
            "Um valor que deve ser pago a outra pessoa ou instituição",
            "Dinheiro recebido",
            "Um investimento",
            "Uma economia"
        ],
        correta: 0
    },
    {
        materia: "Educação Financeira",
        pergunta: "Por que comparar preços pode ser útil?",
        alternativas: [
            "Para encontrar diferentes condições antes de comprar",
            "Para aumentar os gastos",
            "Para evitar qualquer planejamento",
            "Para criar dívidas"
        ],
        correta: 0
    },
    {
        materia: "Educação Financeira",
        pergunta: "O que significa gastar dentro do orçamento?",
        alternativas: [
            "Manter os gastos planejados de acordo com os recursos disponíveis",
            "Gastar tudo imediatamente",
            "Fazer empréstimos sempre",
            "Ignorar as despesas"
        ],
        correta: 0
    },
    {
        materia: "Educação Financeira",
        pergunta: "Qual é uma vantagem de estabelecer metas financeiras?",
        alternativas: [
            "Ajudar a organizar e direcionar o dinheiro",
            "Aumentar automaticamente o salário",
            "Eliminar todos os riscos",
            "Garantir lucro"
        ],
        correta: 0
    }
];

// ==========================================
// PRÊMIOS
// ==========================================
const premio = [
    1000,
    2000,
    3000,
    4000,
    5000,
    10000,
    20000,
    30000,
    40000,
    50000,
    100000,
    200000,
    300000,
    400000,
    500000,
    1000000
];

// ==========================================
// VARIÁVEIS
// ==========================================
let perguntasDoJogo = [];
let perguntaAtual = 0;
let premioAtual = 0;
let respondeu = false;
let usouUniversitarios = false;
let usouDado = false;

// ==========================================
// ELEMENTOS DO HTML
// ==========================================
const telaMaterias = document.getElementById("tela-materias");
const telaQuiz = document.getElementById("tela-quiz");
const categoriaE = document.getElementById("categoria");
const perguntaE = document.getElementById("pergunta");
const alternativasE = document.getElementById("alternativas");
const mensagemE = document.getElementById("mensagem");
const numeroPerguntaE =
    document.getElementById("numero-pergunta");
const premioE =
    document.getElementById("premio");
const proximaBtnE =
    document.getElementById("proxima");
const universitariosBtn =
    document.getElementById("btn-universitarios");
const dadoBtn =
    document.getElementById("btn-dado");
const desistirBtn =
    document.getElementById("btn-desistir");

// ==========================================
// EMBARALHAR ARRAY
// ==========================================
function embaralhar(array) {
    const copia = [...array];

    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [copia[i], copia[j]] =
            [copia[j], copia[i]];
    }

    return copia;
}

// ==========================================

 // ==========================================
 // ESCOLHER MATÉRIA
 // ==========================================

 document.querySelectorAll(".materia").forEach(botao => {
    botao.addEventListener("click", () => {
        const materiaEscolhida =
            botao.getAttribute("data-materia");

        const musica = document.getElementById("musica");
        const botaoMusica = document.getElementById("btn-musica");

        const jogarComSom = confirm(
            "🔊 Deseja jogar com som?\n\n" +
            "Clique em OK para jogar com som.\n" +
            "Clique em Cancelar para jogar sem som."
        );

        if (musica) {
            if (jogarComSom) {
                musica.play().then(() => {
                    if (botaoMusica) {
                        botaoMusica.textContent = "🔊";
                    }
                }).catch(() => {
                    if (botaoMusica) {
                        botaoMusica.textContent = "🔇";
                    }
                });
            } else {
                musica.pause();
                musica.currentTime = 0;

                if (botaoMusica) {
                    botaoMusica.textContent = "🔇";
                }
            }
        }

        iniciarJogo(materiaEscolhida);
    });
});


// ==========================================
// INICIAR JOGO
// ==========================================
function iniciarJogo(materiaEscolhida) {
    proximaBtnE.style.display = "block";
    proximaBtnE.textContent = "Próxima Pergunta";

    const botoesFinalInicio =
        document.getElementById("botoes-final");

    if (botoesFinalInicio) {
        botoesFinalInicio.style.display = "none";
    }

    const confirmacaoInicio =
        document.getElementById("confirmacao");

    if (confirmacaoInicio) {
        confirmacaoInicio.style.display = "none";
    }

    perguntaAtual = 0;
    premioAtual = 0;
    respondeu = false;
    usouUniversitarios = false;
    usouDado = false;

    if (materiaEscolhida === "Misturado") {
        // Pega perguntas de todas as matérias
        // e embaralha tudo.
        perguntasDoJogo =
            embaralhar(perguntas).slice(0, 16);

        categoriaE.textContent =
            "Categoria: Todas as matérias";
    } else {
        // Pega somente as perguntas
        // da matéria escolhida.
        const filtradas =
            perguntas.filter(
                item => item.materia === materiaEscolhida
            );

        perguntasDoJogo =
            embaralhar(filtradas).slice(0, 16);

        categoriaE.textContent =
            `Categoria: ${materiaEscolhida}`;
    }

    telaMaterias.style.display = "none";
    telaQuiz.style.display = "block";

    carregarPergunta();
}

// ==========================================
// CARREGAR PERGUNTA
// ==========================================
function carregarPergunta() {
    respondeu = false;
    proximaBtnE.disabled = true;
    mensagemE.textContent = "";
    alternativasE.innerHTML = "";

    universitariosBtn.disabled =
        usouUniversitarios;

    dadoBtn.disabled =
        usouDado;

    desistirBtn.disabled = false;

    const item =
        perguntasDoJogo[perguntaAtual];

    
perguntaE.textContent =
`${window.nomeJogadorQuiz || "Jogador"}, atenção! ${item.pergunta}`;


    numeroPerguntaE.textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntasDoJogo.length}`;
        if (perguntaAtual === 14) {
            const musica = document.getElementById("musica");
        
            if (musica) {
                musica.pause();
            }
        
            const audioMeioMilhao = new Audio("./500mil.mp3.mp3");
        
            audioMeioMilhao.play().catch(erro => {
                console.log("Erro ao tocar áudio:", erro);
            });
        
            audioMeioMilhao.addEventListener("ended", () => {
                if (musica) {
                    musica.play().catch(erro => {
                        console.log("Erro ao retomar música:", erro);
                    });
                }
            });
            if (perguntaAtual === 16) {
                const musica = document.getElementById("musica");
            
                if (musica) {
                    musica.pause();
                }
            
                const audioMeioMilhao = new Audio("./1milhao.mp3.mp3");
            
                audioMeioMilhao.play().catch(erro => {
                    console.log("Erro ao tocar áudio:", erro);
                });
            
                audioMeioMilhao.addEventListener("ended", () => {
                    if (musica) {
                        musica.play().catch(erro => {
                            console.log("Erro ao retomar música:", erro);
                        });
                    }
                });
            }
        }

    premioE.textContent =
        `Prêmio Acumulado: R$ ${premioAtual.toLocaleString("pt-BR")}`;
        

    item.alternativas.forEach((texto, indice) => {
        const botao =
            document.createElement("button");

        botao.classList.add("alternativa");

        botao.setAttribute(
            "data-indice",
            indice
        );

        botao.textContent =
            `${String.fromCharCode(65 + indice)} ${texto}`;

        botao.addEventListener("click", () => {
            verificaResposta(
                indice,
                botao
            );
        });

        alternativasE.appendChild(botao);
    });
}

// ==========================================
// VERIFICAR RESPOSTA
// ==========================================
function verificaResposta(
    indiceEscolhido,
    botaoEscolhido
) {
    if (respondeu) return;

    respondeu = true;

    universitariosBtn.disabled = true;
    dadoBtn.disabled = true;
    desistirBtn.disabled = true;

    const item =
        perguntasDoJogo[perguntaAtual];

    const botoes =
        document.querySelectorAll(".alternativa");

    botoes.forEach(botao => {
        botao.disabled = true;
    });

    if (indiceEscolhido === item.correta) {
        botaoEscolhido.classList.add("correta");
        const somAcertou = new Audio("./acertou.mp3.mp3");
        somAcertou.play().catch(erro => {
        console.log("Erro ao tocar som de acerto:", erro);
});
        premioAtual =
            premio[perguntaAtual];
            

        mensagemE.textContent =
            "Resposta correta! Você avançou!";

        premioE.textContent =
            `Prêmio Acumulado: R$ ${premioAtual.toLocaleString("pt-BR")}`;

        proximaBtnE.disabled = false;

    } else {
        botaoEscolhido.classList.add("errada");

        // Mostra a resposta correta
        botoes[item.correta]
            .classList.add("correta");

        premioAtual = 0;

        premioE.textContent =
            "Prêmio: R$ 0";

        // Para a música principal e qualquer outro áudio do HTML.
        document.querySelectorAll("audio").forEach(som => {
            som.pause();
            som.currentTime = 0;
        });

        // Toca somente o áudio de erro, uma única vez.
        const audioErro = new Audio("./errou.mp3.mp3");
        audioErro.loop = false;

        
        let jogoFinalizado = false;

        const terminarUmaVez = () => {
            if (jogoFinalizado) return;

            jogoFinalizado = true;
            finalizarJogo();
        };

        audioErro.addEventListener(
            "ended",
            terminarUmaVez,
            { once: true }
        );

        audioErro.addEventListener(
            "error",
            terminarUmaVez,
            { once: true }
        );

        audioErro.play().catch(erro => {
            console.log(
                "Erro ao reproduzir o áudio de erro:",
                erro
            );

            terminarUmaVez();
        });
    }
}


 
 // ==========================================
 // AJUDA DOS UNIVERSITÁRIOS
 // ==========================================

universitariosBtn.addEventListener("click", () => {

    if (respondeu || usouUniversitarios) return;

    usouUniversitarios = true;
    universitariosBtn.disabled = true;

    const item = perguntasDoJogo[perguntaAtual];

    let indiceIndicado;

    // 50% de chance de acertarem o palpite
    // e 50% de chance de indicarem uma errada.
    if (Math.random() < 0.5) {

        indiceIndicado = item.correta;

    } else {

        const erradas = [0, 1, 2, 3].filter(
            indice => indice !== item.correta
        );

        indiceIndicado = erradas[
            Math.floor(Math.random() * erradas.length)
        ];

    }

    const letra = String.fromCharCode(65 + indiceIndicado);

    mensagemE.textContent =
        `🎓 Os Universitários acham que a resposta correta é ${letra}!`;

});

/* ==========================================
   CADASTRO E ENTRADA NO QUIZ
========================================== */

const telaCadastro = document.getElementById("tela-cadastro");
const nomeJogadorInput = document.getElementById("nome-jogador");
const turmaJogadorInput = document.getElementById("turma-jogador");
const comecarJogoBtn = document.getElementById("comecar-jogo");
const erroCadastro = document.getElementById("erro-cadastro");

// Guardar os dados durante a partida
window.nomeJogadorQuiz = "";
window.turmaJogadorQuiz = "";

// Mostrar primeiro a capa
telaCadastro.style.display = "block";
telaMaterias.style.display = "none";
telaQuiz.style.display = "none";

comecarJogoBtn.addEventListener("click", () => {
    const nome = nomeJogadorInput.value.trim();
    const turma = turmaJogadorInput.value.trim();

    if (!nome || !turma) {
        erroCadastro.textContent =
            "Preencha seu nome e sua turma para continuar.";
        return;
    }

    window.nomeJogadorQuiz = nome;
    window.turmaJogadorQuiz = turma;

    erroCadastro.textContent = "";

    telaCadastro.style.display = "none";
    telaMaterias.style.display = "block";
});

// Permitir começar apertando Enter nos campos
[nomeJogadorInput, turmaJogadorInput].forEach(campo => {
    campo.addEventListener("keydown", evento => {
        if (evento.key === "Enter") {
            comecarJogoBtn.click();
        }
    });
});



// ==========================================
// AJUDA DO DADO
// ==========================================
dadoBtn.addEventListener("click", () => {
    if (respondeu || usouDado) return;

    usouDado = true;
    dadoBtn.disabled = true;

    const item =
        perguntasDoJogo[perguntaAtual];

    const botoes =
        document.querySelectorAll(".alternativa");

    const numeroDado =
        Math.floor(Math.random() * 3) + 1;

    let excluidas = 0;

    // Embaralha as alternativas erradas
    // para a exclusão também ser aleatória.
    const erradas = [];

    botoes.forEach(botao => {
        const indice =
            parseInt(
                botao.getAttribute("data-indice")
            );

        if (indice !== item.correta) {
            erradas.push(botao);
        }
    });

    const erradasEmbaralhadas =
        embaralhar(erradas);

    erradasEmbaralhadas
        .slice(0, numeroDado)
        .forEach(botao => {
            botao.style.display = "none";
            excluidas++;
        });

    mensagemE.textContent =
        `O dado rolou ${numeroDado}! Foram escondidas ${excluidas} alternativas incorretas.`;
});

// ==========================================
// DESISTIR
// ==========================================
desistirBtn.addEventListener("click", () => {
    if (respondeu) return;

    respondeu = true;

    premioAtual =
        premioAtual / 2;

    finalizarJogo();
});

// ==========================================
// PRÓXIMA PERGUNTA
// ==========================================
proximaBtnE.addEventListener("click", () => {
    perguntaAtual++;

    if (
        perguntaAtual <
        perguntasDoJogo.length
    ) {
        carregarPergunta();
    } else {
        finalizarJogo();
    }
});

// ==========================================
// FINALIZAR JOGO
// ==========================================
function finalizarJogo() {
    alternativasE.innerHTML = "";

    universitariosBtn.disabled = true;
    dadoBtn.disabled = true;
    desistirBtn.disabled = true;

    numeroPerguntaE.textContent = "Quiz Concluído";

    if (premioAtual === 1000000) {
        perguntaE.textContent = "PARABÉNS!";

        mensagemE.textContent =
            `Você respondeu todas as perguntas corretamente e ganhou R$ ${premioAtual.toLocaleString("pt-BR")}!`;
    } else {
        perguntaE.textContent = "Fim de jogo!";

        mensagemE.textContent =
            `Você terminou o jogo com R$ ${premioAtual.toLocaleString("pt-BR")}.`;
    }

    proximaBtnE.disabled = true;
    proximaBtnE.style.display = "none";

    const botoesFinal =
        document.getElementById("botoes-final");

    if (botoesFinal) {
        botoesFinal.style.display = "flex";
    }
}

// ==========================================
// TROCAR MATÉRIA E CONFIRMAÇÕES
// ==========================================
const trocarMateriaBtn =
    document.getElementById("trocar-materia");

const repetirJogoBtn =
    document.getElementById("repetir-jogo");

const outraMateriaBtn =
    document.getElementById("outra-materia");

const confirmacaoE =
    document.getElementById("confirmacao");

const textoConfirmacaoE =
    document.getElementById("texto-confirmacao");

const confirmarSimBtn =
    document.getElementById("confirmar-sim");

const confirmarNaoBtn =
    document.getElementById("confirmar-nao");

let acaoConfirmada = null;
let ultimaMateriaEscolhida = "Misturado";

// Registra a matéria para que "Repetir jogo" repita a mesma seleção.
const iniciarJogoOriginal = iniciarJogo;

iniciarJogo = function(materiaEscolhida) {
    ultimaMateriaEscolhida = materiaEscolhida;
    iniciarJogoOriginal(materiaEscolhida);
};

function abrirConfirmacao(texto, acao) {
    if (!confirmacaoE || !textoConfirmacaoE) return;

    textoConfirmacaoE.textContent = texto;
    acaoConfirmada = acao;
    confirmacaoE.style.display = "block";
}

function fecharConfirmacao() {
    if (confirmacaoE) {
        confirmacaoE.style.display = "none";
    }

    acaoConfirmada = null;
}

function voltarParaMaterias() {
    telaQuiz.style.display = "none";
    telaMaterias.style.display = "block";

    fecharConfirmacao();

    const botoesFinal =
        document.getElementById("botoes-final");

    if (botoesFinal) {
        botoesFinal.style.display = "none";
    }

    proximaBtnE.style.display = "block";
    proximaBtnE.disabled = true;
    proximaBtnE.textContent = "Próxima Pergunta";
}

if (trocarMateriaBtn) {
    trocarMateriaBtn.addEventListener("click", () => {
        abrirConfirmacao(
            "Tem certeza de que deseja sair desta partida e trocar de matéria?",
            voltarParaMaterias
        );
    });
}

if (repetirJogoBtn) {
    repetirJogoBtn.addEventListener("click", () => {
        abrirConfirmacao(
            "Deseja jogar novamente com a mesma matéria?",
            () => iniciarJogo(ultimaMateriaEscolhida)
        );
    });
}

if (outraMateriaBtn) {
    outraMateriaBtn.addEventListener("click", () => {
        abrirConfirmacao(
            "Deseja sair desta partida e escolher outra matéria?",
            voltarParaMaterias
        );
    });
}



if (confirmarSimBtn) {
    confirmarSimBtn.addEventListener("click", () => {
        const acao = acaoConfirmada;

        fecharConfirmacao();

        if (typeof acao === "function") {
            acao();
        }
    });
}

if (confirmarNaoBtn) {
    confirmarNaoBtn.addEventListener("click", fecharConfirmacao);
}