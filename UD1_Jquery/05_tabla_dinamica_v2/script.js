$(document).ready(function () {
    let columnCount = 3; // Inicialmente hay 3 columnas

    // Función para agregar fila
    $(".btn-add-fila").click(function () {
        const $newRow = $("<tr>");
        for (let i = 1; i <= columnCount; i++) {
            $newRow.append(`<td contenteditable="true" class="cell-col-${i}"></td>`);
        }
        $newRow.append(`
            <td>
                <button class="btn btn-warning btn-insert-above">↑ Insertar arriba</button>
                <button class="btn btn-warning btn-insert-below">↓ Insertar abajo</button>
                <button class="btn btn-danger btn-del-fila">🗑️ Eliminar</button>
            </td>
        `);
        $("tbody").append($newRow);
    });

    // Función para eliminar fila
    $(document).on("click", ".btn-del-fila", function () {
        $(this).closest("tr").remove();
    });

    // Función para agregar columna
    $(".btn-add-col").click(function () {
        columnCount++;
        const columnName = prompt("Ingrese el nombre de la nueva columna:");
        if (columnName) {
            // Agregar el encabezado de la nueva columna
            $("thead tr").append(`
                <th class="cell-col-${columnCount}">${columnName}
                    <button class="btn btn-danger btn-del-col" columnid="${columnCount}">🗑️</button>
                </th>
            `);
            // Agregar celdas en cada fila existente
            $("tbody tr").each(function () {
                $(this).append(`<td contenteditable="true" class="cell-col-${columnCount}"></td>`);
            });
        }
    });

    // Función para eliminar columna
    $(document).on("click", ".btn-del-col", function () {
        const columnId = $(this).attr("columnid");
        // Eliminar columna del encabezado
        $(`th.cell-col-${columnId}`).remove();
        // Eliminar columna de las filas
        $(`td.cell-col-${columnId}`).remove();
    });

    // Función para insertar fila arriba
    $(document).on("click", ".btn-insert-above", function () {
        const $newRow = $("<tr>");
        const $currentRow = $(this).closest("tr");
        for (let i = 1; i <= columnCount; i++) {
            $newRow.append(`<td contenteditable="true" class="cell-col-${i}"></td>`);
        }
        $newRow.append(`
            <td>
                <button class="btn btn-warning btn-insert-above">↑ Insertar arriba</button>
                <button class="btn btn-warning btn-insert-below">↓ Insertar abajo</button>
                <button class="btn btn-danger btn-del-fila">🗑️ Eliminar</button>
            </td>
        `);
        $currentRow.before($newRow);
    });

    // Función para insertar fila abajo
    $(document).on("click", ".btn-insert-below", function () {
        const $newRow = $("<tr>");
        const $currentRow = $(this).closest("tr");
        for (let i = 1; i <= columnCount; i++) {
            $newRow.append(`<td contenteditable="true" class="cell-col-${i}"></td>`);
        }
        $newRow.append(`
            <td>
                <button class="btn btn-warning btn-insert-above">↑ Insertar arriba</button>
                <button class="btn btn-warning btn-insert-below">↓ Insertar abajo</button>
                <button class="btn btn-danger btn-del-fila">🗑️ Eliminar</button>
            </td>
        `);
        $currentRow.after($newRow);
    });
});
