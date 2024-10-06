$(document).ready(function() {
    // Función para añadir fila
    $('#add-row').click(function() {
        let newRow = $('<tr>');
        $('#table thead th').each(function() {
            if (!$(this).hasClass('acciones')) {
                newRow.append('<td class="editable" contenteditable="true">Nueva fila</td>');
            }
        });
        newRow.append(`
            <td>
                <button class="btn btn-danger btn-sm delete-row"><i class="fas fa-trash-alt"></i> Eliminar</button>
                <button class="btn btn-success btn-sm insert-row-above"><i class="fas fa-arrow-up"></i> Insertar arriba</button>
                <button class="btn btn-success btn-sm insert-row-below"><i class="fas fa-arrow-down"></i> Insertar abajo</button>
            </td>
        `);
        $('#table tbody').append(newRow);
    });

    // Función para añadir columna
    $('#add-column').click(function() {
        let columnCount = $('#table thead th').length - 1; // Excluir "Acciones"
        let newColIndex = columnCount; // Guardar índice de la nueva columna

        // Crear el nuevo encabezado de columna con el icono de eliminación
        let newColHeader = $(`<th class="editable" contenteditable="true">Columna ${newColIndex + 1} 
            <i class="fas fa-trash-alt delete-column-icon" title="Eliminar columna" style="cursor: pointer;"></i>
        </th>`);
        
        // Insertar el nuevo encabezado antes de la columna "Acciones"
        newColHeader.insertBefore($('#table thead th:last-child'));
        
        // Añadir una nueva celda para cada fila
        $('#table tbody tr').each(function() {
            $('<td class="editable" contenteditable="true">Nueva columna</td>').insertBefore($(this).find('td:last-child'));
        });
    });

    // Función para eliminar una columna específica al hacer clic en el icono
    $(document).on('click', '.delete-column-icon', function() {
        let colIndex = $(this).closest('th').index(); // Obtener el índice de la columna a eliminar
        $('#table thead th').eq(colIndex).remove(); // Eliminar el encabezado de columna
        $('#table tbody tr').each(function() {
            $(this).find('td').eq(colIndex).remove(); // Eliminar las celdas de esa columna
        });
    });

    // Eliminar una fila individual
    $(document).on('click', '.delete-row', function() {
        $(this).closest('tr').remove();
    });

    // Insertar fila arriba
    $(document).on('click', '.insert-row-above', function() {
        let newRow = $(this).closest('tr').clone();
        newRow.insertBefore($(this).closest('tr'));
    });

    // Insertar fila abajo
    $(document).on('click', '.insert-row-below', function() {
        let newRow = $(this).closest('tr').clone();
        newRow.insertAfter($(this).closest('tr'));
    });

    // Eliminar todas las filas
    $('#delete-all-rows').click(function() {
        $('#table tbody').empty(); // Elimina todas las filas
    });

    // Eliminar todas las columnas
    $('#delete-all-columns').click(function() {
        $('#table thead tr').find('th:not(:last-child)').remove(); // Mantiene la columna de acciones
        $('#table tbody tr').each(function() {
            $(this).find('td:not(:last-child)').remove(); // Mantiene la columna de acciones
        });
    });
});
