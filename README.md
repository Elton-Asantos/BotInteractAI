# ChatBot de Interação Medicamentosa

## Descrição
Este é um chatbot que utiliza inteligência artificial para fornecer informações confiáveis sobre interações medicamentosas. Ele considera fatores como sexo, idade e histórico médico do paciente, garantindo respostas personalizadas e contextualizadas. O projeto foi desenvolvido com **Node.js**, utilizando a API **Groq** e o modelo **LLaMA-3.2-90B-Text-Preview**, e foi hospedado no **Firebase**.

---

## 🛠️ Funcionalidades

- **Interações Medicamentosas Personalizadas**: Responde de forma precisa e adaptada ao perfil do paciente.
- **Base de Dados Atualizada**: Utiliza um modelo de IA treinado com informações farmacológicas.
- **Frontend Simples**: Interface web para facilitar a interação com o chatbot.
- **Backend Flexível**: Desenvolvido em Node.js, com arquitetura pronta para escalabilidade.
- **Hospedagem no Firebase**: Solução confiável para disponibilizar o serviço online.

---

## 📂 Estrutura do Projeto

. ├── public/ # Arquivos do frontend │ ├── index.html # Interface web │ ├── style.css # Estilos (opcional, se usado) │ └── script.js # Lógica do frontend ├── index.js # Backend (Node.js) ├── .env # Variáveis de ambiente (não incluído no repositório) ├── firebase.json # Configuração do Firebase Hosting ├── package.json # Dependências e scripts do projeto └── README.md # Documentação do projeto

---

## 🚀 Como Rodar o Projeto Localmente

### Pré-requisitos

- **Node.js** v18.0.0 ou superior.
- **Firebase CLI** instalado.
- Uma conta configurada no Firebase com um projeto criado.
- Chave da API **Groq** para comunicação com o modelo de IA.

### Configuração

1. Clone este repositório:
   ```bash
   git clone https://github.com/SeuUsuario/SeuRepositorio.git
   cd SeuRepositorio
   
# ChatBot de Interação Medicamentosa

## Descrição
Este é um chatbot que utiliza inteligência artificial para fornecer informações confiáveis sobre interações medicamentosas. Ele considera fatores como sexo, idade e histórico médico do paciente, garantindo respostas personalizadas e contextualizadas. O projeto foi desenvolvido com **Node.js**, utilizando a API **Groq** e o modelo **LLaMA-3.2-90B-Text-Preview**, e foi hospedado no **Firebase**.

---

## 🛠️ Funcionalidades

- **Interações Medicamentosas Personalizadas**: Responde de forma precisa e adaptada ao perfil do paciente.
- **Base de Dados Atualizada**: Utiliza um modelo de IA treinado com informações farmacológicas.
- **Frontend Simples**: Interface web para facilitar a interação com o chatbot.
- **Backend Flexível**: Desenvolvido em Node.js, com arquitetura pronta para escalabilidade.
- **Hospedagem no Firebase**: Solução confiável para disponibilizar o serviço online.

---

## 📂 Estrutura do Projeto

. ├── public/ # Arquivos do frontend │ ├── index.html # Interface web │ ├── style.css # Estilos (opcional, se usado) │ └── script.js # Lógica do frontend ├── index.js # Backend (Node.js) ├── .env # Variáveis de ambiente (não incluído no repositório) ├── firebase.json # Configuração do Firebase Hosting ├── package.json # Dependências e scripts do projeto └── README.md # Documentação do projeto

yaml
Copiar código

---

## 🚀 Como Rodar o Projeto Localmente

### Pré-requisitos

- **Node.js** v18.0.0 ou superior.
- **Firebase CLI** instalado.
- Uma conta configurada no Firebase com um projeto criado.
- Chave da API **Groq** para comunicação com o modelo de IA.

### Configuração

1. Clone este repositório:
   ```bash
   git clone https://github.com/SeuUsuario/SeuRepositorio.git
   cd SeuRepositorio
2. Instale as dependências:
    ```bash
    npm install

3. Crie um arquivo .env e configure a chave da API:
    ```bash
   GROQ_API_KEY=your_api_key

Executar Localmente:

1. Inicie o servidor
    ```bash
    node index.js

3. Abra o arquivo index.html no navegador ou use ferramentas como Postman para testar o endpoint /ia.

🌐 Deploy no Firebase
1. Faça login no Firebase:

firebase login
   
2. Configure o Firebase no projeto:

firebase init
Escolha "Hosting" e siga as instruções.
Defina o diretório de deploy (geralmente public).

3. Realize o deploy:

firebase deploy

## 💡 Ideias Futuras
### O projeto tem potencial para ser expandido com funcionalidades avançadas:

### Orquestração de Agentes:

#### Um agente para processar o histórico médico do paciente, garantindo uma personalização ainda maior.
Outro agente para consultar artigos científicos atualizados, fornecendo informações alinhadas com as últimas descobertas médicas.
Suporte Multiplataforma: Adicionar integração com WhatsApp, Telegram e aplicativos móveis.

Melhoria do Modelo de IA: Treinamento adicional utilizando dados próprios para especializar ainda mais o chatbot.

🤝 Contribuições
Contribuições são bem-vindas!
Siga os passos para colaborar:

 Faça um fork deste repositório.
 Crie uma branch para suas alterações:
   ```bash
       git checkout -b minha-nova-funcionalidade
   ```
 Envie suas alterações via pull request.
 📄 Licença
 Este projeto está disponível sob a licença MIT.
