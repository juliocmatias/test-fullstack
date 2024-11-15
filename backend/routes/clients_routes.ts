import router from '@adonisjs/core/services/router'
const ClientController = () => import('#controllers/client_controller')
import { middleware } from '#start/kernel'

router
  .group(() => {
    router.get('/', [ClientController, 'index'])
    router.post('/client', [ClientController, 'store']).use(middleware.clientValidation())
    router
      .put('/client/:id', [ClientController, 'update'])
      .where('id', router.matchers.number())
      .use(middleware.clientValidation())
    router
      .delete('/client/:id', [ClientController, 'destroy'])
      .where('id', router.matchers.number())
  })
  .prefix('clients')
  .middleware([middleware.tokenValidation()])
