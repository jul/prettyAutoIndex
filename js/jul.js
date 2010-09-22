            $('a').not('.noimage').each( 
                function () { $(this).attr("id",$(this).attr("href")) });
            $('#image').jqm(  { overlay: 50, width:900, } );
            function imrot(angle) { 
            $('#img').css("-webkit-transform",  'rotate(' + angle + 'deg)');
            $('#img').css("-moz-transform",  'rotate(' + angle + 'deg)');
            }
            //from phpjs
function realpath (path) {
    // http://kevin.vanzonneveld.net
    // +   original by: mk.keck
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // %        note 1: Returned path is an url like e.g. 'http://yourhost.tld/path/'
    // *     example 1: realpath('../.././_supporters/pj_test_supportfile_1.htm');
    // *     returns 1: 'file:/home/kevin/workspace/_supporters/pj_test_supportfile_1.htm'
    
    var p = 0, arr = [];
    /* Save the root, if not given */
    var r = this.window.location.href;
    /* Avoid input failures */
    path = (path + '').replace('\\', '/');
    /* Check if there's a port in path (like 'http://') */
    if (path.indexOf('://') !== -1) {
        p = 1;
    }
    /* Ok, there's not a port in path, so let's take the root */
    if (!p) {
        path = r.substring(0, r.lastIndexOf('/') + 1) + path;
    }
    /* Explode the given path into it's parts */
    arr = path.split('/');
    /* The path is an array now */
    path = [];
    /* Foreach part make a check */
    for (var k in arr) {
        /* This is'nt really interesting */
        if (arr[k] == '.') {
            continue;
        }
        /* This reduces the realpath */
        if (arr[k] == '..') {
            /* But only if there more than 3 parts in the path-array.
             * The first three parts are for the uri */
            if (path.length > 3) {
                path.pop();
            }
        }
        /* This adds parts to the realpath */
        else {
            /* But only if the part is not empty or the uri
             * (the first three parts ar needed) was not
             * saved */
            if ((path.length < 2) || (arr[k] !== '')) {
                path.push(arr[k]);
            }
        }
    }
    /* Returns the absloute path as a string */
    return path.join('/');
}
            function share(link) {
            return ( '<a name="fb_share" type="button" ' 
            + ' share_url="' + realpath(link) + '">Partager</a><script src="http://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript"></script>');
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
                           embed(link, "500px") + share(link) + '</div></p>' );

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

