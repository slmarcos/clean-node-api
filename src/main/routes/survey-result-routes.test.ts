import app from '../config/app'
import request from 'supertest'

describe('Survey Routes', () => {
  describe('PUT /surveys/:surveyId/results', () => {
    test('Should return 403 on save survey result without accessToken', async () => {
      await request(app)
        .put('/api/surveys/any_id/results')
        .send({
          answer: 'Answer 1'
        })
        .expect(403)
    })
  })
})
