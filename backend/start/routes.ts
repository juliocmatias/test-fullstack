/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import '#routes/users_routes'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
