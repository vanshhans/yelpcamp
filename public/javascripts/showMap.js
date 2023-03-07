// mapboxgl.accessToken = '<%-process.env.MAPBOX_TOKEN%>';
// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/streets-v12', // style URL
//     center: [campground[0], campground[1]], // starting position [lng, lat]
//     zoom: 8 // starting zoom
// });
// const nav = new mapboxgl.NavigationControl({
//     visualizePitch: true
// });
// map.addControl(nav);
// new mapboxgl.Marker()
//     .setLngLat([campground[0], campground[1]])
//     .setPopup(
//         new mapboxgl.Popup({ offset: 25 })
//             .setHTML(
//                 // `<p>${window.place.location}</p>`
//             )
//     )
//     .addTo(map)