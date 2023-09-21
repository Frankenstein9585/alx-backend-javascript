// const app = require('./api.js')
const chai = require('chai');
// const chaiHttp = require('chai-http');
const request = require('request');
// chai.use(chaiHttp);
const expect = chai.expect;

describe('Test express app', () => {
    it('should have status 200', (done) => {
       request('http://localhost:7865', (err, res) => {
           expect(res.statusCode).to.equal(200);
       });
       done();
    });

    it('should check that the body has the right content', (done) => {
        request('http://localhost:7865', (err, res) => {
            expect(res.body).to.equal('Welcome to the payment system');
        });
        done();
    });
});