import * as router from 'express'
import { DatabaseInterface } from '../controllers/database.interface'
const routes = router.Router()
import { NeoController } from '../controllers/neo.controller'

const controller: DatabaseInterface = new NeoController('Player')
routes.get('/', controller.getAll)
routes.get('/:id', controller.getById)
routes.delete('/:id', controller.delete)

export default routes