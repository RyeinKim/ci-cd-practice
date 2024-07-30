// tests/app.test.js
const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('Hello, Universe!'); // 메시지 변경
});

describe('GET /', () => {
    it('should return Hello, Universe!', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('Hello, Universe!'); // 테스트 메시지 변경
    });
});
