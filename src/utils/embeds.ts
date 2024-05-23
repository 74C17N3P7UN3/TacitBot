import { EmbedBuilder } from 'discord.js'

import { colors } from '@/constants'

const embedDefault = (command: string, message: string) =>
   new EmbedBuilder({
      color: colors.default,
      description: message,
      title: command,
   })

const embedError = (command: string, message: string) =>
   new EmbedBuilder({
      color: colors.red,
      description: message,
      title: command,
   })

const embedSuccess = (command: string, message: string) =>
   new EmbedBuilder({
      color: colors.green,
      description: message,
      title: command,
   })

export const embeds = {
   default: embedDefault,
   error: embedError,
   success: embedSuccess,
}
