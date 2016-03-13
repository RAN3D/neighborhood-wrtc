var Neighborhood = require("neighborhood-wrtc");

var n1 = new Neighborhood({});
var n2 = new Neighborhood({});
var n3 = new Neighborhood({});

n1.connection(
    function(request){
        n2.connection(function(response){
            n1.connection(null, response);            
        }, request);
    }
);

n1.connection(
    function(request){
        n3.connection(function(response){
            n1.connection(null, response);            
        }, request);
    }
);
