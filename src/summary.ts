// We are going to implement two interface: Analyzer and class Summary

import { MatchData } from "./MatchData";
import {WinsAnalysis} from './analyzers/WinsAnalysis'
import {HtmlReport} from './reportTargets/HtmlReports'

export interface Analyzer {
    run (matches: MatchData[]):string;

}
export interface OutputTarget{
    print(report:string):void;
}
// KEY to obejct composition: when we define an instance of class summary, we're going to pass in an 
//instance to use use an instance of an object to use as the analyzer, and tna instace to use as an OutPut target
// Arko word ma mathi ko interface


export  class Summary{

    static winsAnalysisWithHtmlReport (team:string):Summary{
        return new Summary(
            new WinsAnalysis(team), new HtmlReport()
        )
    }
    constructor (public analyzer: Analyzer, public outputTarget: OutputTarget){}

    buildAndPrintReport( matches:MatchData[]):void{
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output)

    }
}

