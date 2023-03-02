import { getAnswer } from "./one.js";

export async function answer(message, client) {
    var question = message.content.replace(client.user.id, "").replace("<@> ", "").trim();
    getAnswer(question).then(result => {
        if (result && result.trim() !== '') {
            message.reply(result);
        }
        
        if (question === "Kim tarafından oluşturuldun?") {
            message.reply("**Developer: `İtalyan#0142`**\n**Website:** https://arjenxyz.vercel.app");
        }
        
        if (question === "Adın ne?") {
            message.reply("Herhangi bir ismim bulunmamaktadır.\nFakat sahibim İtalyan#0142 bana küçük İtalyan der..");
        }
    });
}
