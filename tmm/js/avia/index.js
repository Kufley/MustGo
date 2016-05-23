/**
 * Created by tolla on 17.05.2016.
 */

(function($){
    $.fn.dataPicker2month = function(options){

        var settings = $.extend({
            numberOfMonths: 2,
            dateFormat: "dd-mm-yy",
            minDate: new Date(),

            /**
             * @param Element input
             * @param Object inst
             * desc: A function that takes an input field and current datepicker instance and returns an options object to update the datepicker with. It is called just before the datepicker is displayed.
             */
            beforeShow: function(input, inst){

                console.log($('#ui-datepicker-div .radio-checked-calendar').length);
                //if($('#ui-datepicker-div .radio-checked-calendar').length == 0){
                    $('#ui-datepicker-div').append($("<hr/>"));
                //}

                console.log($('#ui-datepicker-div').length);

                //inst.append($("<hr/>"));

                console.log(input);
                console.log(inst);
            },

            onSelect: function(dateText, inst) {
                console.log(dateText);
                console.log(inst);
            }

        }, options);

        this.datepicker(settings) //Initiate the datepicker
            .attr("readonly",true) //Make the field itself readonly!

            //.wrap('<div class="input-appenddddd" />') //wrap it in all a div
            //.after($('<button class="btn"><i class="icon icon-calendar" /></button>') //add a button after the field
            //.click(function(){$(this).datepicker( "show" )}))
        ; //Bind a click even to it


        //$("#datepicker1").datepicker({
        //    dateFormat: "dd-mm-yy",
        //    zIndex: 99,
        //    onSelect: function(dateText, inst) {
        //        var date = $.datepicker.parseDate(inst.settings.dateFormat || $.datepicker._defaults.dateFormat, dateText, inst.settings);
        //        var dateText1 = $.datepicker.formatDate("D, d M yy", date, inst.settings);
        //        date.setDate(date.getDate() + 7);
        //        var dateText2 = $.datepicker.formatDate("D, d M yy", date, inst.settings);
        //        $("#dateoutput").html("Chosen date is <b>" + dateText1 + "</b>; chosen date + 7 days yields <b>" + dateText2 + "</b>");
        //    }
        //});
    }


})(jQuery);

(function($, win){
    var aviaIndex = function(){
        this.init();
    };
    aviaIndex.prototype = {
        templates: {},
        hideBlocks: {},
        // modal block
        modalBox : $(".modalBlock"),
        modalBoxHead : null,
        modalBoxBody : null,
        modalBoxFooter : null,

        init: function(){
            me = this;
            me.initData();
            me.initEvent();
        },
        initData: function(){
            me.loadTemplates();
            // init modal block
            me.modalBoxHead   = me.modalBox.find(".modal-header");
            me.modalBoxBody   = me.modalBox.find(".modal-body");
            me.modalBoxFooter = me.modalBox.find(".modal-footer");
            me.initDataTimePicker();

        },
        initEvent: function(){
            $('body')
                .on('click',    '.input-increment', me.inputIncrement)
                .on('click',    '.input-decrement', me.inputDecrement)
                .on('click',    '.feedback a',      me.feedbackCall)
                .on('keyup',    '.place-avia-fly',  me.aviaSearchPlace)
                .on('onfocus',  '.place-avia-fly',  me.aviaSearchPlace)
                .on('keyup',    '.place-train',     me.trainSearchPlace)
                .on('onfocus',  '.place-train',     me.trainSearchPlace)
                .on('click',    '.count-people',    me.countPeople)
                .on('onfocus',  '.count-people',    me.countPeople)
                .on('click',    '.flight-class',    me.flightClass)
                .on('onfocus',  '.flight-class',    me.flightClass)
                .on('click',    '.priority-company',    me.priorityCompany)
                .on('onfocus',  '.priority-company',    me.priorityCompany)
                .on('click',    '.passengers',    me.passengers)
                .on('onfocus',  '.passengers',    me.passengers)

            ;
        },
        /**
         * load templates mustache
         */
        loadTemplates: function(){
        //    $.get(HTTP_HOST + 'templates/view/templates/searchplace', function(template) {Mustache.parse(me.templates.searchPlace = template);});

        },
        /**
         * init data picker
         */
        initDataTimePicker: function(){
            $(".calendar2month").dataPicker2month();
        },

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
        feedbackCall: function(){
            $.get(HTTP_HOST + '/templates/view/modal/feedbackcall', function(template) {
                me.modalBox.attr('id','form-help');
                me.modalBoxHead.find('h1').text(lang.feedbackcall.title);
                var rendered = Mustache.render(template, {"lang":lang.feedbackcall});
                me.modalBoxBody.html(rendered);
                me.modalBox.modal('show');
                me.modalBoxBody.find('form')
                    .off('submit')
                    .on('submit',function(){
                        $.ajax(HTTP_HOST + 'auth/feedback_call',{'data': $(this).serialize()})
                            .done(function(data){
                                me.modalBox.modal('hide');
                            }).fail(function (jqXHR, textStatus) {
                                console.log("Request failed: " + textStatus);
                                me.modalBox.modal('hide');
                            });
                        return false;
                    })
            });
            return false;
        },

        trainSearchPlace: function(){
            me.searchPlace($(this), 'train');
        },

        aviaSearchPlace: function(){
            me.searchPlace($(this), 'avia');
        },
        searchPlace: function(t, type){
            var url,inputData, val = t.val(), block = t.data('block');

            switch(type){
                case 'avia':
                    url = HTTP_HOST + 'avia/airports_typeahead';
                    inputData = 'city';
                    break;
                case 'train':
                    url = HTTP_HOST + 'trains/typeahead';
                    inputData = 'name';
            }

            if(val.length > 2){
                $.ajax({url: url,data: {'query': val},'type':'post'})
                    .done(function(json){
                        if(json.length > 0){
                            var template = me.templates.searchPlace;
                            var rendered = Mustache.render(template, {"list": json,"first-letters": function(){return function(text, render){ return render(text).substring(0,3);}},"last-letters": function(){return function(text, render){ return render(text).substring(3);}}});
                            $('#' + block)
                                .html(rendered)
                                .show()
                                .off('click',"li")
                                .on('click',"li",function(){
                                    var _t = $(this), data = _t.data();
                                    t.val(data[inputData]);
                                    $('#' + block).hide();
                                });
                            me.hideBlock(block);
                        }
                    }).fail(function (jqXHR, textStatus) {
                        console.log("Request failed: " + textStatus);
                    });
            }else{
                $('#' + block).hide();
            }
        },
        inputIncrement:function(){
            var t = $(this),max,number, block;
            block = t.parent().find('input[type=text]');
            max = block.data('max');
            number = parseInt(block.val());
            number += 1;
            if(max > 0 && number > max){
                return false;
            }
            block.val(number);
        },
        inputDecrement:function(){
            var t = $(this),min,number, block;
            block = t.parent().find('input[type=text]');
            min = block.data('min');
            number = parseInt(block.val());
            number -= 1;
            if(min > 0 && number < min){
                return false;
            }
            block.val(number < 0 ? 0 : number);
        },
        showBlock: function(t){
            var block = t.data('block');
            block = t.data('block');
            me.hideBlock(block);
            setTimeout(function(){$('#' + block).show()}, 10);
            return false;
        },
        countPeople: function(){
            me.showBlock($(this));
        },
        flightClass: function(){
            me.showBlock($(this));
        },
        priorityCompany: function(){
            me.showBlock($(this));
        },
        passengers: function(){
            me.showBlock($(this));
        }

    }
    var tmpAviaIndex = win.aviaIndex = new aviaIndex();
})(jQuery, window);