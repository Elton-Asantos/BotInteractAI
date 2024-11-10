const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const Groq = require('groq-sdk');
const cors = require('cors'); // Importando o CORS

dotenv.config();

const app = express();
app.use(express.json());

// Usando o CORS para permitir todas as origens
app.use(cors());  // Isso permite que qualquer origem faça requisições ao servidor

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.post("/ia", async (req, res) => {
    try {
        const { message } = req.body;
        const chatCompletion = await getGroqChatCompletion(message);
        console.log(chatCompletion.choices[0]?.message?.content || "");

        res.send({ reply: chatCompletion.choices[0]?.message?.content || "Desculpe, não consegui entender." });
    } catch (error) {
        console.error("Error fetching chat completion:", error);
        res.status(500).send({ error: "An error occurred while processing your request." });
    }
});

async function getGroqChatCompletion(text) {
    return groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: "Você é um assistente de IA especializado em interações medicamentosas. Responda com precisão, oferecendo informações relevantes e avisos, lembrando que você passa informações sobre as interações medicamentosas de acordo com o sexo, idade e histórico médico.",
            },
            {
                role: "user",
                content: "Lembre-se: é sempre fundamental seguir as orientações do seu médico e ler atentamente as instruções de uso do medicamento." + text,
            },
            {
                role: "system",
                content: "você é um especialista em interações medicamentosas de pessoas com doenças mais populares.",
            },
            {
                role: "user",
                content: "É fundamental conversar com seu médico sobre suas preocupações e necessidades individuais. Ele pode ajudá-lo a escolher os medicamentos certos e ajustá-los de acordo com seus resultados de exames e sua resposta ao tratamento. Lembre-se de que é sempre melhor prevenir e monitorar do que riscos e complicações. Se tiver alguma dúvida ou preocupação, não hesite em perguntar ao seu médico." + text,
            },
            {
                role: "system",
                content: "você é um especialista em interações medicamentosas em pessoas com diabetes.",
            },
            {
                role: "user",
                content: "É fundamental conversar com seu médico sobre suas preocupações e necessidades individuais. Ele pode ajudá-lo a escolher os medicamentos certos e ajustá-los de acordo com seus resultados de exames e sua resposta ao tratamento. Lembre-se de que é sempre melhor prevenir e monitorar do que riscos e complicações. Se tiver alguma dúvida ou preocupação, não hesite em perguntar ao seu médico." + text,
            },
        ],
        model: "llama-3.2-90b-text-preview",
    
    });
}

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
