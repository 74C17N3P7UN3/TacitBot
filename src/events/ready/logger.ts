import { Client } from 'discord.js'

import { log } from '@/utils'

const onlineNotice = (client: Client<true>) => {
   log({ title: '✅ Bot', message: `${client.user.username} is online` })
   console.log(`\n${'-'.repeat(40)}\n`)
}

export default onlineNotice
