'use strict';

const sinon = require('sinon');

const dymmy = {};
const mock = sinon.mock(object);
// @TODO actions here !
mock.verify();
mock.restore();
const spy = sinon.spy(object, 'functionName');
// @TODO function watcher here !
spy.restore();
const stub = sinon.stub(object, 'functionName').callsFake(() => {
    // @TODO the overwrite behavior
});
// @TODO assertions or expects here !!
stub.restore();