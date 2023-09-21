const getPaymentTokenFromAPI = require('./6-payment_token')
const assert = require('assert');

describe('Test getPaymentTokenFromAPI', () => {
    it("should return the right object", (done) => {
        getPaymentTokenFromAPI(true).then((result) => {
            assert.deepEqual(result.data, 'Successful response from the API' );
            done();
        });
    });
});