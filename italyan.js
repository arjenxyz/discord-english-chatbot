import Discord from "discord.js";
import { answer } from "./eleven.js";
import dotenv from "dotenv";

dotenv.config();
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`İtalyan#0142 Tarafından Yapılmıştır.`, { type: "COMPETING"})
});

client.on("reconnecting", () => {
  console.log(`Bağlanılıyor - ${client.user.tag}!`)
});

client.on("disconnect", () => {
  console.log(`Bağlanılamadı - ${client.user.tag}!`)
});

client.on("message", async message => {
  if (message.author.bot) return;

  if (message.mentions.has("@here") || message.mentions.has("@everyone") || message.type == "REPLY") return;

  if (message.content === "ping") {
    message.reply("pong");
    return;
  }

  if (message.mentions.has(client.user.id) || message.content.toString().includes(process.env.ROBOT_USER_ID)) {
    answer(message, client);
  }
});
const http = require("http");
http.createServer((_, res) => res.end("Made By İtalyan")).listen(8080)
client.login(process.env.CLIENT_TOKEN);


