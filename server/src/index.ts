import 'reflect-metadata'

import * as Koa from 'koa'
import { useKoaServer } from 'routing-controllers'

import AppController from './AppController'

const app = new Koa()
const port = 4000

useKoaServer(app, {
  cors: true,
  controllers: [
    AppController
  ]
})

app.listen(port, () => console.log(`Listening on port ${port}`))