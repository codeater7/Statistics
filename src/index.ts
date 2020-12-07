import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();
// (Actual parsed data is availaböe on match reader.matches)
//MatchReader.matches
//const summary = new Summary (new WinsAnalysis('Man United'), new ConsoleReport())
//const summary = new Summary (new WinsAnalysis('Man United'), new HtmlReport())
const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);

// Obeject Composition: We are going to give one object reference to other objects and then the main object.
// It essentially delegate certain behavios out to those third party objects.
