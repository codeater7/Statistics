import fs from 'fs'

// defining the tuple as the new type 




export class CsvFileReader {
    data: string [][] = [];

    constructor (public filename: string){}

    read():void {
        this.data = fs.readFileSync(this.filename, {encoding:'utf-8'})
        .split('\n')
        .map ( (row:string):string[]=> {
            return row.split(',')
        }) // below changing into appropriate type of Value
     
    }
}
// 10/08/2018, Manutd , Leichester, '2', '1',  H, A Marriner
// 0             1         2         3     4   
// row 5 as MatchResult, we developer override scripts default bahavoour. Instead of 