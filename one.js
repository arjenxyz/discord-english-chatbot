import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();
const configuration = new Configuration({
    apiKey: process.env.API
});

const openai = new OpenAIApi(configuration);


export async function getAnswer (question) {
    try {
        const completion = await openai.createCompletion("text-davinci-002", {
            prompt: question,
            max_tokens: 600,
            temperature: 0.3,
            top_p: 0.3,
            presence_penalty: 0,
            frequency_penalty: 0.5,
        });
    
        if (completion.status != 200) {
            return "(Hata: 200)";
        }
        
        if (question === "Kim tarafından oluşturuldun?") {
            return;
        }
        
        if (question === "Adın ne?") {
            return;
        }
        return completion.data.choices.map((choice) => choice.text).join("</br>");
    } catch (error) {
        console.log(error);
        return "Üzgünüm, Ben Buna Cevap Veremem. \n" + error;
    }
}
