import { createToast } from '../../Utilities/ToastNotification.js';

let objNotification = [{
    "plate": "POY877",
    "EventName": "Botón de pánico",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": false,
}, {
    "plate": "C-336",
    "EventName": "Bateria de respaldo activa",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": true,
}, {
    "plate": "POY877",
    "EventName": "Móvil incomunicado",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": false,
}, {
    "plate": "POY877",
    "EventName": "Saliendo de zona",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": false,
}, {
    "plate": "POY877",
    "EventName": "Móvil incomunicado",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": false,
}, {
    "plate": "POY877",
    "EventName": "Botón de pánico",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": false,
}, {
    "plate": "POY877",
    "EventName": "Botón de pánico",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": true,
}, {
    "plate": "POY877",
    "EventName": "Móvil incomunicado",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": false,
}, {
    "plate": "POY877",
    "EventName": "Botón de pánico",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": false,
}, {
    "plate": "POY877",
    "EventName": "Botón de pánico",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": false,
}, {
    "plate": "POY877",
    "EventName": "Móvil incomunicado",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": true,
}, {
    "plate": "POY877",
    "EventName": "Botón de pánico",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": false,
}, {
    "plate": "C-336",
    "EventName": "Bateria de respaldo activa",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": true,
}, {
    "plate": "POY877",
    "EventName": "Móvil incomunicado",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": false,
}, {
    "plate": "POY877",
    "EventName": "Saliendo de zona",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": false,
}, {
    "plate": "POY877",
    "EventName": "Móvil incomunicado",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": false,
}, {
    "plate": "POY877",
    "EventName": "Botón de pánico",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": false,
}, {
    "plate": "POY877",
    "EventName": "Botón de pánico",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": true,
}, {
    "plate": "POY877",
    "EventName": "Móvil incomunicado",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": false,
}, {
    "plate": "POY877",
    "EventName": "Botón de pánico",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": false,
},
{
    "plate": "POY877",
    "EventName": "Botón de pánico",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": false,
}, {
    "plate": "POY877",
    "EventName": "Móvil incomunicado",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": true,
}, {
    "plate": "POY877",
    "EventName": "Botón de pánico",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": false,
}, {
    "plate": "POY877",
    "EventName": "Botón de pánico",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": false,
}, {
    "plate": "POY877",
    "EventName": "Móvil incomunicado",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": true,
}, {
    "plate": "POY877",
    "EventName": "Botón de pánico",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": false,
}, {
    "plate": "C-336",
    "EventName": "Bateria de respaldo activa",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": true,
}, {
    "plate": "POY877",
    "EventName": "Móvil incomunicado",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": false,
}, {
    "plate": "POY877",
    "EventName": "Saliendo de zona",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": false,
}, {
    "plate": "POY877",
    "EventName": "Móvil incomunicado",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": false,
}, {
    "plate": "POY877",
    "EventName": "Botón de pánico",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": false,
}, {
    "plate": "POY877",
    "EventName": "Botón de pánico",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": true,
}, {
    "plate": "POY877",
    "EventName": "Móvil incomunicado",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": false,
}, {
    "plate": "POY877",
    "EventName": "Botón de pánico",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": false,
}, {
    "plate": "POY877",
    "EventName": "Botón de pánico",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": false,
}, {
    "plate": "POY877",
    "EventName": "Móvil incomunicado",
    "DateEvent": "Ene 12",
    "HourEvent": "15:18",
    "IsEventPriority": true,
}
];

const vueAppMain = Vue.createApp({
    data() {
        return {
            isSearchDropdownOpen: false,
            isDropdownFilterSidebarOpen: false,
            isSidebarWrapped: false,
            robustMode: false,
            isSidebarInitialized: false,
            selectedFilterSidebar: {
                id: 'noFiltro',
                name: 'sin filtro',
                imgStatus: '../src/img/Main/icon-nogps.svg',
            },
            statusSidebar: [
                { id: 'noFiltro', name: 'sin filtro', imgStatus: '../src/img/Main/icon-nogps.svg' },
                { id: 'online', name: SpaceAPI.TextTranslation('lnlOnline'), imgStatus: '../src/img/Main/icon-online.svg' },
                { id: 'noLocaliza', name: 'No localiza', imgStatus: '../src/img/Main/icon-nolocaliza.svg' },
                { id: 'noGPS', name: SpaceAPI.TextTranslation('lblSinGPS'), imgStatus: '../src/img/Main/icon-nogps.svg' },
                { id: 'bateriabaja', name: 'Bateria baja', imgStatus: '../src/img/Main/icon-bateriabaja.svg' },
                { id: 'encendido', name: SpaceAPI.TextTranslation('Encendido'), imgStatus: '../src/img/Main/icon-encendido.svg' },
                { id: 'apagado', name: SpaceAPI.TextTranslation('Apagado'), imgStatus: '../src/img/Main/icon-apagado.svg' }
            ],
            optionsUserType: ['Moviles', 'Personas', 'Flotas', 'Usuarios'],
            UserTypeSelected: 'Moviles',
            badgeNotifications: objNotification.length,
            flotas: [{
                flotaName: "flota1",
                mobiles: [{
                    mobileName: "mobile1",
                    address: "cra 15, Bogota",
                    latitude: "4.666666",
                    longitude: "-74.052466",
                    velocity: 12,
                    direction: "este",
                    dateTime: "2024/03/13 10:34:19",
                    driver: "Juan Luis Perez (Conductor)",
                    status: "encendido",
                    batery: 23,
                },
                {
                    mobileName: "mobile2",
                    address: "cra 15, Bogota",
                    latitude: "4.666666",
                    longitude: "-74.052466",
                    velocity: 12,
                    direction: "este",
                    dateTime: "2024/03/13 10:34:19",
                    driver: "Juan Luis Perez (Conductor)",
                    status: "noLocaliza",
                    batery: 56,
                }]
            },
            {
                flotaName: "flota2",
                mobiles: [{
                    mobileName: "mobile1",
                    address: "cra 15, Bogota",
                    latitude: "4.666666",
                    longitude: "-74.052466",
                    velocity: 12,
                    direction: "este",
                    dateTime: "2024/03/13 10:34:19",
                    driver: "Juan Luis Perez (Conductor)",
                    status: "noGPS",
                    batery: 75,
                },
                {
                    mobileName: "mobile2",
                    address: "cra 15, Bogota",
                    latitude: "4.666666",
                    longitude: "-74.052466",
                    velocity: 12,
                    direction: "este",
                    dateTime: "2024/03/13 10:34:19",
                    driver: "Juan Luis Perez (Conductor)",
                    status: "encendido",
                    batery: 23,
                }]
            },
            {
                flotaName: "flota3",
                mobiles: [{
                    mobileName: "mobile1",
                    address: "cra 15, Bogota",
                    latitude: "4.666666",
                    longitude: "-74.052466",
                    velocity: 12,
                    direction: "este",
                    dateTime: "2024/03/13 10:34:19",
                    driver: "Juan Luis Perez (Conductor)",
                    status: "encendido",
                    batery: 23,
                },
                {
                    mobileName: "mobile2",
                    address: "cra 15, Bogota",
                    latitude: "4.666666",
                    longitude: "-74.052466",
                    velocity: 12,
                    direction: "este",
                    dateTime: "2024/03/13 10:34:19",
                    driver: "Juan Luis Perez (Conductor)",
                    status: "encendido",
                    batery: 23,
                }]
            },
            {
                flotaName: "flota4",
                mobiles: [{
                    mobileName: "mobile1",
                    address: "cra 15, Bogota",
                    latitude: "4.666666",
                    longitude: "-74.052466",
                    velocity: 12,
                    direction: "este",
                    dateTime: "2024/03/13 10:34:19",
                    driver: "Juan Luis Perez (Conductor)",
                    status: "encendido",
                    batery: 23,
                },
                {
                    mobileName: "mobile2",
                    address: "cra 15, Bogota",
                    latitude: "4.666666",
                    longitude: "-74.052466",
                    velocity: 12,
                    direction: "este",
                    dateTime: "2024/03/13 10:34:19",
                    driver: "Juan Luis Perez (Conductor)",
                    status: "encendido",
                    batery: 23,
                }]
                },
                {
                    flotaName: "flota2",
                    mobiles: [{
                        mobileName: "mobile1",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "noGPS",
                        batery: 75,
                    },
                    {
                        mobileName: "mobile2",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    }]
                },
                {
                    flotaName: "flota3",
                    mobiles: [{
                        mobileName: "mobile1",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    },
                    {
                        mobileName: "mobile2",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    }]
                },
                {
                    flotaName: "flota4",
                    mobiles: [{
                        mobileName: "mobile1",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    },
                    {
                        mobileName: "mobile2",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    }]
                },
                {
                    flotaName: "flota2",
                    mobiles: [{
                        mobileName: "mobile1",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "noGPS",
                        batery: 75,
                    },
                    {
                        mobileName: "mobile2",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    }]
                },
                {
                    flotaName: "flota3",
                    mobiles: [{
                        mobileName: "mobile1",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    },
                    {
                        mobileName: "mobile2",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    }]
                },
                {
                    flotaName: "flota4",
                    mobiles: [{
                        mobileName: "mobile1",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    },
                    {
                        mobileName: "mobile2",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    }]
                },
                {
                    flotaName: "flota2",
                    mobiles: [{
                        mobileName: "mobile1",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "noGPS",
                        batery: 75,
                    },
                    {
                        mobileName: "mobile2",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    }]
                },
                {
                    flotaName: "flota3",
                    mobiles: [{
                        mobileName: "mobile1",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    },
                    {
                        mobileName: "mobile2",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    }]
                },
                {
                    flotaName: "flota4",
                    mobiles: [{
                        mobileName: "mobile1",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    },
                    {
                        mobileName: "mobile2",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    }]
                },
                {
                    flotaName: "flota2",
                    mobiles: [{
                        mobileName: "mobile1",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "noGPS",
                        batery: 75,
                    },
                    {
                        mobileName: "mobile2",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    }]
                },
                {
                    flotaName: "flota3",
                    mobiles: [{
                        mobileName: "mobile1",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    },
                    {
                        mobileName: "mobile2",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    }]
                },
                {
                    flotaName: "flota4",
                    mobiles: [{
                        mobileName: "mobile1",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    },
                    {
                        mobileName: "mobile2",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    }]
                },
                {
                    flotaName: "flota2",
                    mobiles: [{
                        mobileName: "mobile1",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "noGPS",
                        batery: 75,
                    },
                    {
                        mobileName: "mobile2",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    }]
                },
                {
                    flotaName: "flota3",
                    mobiles: [{
                        mobileName: "mobile1",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    },
                    {
                        mobileName: "mobile2",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    }]
                },
                {
                    flotaName: "flota4",
                    mobiles: [{
                        mobileName: "mobile1",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    },
                    {
                        mobileName: "mobile2",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    }]
                },
                {
                    flotaName: "flota2",
                    mobiles: [{
                        mobileName: "mobile1",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "noGPS",
                        batery: 75,
                    },
                    {
                        mobileName: "mobile2",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    }]
                },
                {
                    flotaName: "flota3",
                    mobiles: [{
                        mobileName: "mobile1",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    },
                    {
                        mobileName: "mobile2",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    }]
                },
                {
                    flotaName: "flota4",
                    mobiles: [{
                        mobileName: "mobile1",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    },
                    {
                        mobileName: "mobile2",
                        address: "cra 15, Bogota",
                        latitude: "4.666666",
                        longitude: "-74.052466",
                        velocity: 12,
                        direction: "este",
                        dateTime: "2024/03/13 10:34:19",
                        driver: "Juan Luis Perez (Conductor)",
                        status: "encendido",
                        batery: 23,
                    }]
                }
            ]

        };
    },
    computed: {
        //showTooltip() {
        //    const nav = document.querySelector('.sidebar-wrapper');
        //    const header = document.querySelector('.page-header');
        //    return nav.classList.contains('close_icon') && header.classList.contains('close_icon');
        //},
        filteredStatusSidebar() {
            return this.statusSidebar.filter(status => status.id !== this.selectedFilterSidebar.id);
        },
        toggleFilterIconClass() {
            return this.isDropdownFilterSidebarOpen ? 'fa fa-angle-up toogle-angle-show' : 'fa fa-angle-down toogle-angle-show';
        },
        toggleSearchIconClass() {
            return this.isSearchDropdownOpen ? 'fa fa-angle-up toogle-angle-show' : 'fa fa-angle-down toogle-angle-show';
        },
        filteredFlotas() {
            if (this.selectedFilterSidebar.id === 'noFiltro') {
                return this.flotas;
            }
            return this.flotas.map(flota => ({
                ...flota,
                mobiles: flota.mobiles.filter(mobile => mobile.status === this.selectedFilterSidebar.id)
            })).filter(flota => flota.mobiles.length > 0);
        },
        filteredUsers() {
            return this.optionsUserType.filter(user => user !== this.UserTypeSelected);
        },
    },
    watch: {
        filteredFlotas: {
            handler(newValue, oldValue) {
                this.initializeSidebar();
            },
            //deep: true,
            //immediate: true // Para ejecutar el `watcher` inmediatamente después de la primera evaluación
        }
    },
    mounted() {
        this.initializeSidebar();
        /*$('[data-bs-toggle="tooltip"]').tooltip();*/
        let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        });
        feather.replace();

        $(".onhover-dropdown").on("click", function () {
            $(this).children(".onhover-show-div").toggleClass("active");
        });

        //$(".header-search").click(function () {
        //    $(".search-full").addClass("open");
        //});
        //$(".close-search").click(function () {
        //    $(".search-full").removeClass("open");
        //    $("body").removeClass("offcanvas");
        //});

        $(document).on("click", function (e) {
            var outside_space = $(".outside");
            if (
                !outside_space.is(e.target) &&
                outside_space.has(e.target).length === 0
            ) {
                $(".menu-to-be-close").removeClass("d-block");
                $(".menu-to-be-close").css("display", "none");

                $(".onhover-show-div .notification-dropdown").removeClass("active");
            }
        });

        $(function () {
            $.contextMenu({
                selector: '.options-icon',
                trigger: 'left',
                callback: function (key, options) {
                    const mobile = $(this).data('mobile');
                    vueAppMain.handleOption(key, mobile);
                },
                items: {
                    "comandos": { name: SpaceAPI.TextTranslation("lblCommands") },
                    "camaras": { name: SpaceAPI.TextTranslation("lblCamara") }, // Crear traducción
                    "trayectos": {
                        name: SpaceAPI.TextTranslation("Trayecto"),
                        items: {
                            "ultimo-trayecto": { name: "Último trayecto" }, // Crear traducción
                            "historial-trayectos": { name: "Historial de trayectos" } // Crear traducción
                        }
                    },
                    "propiedades": { name: "Propiedades" }, // Crear traducción
                    "sensores": { name: "Sensores" } // Crear traducción
                }
            });
        });

        const simplebar = document.querySelector(".simplebar-content-wrapper");
        if (simplebar) {
            simplebar.style.overflow = 'hidden scroll'
        }
    },
    updated() {
        feather.replace();
    },
    methods: {
        handleOption(option, mobile) {
            const optionMappings = {
                comandos: {
                    url: `${SpaceAPI.getUrlWhiteBrand()}Modules/CMD/JS/CMD.js?New=0.1`,
                    callback: () => CreateWinCMD(mobile)
                },
                camaras: {
                    url: `${SpaceAPI.getUrlWhiteBrand()}Modules/Cameras/JS/Cameras.js?New=0.1`,
                    callback: () => CreateWinCamera(mobile)
                },
                propiedades: {
                    url: `${SpaceAPI.getUrlWhiteBrand()}Modules/Properties/JS/Properties.js?New=0.1`,
                    callback: () => CreateWinProperties(mobile)
                },
                sensores: {
                    url: `${SpaceAPI.getUrlWhiteBrand()}Modules/Sensors/JS/Sensors.js?New=0.1`,
                    callback: () => CreateWinSensors(mobile)
                }
            };

            const selectedOption = optionMappings[option];

            if (selectedOption) {
                SpaceAPI.loadScript(`${option}Script`, selectedOption.url, selectedOption.callback, false);
            } else {
                createToast('success', `Option selected: ${option} for mobile: ${mobile.mobileName}`);
            }
        },
        handleClickNotifications() {
            BuildNotificationGrid(objNotification)
        },
        ClearNotifications() {
            objNotification = [];
            BuildNotificationGrid(objNotification);
            this.badgeNotifications = objNotification.length;
        },
        toggleSearchDropdown() {
            this.isSearchDropdownOpen = !this.isSearchDropdownOpen;
        },
        selectUserType(user) {
            this.UserTypeSelected = user;
            this.isSearchDropdownOpen = false;
        },
        toggleDropdownFilterSidebar() {
            this.isDropdownFilterSidebarOpen = !this.isDropdownFilterSidebarOpen;
        },
        selectStatus(option) {
            this.selectedFilterSidebar = option;
            this.isDropdownFilterSidebarOpen = false;
        },
        getStatusImage(status) {
            const statusObj = this.statusSidebar.find(item => item.id === status);
            return statusObj ? statusObj.imgStatus : '';
        },
        getStatusTooltip(status) {
            const statusObj = this.statusSidebar.find(item => item.id === status);
            return statusObj ? statusObj.name : '';
        },
        getBatteryIcon(battery) {
            if (battery > 60) return '../src/img/Main/icon-batery-full.svg';
            if (battery > 30) return '../src/img/Main/icon-batery-half.svg';
            return '../src/img/Main/icon-batery-low.svg';
        },
        getBatteryTooltip(battery) {
            return `${battery}%`;
        },
        toggleShowMap(mobile) {
            mobile.showMap = !mobile.showMap;
        },
        getViewMapIcon(mobile) {
            mobile.showMap = mobile.showMap || false;
            return mobile.showMap ? 'eye' : 'eye-off';
        },
        getDaterangepicker() {
            const cookies = JSON.parse(localStorage.getItem('wtCookies'));
            if(!!cookies){
                return `Inicio: ${cookies.startDate} \n Fin: ${cookies.endDate}`;
            }
        },        
        toggleSidebar() {
            const nav = document.querySelector('.sidebar-wrapper');
            const header = document.querySelector('.page-header');
            nav.classList.toggle('close_icon');
            header.classList.toggle('close_icon');
            if (nav.classList.contains('close_icon') && header.classList.contains('close_icon')) {
                this.isSidebarWrapped = true;
            } else {
                this.isSidebarWrapped = false;
            }
            if (this.isSidebarWrapped) {
                jQuery(".sidebar-title").removeClass("active").next().slideUp("normal");
                jQuery(".sidebar-title").find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
            }
        },
        getFloatWrapperSidebar(strFloatName) {
            if (!this.isSidebarWrapped) {
                return strFloatName;
            }
            return ;  // Ensure it returns an empty string if not wrapped
        },
        initializeSidebar() {
            if (this.isSidebarInitialized) {
                return;
            }

            const pageWrapper = document.getElementById("pageWrapper");

            if (pageWrapper && pageWrapper.classList.contains("compact-wrapper")) {
                jQuery(".sidebar-title").append(
                    '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
                );

                jQuery(".sidebar-title").click(function () {
                    if (jQuery(this).hasClass("active")) {
                        jQuery(this).removeClass("active");
                        jQuery(this).find("div").replaceWith(
                            '<div class="according-menu"><i class="fa fa-angle-right"></i></div>'
                        );
                        jQuery(this).next(".sidebar-submenu, .menu-content").slideUp("normal");
                    } else {
                        jQuery(this).addClass("active");
                        jQuery(this).find("div").replaceWith(
                            '<div class="according-menu"><i class="fa fa-angle-down"></i></div>'
                        );
                        jQuery(this).next(".sidebar-submenu, .menu-content").slideDown("normal");
                    }

                    const nav = document.querySelector('.sidebar-wrapper');
                    const header = document.querySelector('.page-header');

                    if (nav.classList.contains('close_icon') && header.classList.contains('close_icon')) {
                        vueAppMain.toggleSidebar();
                    }
                });

                jQuery(".sidebar-submenu, .menu-content").hide();

                jQuery(".submenu-title span").click(function (event) {
                    event.preventDefault();

                    const submenuTitle = jQuery(this).closest(".submenu-title");
                    const submenuContent = submenuTitle.next(".submenu-content");

                    if (submenuContent.is(":hidden")) {
                        submenuTitle.addClass("active");
                        submenuContent.slideDown("normal");
                    } else {
                        submenuTitle.removeClass("active");
                        submenuContent.slideUp("normal");
                    }
                });

                jQuery(".submenu-content").hide();

                this.isSidebarInitialized = true; // Marcamos que ya ha sido inicializado
            }
        }
    }
}).mount('#pageWrapper');


function BuildNotificationGrid(dataNotifications) {
    $(() => {
        $('#notificationsGrid').dxDataGrid({
            dataSource: dataNotifications,
            columnAutoWidth: true,
            noDataText: "Sin notificaciones",
            showBorders: false,
            showColumnLines: false,
            showColumnHeaders: false,
            showRowLines: false,
            scrolling: {
                mode: 'infinite',
            },
            onRowPrepared: function (e) {
                if (e.rowType === 'data' && e.data.IsEventPriority) {
                    e.rowElement.css('color', 'red');
                }
            },
            columns: [{
                type: 'buttons',
                buttons: [
                    {
                        icon: "fa fa-dot-circle-o",
                        // template: function(cellElement, cellInfo) {
                        //     $('<input>')
                        //         .attr('type', 'radio')
                        //         .attr('name', 'notificationSelect')
                        //         .attr('value', cellInfo.data.plate)
                        //         .appendTo(cellElement);
                        // }
                    }
                ],
                width: 40
            },
            {
                dataField: 'plate',
                caption: 'Plate',
                width: 56,
            },
            {
                dataField: 'EventName',
                caption: 'Event Name',
                width: 160,
            },
            {
                caption: 'Event Date & Time',
                width: 84,
                calculateCellValue: function (data) {
                    return data.DateEvent + ' ' + data.HourEvent;
                }
            }
            ]
        });
    });
}

