import { LoggerType } from '@/types'

export const logger = ({ title, message }: LoggerType) => {
   const formatTime = (time: number) => (time < 10) ? '0' + time : time

   const date = new Date()
   const hh = formatTime(date.getHours())
   const mm = formatTime(date.getMinutes())
   const ss = formatTime(date.getSeconds())

   const timeString = `[${hh}:${mm}:${ss}]`
   console.log(`${timeString} ${title ?? 'Console'}: ${message}.`)
}
