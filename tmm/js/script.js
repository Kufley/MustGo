$(window).load(function () {
    //var svgobject = document.getElementById('platscart-vagon');
    //svgobject.onload = function() {
    //    var svgobject = this;
    //    if ('contentDocument' in svgobject) {
    //        var svgdom = svgobject.contentDocument;
    //        var viewBox = svgdom.rootElement.getAttribute("viewBox").split(" ");
    //        var aspectRatio = viewBox[1] / viewBox[2];
    //        svgobject.height = parseInt(svgobject.offsetWidth / aspectRatio);
    //        $(".enable-wagon", svgdom).click(function () {
    //            if ($(this).css('fill') === 'rgb(45, 188, 248)') {
    //                $(this).css({'fill': 'rgb(26, 136, 182)'});
    //
    //            } else {
    //                $(this).css({'fill': 'rgb(45, 188, 248)'});
    //            }
    //        });
    //
    //        $("g", svgdom).each(function() {
    //            if($(this).attr('class')==="disable-wagon") {
    //                $(this).css({'pointer-events': 'none'});}
    //        });
    //    }
    //};
});

/*Hide block*/

$(document).click(function(e) {
    if ($(e.target).parents().filter('#slide-panel:visible').length != 1)
        $('.slide-panel').css({"margin-right":"-400px"});
        //$('.slide-panel-right').css({"height":"278px"});

});

$(document).ready(function () {

    $('#carousel-foto-page').carousel({
        interval: 0
    });

    $('.carousel .item').each(function(){
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length>0) {
            next.next().children(':first-child').clone().appendTo($(this));
        }
        else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });

    $("[value=mastercard]").click(function () {
        $("#liqpay").hide();
        $("#deposit").hide();
        $("#mastercard").show();
    });
    $("[value=liqpay]").click(function () {
        $("#mastercard").hide();
        $("#deposit").hide();
        $("#liqpay").show();
    });
    $("[value=deposit]").click(function () {
        $("#mastercard").hide();
        $("#liqpay").hide();
        $("#deposit").show();
    });

    function plus(id_plus)
    {
        var fieldName = $(id_plus).attr("field");
        var currentVal = parseInt($("input[name=" + fieldName + "]").val());

        if (currentVal < 9) {
            if (!isNaN(currentVal)) {
                $("input[name=" + fieldName + "]").val(currentVal + 1);
            } else {
                $("input[name=" + fieldName + "]").val(1);
            }
        }
    }

    function minus(id_minus)
    {
        var fieldName = $(id_minus).attr("field");
        var currentVal = parseInt($("input[name=" + fieldName + "]").val());
        if (currentVal > 1) {
            if (!isNaN(currentVal) && currentVal > 0) {
                $("input[name=" + fieldName + "]").val(currentVal - 1);
            } else {
                $("input[name=" + fieldName + "]").val(1);
            }
        }
    }

    function hideAdvancedSearch()
    {
        $(".open-close")
            .addClass("search-link-arrow-down")
            .removeClass("search-link-arrow-up")
            .find("span").text("Расширенный поиск");
            $(".аdvanced-searh-content").hide();
    }

    function addFlight($this)
    {
        var $form = $(".form-group-search");
        $('#new-wrap-button-search').removeAttr("id");
        $('.new-wrap-add-fly').removeClass('new-wrap-add-fly');
        if ($("[value=complicated-route]").is(":checked")) {
            //$this.remove();
            $form.append('<div class="wrap-add-fly"></div>');
            $('.wrap-add-fly').each(function () {
                if($(this).is(':empty')) {
                    $('<div class="form-group wrap-add-fly-group"><label for="departure-date">Дата вылета:</label><input type="text" class="form-control date-fly" id="departure-date" placeholder="Дата"name="departure-date"><a href="#" class="input-arrow" id="link-open-calendar-three-day"></a></div>').appendTo(this);
                    $('<div class="form-group wrap-add-fly-group"><label for="from-to-fly">Откуда:</label> <input type="text" class="form-control to-fly" id="from-to-fly"placeholder="Откуда лететь" name="from-to-fly"><a href="#" class="input-arrow" id="link-open-autocomplete-where-to-fly"></a></div>').appendTo(this);
                    $('<div class="form-group wrap-add-fly-group"><label for="where-to-fly">Куда:</label> <input type="text" class="form-control to-fly" id="where-to-fly"placeholder="Куда лететь" name="where-to-fly"><a href="#" class="input-arrow" id="link-autocomplete-from-where-fly"></a></div>').appendTo(this);
                    $('<div class="form-group "><div class="margin-top new-wrap-add-fly"></div></div>').appendTo(this);
                    $('<div class="form-group " id="new-wrap-button-search"></div>').appendTo(this);
                    if($('#wrap-button-search #search').length){
                        $(document).find('#wrap-button-search #search').detach().prependTo('#new-wrap-button-search');
                    } else {
                        $(document).find('.form-group #search').detach().prependTo('#new-wrap-button-search');
                    }
                    if($('#wrap-add-flight #add-flight').length){
                        $(document).find('#wrap-add-flight #add-flight').detach().prependTo('.new-wrap-add-fly');
                    } else {
                        $(document).find('#add-flight').detach().prependTo('.new-wrap-add-fly');

                    }
                    $('.add-flight').css('display', 'inline-block');
                }
            });
        }
    }

    /* TAB*/

    $("#avia-tab").click(function () {
        $(".tab-content.tab-content-main").css({"border": "4px solid #257ee1"});
        $(".top-page").css({"background": "url('/images/bg/bg-plane.png')", "background-repeat": "no-repeat",  "-webkit-background-size": "cover", "background-position": "center"});
        $("#section-timetables-train").hide();
        $("#section-timetables-avia").show();

    });
    $("#train-tab").click(function () {
        $(".tab-content.tab-content-main").css({"border": "4px solid #296992"});
        $(".top-page").css({
            "background": "url('/images/bg/bg-train.png')",
            "-webkit-background-size": "cover",
            "background-repeat": "no-repeat",
            "background-position": "center"
        });
        $(".wrap-add-fly").hide();
        $("#section-timetables-train").show();
        $("#section-timetables-avia").hide();
    });
    $("#insurance-tab").click(function () {
        $(".tab-content.tab-content-main").css({"border": "4px solid #1b8da5"});
        $(".top-page").css({"background": "url('/images/bg/bg-ins.png')", "background-repeat": "no-repeat",  "-webkit-background-size": "cover", "background-position": "center"});
    });
    $("#hotel-tab").click(function () {
        $(".tab-content.tab-content-main").css({"border": "4px solid #35a69a"});
        $(".wrap-add-fly").hide();
    });

    $("#avia-tab-cabinet").click(function () {
        $(".tabs-result-search .nav-tabs.nav-bought-order").css({"border-bottom": "2px solid #007fe5;"});
    });

    $("#train-tab-cabinet").click(function () {
        $(".tabs-result-search .nav-tabs.nav-bought-order").css({"border-bottom": "2px solid #296992;"});
    });

    $("#insurance-tab-cabinet").click(function () {
        $(".tabs-result-search .nav-tabs.nav-bought-order").css({"border-bottom": "2px solid #1b8da5;"});
    });
    /*Registration*/

    $("#corporate-entity-registation").click(function () {
        $("[value=corporation]").is(":checked") ? $(".form-reg-name-organization").css({"display": "block"}) : $(".form-reg-name-organization").css({"display": "none"});
    });



    /*Advanced search*/

    $(".open-close").click(function () {
        var $searchContent = $(".аdvanced-searh-content"),
            $this = $(this);
        if ($searchContent.is(":visible")) {
            $this
                .addClass("search-link-arrow-down")
                .removeClass("search-link-arrow-up")
                .find("span").text("Расширенный поиск");
        } else {
            $this
                .addClass("search-link-arrow-up")
                .removeClass("search-link-arrow-down")
                .find("span").text("Свернуть дополнительные параметры");
        }
        $searchContent.slideToggle();
        return false;
    });

    $('.btn-buy-train-collapse').click(function(){
        var $this = $(this);
        if($this.hasClass('collapsed')){
            $this
                .text('Отменить')
                .addClass("btn-buy-train-active")
                .removeClass("btn-buy-train");
            $('.line-gray-train').hide();
        } else {
            $this.text('Выбрать')
                .addClass("btn-buy-train")
                .removeClass("btn-buy-train-active");
            $('.line-gray-train').show();
        }
    });

    $('.search-more-accordion-toggle').click(function(){
        var $this = $(this);
        if($this.hasClass('collapsed')){
            $('.line-gray').hide();

            $this.text('Скрыть');
        } else {
            $this.text('Подробнее');
            $('.line-gray').show();
        }
    });

    $('.promo-code-link').click(function(){
        var $this = $(this);
        if($this.hasClass('collapsed')){
            $this.text('У меня есть промокод');
        } else {
            $this.text('У вас есть промокод?');
        }
    });

    $('.promo-bonus').click(function(){
        var $this = $(this);
        if($this.hasClass('collapsed')){

            $this.text('Я участвую в бонусной программе');
        } else {
            $this.text('Участвуете в бонусной программе?');
        }
    });

    $('.dropdown-arrow').click(function(){
        var $this = $(this);
        if($this.hasClass('collapsed')){
            $('.user-menu').css({"background-color":"#46607d"});
        } else {
            $('.user-menu').css({"background-color":"rgba(11, 85, 168, 0.35)"});
        }
    });


    $('.close-book').click(function(){
        $('#info-booking').hide();
    });

    $('#left-side-panel').click(function(){
        $('.slide-panel').css({"margin-right":"0"});
        $('.slide-panel-right').css({"height":"100%"});
    });

    $('#close-slide-panel').click(function(){
        $('.slide-panel').css({"margin-right":"-400px"});
        $('.slide-panel-right').css({"height":"278px"});
    });
    /*Sort*/

    $(".price-sort, .time-sort").click(function () {
        $(this).toggleClass('arrow-sort-down');
    });

    /*Validation*/

    //$("input").blur(function () {
    //    if ($(this).val() == "") {
    //        $(this).css({"border-color": "red"});
    //    }
    //});
    //$('.form-registation').validator();
    /* Event for checkbox*/


    $("[name=radio-box]").click(function () {
        var $this = $(this),
            $flyReturn = $(".fly-returm"),
            $addFlight = $(".add-flight"),
            $wrapFly = $(".wrap-add-fly"),
            $searchContent = $(".аdvanced-searh-content-not-authorized");

        if ($this.attr("value") == "one-way") {
            if($('#wrap-button-search #search').length == 0){
                $(document).find('#new-wrap-button-search #search').detach().prependTo('#wrap-button-search');
            }

            hideAdvancedSearch();
            $flyReturn.css({"display": "none"});
            $addFlight.css({"display": "none"});
            $wrapFly.hide();
        }

        if ($this.attr("value") == "go-back") {
            if($('#wrap-button-search #search').length == 0){
                $(document).find('#new-wrap-button-search #search').detach().prependTo('#wrap-button-search');
            }
            hideAdvancedSearch();
            $searchContent.hide();
            $flyReturn.css({"display": "inline-block"});
            $addFlight.css({"display": "none"});
            $wrapFly.hide();
        }

        if ($this.attr("value") == "complicated-route") {
            if($('#new-wrap-button-search').length){
                $(document).find('#wrap-button-search #search').detach().prependTo('#new-wrap-button-search');
            }

            hideAdvancedSearch();
            $searchContent.hide();
            $flyReturn.css({"display": "none"});
            $addFlight.css({"display": "inline-block"});
            $wrapFly.show();

        }
    });

    $("[name=radio-box-train]").click(function () {
        var $this = $(this),
            $trainReturn = $(".train-return");
        if ($this.attr("value") == "one-way-train") {
            hideAdvancedSearch();
            $trainReturn.css({"display": "none"});
        }
        if ($this.attr("value") == "go-back-train") {
            hideAdvancedSearch();
            $trainReturn.css({"display": "inline-block"});
        }
    });

    /*Counter*/

    $('.qtyplus, .child-plus, .plus-insurance, .adult-plus, .child2-plus').click(function () {
        plus(this);
    });

    $(".qtyminus, .child-minus, .minus-insurance, .adult-minus, .child2-minus").click(function () {
        minus(this);
    });

    /*Add flight number*/

    $(document).on("click", "#add-flight", function () {
        addFlight(this);
    });



    function enable() {
        if (this.checked) {
            $(this).parents('.col-lg-12').find("input.enable").removeAttr("disabled");
            $(this).parents('.col-lg-12').find('label.label-disable').removeClass("text-gray");

        } else {
            $(this).parents('.col-lg-12').find("input.enable").attr("disabled", true).prop( "checked", false );
            $(this).parents('.col-lg-12').find('label.label-disable').addClass("text-gray");
        }
    }

    $(function() {
        $("#additional-baggage").click(enable);
        $("#additional-baggage-1").click(enable);
    });
    //if ($("#additional-baggage").attr( "checked", true )) {
    //    $("input:checkbox").prop("disabled", true);
    //} else{
    //    $("input:checkbox").prop("disabled", false);
    //}

    $("#filter-show-all-class").change(function () {
        $("#filter-class").find("input:checkbox").prop('checked', $(this).prop("checked"));
    });

    $("#filter-show-all-departure-airport").change(function () {
        $("#filter-departure-airport").find("input:checkbox").prop('checked', $(this).prop("checked"));
    });

    $("#filter-show-all-airport-arrival").change(function () {
        $("#filter-airport-arrival").find("input:checkbox").prop('checked', $(this).prop("checked"));
    });

    $("#filter-show-all-airline").change(function () {
        $("#filter-airline").find("input:checkbox").prop('checked', $(this).prop("checked"));
    });

    $("#filter-show-type-wagon").change(function () {
        $("#filter-type-wagon").find("input:checkbox").prop('checked', $(this).prop("checked"));
    });
});
customScroll = function () {
    var sEl = document.querySelector("#filter_options > ul"),
        sBar = document.createElement("b"),
        sThumb = document.createElement("b");
    sEl.parentNode.insertBefore(sBar, sEl);
    sBar.appendChild(sThumb);

    var sRatio = sBar.offsetHeight / sEl.scrollHeight,
        sMin = parseInt(window.getComputedStyle(sThumb, null).getPropertyValue("min-height")),
        sTop = function () {
            sThumb.style.marginTop = sEl.scrollTop * sRatio + "px";
        },
        sHeight = function () {
            sRatio = sBar.offsetHeight / sEl.scrollHeight;
            var h = sEl.offsetHeight * sRatio;
            if (sRatio > 1.02) {
                $("#filter_options > b").css({"display": "none"});
            }
            else {
                $("#filter_options > b").css({"display": "block"});
            }
            if (h < sMin) sRatio -= ((sMin - h) / sEl.scrollHeight);
            sThumb.style.height = h + "px";
            sTop();
            console.log(sEl.scrollHeight);
            console.log(sEl.scrollTop);
            console.log(sThumb.style.marginTop);
            console.log(sRatio);
        },
        currY = function (e) {
            return e.changedTouches ? e.changedTouches[0].clientY : document.all ? window.event.clientY : e.pageY;
        },
        el = null, elY = 0,
        listen = function (el, e, cb) {
            e.split(" ").forEach(function (e) {
                el.addEventListener(e, cb, false);
            });
        },
        autoScroll = function () {
            autoScroll = setInterval(function () {
                sEl.scrollTop = sEl.scrollTop + 1;
            }, 150);
        },
        stopScroll = function () {
            clearInterval(autoScroll);
        };

    sHeight();
    listen(sEl, "scroll", sTop);
    listen(sThumb, "touchstart mousedown", function (e) {
        e.preventDefault();
        el = this;
        elY = currY(e) - el.offsetTop;
    });
    listen(document, "touchmove mousemove", function (e) {
        el !== null && (sEl.scrollTop = (currY(e) - elY) / sRatio);
    });
    listen(document, "touchend mouseup", function (e) {
        el = null;
    });
    listen(sBar, "mousedown", function () {
        listen(document, "mouseup", stopScroll);
    });
    listen(sEl, "click touchstart mousewheel DOMMouseScroll", stopScroll);
};
//customScroll();

$('.border-bottom a').click(function () {
    $('.border-bottom').addClass("active");

});

$(document).on('click', function( e) {
    if (!$(e.target).closest(".user-menu").length && !$(e.target).closest("#user-menu").length) {
        $('#user-menu').hide();
        $("a.dropdown-arrow").removeClass('togg');
        $('.user-menu').css({"background-color":"rgba(11, 85, 168, 0.35)"});
    }
    e.stopPropagation();
});
$('.dropdown-arrow').click(function(){
    if ( $("#user-menu").is(":visible") ) {
        $("a.dropdown-arrow").removeClass('togg');
        $("#user-menu").hide();
        $('.user-menu').css({"background-color":"rgba(11, 85, 168, 0.35)"});

    } else if ( $("#user-menu").is(":hidden") ) {
        $("a.dropdown-arrow").addClass('togg');
        $("#user-menu").show();
        $('.user-menu').css({"background-color":"#46607d"});
    }
});

/**
 * base script
 */
(function($, win){
    var layoutIndex = function(){
        this.init();
    };
    layoutIndex.prototype = {
        templates: {},
        hideBlocks: {},

        // modal block
        modalBox : $(".modalBlock"),
        modalBoxHead : null,
        modalBoxBody : null,
        modalBoxFooter : null,

        /**
         * initialisation prototype
         */
        init: function(){
            me = this;
            me.initData();
            me.initEvent();
        },

        /**
         * initialisation data
         */
        initData: function(){
            me.loadTemplates();
            // init modal block
            me.modalBoxHead   = me.modalBox.find(".modal-header");
            me.modalBoxBody   = me.modalBox.find(".modal-body");
            me.modalBoxFooter = me.modalBox.find(".modal-footer");

        },

        /**
         * initialisation event
         */
        initEvent: function() {
            $('body')
                .on('click',".log-in", me.loginBlock)
                .on('click',".forgot-pass", me.forgotPass)
                .on('click',".log-out", me.logout)
                .on('click',".registration", me.registrationBlock)
                .on('click',".modal-header" , function(){$('.modal-backdrop').remove();})
                .on('click',".enter-social-facebook", me.enterSocialFacebook)
                .on('click',".enter-social-vkontakte", me.enterSocialVkontakte)
                .on('click',".enter-social-twitter", me.enterSocialTwitter)
                .on('click',".enter-social-google", me.enterSocialGoogle)
            ;
        },

        /**
         * load templates mustache
         */
        loadTemplates: function(){
            //$.get(HTTP_HOST + '/templates/view/templates/searchplace', function(template) {Mustache.parse(me.templates.searchPlace = template);});
            // if you unlogin
            //$.get(HTTP_HOST + '/templates/view/modal/login', function(template) {Mustache.parse(me.templates.login = template);  });
            //$.get(HTTP_HOST + '/templates/view/modal/registration', function(template) {Mustache.parse(me.templates.registration = template);});

        },

        /**
         * hide block
         * @param id block
         */
        hideBlock: function(block){
            if(me.hideBlocks[block] == undefined || me.hideBlocks[block].length == 0){
                me.hideBlocks[block] = true;
                $(document).on('click', function (e) {
                    if ($(e.target).closest('#' + block).length === 0) {
                        $('#' + block).hide();
                    }
                });
            }
        },

        /**
         * autorisation user
         * @returns {boolean}
         */
        loginBlock: function(){
            $.get(HTTP_HOST + '/templates/view/modal/login', function(template) {
                me.modalBox.modal('hide');
                me.modalBox.attr('id','form-help');
                me.modalBoxHead.find('h1').text(lang.login.title);
                var rendered = Mustache.render(template, {'lang':lang.login,'redirect': window.location.pathname});
                me.modalBoxBody.html(rendered);
                me.modalBox.modal('show');
                return false;
            });

            return false;
        },

        /**
         * logout user
         * @returns {boolean}
         */
        logout: function(){
            $.get(HTTP_HOST + '/templates/view/modal/logout', function(template) {
                var rendered = Mustache.render(template, {'redirect': window.location.pathname});
                $('body').append(rendered);
                $('#logout').submit();

            });
            return false;
        },

        /**
         * forgot password
         * @returns {boolean}
         */
        forgotPass: function(){
            $.get(HTTP_HOST + '/templates/view/modal/forgotpass', function(template) {
                me.modalBox.modal('hide');
                me.modalBox.attr('id','form-help');
                me.modalBoxHead.find('h1').text(lang.forgotPass.title);
                var rendered = Mustache.render(template, {'lang':lang.forgotPass,'redirect': window.location.pathname});
                me.modalBoxBody.html(rendered);
                me.modalBox.modal('show');
                me.modalBoxBody.find('form')
                    .off('submit')
                    .on('submit', function () {
                        var form = $(this);
                        form.find(".form-control").each(function(){
                            $(this).prop('disabled', true);
                            $(this).css('opacity','0.4');
                        });

                        $.ajax({type: form.attr('method'),url: form.attr('action'),data: form.serialize()})
                            .done(function(json) {
                                if(json.success){
                                    me.modalBox.modal('hide');
                                }else{
                                    if(json.error.length){
                                        form.find('.help-block').text(json.error);
                                    }
                                    form.find('.help-block').show();
                                    form.find(".form-control").each(function(){
                                        $(this).prop('disabled', false);
                                        $(this).css('opacity','1');
                                    });
                                }
                            })
                            .fail(function (jqXHR, textStatus) {
                                console.log("Request failed: " + textStatus);
                                me.modalBox.modal('hide');
                            });
                        return false;
                    });
                return false;
            });

            return false;
        },

        /**
         * registration
         */
        registrationBlock: function(){
            $.get(HTTP_HOST + '/templates/view/modal/registration', function(template) {
                me.modalBox.attr('id', 'form-help');
                me.modalBoxHead.find('h1').text(lang.registration.title);
                var rendered = Mustache.render(template, {"lang": lang.registration});
                me.modalBoxBody.html(rendered);
                me.modalBox.modal('show');
            });
        },

        /**
         * enter social network facebook
         */
        enterSocialFacebook: function(){
            window.open(HTTP_HOST+'auth/fb', "fblogin", "location=0,status=0,scrollbars=0,width=800,height=430");
        },

        /**
         * enter social network Vkontakte
         */
        enterSocialVkontakte: function(){
            window.open(HTTP_HOST+'auth/vk', "vklogin", "location=0,status=0,scrollbars=0,width=800,height=430");
        },

        /**
         * enter social network Twitter
         */
        enterSocialTwitter: function(){
            window.open(HTTP_HOST+'auth/tw', "twlogin", "location=0,status=0,scrollbars=0,width=800,height=430");
        },

        /**
         * enter social network mail.google.
         */
        enterSocialGoogle: function(){
            window.open(HTTP_HOST+'auth/gm', "gmlogin", "location=0,status=0,scrollbars=0,width=800,height=430");
        }

    };
var tmpLayoutIndex = win.layoutIndex = new layoutIndex();
})(jQuery, window);