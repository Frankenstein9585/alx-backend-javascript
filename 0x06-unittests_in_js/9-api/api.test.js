// const app = require('./api.js')
const chai = require('chai');
// const chaiHttp = require('chai-http');
const request = require('request');
// chai.use(chaiHttp);
const expect = chai.expect;

describe('Test express app (index page)', () => {
    it('should have status 200', (done) => {
       request('http://localhost:7865', (err, res) => {
           expect(res.statusCode).to.equal(200);
           done();
       });
    });

    it('should check that the body has the right content', (done) => {
        request('http://localhost:7865', (err, res) => {
            expect(res.body).to.equal('Welcome to the payment system');
            done();
        });
    });
});

describe('Test express app (cart page)', () => {
    it('should have status 200 when id is a number', (done) => {
        request('http://localhost:7865/cart/21', (err, res) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it('should return the right body when id is number', (done) => {
        request('http://localhost:7865/cart/21', (err, res) => {
            expect(res.body).to.equal('Payment methods for cart 21');
            done();
        });
    });

    it('should have status 404 when id is not a number', (done) => {
        request('http://localhost:7865/cart/hello', (err, res) => {
            expect(res.statusCode).to.equal(404);
            done();
        });
    });
});