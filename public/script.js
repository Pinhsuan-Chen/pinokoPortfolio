$(document).ready(function(){

	$('.anim').animate({
		height:540,

		top:0,
		margin:0

	},500,'easeInOutSine'
	,
	function(){
		$(this).css('display','none');
		$('.p-header').css("background-image", "url(" + "public/img/newtop.png" + ")");
		// $('.p-header').show(3000);
	}

	);





	$(".topNav .icon").click(function(){
		// $(".topNav.responsive").toggleClass("displayNone",40000 );
		$(".topNav .icon").toggleClass('slideDown');
		$(".topNav .icon").toggleClass('slideUp');
		if ($(".topNav .icon").hasClass('slideDown')){
			$(".topNav.responsive").slideDown();

		}else{
			$(".topNav.responsive").slideUp();

		}

	});
	function checkWidth(){
		if ($(window).width() >900) {

			$('.topNav.responsive').css('display','none');
		}
	}
	checkWidth();
	$(window).resize(checkWidth);

	$('li.nav-item a').on('click', function(event) {
		$('li.nav-item a').removeClass('active');
		$(this).addClass('active');
	});

	$(window).on('scroll', function() {
		$('.target').each(function() {
			if($(window).scrollTop() >= $(this).offset().top) {

				var id = $(this).attr('id');
				console.log(id);
				$('li.nav-item a').removeClass('active');
				$('li.nav-item a[href="#'+ id +'"]').addClass('active');
			}
		});
	});

	var scrollCb = function () {
		var tiles = $("h2:not(.animated)");
		var $window = $(window);
		var b = $window.scrollTop() + $window.height();

		tiles.each(function (i) {
			var $this = $(this);
			var a = $this.offset().top + $this.height();

			if (a < b) {
				$this.addClass("animated").addClass("fadeInUp");
			}
		});
	};

	$(scrollCb);

	$(window).scroll(scrollCb);

//last
});