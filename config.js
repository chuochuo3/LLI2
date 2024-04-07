var config = {
    style: 'mapbox://styles/chuochuo3/clucnfptz015x01mj149ob2rl',
    accessToken: 'pk.eyJ1IjoiY2h1b2NodW8zIiwiYSI6ImNsc2IxYWxjMDA3bDQyanF1c3prcjZ4ZWsifQ.37PnXDhAAUKZUCNjtQggvw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: 'Is public transportation easily accessible where I live?',
            description: `
                <p>This map shows how convenient it is for locals to use public transportation, particularly buses and subways, in specific areas of London. Darker-colored areas are easier to get to by public transportation.</p >
                <p>According to this map, using buses and subways for transportation is more convenient for locals living near Westminster and the City of London.</p >
                <br><br>
                 <img src="trp.png" width="120" height="65" alt="Transport Image">`, 
            location: {
                center: [-0.12750, 51.51061],
                zoom: 10.6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'trp',
                    opacity: 1,
                    duration: 0
                },
                {
                    layer: 'park',
                    opacity: 0,
                    duration: 0             
                },
                {
                    layer: 'crr',
                    opacity: 0,
                    duration: 0                
                }
            ],
            onChapterExit: [
                {
                    layer: 'trp',
                    opacity: 0
                },
                {
                    layer: 'park',
                    opacity: 1,
                    duration: 2000                
                },
                {
                    layer: 'crr',
                    opacity: 0                
                }
            ]
        },
        {
            id: 'second-container',
            alignment: 'right',
            hidden: false,
            title: 'Is there a park close to where I live?',
            description: `
            <p>This map shows the locations and sizes of parks in London and its surrounding areas. It can provide housing location references for residents who wish to live close to nature.</p>
            <br><br>
                 <img src="park.png" width="120" height="30" alt="Transport Image">`,

            location: {
                center: [-0.12750, 51.51061],
                zoom: 10.6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'trp',
                    opacity: 0,
                    duration: 2000
                },
                {
                    layer: 'park',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'crr',
                    opacity: 0,
                    duration: 0             
                }
            ],
            onChapterExit: [
                {
                    layer: 'trp',
                    opacity: 1
                },
                {
                    layer: 'park',
                    opacity: 0,
                    duration: 1000                
                },
                {
                    layer: 'crr',
                    opacity: 0,
                    duration: 0               
                }
            ],
        },
        {
            id: 'third-container',
            alignment: 'left',
            hidden: false,
            title: 'Is the place where I live safe?',
            description:`
            <p>This map displays the crime rates in London at the Lower Layer Super Output Area (LSOA) level. The statistics encompass occurrences of all types of crimes throughout the year, with deeper shades of red indicating higher crime rates in the respective areas, thus implying a greater level of insecurity. For example, Mayfair and Soho may be relatively less safe compared to surrounding areas.</p>
            <br><br>
                 <img src="crr.png" width="120" height="65" alt="Transport Image">`,
            location: {
                center: [-0.12750, 51.51061],
                zoom: 10.6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'trp',
                    opacity: 0,
                    duration: 2000                              
                },
                {
                    layer: 'park',
                    opacity: 0,
                    duration: 2000                              
                },
                {
                    layer: 'crr',
                    opacity: 1,
                    duration: 2000              
                }
            ],
            onChapterExit: [
                {
                    layer: 'trp',
                    opacity: 0
                },
                {
                    layer: 'park',
                    opacity: 1                
                },
                {
                    layer: 'crr',
                    opacity: 0                
                }
            ]
        }
    ]
};