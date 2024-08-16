var config = {
    style: 'mapbox://styles/elika465pbc/clwf1fnue00ep01pnaovg5q3y',
    accessToken: 'pk.eyJ1IjoiZWxpa2E0NjVwYmMiLCJhIjoiY2x3ZjBob3R4MHJjOTJubzkweHlqbnVwaCJ9.aRd4AIIDfgs37ZSiBhHyKw',
    //showMarkers: true,
    //markerColor: '#d580ff',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    //inset: true,
    theme: 'dark',
    // use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'London Borough of Tower Hamlets: Stalled Sites',
    subtitle: 'Planning and Building Control',
    //byline: 'Planning and Building Control',
    footer: 'Developed by LBTH DDC&IU <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'TOP',
            alignment: 'left',
            hidden: true,
            title: 'Display Title',
            //image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-0.031228, 51.516350],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
            ],
            onChapterExit: [ 
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Mill Harbour',
            //image: './path/to/image/source.png',
            description: 'Construction has been on hold since the end of Q1 2022 and the scheme has not yet been launched. The JRL Group has erected a temporary site office here, but we are told that will serve other JRL projects on Marsh Wall and not this site.',
            location: {
                center: [-0.019641, 51.500146],
                zoom: 15.5,
                pitch: 65,
                bearing: 15,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Poplar Business Park - Manhattan Plaza 10 Prestons Way',
            //image: './path/to/image/source.png',
            description: 'Telford has delivered 120 of the 321 private units permitted on site. These completed during Q4 2017 and sold out during Q2 2019. The remaining light industrial estate has permission for 222 units, including 201 private, but a joint venture between Bloom and TPG Angelo Gordon has bought it with plans to retain it in industrial use.',
            location: {
                center: [ -0.012181, 51.506341],
                zoom: 15.50,
                pitch: 65,
                bearing: 15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Royal Mint Gardens Chamber Street; Mansell Street',
            //image: './path/to/image/source.png',
            description: 'Phase 1 was DLR encapsulation works which completed in Q1 2018. Phase 2a is 254 units in Blocks B, C and D, which completed during Q1 2020. Around 235 units had sold by the end of Q4 2021 and the developer decided to rent the rest. Phase 2b has permission for an aparthotel and 79 private units in Block A. Application PA/15/02773 sought 196 residential units instead but was never approved. More recently, application PA/22/01284 submitted on 16/12/2022 seeks to intensify the aparthotel use. However, there would still be 79 private units in the block. Recent additions to the casefile suggest the application is still being pursued.',
            location: {
                center: [-0.072020, 51.510476],
                zoom: 15.5,
                pitch: 65,
                bearing: 15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Poplar Transformer Station Gale Street Watts Grove',
            //image: './path/to/image/source.png',
            description: 'Swan commenced construction during Q3 2019. The scheme is 65 units, all affordable, but work has been on hold since a fatal crane collapse on 08/07/2020.',
            location: {
                center: [-0.019562, 51.518321],
                zoom: 15.5,
                pitch: 65,
                bearing: 15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Bow River Village Hancock Road Three Mill Lane',
            //image: './path/to/image/source.png',
            description: 'Phase 1 is complete, sold out/rented and contained 145 private units and 35 affordable. Phase 2 is 112 units, 73 of which are private, sold out and completed during Q1 2020. Phase 3 (449 private units) subject to application 19/00477/FUL for 435 units, including 224 private, was refused on 09/04/2021.',
            location: {
                center: [-0.011353, 51.528587],
                zoom: 15.5,
                pitch: 60,
                bearing: 15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-chapter',
            alignment: 'right',
            hidden: false,
            title: 'North Quay Aspen Way',
            //image: './path/to/image/source.png',
            description: 'Canary Wharf Group commenced construction during Q2 2024: The overall parent consent is largely commercial but includes 702 residential units - 70% private and 30% affordable. The first building underway is a life sciences building, One North Quay, (ref PA/22/02637). Reserved matters applications is yet to be submitted for residential buildings.',
            location: {
                center: [-0.018480, 51.506963],
                zoom: 15.5,
                pitch: 65,
                bearing: 15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eigth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Glacier Point 472 Hackney Road, 25 Felix Street ',
            //image: './path/to/image/source.png',
            description: 'Phase 1 was 55 units, which sold out during Q1 2018, having completed during Q3 2017. The site for the remaining 167 units in Phase 2 remains partly in use as a shabby industrial estate - there has been no further action on the planning or construction fronts since Phase 1 sold out.',
            location: {
                center: [-0.058299, 51.532114],
                zoom: 15.5,
                pitch: 65,
                bearing: 15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ninth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'South Quay Plaza Phases 1-3',
            //image: './path/to/image/source.png',
            description: 'No explanation for this site being stalled.',
            location: {
                center: [-0.018169, 51.501049],
                zoom: 15.5,
                pitch: 65,
                bearing: 15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tenth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Spire London (Hertsmere House / Columbus Tower) 2 Hertsmere Road',
            //image: './path/to/image/source.png',
            description: 'Marketing and construction have been on hold since Q1 2018. Those involved will not comment on the sales position, which was said to be around the 275 mark. However, given that the scheme was originally billed to complete in mid 2021, sales are falling away - the title register suggests 48 registered exchanges remain in place at the end of Q2 2024. An attempt to reduce onsite affordable housing was refused on 30/09/2022 (ref PA/21/02786/S). There have been reports that Greenland (developer) will sell the site but it has not yet been marketed openly.',
            location: {
                center: [ -0.024602, 51.507072],
                zoom: 16.5,
                pitch: 60,
                bearing: 15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eleventh-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Union Bridge (TSVC Building) Hepscott Road Rothbury Road',
            //image: './path/to/image/source.png',
            description: '"Construction was put on hold during Q4 2022. Taylor Wimpey is silent on the matter" - Molior',
            location: {
                center: [-0.023319, 51.542183],
                zoom: 16.5,
                pitch: 60,
                bearing: 15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
