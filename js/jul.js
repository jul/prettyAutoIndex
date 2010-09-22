            $('a').not('.noimage').each( 
                function () { $(this).attr("id",$(this).attr("href")) });
            $('#image').jqm(  { overlay: 50, width:900, } );
            function imrot(angle) { 
            $('#img').css("-webkit-transform",  'rotate(' + angle + 'deg)');
            $('#img').css("-moz-transform",  'rotate(' + angle + 'deg)');
            }
            function embed(link,width) { 
                if( link.match('ogg$') ) { 
                    return ('<video autoplay width="' + width +
                    '" src="' + link + '" controls=true >' +
                    'to watch video please use a real web browser</video>' +
                    '<br/><a href="' +link + '">Here</a>' );
                }
                if( link.match('avi$') ) { 
                    return( '<embed width="100%" height="100%"  name="plugin" src="' +
                    link + '" type="video/x-msvideo" >' + 
                    '<br/><a href="' +link + '">Here</a>' );
                } 

                return ( '<a href="' + link + '"><img id=img width="' + 
                    width + '"  src="' + link + '" /></a>');

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
                           embed(link, "500px") + '</div></p>');

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

