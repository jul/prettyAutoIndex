/* 
To open an image gallery simply:

   1. Create a link (<a href=”#”>).
   2. Add the rel attribute “prettyPhoto” to it and add your gallery name in square brakets (rel=”prettyPhoto“).
   3. Change the href of your link so it points to the full size image.
   4. Pass the following settings when you initialize prettyPhoto: $(“a[rel^='prettyPhoto']“).prettyPhoto({theme: ‘facebook’,slideshow:5000, autoplay_slideshow:true});

*/
        
        $("a").not(".noimage").attr("rel","prettyPhoto[gallery]");
        $("a").not(".noimage").prettyPhoto({
        	animation_speed:		"normal",			
        	overlay_gallery:		false,
        	opacity: 		0.5
        });
        
        var images = new Array;
        $("a").not(".noimage").each(function(){
        	images.push($(this).attr("href"));
        });
        //console.log(images);
        $.prettyPhoto.open(images);
        
        /*
				$("a").not(".noimage").each( function() { 
            $(this).attr("alt", $(this).attr("href"));
            });

        $("a").not(".noimage").attr("href", "#");
        
        
        
        $("a").not(".noimage").each( function() { 
            $(this).attr("href", $(this).attr("alt"));
            });
				*/
