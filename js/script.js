<script>
    var folders = ["000_Opening","001_PatronSaints","002_TheMeat","003_RightValve", "004_LeftValve", "005_Middens", "006_DiptychTriptych", "007_Recipes", "008_LittleGuys", "009_CullingSorting", "010_Cages", "011_DrOCoAtWork"],
    selector = [" .promotional", " .saints", " .meat", " .rightValve", " .leftValve", " .middens", " .diptychTriptych", " .recipes", " .littleGuys", " .cullingSorting", " .cages", " .droatwork"],
    activeClass = ["promotional", "saints", "meat", "rightValve", "leftValve", "middens", "diptychTriptych", "recipes", "littleGuys", "cullingSorting", "cages", "droatwork"],
    $globalvalue = 'promotional',
    $currentFolder = '00Opening',
    $value,
    $options = {},
    $win = $(window),
    $container = $('#container'),
    $output = [],
    $con = $('#container'),
    $imgs = $("img"),    
    $globalvalue = '.promotional',
    $path = "http://jameswojcik.com/oysters/img/lo-res/",
    $pathhr = "http://jameswojcik.com/oysters/img/hi-res/",
    $newContainerWidth = '',
    $columnWidth = '',
    $numberOfColumns = '';
    
    // Display container for first time
    setTimeout(function(){
        $container.removeClass('hideme');
    }, 300);

    // Accordion nav functions
    $('.expand-fashion').click(function(){
        $('.content-fashion').slideToggle('fast');
    });
    $('.expand-food').click(function(){
        $('.content-food').slideToggle('fast');
    });
    $('.expand-departures').click(function(){
        $('.content-departures').slideToggle('fast');
    });
    $('.reset').click(function(){
        $container.isotope('reLayout');
    });
    
    // Check if iPad or smaller and hide nav
    function checkDevice(){
    if($(window).width() <= 768) {
        $('#site-nav').addClass('hidden');
      } else {
        $('#site-nav').removeClass('hidden');
      }
    };
    checkDevice();
    
    // Touch device nav functionality
    $('#collapsed-nav').click(function(){
        if ( $('#site-nav').hasClass('hidden')) {
            $('#site-nav').removeClass('hidden');
            $('#bio').addClass('hideme');
            $('#contact').addClass('hideme');
            $('#video').addClass('hideme');
            return false;
        } else {
            $('#site-nav').addClass('hidden');
            $('#bio').addClass('hideme');
            $('#contact').addClass('hideme');
            $('#video').addClass('hideme');
            return false;
        }
    });
    
    // Begin Isotope Functions    
      $(function(){
      var 
          // object that will keep track of options
          isotopeOptions = {},
          // defaults, used if not explicitly set in hash
          defaultOptions = {
            filter: $globalvalue,
            itemSelector : '.photo',
            sortBy: 'random',
            sortAscending: true,
            layoutMode: 'masonry',
          };
  
      var setupOptions = $.extend( {}, defaultOptions, {
      });
      
            if (defaultOptions.filter == '*') { $currentFolder = folders[0];}
            if (defaultOptions.filter == '.promotional') { $currentFolder = folders[0];}
            if (defaultOptions.filter == '.saints') { $currentFolder = folders[1];}
            if (defaultOptions.filter == '.meat') { $currentFolder = folders[2]; }
            if (defaultOptions.filter == '.rightValve') { $currentFolder = folders[3]; }
            if (defaultOptions.filter == '.leftValve') { $currentFolder = folders[4]; }
            if (defaultOptions.filter == '.middens') { $currentFolder = folders[5]; }
            if (defaultOptions.filter == '.diptychTriptych') { $currentFolder = folders[6]; }
            if (defaultOptions.filter == '.recipes') { $currentFolder = folders[7]; }
            if (defaultOptions.filter == '.littleGuys') { $currentFolder = folders[8]; }
            if (defaultOptions.filter == '.cullingSorting') { $currentFolder = folders[9]; }
            if (defaultOptions.filter == '.cages') { $currentFolder = folders[10]; }
            if (defaultOptions.filter == '.droatwork') { $currentFolder = folders[11]; }
  
      var $optionSets = $('#site-nav').find('.option-set'),
          isOptionLinkClicked = false;
  
      // switches selected class on buttons
      function changeSelectedLink( $elem ) {
        // remove selected class on previous item
        $elem.parents('.option-set').find('.selected').removeClass('selected');
        // set selected class on new item
        $elem.addClass('selected');
      }
  
      $optionSets.find('a').click(function(){
        var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
          return;
        }
        
        if ( $this.hasClass('newlink') ) {
              window.open(this.href); return false;
            } 
            
        if ( $this.hasClass('bio')) {
            $this.addClass('selected');
            $('#bio').removeClass('hideme');
            $('.bio').removeClass('selected');
            $('.contact').removeClass('selected');
            $('#container').addClass('hidden');
            $('#contact').addClass('hideme');
            $('#video').addClass('hideme');
            checkDevice();
        } else if ( $this.hasClass('contact')) {
            $this.addClass('selected');
            $('#contact').removeClass('hideme');
            $('.bio').removeClass('selected');
            $('.contact').removeClass('selected');
            $('#container').addClass('hidden');
            $('#bio').addClass('hideme');
            $('#video').addClass('hideme');
            checkDevice();
        } else if ( $this.hasClass('video')) {
            $this.addClass('selected');
            $('#video').removeClass('hideme');
            $('.bio').removeClass('selected');
            $('.contact').removeClass('selected');
            $('#container').addClass('hidden');
            $('#bio').addClass('hideme');
            $('#contact').addClass('hideme');
            checkDevice();
        } else {
            $('#container').removeClass('hidden');
            $('#bio').addClass('hideme');
            $('#contact').addClass('hideme');
            $('#video').addClass('hideme');
            checkDevice();
        } 
        
        changeSelectedLink( $this );
        // get href attr, remove leading #
        var href = $this.attr('href').replace( /^#/, '' ),
        // convert href into object
        // i.e. 'filter=.inner-transition' -> { filter: '.inner-transition' }
        option = $.deparam( href, true );
        if (option.filter == '*') { $currentFolder = folders[0];}
        if (option.filter == '.promotional') { $currentFolder = folders[0];}
        if (option.filter == '.saints') { $currentFolder = folders[1];}
        if (option.filter == '.meat') { $currentFolder = folders[2]; }
        if (option.filter == '.rightValve') { $currentFolder = folders[3]; }
        if (option.filter == '.leftValve') { $currentFolder = folders[4]; }
        if (option.filter == '.middens') { $currentFolder = folders[5]; }
        if (option.filter == '.diptychTriptych') { $currentFolder = folders[6]; }
        if (option.filter == '.recipes') { $currentFolder = folders[7]; }
        if (option.filter == '.littleGuys') { $currentFolder = folders[8]; }
        if (option.filter == '.cullingSorting') { $currentFolder = folders[9]; }
        if (option.filter == '.cages') { $currentFolder = folders[10]; }
        if (option.filter == '.droatwork') { $currentFolder = folders[11]; }
        // apply new option to previous
        $.extend( isotopeOptions, option );
        $container.isotope('destroy');
        $container.empty();
        // set hash, triggers hashchange on window
        $.bbq.pushState( isotopeOptions );
        isOptionLinkClicked = true;
        makeNewImages();
        return false;
      });
      
        function makeNewImages(){
        console.log('making');
            $output = [];
            if (window.location.hash == '#filter=*') { $currentFolder = folders[0]; $globalvalue = '.promotional';}
            if (window.location.hash == '#filter=.promotional') { $currentFolder = folders[0]; $globalvalue = '.promotional';}
            if (window.location.hash == '#filter=.saints') { $currentFolder = folders[1]; $globalvalue = '.saints';}
            if (window.location.hash == '#filter=.meat') { $currentFolder = folders[2]; $globalvalue = '.meat';}
            if (window.location.hash == '#filter=.rightValve') { $currentFolder = folders[3]; $globalvalue = '.rightValve';}
            if (window.location.hash == '#filter=.leftValve') { $currentFolder = folders[4]; $globalvalue = '.leftValve';}
            if (window.location.hash == '#filter=.middens') { $currentFolder = folders[5]; $globalvalue = '.middens';}
            if (window.location.hash == '#filter=.diptychTriptych') { $currentFolder = folders[6]; $globalvalue = '.diptychTriptych';}
            if (window.location.hash == '#filter=.recipes') { $currentFolder = folders[7]; $globalvalue = '.recipes';}
            if (window.location.hash == '#filter=.littleGuys') { $currentFolder = folders[8]; $globalvalue = '.littleGuys';}
            if (window.location.hash == '#filter=.cullingSorting') { $currentFolder = folders[9]; $globalvalue = '.cullingSorting';}
            if (window.location.hash == '#filter=.cages') { $currentFolder = folders[10]; $globalvalue = '.cages';}
            if (window.location.hash == '#filter=.droatwork') { $currentFolder = folders[11]; $globalvalue = '.droatwork';}
            
            $.getJSON("readDirectory.php?d=" +  $currentFolder + "/",function(images){
                console.log('reading');
                var retina = (window.retina || window.devicePixelRatio == 1.5);
                var macbookretina = (window.retina || window.devicePixelRatio == 2);
                if (retina) {
                    // set number of columns based on viewport
                    if ($(window).width() > 1536) {
                        $newContainerWidth = ($(window).width() - 280);
                        $numberOfColumns = 3;
                        $columnWidth = 350;
                    } else if ($(window).width() <= 1536 && $(window).width() >= 621) {
                        $newContainerWidth = $(window).width();
                        $numberOfColumns = 2;
                        $columnWidth = ($newContainerWidth / $numberOfColumns) - 30;
                    } else if ($(window).width() <= 620){
                        $numberOfColumns = 1;
                        $columnWidth = 260;
                        $path = "http://jameswojcik.com/oysters/img/mobile/";
                        $pathhr = "http://jameswojcik.com/oysters/img/lo-res/";
                    }
                } else if (macbookretina) {
                    // set number of columns based on viewport
                    if ($(window).width() > 1536) {
                        $newContainerWidth = ($(window).width() - 280);
                        $numberOfColumns = 3;
                        $columnWidth = 350;
                    } else if ($(window).width() <= 1536 && $(window).width() >= 621) {
                        $newContainerWidth = $(window).width();
                        $numberOfColumns = 4;
                        $columnWidth = ($newContainerWidth / $numberOfColumns) - 30;
                    } else if ($(window).width() <= 620){
                        $numberOfColumns = 1;
                        $columnWidth = 260;
                        $path = "http://jameswojcik.com/oysters/img/mobile/";
                        $pathhr = "http://jameswojcik.com/oysters/img/lo-res/";
                    }
                } else {
                        // set number of columns based on viewport
                    if ($(window).width() > 768) {
                        $newContainerWidth = ($(window).width() - 280);
                        $numberOfColumns = 3;
                        $columnWidth = 350;
                    } else if ($(window).width() <= 768 && $(window).width() >= 321) {
                        $newContainerWidth = $(window).width();
                        $numberOfColumns = 2;
                        $columnWidth = ($newContainerWidth / $numberOfColumns) - 30;
                    } else if ($(window).width() <= 320){
                        $numberOfColumns = 1;
                        $columnWidth = 260;
                        $path = "http://jameswojcik.com/oysters/img/mobile/";
                        $pathhr = "http://jameswojcik.com/oysters/img/lo-res/";
                    }
                }
                // sets image width equal to column width
                $newImgWidth = $columnWidth;
                // remove unneeded character
                $globalvalueB = $globalvalue.replace('.', "");
                // dyanmically read directory of images and output markup into the page
                $.each(images,function(i,item){
                    // scale images to column width
                    $currentImgWidth = item.width;
                    $currentImgHeight = item.height;
                    $newImgHeight = $currentImgHeight * ($columnWidth / $currentImgWidth);
                    // create markup to be outputted into html
                    $output+='<div style="width:'+$newImgWidth+'px; height:'+$newImgHeight+'px;" class="photo '+ $globalvalueB +' ">'+'<a href="'+$pathhr+$currentFolder+'/'+item.img+'" rel="shadowbox[album];player=img;"><img src="img/blank.png" data-original="'+$path+$currentFolder+'/'+item.img+'" /></a>'+'</div>';
                });
                document.getElementById("container").innerHTML=$output;
                // set random or original order of images based on filter
                if ($globalvalue == '.promotional'){
                    $container.isotope({
                        filter: $globalvalue, 
                        itemSelector : '.photo',
                        itemPositionDataEnabled: true,
                        sortBy: 'random',
                        layoutMode: 'masonry'
                    });
                } else {
                    $container.isotope({
                        filter: $globalvalue, 
                        itemSelector : '.photo',
                        sortBy: 'original-order'
                    });
                };
                // lazy load images
                var $imgs = $('img');
                $imgs.lazyload({
                    effect: "fadeIn",
                    failure_limit: Math.max($imgs.length - 1, 0),
                    threshold : 200
                });
                // initialize shadowbox for all images now on the page
                Shadowbox.setup();
                
                setTimeout(function(){
                    // Hide the address bar!
                    window.scrollTo(0, 1);
                }, 0);
            });
        };
        makeNewImages();
      
        var hashChanged = false;
        
        $(window).bind( 'hashchange', function( event ){
            // get options object from hash
            var hashOptions = window.location.hash ? $.deparam.fragment( window.location.hash, true ) : {},
            // do not animate first call
            aniEngine = hashChanged ? 'best-available' : 'none',
            
            options = $.extend( {}, defaultOptions, hashOptions,{} );
            // save options
            isotopeOptions = hashOptions;
        
            // if option link was not clicked then we'll need to update selected links
            if ( !isOptionLinkClicked ) {
            // iterate over options
            var hrefObj, hrefValue, $selectedLink;
                for ( var key in options ) {
                    hrefObj = {};
                    hrefObj[ key ] = options[ key ];
                    // convert object into parameter string
                    // i.e. { filter: '.inner-transition' } -> 'filter=.inner-transition'
                    hrefValue = $.param( hrefObj );
                    // get matching link
                    $selectedLink = $optionSets.find('a[href="#' + hrefValue + '"]');
                    changeSelectedLink( $selectedLink );
                }
            }
            isOptionLinkClicked = false;
            hashChanged = true;
    
        }).trigger('hashchange'); // trigger hashchange to capture any hash data on init
    });// end make images function
    
    // set audio hover states. Needs desktop only logic
/*
    $("#site-nav li").each(function(i) {
        if (i != 0) { 
            $("#myaudio")
            .clone()
            .attr("id", "myaudio" + i)
            .appendTo($(this).parent()); 
        }
        $(this).data("beeper", i);
    })
    .mouseenter(function() {
        $("#myaudio" + $(this).data("beeper"))[0].play();
        $("#myaudio" + $(this).data("beeper"))[0].volume=.2;
    });
    $("#myaudio").attr("id", "myaudio0");
*/
    
    // Tooltip placement
    if ($(window).width() > 768) {
        $("[rel=tooltip]").tooltip({
            placement: 'top'
        });
    } 
    
    // pop up for share tools
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
    </script>
    <script src="js/shadowbox.js"></script>
    <script language="javascript" type="text/javascript">
    Shadowbox.init({
    	//skipSetup: true
    	handleOversize: "resize",
    	overlayColor: "#FFF",
    	animateFade: true,
    	animate: false,
    	overlayOpacity: 1,
    	continuous: true,
    	onFinish: mySbOpen
    });
    if (window.addEventListener)
    {
      //window.addEventListener('load', updatenav_new, false);
      window.addEventListener('load', doit, false);
    } 
    else if (window.attachEvent)
    {
      //window.attachEvent('onload', updatenav_new);
      window.attachEvent('onload', doit);
    }
    </script>
    <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-39353911-1']);
      _gaq.push(['_trackPageview']);
    
      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();
    </script>
