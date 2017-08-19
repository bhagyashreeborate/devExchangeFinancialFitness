$(document).ready(function() {
	//Initialize WOW js
	new WOW().init();

	$('#signUp').click(function(){
    	alert('Congratulations! You have signed up for an account.');
	});

	$('#info-chart').highcharts({
                    chart: {
                      type: 'column'
                    },
                    title: {
                      text: 'Sub Regions Network & System Availability'
                    },
                    xAxis: {
                      categories: <%= raw((@regions).map { |x| x["sub_region"] }) %>
                    },
                    yAxis: {
                      title: {
                      }
                    },
                    series: [{
                      name: 'System Avg',
                      color: '#99ff33 ',
                      data: <%= (@regions).map { |x| x["system"] }.inspect%>
                    }, {
                      name: 'Network Avg',
                      data: <%= (@regions).map { |x| x["network"] }%>
                    },
                    {
                      type: 'spline',
                      name: 'Target',
                      data: <%= (@regions).map { |x| x["target"] }.inspect%>,
                      marker: {
                        lineWidth: 2,
                        lineColor: Highcharts.getOptions().colors[3],
                        fillColor: 'white'
                      }
                    }]
                  });

});