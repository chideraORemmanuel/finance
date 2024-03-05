// Initialize and add the map
function initMap() {
  // The location of Burnsville, MN
  var loc = { lat: 44.762, lng: -93.276 };
  // The map, centered at Burnsville, MN
  var map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 4,
    center: loc,
  });
  // The marker, positioned at loc
  var marker = new google.maps.Marker({ position: loc, map: map });
}

// Sticky menu background
window.addEventListener('scroll', function () {
  if (window.scrollY > 150) {
    document.getElementById('navbar').style.opacity = 0.9;
  } else {
    document.getElementById('navbar').style.opacity = 1;
  }
});

// Smooth Scrolling
$('#navbar a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
