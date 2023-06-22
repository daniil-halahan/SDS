$(document).ready(function () {
	//IBG================================================
	function ibg() {
		$.each($('.ibg'), function (index, val) {
			if ($(this).find('img').length > 0) {
				$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
			}
		});
	}
	ibg();

	//SLICK-SLIDER=======================================
	// $('.slider').slick({
	// 	adaptiveHeight: false,	//Включает адаптирование высоты для одиночкного слайда горизонтальной карусели
	// 	autoplay: false,	//Автоматическая прокрутка
	// 	autoplaySpeed: 3000,	//Скорость автопрокрутки в милисекундах
	// 	arrows: true,	//Показ/скрытие навигационных кнопок
	// 	//prevArrow: button,	//Замена стандартной кнопки Preview
	// 	//nextArrow: button,	//Замена стандартной кнопки Next
	// 	dots: false,	//Показ/скрытие навигационных точек под слайдером
	// 	draggable: true,	//Включает/выключает способность перелистывания слайдера перетаскиванием мышью
	// 	fade: false,	//Эффект затухания при перелистывании слайдов
	// 	focusOnSelect: false,	//Устанавливает фокус на выбранный элемент карусели при клике
	// 	easing: 'linear',	//Анимационные эффекты перехода, их набор зависит от подключенных jQuery Easing плагинов
	// 	edgeFriction: 0.15,	//Сопротивление при попытки прокрутить карусель, когда дальше нет слайдов и она не зацилена
	// 	infinite: true,	//Бесконечное прокручивание (зацикливание)
	// 	initialSlide: 0,	//Номер слайда, с которого начинать показ
	// 	lazyLoad: 'ondemand',	//Тип подгрузки слайдов. Принимает 'ondemand' или 'progressive'
	// 	pauseOnHover: true,	//Пауза автопроигрывания при наведении мыши
	// 	pauseOnDotsHover: false,	//Пауза автопроигрывания при наведении мыши на навигационные точки
	// 	pauseOnHover: true,	//Пауза автопроигрывания при наведении мыши
	// 	rows: 1,	//Может быть 'window', 'slider' или 'min'
	// });

	//BURGER================================================================
	$('.nav__burger').click(function (event) {
		$('.nav , .nav__burger').toggleClass('active');
		$('.main').toggleClass('lock');
		// $('.main').toggle().css({'overflow': 'hidden'});
		// $('.main').toggle( function() {
		// 	$(this).css({'overflow': 'hidden'});
		// });
	});

	//SPOILER==========================================================
	$('.footer__title').click(function () {
		$(this).toggleClass('active').next().slideToggle(300);
	});

	//FULLSCROLL=======================================================
	let position = $('.main').scrollTop();
	console.log(position + " " + $('.main').scrollTop());
	function fullScroll() {
		let scroll = $('.main').scrollTop();
		if (scroll > position && position == 0) {
			console.log(position + " " + scroll);
			$('.main').animate({
				scrollTop: $('.services').offset().top
			}, 500);
		} //else if (scroll < position && position == ($('.header').height() - 2)) {
		// 	$('.main').animate({
		//         scrollTop: $('.header').offset().top
		//     }, 500);
		// }
		position = scroll;
	}

	//==========================================================
	function xz() {
		let topSearch = $('.nav__search').offset().top;
		let leftSearch = $('.nav__search').offset().left;
		$('.nav__btn').offset({ top: topSearch, left: leftSearch });
		$('.nav__input').offset({ top: topSearch - 1 });
	}; xz();
	$('.main, .nav__main').scroll(function () {
		fullScroll();
		xz();
		$('.nav__search').css({ 'visibility': 'visible' });
		$('.nav__btn').css({ 'visibility': 'hidden' });
		$('.nav__input').css({ 'margin-left': '-300%' });
	});
	$('.nav__search').click(function () {
		$(this).css({ 'visibility': 'hidden' });
		$('.nav__btn').css({ 'visibility': 'visible' });
		$('.nav__input').css({ 'margin-left': '-6px' });
	});
	$(document).click(function (mouse) {
		let mX = mouse.pageX;
		let mY = mouse.pageY;
		let topBtn = $('.nav__btn').offset().top;
		let leftBtn = $('.nav__btn').offset().left;
		let topInput = $('.nav__input').offset().top;
		let leftInput = $('.nav__input').offset().left;
		if (((mX < leftInput || mX > (leftInput + 300)) || (mY < topInput || mY > (topInput + 30))) &&
			((mX < leftBtn || mX > (leftBtn + 28)) || (mY < topBtn || mY > (topBtn + 28)))) {
			$('.nav__search').css({ 'visibility': 'visible' });
			$('.nav__btn').css({ 'visibility': 'hidden' });
			$('.nav__input').css({ 'margin-left': '-300%' });
		}
	});

});