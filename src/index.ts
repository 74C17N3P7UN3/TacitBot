import 'dotenv/config'

import { CommandKit } from 'commandkit'
import { Client, GatewayIntentBits } from 'discord.js'
import mongoose from 'mongoose'

import { log } from '@/utils'

const client = new Client({
   intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildPresences,
      GatewayIntentBits.MessageContent,
   ]
})

new CommandKit({
   client: client,
   bulkRegister: true,
   devGuildIds: ['1234456702095720519'],
   devUserIds: ['566676482106064897'],
   commandsPath: `${__dirname}/commands`,
   eventsPath: `${__dirname}/events`,
})

const start = async () => {
   console.clear()

   await mongoose.connect(process.env.MONGODB_URI)
   log({ title: '🍂 Database', message: 'Connected' })

   client.login(process.env.BOT_TOKEN)
}

start() // Start the bot
