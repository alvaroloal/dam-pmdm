$(document).ready(function() {
    // añadir fila
    $('#add-row').click(function() {
        let contadorFila = $('#tabla tbody tr').length;
        let nuevaFila = `<tr>`;
        
        // celdas de la fila creada
        $('#tabla thead th').each(function() {
            let col = $(this).index();
            nuevaFila += `<td>Celda ${contadorFila + 1}-${col + 1}</td>`;
        });
        nuevaFila += `</tr>`;
        
        $('#tabla tbody').append(nuevaFila);
    });

    // eliminar fila
    $('#remove-row').click(function() {
        $('#tabla tbody tr:last').remove();
    });

    // agregar columna
    $('#add-column').click(function() {
        let nuevaColumna = $('#tabla thead th').length + 1;

        $('#tabla thead tr').append(`<th>Columna ${nuevaColumna}</th>`);

        // add celdas a cada fila
        $('#tabla tbody tr').each(function() {
            $(this).append(`<td>Celda ${$(this).index() + 1}-${nuevaColumna}</td>`);
        });
    });

    // borrar columna
    $('#remove-column').click(function() {
        if ($('#tabla thead th')) { //($('#tabla thead th').length > 1) si quisiera dejar que no se pueda borrar la unica columna que haya
            $('#tabla thead tr').children('th:last').remove();
            $('#tabla tbody tr').each(function() {
                $(this).children('td:last').remove();
            });
        }
    });
});
