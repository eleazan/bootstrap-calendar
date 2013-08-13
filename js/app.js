(function($) {

    "use strict";

	var options = {
		events_url: 'events.json.php',
		view: 'month',
		tmpl_path: 'tmpls/',
		day: '2013-03-12',
		holidays: {
			'08-03': 'International Women\'s Day',
			'25-12': 'Christmas\'s',
			'01-05': "International labor day"
		},
		first_day: 2,
		onAfterEventsLoad: function(events) {
			if(!events) {
				return;
			}
			var list = $('#eventlist');
			list.html('');

			$.each(events, function(key, val) {
				$(document.createElement('li'))
					.html('<a href="' + val.url + '">' + val.title + '</a>')
					.appendTo(list);
			});
		},
		onAfterViewLoad: function(view) {
			$('.page-header h3').text(this.getTitle());
			$('.btn-group button').removeClass('active');
			$('button[data-calendar-view="' + view + '"]').addClass('active');
		},
		classes: {
			months: {
				general: 'label'
			}
		}
	};

	var	 calendar = $('#calendar').calendar(options);

	$('.btn-group button[data-calendar-nav]').each(function() {
		var $this = $(this);
		$this.click(function() {
			calendar.navigate($this.data('calendar-nav'));
		});
	});

	$('.btn-group button[data-calendar-view]').each(function() {
		var $this = $(this);
		$this.click(function() {
			calendar.view($this.data('calendar-view'));
		});
	});

    $('#first_day').change(function(){
        calendar.setOptions({first_day: $(this).val()});
        calendar.view();
    });
    $('#language').change(function(){
        calendar.setOptions({language: $(this).val()});
        calendar.view();
    });
}(jQuery));