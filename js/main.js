$(document).ready(
    function() { 
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

