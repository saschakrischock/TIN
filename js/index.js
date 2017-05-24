$("#js-panel-1").resizable({
  handles: {
    "e": "#js-handle-1"
  },
   resize: function(event, ui) {
       var navwidth = $('nav').width();
  var leftcontainerwidth = $('#js-panel-1').width();
   $('nav').css('width', leftcontainerwidth + "px");
  }
});

$( document ).ready(function() {
  var windowheight = $(window).height();
    var heightleft = $('.panel-group').height();
    var navheight = $('nav').height();
  var navwidth = $('nav').width();
  var leftcontainerwidth = $('#js-panel-1').width();
  
    $('.panel-group').css('height', windowheight - navheight + "px");
   $('.panel-group').css('margin-top', navheight + "px");
  
   $('.nav-right').css('height', navheight + "px");

  
   $('nav').css('width', leftcontainerwidth + "px");
  
});

$(window).on('resize', function(){
  var windowheight = $(window).height();
    var heightleft = $('.left').height();
    var navheight = $('nav').height();
  
      $('.panel-group').css('height', windowheight - navheight + "px");
   $('.panel-group').css('margin-top', navheight + "px");
  
   $('.nav-right').css('height', navheight + "px");
   $('nav').css('height', navheight + "px");
});




$(document).ready(function() {
  
  
  
    $('#events').click(function() {
	    $('.logo').addClass('logo-events');
	    $('.logo').removeClass('logo-artists');
	    $('.logo').removeClass('logo-about');
        $('.events').addClass('active');
      $('.artists').removeClass('active');
      $('.about').removeClass('active');
    });
  
   $('#artists').click(function() {
	   $('.logo').addClass('logo-artists');
	    $('.logo').removeClass('logo-events');
	    $('.logo').removeClass('logo-about');
        $('.artists').addClass('active');
      $('.events').removeClass('active');
      $('.about').removeClass('active');
    });
  
   $('#about').click(function() {
	   $('.logo').addClass('logo-about');
	   $('.logo').removeClass('logo-events');
	    $('.logo').removeClass('logo-artists');
        $('.about').addClass('active');
      $('.events').removeClass('active');
      $('.artists').removeClass('active');
    });
  
});



(function(w, d) {
  var raf = w.requestAnimationFrame || w.setImmediate || function(c) { return setTimeout(c, 0); };

  function initEl(el) {
    if (el.hasOwnProperty('data-simple-scrollbar')) return;
    Object.defineProperty(el, 'data-simple-scrollbar', new SimpleScrollbar(el));
  }

  // Mouse drag handler
  function dragDealer(el, context) {
    var lastPageY;

    el.addEventListener('mousedown', function(e) {
      lastPageY = e.pageY;
      el.classList.add('ss-grabbed');
      d.body.classList.add('ss-grabbed');

      d.addEventListener('mousemove', drag);
      d.addEventListener('mouseup', stop);

      return false;
    });

    function drag(e) {
      var delta = e.pageY - lastPageY;
      lastPageY = e.pageY;

      raf(function() {
        context.el.scrollTop += delta / context.scrollRatio;
      });
    }

    function stop() {
      el.classList.remove('ss-grabbed');
      d.body.classList.remove('ss-grabbed');
      d.removeEventListener('mousemove', drag);
      d.removeEventListener('mouseup', stop);
    }
  }

  // Constructor
  function ss(el) {
    this.target = el;
    
    this.bar = '<div class="ss-scroll">';

    this.wrapper = d.createElement('div');
    this.wrapper.setAttribute('class', 'ss-wrapper');

    this.el = d.createElement('div');
    this.el.setAttribute('class', 'ss-content');

    this.wrapper.appendChild(this.el);

    while (this.target.firstChild) {
      this.el.appendChild(this.target.firstChild);
    }
    this.target.appendChild(this.wrapper);

    this.target.insertAdjacentHTML('beforeend', this.bar);
    this.bar = this.target.lastChild;

    dragDealer(this.bar, this);
    this.moveBar();

    this.el.addEventListener('scroll', this.moveBar.bind(this));
    this.el.addEventListener('mouseenter', this.moveBar.bind(this));

    this.target.classList.add('ss-container'); 
      
    var css = window.getComputedStyle(el);
  	if (css['height'] === '0px' && css['max-height'] !== '0px') {
    	el.style.height = css['max-height'];
    }
  }

  ss.prototype = {
    moveBar: function(e) {
      var totalHeight = this.el.scrollHeight,
          ownHeight = this.el.clientHeight,
          _this = this;

      this.scrollRatio = ownHeight / totalHeight;

      raf(function() {
        // Hide scrollbar if no scrolling is possible
        if(_this.scrollRatio >= 1) {
          _this.bar.classList.add('ss-hidden')
        } else {
          _this.bar.classList.remove('ss-hidden')
          _this.bar.style.cssText = 'height:' + (_this.scrollRatio) * 100 + '%; top:' + (_this.el.scrollTop / totalHeight ) * 100 + '%;right:-' + (_this.target.clientWidth - _this.bar.clientWidth) + 'px;';
        }
      });
    }
  }

  function initAll() {
    var nodes = d.querySelectorAll('*[ss-container]');

    for (var i = 0; i < nodes.length; i++) {
      initEl(nodes[i]);
    }
  }

  d.addEventListener('DOMContentLoaded', initAll);
  ss.initEl = initEl;
  ss.initAll = initAll;

  w.SimpleScrollbar = ss;
})(window, document);