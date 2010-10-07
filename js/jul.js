//from phpjs

var UP_ARROW=38;
var DOWN_ARROW=40;
var LEFT_ARROW=37;
var RIGHT_ARROW=39;
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
 $.each([ '-moz-transform', '-webkit-transform', 'transform' ], 
    function () { $('#img').css( '' + this,'' +  arg); }
    );
}

//FB share link
function share(link) {
    return ( '<a name="fb_share" type="button_count"  ' +  ' share_url="' + realpath(link) + 
    '" href="http://www.facebook.com/sharer.php" >Partager</a><script src="http://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript">' +
    '</script>');
}


           
$('pre > a').not('.noimage').each( 
        function () { $(this).attr("id",$(this).attr("href")) }
);

var copyright=$("#copyright").val() ?  $("#copyright").val() : $("#defaultcopyright").val()   ;
notice="<copyright>" + copyright + "</copyright>" ;
var flashversion=$("#flashversion").val() ? $("#flashversion").val() : '10.0.0';

//generate the image modal 
var rotindex=0;
function loadme(el,direction) { 
    var width=$("#width").val();
    width=width ? width : "700px";
    $('#image').attr('tilte','' );
    var link=$(el).attr("href");
    var deb='<div class=dialtit >';
    var rot1="<rot><button id=rot1 >+90</button>";
    var rot2="<button id=rot2 >+180</button>";
    var rot3="<button id=rot3 >-90</button>";
    var rot4="<button id=rot4 >2 &pi;</button></rot>";
    var prev= '<button id=prev  >&lt;&lt;</button>';
    var next= '<button id=next  >&gt;&gt;</button> ';
    var fin='</div>';
    embeder.href=link;
    embeder.width=width;

    $('#image').html( deb + prev +   ' ' + rot1 + rot2 + rot3 + rot4 + ' ' + next + fin  + 
    '<div id=imgc>' +  embeder.popup() + share(link) + notice + '</div>' );
    $('#img').attr("hasrot") || $('rot').hide();  

    $('#img').attr("isflash") && swfobject.embedSWF(
        link , 
        'img', 
        width,
        width, 
        flashversion);

    //$("button").button();
    $("#next").click(function() { loadme( $($(el).next()),"right") });
    $("#prev").click(function() { loadme( $($(el).prev()),"left") });
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
                $(document).unbind('keydown'); 
        $(document).keydown(function(event) {
                switch (event.which ) {
                    case RIGHT_ARROW: $('#next').click()  ; break;
                    case UP_ARROW: rotindex+=1; rotindex %= 4; imrot(  rotindex  * 90  + "");  break;
                    case LEFT_ARROW : $('#prev').click(); break;
                    case DOWN_ARROW: rotindex=(rotindex-1) % 4 >= 0 ? (rotindex-1) % 4  : 3; imrot( rotindex * 90 + "") ;  break;
                };

            });
    $('#image').dialog( { 
        heigth: '100px',
        show:'slide',
        modal: true,
        width: '90%',
        title: realpath(link),
        position: [ 'center' , 100 ]

    });   
}
$('pre > a').not('.noimage').click(function(event) { 
        event.preventDefault();
        loadme(this,"right");
        }
        );
loadme($('pre > a').not('.noimage')[0], 'right');
