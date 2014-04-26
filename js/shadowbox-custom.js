// JavaScript Document
function gup( name )
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return results[1];
}

function mySbOpen(){
    $('#sb-body-inner img').one('click',Shadowbox.close);
	var c = Shadowbox.getCurrent();
	//var pageLink = c.link.baseURI;
	var pageLink = c.link.ownerDocument.URL;
	if(pageLink.indexOf('?')>1){
		pageLink = pageLink.split('?')[0]
	}
	var link2image = pageLink+"?the_item="+c.link.shadowboxCacheKey;
    var myOtherUrl = 'http://twitter.com/intent/tweet?url='+escape(link2image);
    var myOtherUrl2 = escape(link2image);
    var myOtherUrl3 = escape(c.content);
	console.log(c.content);
	console.log(link2image);
	//var newDiv = $('<div id="sb-mylink"><a href="'+link2image+'">[create link]</a>&nbsp;<a href=mailto:?body="'+link2image+'">[mail link]</a></div>');
	//var newDiv = $('<div id="sb-mylink"><a href="'+link2image+'">[link]</a>&nbsp;<a href=mailto:?body="'+link2image+'">[mail]</a>&nbsp;<a id="printMe" href="#">[print]</a></div>');
	var newDiv = $('<div id="sb-share-tools">'+
				   '<a id="printImage" rel="tooltip" title="Print this image" class="icons print icon no-touch"></a>'+
                    '<a href="'+myOtherUrl+'" rel="tooltip" title="Share" class="icons twitter icon popup no-touch"></a>'+
                    '<a rel="tooltip" href="http://pinterest.com/pin/create/button/?url='+myOtherUrl2+'&media='+myOtherUrl3+'" title="Save to Pinterest" class="icons pinterest icon no-touch popup pin-it-button"></a>'+
                    '<a href="http://www.facebook.com/sharer/sharer.php?u=http://jameswojcik.com/" target="_blank" rel="tooltip" title="Share to Facebook" class="icons facebook icon popup no-touch"></a>'+
                    
				   
				   //'<a href="'+link2image+'" title="Get link">copy link (test)</a>&nbsp;&nbsp;'+
				   //'<a id="printMe" href="#" title="Print me"><img src="../images/icon-print.gif" border="0"></a>'+
				   '</div>');
	if($('div#sb-share-tools')!=null){
		$('div#sb-share-tools').remove();
	}

	
	newDiv.insertAfter($('div#sb-counter'));
        $('a#printImage').click(function(){
            var imageToPrint =  window.open('','PrintWindow');
            var html = "<html><head><title>James Wojcik</title>";
            html = html + "<link rel='stylesheet' href='css/shadowbox.css' type='text/css' /><style>#sb-info{display:none;}div#sb-wrapper{left:20px !important;top:40px !important}</style></head>";
            html = html + "<body><div id='myprint'>"+$('#sb-container').clone().html()+"</div></body></html>";
            imageToPrint.document.open();
            imageToPrint.document.write(html);
            imageToPrint.document.close();
            imageToPrint.print();
            imageToPrint.close()
            return false;
        });
	$('.popup').click(function(event) {
        var width  = 575,
            height = 400,
            left   = ($(window).width()  - width)  / 2,
            top    = ($(window).height() - height) / 2,
            url    = this.href,
            opts   = 'status=1' +
                     ',width='  + width  +
                     ',height=' + height +
                     ',top='    + top    +
                     ',left='   + left;
        
        window.open(url, 'twitter', opts);
     
        return false;
        });
    
        // Tooltip placement
        if ($(window).width() > 768) {
            $("[rel=tooltip]").tooltip({
                placement: 'right'
            });
        } 
    
}

function doit(){
	var which_image = Number(gup('the_item'));
	if (which_image != "") {
		var options = {
			counterType:"default"
		};
		var content = Shadowbox.cache[which_image].content;
		Shadowbox.open ({
					content: content,
					player: "img",
					gallery: "gallery",
					options: options
					});
	};
}

