const request = require('supertest');
const app = require('../../../index');
const { expect } = require('chai');
let post_id;

describe('user makes posts', function () {
  it('should return all posts', async function () {
    const res = await request(app).get('/posts/get-all-post');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('object');
  });

  it('should create a post', async function () {
    const res = await request(app).post('/posts/add-post').send({
      description: 'test',
      imagePath: 'any.jpg',
      addedByUserId: '1',
    });
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('object');
    post_id = res.body.data.id;
  });

  it('should add a comment', async function () {
    const res = await request(app).post('/posts/add-post-comment').send({
      postId: post_id,
      comment: 'test comment',
      addedByUserId: '1',
    });
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('object');
  });

  it('should return all comments for a post', async function () {
    const res = await request(app).get(
      `/posts/get-post-all-comments?postId=${post_id}`
    );
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('object');
  });

  it('should like a post', async function () {
    const res = await request(app).put('/posts/like-post').send({
      postId: post_id,
    });
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('object');
    expect(res.body.data).to.be.equal('Like Successful');
  });

  it('should dislike a post', async function () {
    const res = await request(app).put('/posts/dislike-post').send({
      postId: post_id,
    });
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('object');
    expect(res.body.data).to.be.equal('Dislike Successful');
  });

  it('should delete the post', async function () {
    const res = await request(app).delete(
      `/posts/delete-post?postId=${post_id}`
    );
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('object');
  });
});
