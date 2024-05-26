import { CommandData, SlashCommandProps } from 'commandkit'
import { ApplicationCommandOptionType, ChannelType, Message } from 'discord.js'

import { embeds, isAdmin } from '@/utils'

export const data: CommandData = {
   name: 'clear',
   description: 'Clears messages from the chat',
   options: [
      {
         name: 'amount',
         description: 'The amount of messages to clear',
         type: ApplicationCommandOptionType.Integer,
         min_value: 1,
         required: true,
      },
      {
         name: 'user',
         description: 'The user to clear messages from',
         type: ApplicationCommandOptionType.User,
      },
   ],
}

export const run = async ({ interaction }: SlashCommandProps) => {
   // Check if the command was used in a guild text channel
   if (!interaction.inGuild() || interaction.channel?.type !== ChannelType.GuildText) {
      const embed = embeds.error('🧹 Clear', 'This command can only be used in a guild text channel.')
      return await interaction.reply({ embeds: [embed], ephemeral: true })
   }

   // Check if the user is an admin
   if (!isAdmin(interaction.member)) {
      const embed = embeds.error('🧹 Clear', 'This command can only be run by admins.')
      return await interaction.reply({ embeds: [embed], ephemeral: true })
   }

   await interaction.deferReply({ ephemeral: true })

   // Get the amount of messages to clear and the optional user
   let amount = interaction.options.getInteger('amount', true)
   const user = interaction.options.getUser('user')

   // Get the channel's messages list
   const messages = await interaction.channel.messages.fetch()

   if (!messages || messages.size === 0) {
      const embed = embeds.error('🧹 Clear', 'No messages to delete.')
      return await interaction.editReply({ embeds: [embed] })
   }

   // Delete the messages
   const messagesToDelete: Message[] = []

   amount = amount > messages.size ? messages.size : amount
   let count = 0

   messages.every((message) => {
      if (count >= amount) return false

      if (!user || (user && message.author.id === user.id)) {
         messagesToDelete.push(message)
         ++count
      }

      return true
   })

   await interaction.channel.bulkDelete(messagesToDelete)

   const embed = embeds.success('🧹 Clear', `Successfully deleted **${messagesToDelete.length}** messages.`)
   await interaction.editReply({ embeds: [embed] })
}
