
import {MatchResult} from './MatchResult'
import {CsvFileReader} from './CsvFileReader'
import {MatchReader} from './MatchReader';



// Create an object that satisfies the 'DataReader' interface

const csvFileReader = new CsvFileReader('football.csv')
//Create an instace of MatchReader and pass in something satisfying the 'DataReade' interface
const matchReader =new MatchReader(csvFileReader)
matchReader.load();
//MatchReader.matches


let manUtdWins = 0;
for ( let match of matchReader.matches ){
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin){
        manUtdWins++;
    }else if (match[2]==='Man United' && match[5] === MatchResult.AwayWin){
        manUtdWins++;
    }
}
;
console.log(`Man United won ${manUtdWins} games`)