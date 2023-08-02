/// <reference path ="./crud.d.ts" />
import {RowID} from "./interface";
import {RowElement} from "./interface";
import {CRUD} from "./crud";


let row : RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};

const newRowID: RowID = CRUD.insertRow(row)
const updatedRow: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23
}
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);