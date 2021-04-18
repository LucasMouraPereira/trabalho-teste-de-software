"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fn1_1 = require("../fn1");
describe('sdsf', function () {
    it('basic', function () {
        expect(fn1_1.f1(true)).toBe(true);
    });
    it('basic again', function () {
        expect(fn1_1.f1(false)).toBe(false);
    });
});
