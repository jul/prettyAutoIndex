$(document).ready(
    function() { 
            $('a').each( function() { 
                if( $(this).attr("href").match("/$") ) {
                    $(this).addClass("noimage");
                }
            });
        $("#desc").load("./desc.html", function () { 
            if( 'prism' ==  $('input[name=theme]').val()) { 
                $.getScript("/org/js/jquery.prettyPhoto.js", function() { 
                    $.getScript("/org/js/prism.js");
                    }
                );
            } else { 
                $.getScript("/org/js/jquery-ui-1.8.5.custom.min.js", 
                    function () { 
                        $.getScript("/org/js/jul.js");
                    }
                );
            }
        });
    }
);

