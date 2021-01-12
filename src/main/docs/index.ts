import { loginPath, surveyPath } from './paths'
import { badRequest, unauthorized, notFound, serverError, forbidden } from './components'
import { accountSchema, loginParamsSchema, errorSchema, surveySchema, surveysSchema, surveyAnswerSchema, apiKeyAuthSchema } from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node API',
    description: 'Documentação API curso NodeJs, Typescript, TDD, Clean Architecture e SOLID - Rodrigo Manguinho - para realização de enquetes entre programadores',
    version: '1.0.0'
  },
  license: {
    name: 'GPL-3.0-or-later',
    url: ''
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }, {
    name: 'Enquete'
  }],
  paths: {
    '/login': loginPath,
    '/surveys': surveyPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema,
    surveys: surveysSchema,
    survey: surveySchema,
    surveyAnswer: surveyAnswerSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest,
    unauthorized,
    notFound,
    serverError,
    forbidden
  }
}
