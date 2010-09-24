/*
 * Embeder builds a container for the link in regard of the extenion
 * embeder is a static object (less memory burnt)
 * therefore after inclusion : use it this way 
 * > embeder.href="something.avi";
 * > container=emebeder.popup();
 *
 * Attributes are cleaned after popup so that I see errors
 * 
 * principle : 
 * get extension using embeder.ext()
 * watch in list of extension the type (html5 video or audio or embeded object)
 * generate a container in regard to the type. 
 * therefore adding new mime type will be easy
 */
embeder = { 
    ext: function() { 
        this.extension=this.href.split('.').reverse()[0].toLowerCase();
    },
   mimetype: {
        mp3:    'audio/mpeg',
        wmv : 'video/x-ms-wmv'
   },
   dlMe: function() { 
    return ('<br/><a href="' + this.href + '" ><img src="/org/images/download.png" style="border:0px" /> </a><br/>');
   },
   //so we can use an hidden div to set it to .... vlc plugin for instance
   defVidType: 'video/x-msvideo',
    type2popup :  {
        vid : function() { 
            embd=embeder;
            return('<video controls=true autoplay=true id=img width="' + embd.width + '" src="' + embd.href + '"/>'  );
        },
        embed : function() { 
            embd=embeder;
            return('<embed id=img width="' + embd.width + '"  src="' + embd.href + '" type="' + ( 
                (   embd.extension in embd.mimetype )      ? 
                    embd.mimetype[embd.extension]       : 
                    embd.defVidType ) + 
                '" /> ' )
        },
        aud : function() { 
            embd=embeder;
            return('<audio control=true autoplay=true id=img width="' + embd.width + '" src="' + embd.href + '"/>' )
        }
   },
   ext2type : { 
        wmv:    "embed",
        ogg :   "vid",
        wav:    "aud",
        mov:    'embed',
        mpeg:   'embed',
        mpg:    'embed',
        avi:    'embed',
        mkv:    'embed',
        mp4:    'embed',
        mp3:    'embed'
   }, 

   clean: function() { 
    this.href=null;
    this.width=null;
    this.extension=null;
   },
   popup: function() { 
        this.ext();
        //throw exception if this.href==null
        popup=(this.extension in this.ext2type)                         ?  
                popup= this.type2popup[this.ext2type[this.extension]]()  :
                '<img hasrot=true id=img width="' + this.width + '" src="' + this.href + '" />';
        popup+=  this.dlMe();
        this.clean();
        return popup ;
    },
};


