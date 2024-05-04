import { EmbedBuilder } from 'discord.js'

const embedDefault = (command: string, message: string) =>
   new EmbedBuilder({
      color: 0x456373,
      description: message,
      title: command
   })

const embedError = (command: string, message: string) =>
   new EmbedBuilder({
      color: 0xC0392B,
      description: message,
      title: command
   })

const embedSuccess = (command: string, message: string) =>
   new EmbedBuilder({
      color: 0x27AE60,
      description: message,
      title: command
   })

export const embeds = {
   default: embedDefault,
   error: embedError,
   success: embedSuccess
}
