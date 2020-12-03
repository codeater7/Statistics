
import {MatchResult} from './MatchResult'
import { MatchReader } from './MatchReader';

const reader = new MatchReader('football.csv')
reader.read();
console.log( reader.data[0])





let manUtdWins = 0;
for ( let match of reader.data ){
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin){
        manUtdWins++;
    }else if (match[2]==='Man United' && match[5] === MatchResult.AwayWin){
        manUtdWins++;
    }
}
;
console.log(`Man United won ${manUtdWins} games`)