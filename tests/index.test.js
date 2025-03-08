const request = require('supertest');
const app = require('../index.js'); // Adjust this if needed

test('Basic test', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
});
