$(document).ready(function() {
	//Initialize WOW js
	new WOW().init();

	jQuery('button').click( function(e) {
    	jQuery('.collapse').collapse('hide');
	});

	$('#signUp').click(function(){
    	alert('Congratulations! You have signed up for an account.');
	});

	// Build the chart
    Highcharts.chart('container', {

    title: {
        text: "Mom's Financial Goals"
    },

    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },

    yAxis: {
        title: {
            text: '% Completion'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    series: [{
        name: 'Trip to Bahamas',
        data: [5, 13, 24, 43, 65, 83]
    }, {
        name: 'Mommy Makeover',
        data: [10, 20, 33, 46, 47, 51]
    }, {
        name: 'Spa Day',
        data: [2, 4, 10, 17, 23, 27]
    }, {
        name: 'Student Loans',
        data: [0, 17, 23, 30, 38, 41]
    }, {
        name: 'Pay Off Motorcycle',
        data: [2, 4, 9, 14, 20, 22]
    }]

});

});