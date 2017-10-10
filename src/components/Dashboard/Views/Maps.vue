<template>
  <div id="map"></div>
</template>
<script>
  import fm from '../../../../lib/fengmap.min'
  export default {
    methods: {
      initMap () {
        let fmapID = '10347';
        let map = new fm.FMMap({
          container: document.getElementById('map'),
          // mapServerURL: '/static/' + fmapID,
          // mapThemeURL: '/static/theme',
          // defaultThemeName: '3007',
          defaultMapScaleLevel: 20,
          key: '065a62c21769710da5cbac2384dc7a91',
          appName: 'unkantrack'
        });
        map.openMapById(fmapID)
      },
      mounted () {
        this.initMap()
      }
    }
  }
</script>

//   import GoogleMapsLoader from 'google-maps'
//   export default {
//     methods: {
//       initMap (google) {
//         var myLatlng = new google.maps.LatLng(40.748817, -73.985428)
//         var mapOptions = {
//           zoom: 13,
//           center: myLatlng,
//           scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
//           styles: [{
//             'featureType': 'water',
//             'stylers': [{'saturation': 43}, {'lightness': -11}, {'hue': '#0088ff'}]
//           }, {
//             'featureType': 'road',
//             'elementType': 'geometry.fill',
//             'stylers': [{'hue': '#ff0000'}, {'saturation': -100}, {'lightness': 99}]
//           }, {
//             'featureType': 'road',
//             'elementType': 'geometry.stroke',
//             'stylers': [{'color': '#808080'}, {'lightness': 54}]
//           }, {
//             'featureType': 'landscape.man_made',
//             'elementType': 'geometry.fill',
//             'stylers': [{'color': '#ece2d9'}]
//           }, {
//             'featureType': 'poi.park',
//             'elementType': 'geometry.fill',
//             'stylers': [{'color': '#ccdca1'}]
//           }, {
//             'featureType': 'road',
//             'elementType': 'labels.text.fill',
//             'stylers': [{'color': '#767676'}]
//           }, {
//             'featureType': 'road',
//             'elementType': 'labels.text.stroke',
//             'stylers': [{'color': '#ffffff'}]
//           }, {'featureType': 'poi', 'stylers': [{'visibility': 'off'}]}, {
//             'featureType': 'landscape.natural',
//             'elementType': 'geometry.fill',
//             'stylers': [{'visibility': 'on'}, {'color': '#b8cb93'}]
//           }, {'featureType': 'poi.park', 'stylers': [{'visibility': 'on'}]}, {
//             'featureType': 'poi.sports_complex',
//             'stylers': [{'visibility': 'on'}]
//           }, {'featureType': 'poi.medical', 'stylers': [{'visibility': 'on'}]}, {
//             'featureType': 'poi.business',
//             'stylers': [{'visibility': 'simplified'}]
//           }]
//
//         }
//         var map = new google.maps.Map(document.getElementById('map'), mapOptions)
//
//         var marker = new google.maps.Marker({
//           position: myLatlng,
//           title: 'Hello World!'
//         })
//
//         // To add the marker to the map, call setMap();
//         marker.setMap(map)
//       }
//     },
//     mounted () {
//       GoogleMapsLoader.KEY = 'AIzaSyAamVCoyQ4AuvBpxVRMs9P-HFkfPVQj0Kw'
//       GoogleMapsLoader.load((google) => {
//         this.initMap(google)
//       })
//     }
//   }
//

<style>

</style>
