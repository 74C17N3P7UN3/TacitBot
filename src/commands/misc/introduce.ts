import { CommandData, SlashCommandProps } from 'commandkit'
import { EmbedBuilder } from 'discord.js'

import { avatars, colors } from '@/constants'

export const data: CommandData = {
   name: 'introduce',
   description: 'The bot\'s self-description',
}

export const run = ({ interaction }: SlashCommandProps) => {
   const embed = new EmbedBuilder({
      color: colors.default,
      title: 'TacitBot#8050',
      description: `I\'m TacitNeptune\'s Guinea Pig to
                    mess around with Discord.js features.`,
      thumbnail: {
         url: avatars.bot,
      },
      footer: {
         iconURL: avatars.tacit,
         text: 'Developed by @tacitneptune',
      },
   })

   interaction.reply({ embeds: [embed] })
}
