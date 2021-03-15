const expect  = require('chai').expect;
const request = require('supertest');
const app = require("../app");

describe("app/", () => {

it('Main page', async () => {
        const res = await request(app).get("/app");
        expect(res.status).to.equal(200);
        expect(res.text).to.equal('Hello there');
});

it('Any Other pages should return ', async () => {
    const res = await request(app).get("/any");
      expect(res.status).to.equal(404);
      expect(res.text).to.equal('PAGE NOT FOUND');
});
});