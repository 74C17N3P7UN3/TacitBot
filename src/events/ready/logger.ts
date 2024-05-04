import { Client } from 'discord.js'

import { logger } from '@/utils'

const onlineNotice = (client: Client<true>) => {
   logger({ title: '✅ Bot', message: `${client.user.username} is online` })
   console.log(`\n${'-'.repeat(40)}\n`)
}

export default onlineNotice
