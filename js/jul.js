//from phpjs


function realpath (path) {
    // http://kevin.vanzonneveld.net
    // +   original by: mk.keck
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    var p = 0, arr = [];
    var r = this.window.location.href;
    path = (path + '').replace('\\', '/');
    if (path.indexOf('://') !== -1) {
        p = 1;
    }
    if (!p) {
        path = r.substring(0, r.lastIndexOf('/') + 1) + path;
    }
    arr = path.split('/');
    path = [];
    for (var k in arr) {
        if (arr[k] == '.') {
            continue;
        }
        if (arr[k] == '..') {
            if (path.length > 3) {
                path.pop();
            }
        }
        else {
            if ((path.length < 2) || (arr[k] !== '')) {
                path.push(arr[k]);
            }
        }
    }
    return path.join('/');
}
//rotation client side FF + safari (fuck IE)
function imrot(angle) { 
var arg= 'rotate(' + angle + 'deg)';
    if ( angle == '90' || angle == '270'  ) { 
    arg+= " scale(0.67, 0.67)";
    }
 $.each([ '-moz-transform', '-webkit-fransform', 'transform' ], 
    function () { $('#img').css( '' + this,'' +  arg); }
    );
}

//FB share link
function share(link) {
    return ( '<a name="fb_share" type="button_count"  ' +  ' share_url="' + realpath(link) + 
    '" href="http://www.facebook.com/sharer.php" >Partager</a><script src="http://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript">' +
    '</script>');
}

/// UGLY dispatch table to come
function embed(link,width) { 
    if( link.match('ogg$') ) { 
        return ('<video autoplay width="' + width +
        '" src="' + link + '" controls=true >' +
        'to watch video please use a real web browser</video>' +
        '<br/><a href="' +link + '">Here</a>' );
    }
    if( link.match('avi$') ) { 
        return( '<embed width="' + width + '" height="' + width + '"  name="plugin" src="' +
        link + '" type="video/x-msvideo" >' + 
        '<br/><a href="' +link + '">Here</a><br/>' );
    } 

    return ( '<a href="' + link + '"><img id=img width="' + 
        width + '"  src="' + link + '" /></a>');

 }
           

           
$('pre > a').not('.noimage').each( 
        function () { $(this).attr("id",$(this).attr("href")) }
);



//generate the image modal 
function loadme(el) { 
    var width=$("#width").val();
    width=width ? width : "700px";
    $('#image').attr('tilte','' );
    var link=$(el).attr("href");
    var deb='<div class=dialtit >';
    var rot1="<button id=rot1 >+90</button>";
    var rot2="<button id=rot2 >+180</button>";
    var rot3="<button id=rot3 >-90</button>";
    var rot4="<button id=rot4 >2 &pi;</button>";
    var prev= '<button id=prev  >&lt;&lt;</button>';
    var next= '<button id=next  >&gt;&gt;</button> ';
    var fin='</div>';
    $('#image').html( deb + prev + 'image : ' + link   +  next + '<br/>' + rot1 + rot2 + rot3 + rot4 + fin  + 
    '<div id=imgc>' +  embed(link, width) + share(link) + '</div>' );

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
    $('button').button();
    $('#image').dialog( { 
        heigth: '800px',
        width: '90%',
        position: [ 'center' , 100 ]

    });   
    $('#image').dialog('open');
}
$('pre > a').not('.noimage').click(function(event) { 
        event.preventDefault();
        loadme(this);
        }
        );

