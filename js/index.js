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
        center: {
            lat: 53.543457,
            lng: 10.042324
        },
        styles: [{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]}]
    };




    map = new google.maps.Map(document.getElementById('map'),
        mapOptions);

    marker = new google.maps.Marker({
        map: map,
        position: parliament,
        url: "https://goo.gl/maps/NotWcuX74Qo"

    });




    var contentString = '<div id="content">' +
        '<a style="color:#000;text-decoration: none" href="https://goo.gl/maps/zAthbZkR5ks">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<img src="http://galerie-genscher.com/wp-content/uploads/2015/10/Yoga2-1024x580.png"' +
        '<a id="bodyContent">' +
        '<div class="google-maps-text">Vorbeikommen? Das geht.<br>Wir liegen an der grünen Brücke 3, 20539 Hamburg</div>' +
        '</div>' +
        '</a>' +
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
        $("iframe").addClass("no-cursor");
        $(".drag-handle-e").addClass('while-dragged');
        $(".drag-indicator").addClass('while-dragged');

        if (rightcontainerwidth > leftcontainerwidth) {
            $("#js-panel-1 p").addClass("one-column");
        }
        else {
            $("#js-panel-1 p").removeClass("one-column");
        }

        if (rightcontainerwidth/2 > leftcontainerwidth) {
            $(".nav-left ul li").addClass("small")
        }
        else {
            $(".nav-left ul li").removeClass("small");
        }

    },
    stop: function(event, ui) {
        $("iframe").removeClass("no-cursor");
        $(".drag-handle-e").removeClass('while-dragged');
        $(".drag-indicator").removeClass('while-dragged');
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


