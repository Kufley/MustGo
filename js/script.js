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
        if ($("[value=complicated-route]").is(":checked")) {
            $this.remove();
            $( "#search" ).remove();
            $form.append('<div class="wrap-add-fly"></div>');
            $('<div class="form-group wrap-add-fly-group"><label for="departure-date">Дата вылета:</label><input type="text" class="form-control date-fly" id="departure-date" placeholder="Дата"name="departure-date"> <a href="#" class="input-arrow" id="link-open-calendar-three-day"></a> </div>').appendTo('.wrap-add-fly');
            $('<div class="form-group wrap-add-fly-group"> <label for="from-to-fly">Откуда:</label> <input type="text" class="form-control to-fly" id="from-to-fly"placeholder="Откуда лететь" name="from-to-fly"> <a href="#" class="input-arrow" id="link-open-autocomplete-where-to-fly"></a> </div>').appendTo('.wrap-add-fly');
            $('<div class="form-group wrap-add-fly-group"> <label for="where-to-fly">Куда:</label> <input type="text" class="form-control to-fly" id="where-to-fly"placeholder="Куда лететь" name="where-to-fly"> <a href="#" class="input-arrow" id="link-autocomplete-from-where-fly"></a> </div>').appendTo('.wrap-add-fly');
            $('<div class="form-group add-flight"><div class="add-flight-margin"><a href="#" id="add-flight" class="add-flight"><img src="images/icon/plus-green.png">Добавить перелет</a></div> </div>').appendTo('.wrap-add-fly');
            $('<div class="form-group"><button type="submit" class="btn btn-find">Найти</button></div>').appendTo('.wrap-add-fly');
            $('.add-flight').css('display', 'inline-block');
        }
    }

    /* TAB*/

    $("#avia-tab").click(function () {
        $(".tab-content.tab-content-main").css({"border": "4px solid #257ee1"});
        $(".top-page").css({"background": "url('images/bg/bg-plane.png')", "background-repeat": "no-repeat"});
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
    });
    $("#insurance-tab").click(function () {
        $(".tab-content.tab-content-main").css({"border": "4px solid #1b8da5"});
        $(".top-page").css({"background": "url('images/bg/bg-ins.png')", "background-repeat": "no-repeat"});
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

    /*Validation*/

    $("input").blur(function () {
        if ($(this).val() == "") {
            $(this).css({"border-color": "red"});
        }
    });

    /* Event for checkbox*/

    $("[name=radio-box]").click(function () {
        var $this = $(this),
            $flyReturn = $(".fly-returm"),
            $addFlight = $(".add-flight"),
            $wrapFly = $(".wrap-add-fly"),
            $searchContent = $(".аdvanced-searh-content-not-authorized");

        if ($this.attr("value") == "one-way") {
            hideAdvancedSearch();
            $flyReturn.css({"display": "none"});
            $addFlight.css({"display": "none"});
            $wrapFly.hide();
        }

        if ($this.attr("value") == "go-back") {
            hideAdvancedSearch();
            $searchContent.hide();
            $flyReturn.css({"display": "inline-block"});
            $addFlight.css({"display": "none"});
            $wrapFly.hide();
        }

        if ($this.attr("value") == "complicated-route") {
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