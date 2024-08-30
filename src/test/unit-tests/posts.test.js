const request = require('supertest');
const app = require('../../../index');
const { expect } = require('chai');
let post_id

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
    post_id = res.body.data.id;
  })
  it("should delete the post", async () => {
    const res= await request(app).delete(`/posts/delete-post?postId=${post_id}`)
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("object");
  })
});
