$(document).ready(
    function() { 
        if( 'prism' ==  $('input[name=theme]').val()) { 
        /* 
To open an image gallery simply:

   1. Create a link (<a href=”#”>).
   2. Add the rel attribute “prettyPhoto” to it and add your gallery name in square brakets (rel=”prettyPhoto“).
   3. Change the href of your link so it points to the full size image.
   4. Pass the following settings when you initialize prettyPhoto: $(“a[rel^='prettyPhoto']“).prettyPhoto({theme: ‘facebook’,slideshow:5000, autoplay_slideshow:true});

*/
        $("a").not(".noimage").attr("rel","prettyPhoto[gallery]");
        $("a").not(".noimage").each( function() { 
            $(this).attr("alt", $(this).attr("href"));
            });

        $("a").not(".noimage").attr("href", "#");
        $("a").not(".noimage").prettyPhoto();
        $("a").not(".noimage").each( function() { 
            $(this).attr("href", $(this).attr("alt"));
            });
        } else { 
            $('a').not('.noimage').each( 
                function () { $(this).attr("id",$(this).attr("href")) });
            $('#image').jqm(  { overlay: 50, width:900, } );
            function imrot(angle) { 
            $('#img').css("-webkit-transform",  'rotate(' + angle + 'deg)');
            $('#img').css("-moz-transform",  'rotate(' + angle + 'deg)');
            }
            function loadme(el) { 
                var link=$(el).attr("href");

                var rot1="<button id=rot1 >+90</button>";
                var rot2="<button id=rot2 >+180</button>";
                var rot3="<button id=rot3 >-90</button>";
                var rot4="<button id=rot4 >2 &pi;</button>";
                var prev= '<p style="text-align:center"><button id=prev  >&lt;&lt;</button>';
                var next= '<button id=next  >&gt;&gt;</button> ';
                $('#image').html( prev + 'image : ' + link   +  next + 
                        rot1 + rot2 + rot3 + rot4 +
                        '<button style="float:right" id=close >X</button>' + 
                        '<div id=imgc ><a href="' + link + '"><img id=img width="500px" src="' + link + '" /></a></div></p>');

                //$("button").button();
                $("#next").click(function() { $(el).next().click() });
                $("#prev").click(function() { $(el).prev().click() });
                $('#rot1').click(function() { 
                        imrot(90);
                        });
                $('#rot2').click(function() { 
                        imrot(180);
                        });
                $('#rot3').click(function() { 
                        imrot(270);
                        });
                $('#rot4').click(function() { 
                        imrot(0);
                        });
                $("#close").click(function() { $('#image').jqmHide() } );
                $('#image').jqmShow();
            }
            $('a').not('.noimage').click(function(event) { 
                    event.preventDefault();
                    loadme(this);
                }
            );
        }
    }
);

