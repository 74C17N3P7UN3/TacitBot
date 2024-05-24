import { CommandData, SlashCommandProps } from 'commandkit'

import { embeds, isAdmin } from '@/utils'

export const data: CommandData = {
   name: 'ping',
   description: 'The bot\'s connection ping',
}

export const run = async ({ interaction }: SlashCommandProps) => {
   // Check if the command is used in a server
   if (!interaction.inGuild()) {
      const embed = embeds.error('🏓 Ping', 'This command can only be used in a server.')
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
