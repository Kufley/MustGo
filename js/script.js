$(document).ready(function () {
    $("#add-flight").click(function () {
        if ($("[value=complicated-route]").is(':checked')) {
            var form = ".form-group-search";
            $(this).remove();
            $( "#search" ).remove();

            $(form).append('<div class="wrap-add-fly"></div>');
            $('<div class="form-group wrap-add-fly-group"><label for="departure-date">Дата вылета:</label><input type="text" class="form-control date-fly" id="departure-date" placeholder="Дата"name="departure-date"> <a href="#" class="input-arrow" id="link-open-calendar-three-day"></a> </div>').appendTo('.wrap-add-fly');
            $('<div class="form-group wrap-add-fly-group"> <label for="from-to-fly">Откуда:</label> <input type="text" class="form-control to-fly" id="from-to-fly"placeholder="Откуда лететь" name="from-to-fly"> <a href="#" class="input-arrow" id="link-open-autocomplete-where-to-fly"></a> </div>').appendTo('.wrap-add-fly');
            $('<div class="form-group wrap-add-fly-group"> <label for="where-to-fly">Куда:</label> <input type="text" class="form-control to-fly" id="where-to-fly"placeholder="Куда лететь" name="where-to-fly"> <a href="#" class="input-arrow" id="link-autocomplete-from-where-fly"></a> </div>').appendTo('.wrap-add-fly');
            //$( ".wrap-add-fly-group" ).wrapAll( "<div class='wrap-add-fly' />");
            //$(form).prepend('</div>');
            $('<div class="form-group add-flight"><div class="add-flight-margin"><a href="#" id="add-flight" class="add-flight"><img src="images/icon/plus-green.png">Добавить перелет</a></div> </div>').appendTo('.wrap-add-fly');
            $('<div class="form-group"><button type="submit" class="btn btn-find">Найти</button></div>').appendTo('.wrap-add-fly');
            $('.add-flight').css('display', 'inline-block');

        }
    });
        $('#avia-tab').click(function () {
        $('.tab-content.tab-content-main').css({"border": "4px solid #257ee1"});
        $('.top-page').css({"background": "url('images/bg/bg-plane.png')", "background-repeat": "no-repeat"});
    });
    $('#train-tab').click(function () {
        $('.tab-content.tab-content-main').css({"border": "4px solid #296992"});
        $('.top-page').css({"background": "url('images/bg/bg-train.png')", "-webkit-background-size": "cover", "background-repeat": "no-repeat","background-position":"center"});
        $(".wrap-add-fly").hide();
    });
    $('#insurance-tab').click(function () {
        $('.tab-content.tab-content-main').css({"border": "4px solid #1b8da5"});
        $('.top-page').css({"background": "url('images/bg/bg-ins.png')", "background-repeat": "no-repeat"});
    });
    $('#hotel-tab').click(function () {
        $('.tab-content.tab-content-main').css({"border": "4px solid #35a69a"});
        $(".wrap-add-fly").hide();
    });

    $('.open-close').click(function () {
        if($("[value=one-way]").is(':checked')){
            if ($('.аdvanced-searh-content-not-authorized').is(':visible')) {
                $('.аdvanced-searh-content').hide();
                $(this).find('a').text('Расширенный поиск');
                $(this).addClass("search-link-arrow-down");
                $(this).removeClass("search-link-arrow-up");
            } else {
                $(this).find('a').text('Свернуть дополнительные параметры');
                $(this).addClass("search-link-arrow-up");
                $(this).removeClass("search-link-arrow-down");
            }
            $('.аdvanced-searh-content-not-authorized').slideToggle();
        } else {
            if ($('.аdvanced-searh-content').is(':visible')) {
                $('.аdvanced-searh-content-not-authorized').hide();
                $(this).find('a').text('Расширенный поиск');
                $(this).addClass("search-link-arrow-down");
                $(this).removeClass("search-link-arrow-up");
            } else {
                $(this).find('a').text('Свернуть дополнительные параметры');
                $(this).addClass("search-link-arrow-up");
                $(this).removeClass("search-link-arrow-down");
            }
            $('.аdvanced-searh-content').slideToggle();
        }
        return false;
    });

    $("input").blur(function() {
        if ($(this).val() == "") {
            $(this).css({"border-color": "red"});
        }
    });
    $("[name=radio-box]").click(function () {
        if ($(this).attr("value") == "one-way") {
            $('.open-close').find('a').text('Расширенный поиск');
            $('.open-close').addClass("search-link-arrow-down");
            $('.open-close').removeClass("search-link-arrow-up");
            $('.аdvanced-searh-content').hide();

//                $(".box").not(".one-way").hide();

            $(".fly-returm").css({"display": "none"});
            $(".add-flight").css({"display": "none"});
            $(".wrap-add-fly").hide();
        }
        if ($(this).attr("value") == "go-back") {
            $('.open-close').find('a').text('Расширенный поиск');
            $('.open-close').removeClass("search-link-arrow-up");
            $('.open-close').addClass("search-link-arrow-down");
            $('.аdvanced-searh-content').hide();

            $('.аdvanced-searh-content-not-authorized').hide();
            $(".fly-returm").css({"display": "inline-block"});
            $(".add-flight").css({"display": "none"});
            $(".wrap-add-fly").hide();
        }
        if ($(this).attr("value") == "complicated-route") {
            $('.open-close').find('a').text('Расширенный поиск');
            $('.open-close').removeClass("search-link-arrow-up");
            $('.open-close').addClass("search-link-arrow-down");
            $('.аdvanced-searh-content').hide();

            $('.аdvanced-searh-content-not-authorized').hide();
            $(".fly-returm").css({"display": "none"});
            $(".add-flight").css({"display": "inline-block"});
            $(".wrap-add-fly").show();

        }
    });

    $("[name=radio-box-train]").click(function () {
        if ($(this).attr("value") == "one-way-train") {
            $('.open-close').text('Расширенный поиск');
            $('.open-close').addClass("search-link-arrow-down");
            $('.open-close').removeClass("search-link-arrow-up");
            $('.аdvanced-searh-content').hide();
            $(".train-return").css({"display": "none"});
        }
        if ($(this).attr("value") == "go-back-train") {
            $('.open-close').text('Расширенный поиск');
            $('.open-close').addClass("search-link-arrow-down");
            $('.open-close').removeClass("search-link-arrow-up");
            $('.аdvanced-searh-content').hide();
            $(".train-return").css({"display": "inline-block"});
        }
    });


    function  plus(id_plus) {
            var fieldName = $(id_plus).attr('field');
            var currentVal = parseInt($('input[name=' + fieldName + ']').val());
            var val = parseInt($("[name^=quantity]").val());
            if (val < 9) {
                if (!isNaN(currentVal)) {
                    $('input[name=' + fieldName + ']').val(currentVal + 1);
                } else {
                    $('input[name=' + fieldName + ']').val(1);
                }
            }
    }

    function  minus(id_minus) {
        var fieldName = $(id_minus).attr('field');
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        var val = parseInt($("[name^=quantity]").val());
        if (val > 1) {
            if (!isNaN(currentVal) && currentVal > 0) {
                $('input[name=' + fieldName + ']').val(currentVal - 1);
            } else {
                $('input[name=' + fieldName + ']').val(1);
            }
        }
    }


    $('.qtyplus, .child-plus, .plus-insurance, .adult-plus, .child-plus').click(function(e) {
        plus(this);
    });

    $('.qtyminus, .child-minus, .minus-insurance, .adult-minus, .child-minus').click(function() {
        minus(this);
    });

});
customScroll= function(){
    var sEl = document.querySelector('#filter_options > ul'),
        sBar = document.createElement('b'),
        sThumb = document.createElement('b');
    sEl.parentNode.insertBefore(sBar, sEl);
    sBar.appendChild(sThumb);

    var sRatio = sBar.offsetHeight / sEl.scrollHeight,
        sMin = parseInt(window.getComputedStyle(sThumb, null).getPropertyValue('min-height')),
        sTop = function() { sThumb.style.marginTop = sEl.scrollTop * sRatio + 'px'; },
        sHeight = function() {
            sRatio = sBar.offsetHeight / sEl.scrollHeight;
            var h = sEl.offsetHeight * sRatio;
            if(sRatio > 1.02){
                $('#filter_options > b').css({"display": "none"});
            }
            else {
                $('#filter_options > b').css({"display": "block"});
            }
             if (h < sMin) sRatio -= ((sMin - h) / sEl.scrollHeight);
            sThumb.style.height = h + 'px';
            sTop();
            console.log(sEl.scrollHeight);
            console.log(sEl.scrollTop);
            console.log(sThumb.style.marginTop);
            console.log(sRatio);
        },
        currY = function(e) { return e.changedTouches ? e.changedTouches[0].clientY : document.all ? window.event.clientY : e.pageY; },
        el = null, elY = 0,
        listen = function(el, e, cb) { e.split(' ').forEach(function(e) { el.addEventListener(e, cb, false); }); },
        autoScroll = function() { autoScroll = setInterval(function() { sEl.scrollTop = sEl.scrollTop + 1; }, 150); },
        stopScroll = function() { clearInterval(autoScroll); };

    sHeight();
    listen(sEl, 'scroll', sTop);
    listen(sThumb, 'touchstart mousedown', function(e) { e.preventDefault(); el = this; elY = currY(e) - el.offsetTop; });
    listen(document, 'touchmove mousemove', function(e) { el !== null && (sEl.scrollTop = (currY(e) - elY) / sRatio); });
    listen(document, 'touchend mouseup', function(e) { el = null; });
    listen(sBar, 'mousedown', function() { listen(document, 'mouseup', stopScroll); });
    listen(sEl, 'click touchstart mousewheel DOMMouseScroll', stopScroll);
};
customScroll();