$(document).ready(function(){
	//BURGER================================================================
	$('.nav__burger').click(function(event) {
		$('.nav , .nav__burger').toggleClass('active');
		$('.main').toggleClass('lock');
	});

	//SPOILER==========================================================
	$('.footer__title').click(function() {
		$(this).toggleClass('active').next().slideToggle(300);
	});

	//FULLSCROLL=======================================================
	var position = $('.main').scrollTop();
	function fullScroll() {
		var scroll = $('.main').scrollTop();
	    if(scroll > position && position == 0) {
	    	$('.main').animate({
                scrollTop: $('.services').offset().top
            }, 500);
	    }
	    position = scroll;
	}

	//XZ CHTO==========================================================
	function xz() {
		let topSearch = $('.nav__search').offset().top;
		let leftSearch = $('.nav__search').offset().left;
		$('.nav__btn').offset({ top:topSearch , left:leftSearch });
		$('.nav__input').offset({ top:topSearch - 1 });
	};xz();
	$('.main, .nav__main').scroll(function() {
		fullScroll();
		xz();
		$('.nav__search').css({ 'visibility' : 'visible' });
		$('.nav__btn').css({ 'visibility' : 'hidden' });
		$('.nav__input').css({ 'margin-left' : '-300%' });
	});
	$('.nav__search').click(function () {
		$(this).css({ 'visibility' : 'hidden' });
		$('.nav__btn').css({ 'visibility' : 'visible' });
		$('.nav__input').css({ 'margin-left' : '-6px' });
	});
	$(document).click(function (mouse) {
		let mX = mouse.pageX;
		let mY = mouse.pageY;
		let topBtn = $('.nav__btn').offset().top;
		let leftBtn = $('.nav__btn').offset().left;
		let topInput = $('.nav__input').offset().top;
		let leftInput = $('.nav__input').offset().left;
		if(((mX < leftInput || mX > (leftInput + 300)) || (mY < topInput || mY > (topInput + 30))) &&
		((mX < leftBtn || mX > (leftBtn + 28)) || (mY < topBtn || mY > (topBtn + 28)))) {
			$('.nav__search').css({ 'visibility' : 'visible' });
			$('.nav__btn').css({ 'visibility' : 'hidden' });
			$('.nav__input').css({ 'margin-left' : '-300%' });
		}
	});

});