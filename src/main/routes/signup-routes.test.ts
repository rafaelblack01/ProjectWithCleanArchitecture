import request from 'supertest'
import app from '../config/app'

describe('Signup Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Rafael',
        email: 'rafael_email@mail.com',
        password: 'leafar',
        passwordConfirmation: 'leafar'
      })
      .expect(200)
  })
})
