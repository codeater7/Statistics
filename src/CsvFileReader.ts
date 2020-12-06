import fs from 'fs'
import { dateStringToDate } from './utils';
import {MatchResult} from './MatchResult'
// defining the tuple as the new type 
type MatchData = [Date, string, string, number, number, MatchResult, string]



export class CsvFileReader {
    data: MatchData [] = [];

    constructor (public filename: string){}

    read():void {
        this.data = fs.readFileSync(this.filename, {encoding:'utf-8'})
        .split('\n')
        .map ( (row:string):string[]=> {
            return row.split(',')
        }) // below changing into appropriate type of Value
        .map((row:string[]):MatchData => {
            return [ 
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult, // type assertion  'H' A D
                row[6]
            ]
        })
    }
}
// 10/08/2018, Manutd , Leichester, '2', '1',  H, A Marriner
// 0             1         2         3     4   
// row 5 as MatchResult, we developer override scripts default bahavoour. Instead of 