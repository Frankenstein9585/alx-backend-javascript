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

describe('Test express app (available_payments)', () => {
    it('should have status 200', (done) => {
        request('http://localhost:7865/available_payments', (err, res) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it('should return the right body', (done) => {
        request('http://localhost:7865/available_payments', (err, res, body) => {
            const expectedObject = {
                payment_methods: {
                    credit_cards: true,
                    paypal: false
                }
            };
            expect(JSON.parse(body)).to.deep.equal(expectedObject);
            done();
        });
    });
});

describe('Test express app (login)', () => {
    it('should have status 200', (done) => {
        request.post({
            url: 'http://localhost:7865/login',
            form: { userName: 'Betty' },
        }, (err, res) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it('should return the right body', (done) => {
        request.post({
            url: 'http://localhost:7865/login',
            json: { userName: 'Betty' },
        }, (err, res) => {
            expect(res.body).to.equal('Welcome: Betty');
            done();
        });
    });
});
