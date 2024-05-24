import { APIInteractionGuildMember, GuildMember, PermissionsBitField } from "discord.js"

export type LogType = {
   title?: string
   message: string
}

export type GuildMemberType = GuildMember | APIInteractionGuildMember

export type PermissionsType = Readonly<PermissionsBitField> | undefined
