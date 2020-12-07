"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var Summary_1 = require("./Summary");
// Create an object that satisfies the 'DataReader' interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
//Create an instace of MatchReader and pass in something satisfying the 'DataRead' interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// (Actual parsed data is availaböe on match reader.matches)
//MatchReader.matches
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
// Obeject Composition: We are going to give one object reference to other objects and then the main object. 
// It essentially delegate certain behavios out to those third party objects.
