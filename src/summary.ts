// We are going to implement two interface: Analyzer and class Summary

import { MatchData } from "./MatchData";

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
    constructor (public analyzer: Analyzer, public outputTarget: OutputTarget){}
}


// summary main vayee ni compostion ma arko ma var parxa... tala ko different class ho,
// But sap var parxa; yeslai nai compostion vanako hola
//new Summary (new WinsAnalysis(), new ConsoleReport());