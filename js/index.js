var place = new google.maps.LatLng(53.543457, 10.042324);
var parliament = new google.maps.LatLng(53.543457, 10.042324);
var marker;
var map;
var grayStyles = [
    {
        featureType: "all",
        stylers: [
            {saturation: -90},
            {lightness: 50}
        ]
    }
];

function initialize() {
    var mapOptions = {
        zoom: 15,
        clickable: false,
        streetViewControl: false,
        mapTypeControl: false,
        center: place
    };

    map = new google.maps.Map(document.getElementById('map'),
        mapOptions);

    marker = new google.maps.Marker({
        map: map,
        position: parliament,
        url: "https://goo.gl/maps/NotWcuX74Qo"

    });

    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<img src="http://olivertotzke.de/spotten/wp-content/uploads/2014/12/8.jpg"' +
        '<div id="bodyContent">' +
        '<div>Vorbeikommen? Das geht. Wir liegen an der grünen Brücke etc.</div>' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });


    google.maps.event.addListener(marker, 'click', function () {
        window.location.href = this.url;
    });
    infowindow.open(map, marker);
}


$(document).ready(function () {

    $('#space').one('click', function () {
        initialize();
    });
});


$("#js-panel-1").resizable({
    handles: {
        "e": "#js-handle-1"
    },
    resize: function (event, ui) {
        var leftcontainerwidth = $('#js-panel-1').width();
        var rightcontainerwidth = $('#js-panel-2').width();
        $('.nav-left').css('width', leftcontainerwidth + "px");
        $('.nav-right').css('width', rightcontainerwidth + "px");
        $(window).trigger('resize');
    }
});

$(document).ready(function () {
    var leftcontainerwidth = $('#js-panel-1').width();
    var rightcontainerwidth = $('#js-panel-2').width();
    var windowheight = $(window).height();
    var heightleft = $('.panel-group').height();
    var navheight = $('nav').height();
    $('.nav-left').css('width', leftcontainerwidth + "px");
    $('.nav-right').css('width', rightcontainerwidth + "px");
    $('.panel-group').css('height', windowheight - navheight + "px");
    $('.panel-group').css('margin-top', navheight + "px");

    $('.nav-right').css('height', navheight + "px");


});

$(window).on('resize', function () {
    var windowheight = $(window).height();
    var leftcontainerwidth = $('#js-panel-1').width();
    var rightcontainerwidth = $('#js-panel-2').width();
    var heightleft = $('.left').height();
    var navheight = $('nav').height();
    $('.nav-left').css('width', leftcontainerwidth + "px");
    $('.nav-right').css('width', rightcontainerwidth + "px");
    $('.panel-group').css('height', windowheight - navheight + "px");
    $('.panel-group').css('margin-top', navheight + "px");

    $('.nav-right').css('height', navheight + "px");
    $('nav').css('height', navheight + "px");
});


$(document).ready(function () {


    $('#tin').click(function () {
        $('.tin').addClass('active');
        $('.time').removeClass('active');
        $('.space').removeClass('active');
        $('.contact').removeClass('active');
        $('#tin').addClass('li-active');
        $('#time').removeClass('li-active');
        $('#space').removeClass('li-active');
        $('#contact').removeClass('li-active');
    });

    $('#time').click(function () {
        $('.time').addClass('active');
        $('.tin').removeClass('active');
        $('.space').removeClass('active');
        $('.contact').removeClass('active');
        $('#time').addClass('li-active');
        $('#tin').removeClass('li-active');
        $('#space').removeClass('li-active');
        $('#contact').removeClass('li-active');
    });

    $('#space').click(function () {
        $('.space').addClass('active');
        $('.tin').removeClass('active');
        $('.time').removeClass('active');
        $('.contact').removeClass('active');
        $('#space').addClass('li-active');
        $('#tin').removeClass('li-active');
        $('#time').removeClass('li-active');
        $('#contact').removeClass('li-active');
    });

    $('#contact').click(function () {
        $('.contact').addClass('active');
        $('.tin').removeClass('active');
        $('.time').removeClass('active');
        $('.space').removeClass('active');
        $('#contact').addClass('li-active');
        $('#tin').removeClass('li-active');
        $('#time').removeClass('li-active');
        $('#space').removeClass('li-active');
    });

});


