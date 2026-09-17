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

test('GET /metrics returns Prometheus metrics that record requests', async () => {
  const beforeResponse = await request(app).get('/metrics');
  const beforeMatch = beforeResponse.text.match(
    /tripcraft_http_requests_total\{method="GET",route="\/api\/health",status_code="200"\} (\d+)/
  );

  await request(app).get('/api/health');

  const afterResponse = await request(app).get('/metrics');
  const afterMatch = afterResponse.text.match(
    /tripcraft_http_requests_total\{method="GET",route="\/api\/health",status_code="200"\} (\d+)/
  );

  assert.equal(beforeResponse.statusCode, 200);
  assert.match(
    beforeResponse.headers['content-type'],
    /text\/plain/
  );
  assert.ok(beforeMatch);
  assert.ok(afterMatch);
  assert.ok(Number(afterMatch[1]) > Number(beforeMatch[1]));
  assert.match(afterResponse.text, /process_cpu_user_seconds_total/);
});