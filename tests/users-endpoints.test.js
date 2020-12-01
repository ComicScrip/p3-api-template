const request = require('supertest');
const app = require('../app.js');
const User = require('../models/user.js');

let res;
describe('users endpoints', () => {
  describe('GET /users', () => {
    beforeEach(async () => {
      await Promise.all([
        User.create('john doe', 'john.doe@gmail.com'),
        User.create('jane doe', 'jane.doe@gmail.com'),
      ]);
      res = await request(app).get('/users');
    });

    it('returns 200 status', () => {
      expect(res.status).toBe(200);
    });

    it('returns the proper elements', () => {
      expect(Array.isArray(res.body));
      expect(res.body.length).toBe(2);
    });
  });
});
