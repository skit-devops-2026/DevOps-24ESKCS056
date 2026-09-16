const test = require('node:test');

const assert = require('node:assert/strict');

const request = require('supertest');

const app = require('../app');

test('GET /api/health returns HTTP 200', async () => {
  const response = await request(app).get('/api/health');

  assert.equal(response.statusCode, 200);
});

test('GET /api/health returns status ok', async () => {
  const response = await request(app).get('/api/health');

  assert.equal(response.body.status, 'ok');
});

test('GET /api/health returns TripCraft message', async () => {
  const response = await request(app).get('/api/health');

  assert.match(
    response.body.message,
    /TripCraft API running/
  );
});

test('GET /api/health returns uptime', async () => {
  const response = await request(app).get('/api/health');

  assert.equal(response.statusCode, 200);
  assert.equal(typeof response.body.uptime, 'number');
  assert.ok(response.body.uptime >= 0);
});