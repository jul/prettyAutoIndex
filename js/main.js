$(document).ready(
    function() { 
            $('a').each( function() { 
                if( $(this).attr("href").match("/$") ) {
                    $(this).addClass("noimage");
                }
            });
        $("#desc").load("./desc.html", function () { 
            $('pre ').addClass('ui-widget-content');
            $.getScript("/org/js/jquery-ui-1.8.5.custom.min.js", 
                function () { 
                    $.getScript("/org/js/swfobject/swfobject.js",
                        function() { 
                            $.getScript("/org/js/embeder.js",function() { 
                                $.getScript("/org/js/jul.js");
                           });
                    });
                }
            );

        });
    }
);

