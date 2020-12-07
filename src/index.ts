import {CsvFileReader} from './CsvFileReader'
import {MatchReader} from './MatchReader';
import {ConsoleReport }from './reportTargets/ConsoleReport'
import {WinsAnalysis} from './analyzers/WinsAnalysis';
import {Summary} from './Summary';



// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv')

//Create an instace of MatchReader and pass in something satisfying the 'DataRead' interface
const matchReader =new MatchReader(csvFileReader)
matchReader.load();
// (Actual parsed data is availaböe on match reader.matches)
//MatchReader.matches
const summary = new Summary (new WinsAnalysis('Man United'), new ConsoleReport())

summary.buildAndPrintReport(matchReader.matches)



// Obeject Composition: We are going to give one object reference to other objects and then the main object. 
// It essentially delegate certain behavios out to those third party objects.