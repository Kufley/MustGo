$(document).ready(function () {
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
        $(".top-page").css({"background": "url('images/bg/bg-plane.png')", "background-repeat": "no-repeat",  "-webkit-background-size": "cover", "background-position": "center"});
        $("#section-timetables-train").hide();
        $("#section-timetables-avia").show();

    });
    $("#train-tab").click(function () {
        $(".tab-content.tab-content-main").css({"border": "4px solid #296992"});
        $(".top-page").css({
            "background": "url('images/bg/bg-train.png')",
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
        $(".top-page").css({"background": "url('images/bg/bg-ins.png')", "background-repeat": "no-repeat",  "-webkit-background-size": "cover", "background-position": "center"});
    });
    $("#hotel-tab").click(function () {
        $(".tab-content.tab-content-main").css({"border": "4px solid #35a69a"});
        $(".wrap-add-fly").hide();
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
customScroll();