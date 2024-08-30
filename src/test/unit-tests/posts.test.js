const request = require('supertest');
const app = require('../../../index');
const { expect } = require('chai');

describe('user makes posts', () => {
  it('should return all posts', async () => {
    const res = await request(app).get('/posts/get-all-post');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("object");
  });
  it("should create a post", async () => {
    const res= await request(app).post("/posts/add-post").send({
        "description": "test",
        "imagePath": "any.jpg",
        "addedByUserId": "1"
    })
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("object");
  })
});
