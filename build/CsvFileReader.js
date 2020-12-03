"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    // Marking abstract indicates that it's going to be implemented by our child.
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default.readFileSync(this.filename, { encoding: 'utf-8' })
            .split('\n')
            .map(function (row) {
            return row.split(',');
        }) // below changing into appropriate type of Value
            .map(this.mapRow);
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
// 10/08/2018, Manutd , Leichester, '2', '1',  H, A Marriner
// 0             1         2         3     4   
// row 5 as MatchResult, we developer override scripts default bahavoour. Instead of 
