(function($) {
	$.fn.baliksunod = function(options) {
		var defaults = { 
			no_of_items: 5, 
			page_limit: 10
		};

		var settings = $.extend({}, defaults, options);				
		this_table = this;
		num_rows = this_table.find('tbody').children().length;

		
		$(createNavigator()).insertAfter(this);


		//show all the rows that will be displayed regarding to how many items per page
		while(num_rows > settings.no_of_items) {
			this.find('tr:nth-child('+num_rows+')').fadeOut();
			num_rows--;
		}

		navigator();


		function navigator()
		{			
			pli = (parseInt($('#pagi li:nth-child(3)').text()) + 2);
			lstli = (parseInt($('#pagi li:nth-child('+(settings.page_limit+2)+')').text()) + 2);
			pgnum = settings.page_limit + 1;		
			$(document).on('click', '#pagi>li>a', function() { 
				var click_page = (!isNumeric($.trim($(this).text()))) ? $(this).attr('data-id'): $.trim($(this).text());
				if(!isNumeric(click_page)) {
					if(click_page === 'prev') {
						var prev = ((pgnum - settings.page_limit) - settings.page_limit);
						var looper2 = (pgnum - settings.page_limit) - 1;

						//create previous pages
						if(prev > 0) {
							var prevli = '';
							while(prev <= looper2) {
								prevli += '<li><a href="#">'+prev+'</a></li>';
								prev++;
							}

							//remove the current pages
							pli = ((pgnum - 1) - settings.page_limit) + 3;
							lstli = (pli + settings.page_limit) - 1;
							//hide the current available pages of the pagination
							while(pli <= lstli) {
								$('#pagi li:nth-child('+pli+')').remove();
								pli++;
							}

							$(li).insertAfter($('#pagi').find('li:nth-child(2)'));
						}

						console.log(prev);
						//console.log(looper);

						
					} else {
						var pangilan = (((pgnum / settings.page_limit) + 1) * settings.page_limit);
						if(pgnum !== 0) {
							num_rows = this_table.find('tbody').children().length;
							var pages = Math.ceil(num_rows/settings.no_of_items);
							//create the next pages of the pagination
							var li = '';
							while(pgnum < pangilan) {
								if(pgnum < (pages+1)) {
									li += '<li><a href="#">'+pgnum+'</a></li>';
								} else {
								}
								pgnum++;
							}

							

							pli = ((pgnum - 1) - (settings.page_limit * 2)) + 3;
							lstli = (pli + settings.page_limit) - 1;
							//hide the current available pages of the pagination
							while(pli <= lstli) {
								$('#pagi li:nth-child('+pli+')').hide();
								pli++;
							}


							
							$(li).insertAfter($('#pagi').find('li:last-child').prev().prev());
						}
					}
				} else {
					this_table.find('tbody').children().hide();
					rows_to_display = click_page * settings.no_of_items;
					var y = (rows_to_display - settings.no_of_items) + 1;
					while(y <= rows_to_display) {
						this_table.find('tr:nth-child('+y+')').fadeIn(); 			
						y++;
					}
				}
			});
		}
		

		function createNavigator()
		{
			//create page number
			var pages = Math.ceil(num_rows/settings.no_of_items);		
			var li = '';
			var x = 1;
			if(pages < settings.page_limit) {
				while(x <= pages) {
					li += '<li><a href="#">'+x+'</a></li>';
					x++;
				}
			} else {
				while(x <= settings.page_limit) {
					li += '<li><a href="#">'+x+'</a></li>';
					x++;
				}
			}

			return (pages < settings.page_limit) ? '<ul class="pagination" id = "pagi"><li><a href="#" id = "firstLink" data-id = "1" class = "">&laquo;</a></li>'+li+'<li><a href="#" data-id = "'+(x-1)+'">&raquo;</a></li></ul>' : '<ul class="pagination" id = "pagi"><li><a href="#" id = "firstLink" data-id = "1" class = "">&laquo;</a></li><li><a href = "#" data-id = "prev">Previous</a></li>'+li+'<li><a href = "#" data-id = "next" id = "next">Next</a></li><li><a href="#" data-id = "'+(x-1)+'">&raquo;</a></li></ul>';			
		}

		function isNumeric(value) 
		{
		    return /^\d+$/.test(value);
		}

		
		
	}
}(jQuery));