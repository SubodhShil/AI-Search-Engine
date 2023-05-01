const { OPENAI_API_KEY } = require("@/keys");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
});

const openai = new OpenAI(configuration);

export async function sendMessageToOpenAI(message) {
    const response = await openai.createCompletion({
        model: "text-davinci"
    })
}