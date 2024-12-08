ChatBot Interação Medicamentosa
Um chatbot desenvolvido com o objetivo de fornecer informações confiáveis sobre interações medicamentosas, com funcionalidades baseadas em inteligência artificial. Este projeto utiliza a API Groq e o modelo de linguagem da Meta LLaMA-3.2-90B-Text-Preview para oferecer respostas precisas e contextualizadas sobre interações medicamentosas, sempre respeitando dados fornecidos como sexo, idade e histórico médico do paciente.

Funcionalidades
Interações Medicamentosas Personalizadas: Oferece informações sobre interações medicamentosas com base no perfil do paciente.
Respostas Contextuais: Capacidade de adaptar as respostas às condições específicas, como doenças preexistentes (ex.: diabetes).
Base de Dados Robusta: Integração com a API Groq para acessar um modelo de IA treinado com dados farmacológicos atualizados.
Interface Simples: Uma interface web básica para interação com o chatbot.
Backend Configurável: Backend desenvolvido em Node.js, com suporte para expansão futura.
Tecnologias Utilizadas
Frontend: HTML, CSS e JavaScript.
Backend: Node.js com Express.
IA: API Groq com modelo LLaMA-3.2-90B-Text-Preview.
Deploy: Firebase Hosting.
Gerenciamento de Dependências: NPM.
Como Rodar Localmente
Pré-requisitos
Node.js v18.0.0 ou superior.
Firebase CLI instalado.
Conta configurada no Firebase e projeto criado.
Chave da API Groq para comunicação com o modelo de IA.
Configuração do Ambiente
Clone o repositório:
bash
Copiar código
git clone https://github.com/SeuUsuario/SeuRepositorio.git
cd SeuRepositorio
Instale as dependências:
bash
Copiar código
npm install
Configure as variáveis de ambiente no arquivo .env:
env
Copiar código
GROQ_API_KEY=your_api_key
Executar Localmente
Inicie o servidor:
bash
Copiar código
node index.js
Abra o arquivo index.html no navegador ou use ferramentas como Postman para testar o endpoint /ia.
Deploy no Firebase
Faça login no Firebase:
bash
Copiar código
firebase login
Configure o Firebase no projeto:
bash
Copiar código
firebase init
Escolha "Hosting" e siga as instruções.
Selecione o diretório de deploy (por exemplo, public).
Faça o deploy:
bash
Copiar código
firebase deploy
Estrutura do Projeto
bash
Copiar código
.
├── public/              # Arquivos do frontend
│   ├── index.html       # Interface web
│   ├── style.css        # Estilos
│   └── script.js        # Lógica do frontend
├── index.js             # Backend (Node.js)
├── .env                 # Variáveis de ambiente
├── firebase.json        # Configuração do Firebase Hosting
├── package.json         # Dependências e scripts do projeto
└── README.md            # Documentação
Ideias Futuras
O projeto tem potencial para crescer e incluir funcionalidades avançadas, como:

Orquestração de Agentes:
Um agente para trabalhar com histórico médico do paciente, utilizando informações registradas de maneira segura para personalizar ainda mais as interações.
Outro agente para consultar artigos científicos atualizados, garantindo que as informações fornecidas estejam sempre alinhadas com as últimas descobertas médicas.
Suporte Multiplataforma: Expandir o chatbot para ser integrado em aplicativos móveis ou plataformas como WhatsApp e Telegram.
Melhoria do Modelo de IA: Incorporar treinamento adicional com dados próprios para especializar ainda mais o chatbot.
Contribuições
Sinta-se à vontade para contribuir com o projeto! Basta abrir uma issue ou enviar um pull request.

Licença
Este projeto é de código aberto e está disponível sob a licença MIT.
