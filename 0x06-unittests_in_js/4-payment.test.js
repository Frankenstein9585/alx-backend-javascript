const Utils = require('./utils');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    let stub;
    beforeEach(() => {
        stub = sinon.stub(Utils, "calculateNumber");
        stub.returns(10);
    });

    it('checks that calculateNumber() is called with the right parameters',  () => {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWith(stub, 'SUM', 100, 20);
    });

    it('checks that console.log is printing the right value',  () => {
        let spy = sinon.spy(console, "log");
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWith(spy, 'The total is: 10');
        spy.restore();
    });
    afterEach(() => {
        stub.restore();
    });
});
