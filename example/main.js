var Neighborhood = require('neighborhood-wrtc');

// create 3 neighborhood tables without options
var n1 = new Neighborhood({});
var n2 = new Neighborhood({});
var n3 = new Neighborhood({});

n1.connection(
    function(request){
        n2.connection(function(response){
            n1.connection(function(){
                console.log('n1->n2 connected');
            }, response);            
        }, request);
    }
);

n1.connection(
    function(request){
        n3.connection(function(response){
            n1.connection(function(){
                console.log('n1->n3 connected');
            }, response);
        }, request);
    }
);
