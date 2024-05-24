import { PermissionFlagsBits } from 'discord.js'

import { GuildMemberType, LogType, PermissionsType } from '@/types'

export const log = ({ title = 'console', message }: LogType) => {
   const formatTime = (time: number) => (time < 10) ? '0' + time : time

   const date = new Date()
   const hh = formatTime(date.getHours())
   const mm = formatTime(date.getMinutes())
   const ss = formatTime(date.getSeconds())

   const timeString = `[${hh}:${mm}:${ss}]`
   console.log(`${timeString} ${title}: ${message}.`)
}

export const isAdmin = (guildMember: GuildMemberType) => {
   const permissions = guildMember.permissions as PermissionsType
   return permissions?.has(PermissionFlagsBits.Administrator) ?? false
}
