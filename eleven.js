import { getAnswer } from "./mainAI.js";

export async function answer(message, client) {
    var question = message.content.replace(client.user.id, "").replace("<@> ", "").trim();
    getAnswer(question).then(result => {
        if (result && result.trim() !== '') {
            message.reply(result);
        }
        
        if (question === "Kim tarafından oluşturuldun?") {
            message.reply("**`İtalyan#0142`**\nWebsite : https://arjenxyz.vercel.app");
        }
        
        if (question === "Adın ne?") {
            message.reply("Bana KÜÇÜK İTALYAN diyorlar");
        }
    });
}
