const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let spy;
    beforeEach(() => {
        spy = sinon.spy(console, "log");
    });

    it('checks that console.log is called once and with the right output',  () => {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWith(spy, 'The total is: 120');
        sinon.assert.calledOnce(spy);
    });

    it('checks that console.log is printing the right value and is called once',  () => {
        sendPaymentRequestToApi(10, 10);
        sinon.assert.calledWith(spy, 'The total is: 20');
        sinon.assert.calledOnce(spy);
    });
    afterEach(() => {
        spy.restore();
    });
});
