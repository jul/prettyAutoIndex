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
            $("#dynamicstyle").load("/org/css/jqModal.css");
            $.getScript("/org/js/jqModal.js", function () { 
                $.getScript("/org/js/jul.js");
                }
            );
        }
        });
    }
);

