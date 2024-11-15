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
import '#routes/login_routes'

router.get('/', async () => {
  return {
    ok: true,
  }
})
