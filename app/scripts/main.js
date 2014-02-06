
$(document).ready(function(){

	layer = 'mayakreidieh.vclnb3xr';
	layer2 =  'mayakreidieh.h63c13fn'
	var map = L.mapbox.map('map', layer2).setView([33.500179, -38.847656],4);

// $('#title').delay(1450);
// $('#title').fadeIn('slow').animate({
//             'top': '30%'
//             }, {duration: 'slow', queue: false}, function() {
//             // Animation complete.
//         });

var gridLayer = L.mapbox.gridLayer(layer2);
map.addLayer(gridLayer);
	gridLayer.on('mousemove',function(o) {
    	if (o.data!= undefined){
	    
	    	stars = o.data['stars'];
	    	str = '';
	    	if (stars == -1)
	    		str = '';
	    	else 
	    		str = stars + ' stars'
	    	// 	stars = 0;
	    	// for (var i = 0;i<stars;i++)
	    	// 	str += '*';


	        document.getElementById('tooltip-overlay').innerHTML = (o.data && 
	        	'<p id="name">' + o.data['hotelName'] +'</p> <p id="stars">' +str + '</p>'

	        	|| '');
    	}
    }).on('mouseout', function(o) {
        document.getElementById('tooltip-overlay').innerHTML = '';
    });


setTimeout(function() {
$('#title').fadeIn('slow').animate({
            'top': '33%'
            }, {duration: 'slow', queue: false}, function() {
            // Animation complete.
        });
 
 }, 200);

setTimeout(function() {

$('#title').fadeOut('slow').animate({
            'top': '31%'
            }, {duration: 'slow', queue: false}, function() {
            // Animation complete.
        });
 
 }, 3500);

})

