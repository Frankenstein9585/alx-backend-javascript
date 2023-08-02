import {RowID} from "./interface";
import {RowElement} from "./interface";

declare module CRUD {
    export function insertRow(row: RowElement): RowID;
    export function deleteRow(rowId: number): void;
    export function updateRow(rowId: RowID, row: RowElement): RowID;
}