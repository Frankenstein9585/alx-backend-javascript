const Utils = require('./utils');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('checks that calculateNumber was called',  () => {
        let spy = sinon.spy(Utils, "calculateNumber");
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnce(spy);
        spy.restore();
    });

    it('checks that calculateNumber was called with correct parameters',  () => {
        let spy = sinon.spy(Utils, "calculateNumber");
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWith(spy, 'SUM', 100, 20);
        spy.restore();
    });
});