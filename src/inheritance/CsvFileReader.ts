import fs from 'fs'


export abstract class CsvFileReader<T> {
    data: T [] = [];

    constructor (public filename: string){}

    abstract mapRow (row:string[]): T
    // Marking abstract indicates that it's going to be implemented by our child.
        

    read():void {
        this.data = fs.readFileSync(this.filename, {encoding:'utf-8'})
        .split('\n')
        .map ( (row:string):string[]=> {
            return row.split(',')
        }) // below changing into appropriate type of Value
        .map(this.mapRow)
    }
    

    
}
// 10/08/2018, Manutd , Leichester, '2', '1',  H, A Marriner
// 0             1         2         3     4   
// row 5 as MatchResult, we developer override scripts default bahavoour. Instead of 