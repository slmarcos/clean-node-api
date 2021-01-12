import { apiKeyAuthSchema } from './schemas/'
import {
  badRequest,
  unauthorized,
  notFound,
  serverError,
  forbidden
} from './components/'

export default {
  securitySchemes: {
    apiKeyAuth: apiKeyAuthSchema
  },
  badRequest,
  unauthorized,
  notFound,
  serverError,
  forbidden
}
