"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require("../"));
const chai_1 = __importDefault(require("chai"));
const should = chai_1.default.should();
/**
 * Print Class
 */
describe('Print Class', () => {
    it('Is function', () => {
        __1.default.should.be.a('function');
    });
});
