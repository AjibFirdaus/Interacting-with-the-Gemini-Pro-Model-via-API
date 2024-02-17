const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI('YOUR-API-KEY');
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

async function generate() {
  const prompt = "Hello gemini"

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

generate();