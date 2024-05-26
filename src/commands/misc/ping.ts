import { CommandData, SlashCommandProps } from 'commandkit'
import { ChannelType } from 'discord.js'

import { embeds, isAdmin } from '@/utils'

export const data: CommandData = {
   name: 'ping',
   description: 'The bot\'s connection ping',
}

export const run = async ({ interaction }: SlashCommandProps) => {
   // Check if the command was used in a guild text channel
   if (!interaction.inGuild() || interaction.channel?.type !== ChannelType.GuildText) {
      const embed = embeds.error('🏓 Ping', 'This command can only be used in a guild text channel.')
      return await interaction.reply({ embeds: [embed], ephemeral: true })
   }

   // Check if the user is an admin
   if (!isAdmin(interaction.member)) {
      const embed = embeds.error('🏓 Ping', 'This command can only be run by admins.')
      return await interaction.reply({ embeds: [embed], ephemeral: true })
   }

   await interaction.deferReply()

   const reply = await interaction.fetchReply()
   const ping = reply.createdTimestamp - interaction.createdTimestamp

   const embed = embeds.default('🏓 Ping', `Bot\'s latency: ${ping}ms`)
   interaction.editReply({ embeds: [embed] })
}
