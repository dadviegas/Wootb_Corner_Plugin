
	

	function LoadMenu(ulID,file,options){
		$.ajax({
			url:        file,
			dataType:   "json", 
			success:    function(data){
				var $this = $(ulID);
				$.each(data.d, function(key, val) {
					$this.append('<li rel="' + val.link + '">' +  val.title + '</li>');
				});
				$this.menu(options);
			},
			error:    AjaxFailed
		});
	}
	
	function TextExplodeEffect(id){

		$(id).hover(function () {
				$(this).effect("explode", { pieces: 16 }, 1400, callback_); 
			});
				   
			function callback_() {
				$(id).hide().fadeIn();
				$(id).fadeIn('slow');
		};

	}

	

	// Main entry for script
	function MainEntry()
	{
		
		TextExplodeEffect("#text");
		$("#d0").WootbCorner(); // default
		$("#d1").WootbCorner({radius:"1em 4em 1em 4em"}); 
		$("#d2").WootbCorner({radius:"25px 10px / 10px 25px"});
		$("#d3").WootbCorner({tr:"10px"});
		$("#d4").WootbCorner({tl:"6em"});
		$("#d5").WootbCorner({br:"6em"});
		$("#d6").WootbCorner({bl:"7em 4em"});
		$("#d7").WootbCorner({bl:"7em 4em",tl:"6em"});
		$("#d8").WootbCorner({tr:"10px",tl:"6em",br:"6em 4px",bl:"7em 10em"});
		$("#d9").WootbCorner({radius:"20em"});
	}
	
	MainEntry();