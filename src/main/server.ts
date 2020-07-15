import { mongoHelper } from '../infra/db/mongodb/helpers/mongo-helper'
import env from './config/env'

mongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(env.port, () => console.log(`> Server running at localhost:${env.port}`))
  })
  .catch(console.error)
