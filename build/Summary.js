"use strict";
// We are going to implement two interface: Analyzer and class Summary
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
// KEY to obejct composition: when we define an instance of class summary, we're going to pass in an 
//instance to use use an instance of an object to use as the analyzer, and tna instace to use as an OutPut target
// Arko word ma mathi ko interface
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
// Our class summary doesn't have much much behavior to it. It has references to other objects,
// Whenever we send a command or call a method on summary, summary is not responsible for doing anythng
// Instead it is going to attempt to use these different objects that it has references 
//Great thing about it ism we can really swap out the analyzer or the output target and get different outputs
// of information or genereate different kind of reports.
// summary main vayee ni compostion ma arko ma var parxa... tala ko different class ho,
// But sap var parxa; yeslai nai compostion vanako hola
//new Summary (new WinsAnalysis(), new ConsoleReport());
