$(document).ready(function() {



    $(".toggle-menu").click(function () {
        $(this).toggleClass("on");
        $(".main-menu").toggleClass('d-block');
    });












    var $tabButtonItem = $('#tab-button li'),
        $tabSelect = $('#tab-select'),
        $tabContents = $('.tab-contents'),
        activeClass = 'is-active';

   /* $tabButtonItem.first().addClass(activeClass);*/
    $tabContents.not(':first').hide();
    $tabContents.first().css("display", "none");


    $('#title').click(function () {
        $tabContents.hide();
        $tabButtonItem.removeClass(activeClass);
        $tabSelect.removeClass(activeClass);
        $('#tab-select option').each(function (key, item) {
            $('#' + item.id).removeAttr('selected');
        });
        $("#tab-select :nth-child(1)").attr("selected", "selected");
        $('#descr-menu').addClass('active');
    });


    $('#tab-select').change(function (event) {
       $('#tab-select option').each(function (key, item) {
            $('#' + item.id).removeAttr('selected');
        });
        $(event.target.value + 'q').attr("selected", "selected");
        console.log( $(event.target.value + 'q'));
        console.log(event.target.value);
    });


    $tabButtonItem.click(function () {
        $('#descr-menu').removeClass('active');
    });

    $tabSelect.click(function () {
        $('#descr-menu').removeClass('active');
    });




    $tabButtonItem.find('a').on('click', function(e) {
        var target = $(this).attr('href');

        $tabButtonItem.removeClass(activeClass);
        $(this).parent().addClass(activeClass);
        $tabSelect.val(target);
        $tabContents.hide();
        $(target).show();
        e.preventDefault();
    });

    $tabSelect.on('change', function() {
        var target = $(this).val(),
            targetSelectNum = $(this).prop('selectedIndex');

        $tabButtonItem.removeClass(activeClass);
        $tabButtonItem.eq(targetSelectNum).addClass(activeClass);
        $tabContents.hide();
        $(target).show();
    });






    var slider = $('#ex18b');
    if(slider && Object.keys(slider) && Object.keys(slider).length > 0){
        var sliderB = new Slider("#ex18b", {
            min: 0,
            max: 10,
            value: [3, 6],
            labelledby: ['ex18-label-2a', 'ex18-label-2b']
        });

        sliderB.on("slide",function (value) {
            if(value && value.length>0) {
                $("#min").val(value[0]);
                $("#max").val(value[1]);
            }
        });
    }



    $(".navigation-link").click(function () {
        var id = $(this).attr('id');
        localStorage.setItem('currentId', id);
    });
    function setActive() {
        $('.navigation-link').each(function (key, item) {
            item.classList.remove('active');
        });
        var id = localStorage.getItem('currentId');
        document.getElementById(id).classList.add('active');
        /*var element = document.getElementById(id);
        element.classList.add('active');*/
    }
    setActive();





    var maps = $('#map');
    if(maps && Object.keys(maps) && Object.keys(maps).length > 0) {
        ymaps.ready(function () {
            var myMap = new ymaps.Map('map', {
                    center: [56.2218, 43.4802],
                    zoom: 9
                }, {
                    searchControlProvider: 'yandex#search'
                }),

                // Создаём макет содержимого.
                MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
                ),

                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                    hintContent: 'Собственный значок метки',
                    balloonContent: 'Это красивая метка'
                }, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#image',
                    // Своё изображение иконки метки.
                    iconImageHref: './img/map.png',
                    // Размеры метки.
                    iconImageSize: [30, 42],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [-5, -38]
                }),

                myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
                    hintContent: 'Собственный значок метки с контентом',
                    balloonContent: 'А эта — новогодняя',
                    iconContent: '12'
                }, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#imageWithContent',
                    // Своё изображение иконки метки.
                    iconImageHref: 'images/ball.png',
                    // Размеры метки.
                    iconImageSize: [48, 48],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [-24, -24],
                    // Смещение слоя с содержимым относительно слоя с картинкой.
                    iconContentOffset: [15, 15],
                    // Макет содержимого.
                    iconContentLayout: MyIconContentLayout
                });

            myMap.geoObjects
                .add(myPlacemark)
                .add(myPlacemarkWithContent);
        });
    }



});