document.addEventListener('DOMContentLoaded', function () {
    // Inicializar el date range picker
    initDateRangePicker();
});

    // Inicializar daterangepicker
function initDateRangePicker() {
    // Configuración del daterangepicker
    const options = {
        opens: 'left',
        showDropdowns: true,
        timePicker: true,
        locale: {
            format: 'YYYY/MM/DD HH:mm:ss',
            applyLabel: SpaceAPI.TextTranslation('lblSave'),
            cancelLabel: SpaceAPI.TextTranslation('btnCancel'),
        },
        autoUpdateInput: false, // Deshabilitar la actualización automática del input
        buttonClasses: "btn",
        applyButtonClasses: "btn-primary",
        cancelButtonClasses: "btn-default"
    };

    // Cargar fechas desde localStorage si existen
    // const cookies = JSON.parse(localStorage.getItem('wtCookies'));
    // //const startDate = localStorage.getItem('startDate');
    // //const endDate = localStorage.getItem('endDate');
    // if (startDate && endDate) {
    //    options.startDate = moment(startDate);
    //    options.endDate = moment(endDate);
    // } else {
    // // Configurar las fechas por defecto (por ejemplo, hoy)
    // options.startDate = moment().subtract(9, 'days');
    // options.endDate = moment();
    // // Guardar las fechas por defecto en localStorage
    // cookies.startDate = options.startDate.format('YYYY/MM/DD HH:mm:ss')
    // cookies.endDate = options.endDate.format('YYYY/MM/DD HH:mm:ss')
    // }

    $('.dataRangePicker').daterangepicker(options, function (start, end) {
        // Guardar las fechas seleccionadas en localStorage

        // Guardar las fechas seleccionadas en el dataset del elemento
        const button = document.querySelector('.dataRangePicker');
        button.dataset.startDate = start.format('YYYY/MM/DD HH:mm:ss');
        button.dataset.endDate = end.format('YYYY/MM/DD HH:mm:ss');
        console.log(`New date range selected: ${start.format('YYYY/MM/DD HH:mm:ss')} to ${end.format('YYYY/MM/DD HH:mm:ss')}`);

        cookies.startDate = start.format('YYYY/MM/DD HH:mm:ss');
        cookies.endDate = end.format('YYYY/MM/DD HH:mm:ss');
        localStorage.setItem("wtCookies", JSON.stringify(cookies));
    });
    // Activar el date range picker al hacer clic en el botón
    //document.querySelector('.dataRangePicker').addEventListener('click', function () {
    //    $(this).trigger('click.daterangepicker');
    //});
}