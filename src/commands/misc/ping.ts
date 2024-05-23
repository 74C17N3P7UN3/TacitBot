import { CommandData, CommandOptions, SlashCommandProps } from 'commandkit'

import { embeds } from '@/utils'

export const data: CommandData = {
   name: 'ping',
   description: 'The bot\'s connection ping',
}

export const run = async ({ interaction }: SlashCommandProps) => {
   await interaction.deferReply()

   const reply = await interaction.fetchReply()
   const ping = reply.createdTimestamp - interaction.createdTimestamp

   const embed = embeds.default('🏓 Ping', `Bot\'s latency: ${ping}ms`)
   interaction.editReply({ embeds: [embed] })
}

export const options: CommandOptions = {
   userPermissions: ['Administrator']
}
