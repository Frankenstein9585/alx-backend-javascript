interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Donald",
    lastName: "Peters",
    age: 20,
    location: "Lagos"
};

const student2: Student = {
    firstName: "Erika",
    lastName: "Chau",
    age: 20,
    location: "Canada"
};

const studentList: Array<object> = [student1, student2];

function renderTable(data: Array<object>): void {
    const tableContainer = document.getElementById('tableContainer');
    const table = document.createElement("table");
    const headers: string[] = Object.keys(studentList[0]);

    const headerRow = document.createElement('tr');
    headers.forEach((header) => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);


    data.forEach((object) => {
        const row = document.createElement('tr');
        headers.forEach((header) => {
            const cell = document.createElement('td');
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            cell.textContent = object[header];
            row.appendChild(cell);
        });
        table.appendChild(row);
    });

    tableContainer.appendChild(table);
}

renderTable(studentList);

