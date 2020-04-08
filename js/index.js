function initMap() {
    var lostAngeles = {
        lat: 34.063380, 
        lng: -118.358080};
    map = new google.maps.Map(document.getElementById('map'), {
      center: lostAngeles,
      zoom: 11,
      mapTypeId: 'roadmap',
      // mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU}
    });
    var marker = new google.maps.Marker({
        position: lostAngeles,
        map: map,
        title: 'lost Angles'
        });
  }