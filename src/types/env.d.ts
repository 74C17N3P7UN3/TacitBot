declare global {
   namespace NodeJS {
      interface ProcessEnv {
         BOT_TOKEN: string
         MONGODB_URI: string
      }
   }
}

export { }
