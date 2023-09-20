const Utils = require('./utils');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    let spy = sinon.spy(Utils, "calculateNumber");
    it('checks that calculateNumber was called',  () => {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnce(spy);
    });

    it('checks that calculateNumber was called with correct parameters',  () => {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWith(spy, 'SUM', 100, 20);
    });
});