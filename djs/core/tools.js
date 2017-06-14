
define(["declare"], function(declare){




	// --- datatypes --- //

	declare.datatype("djs.core.email", "string", function(value){

		value = declare.cast(value, "string");
		if(value && value.length && value.split(".").length > 1 && value.split(" ").length === 1 && value.split("@").length === 2) return value;
		
	});


	declare.datatype("djs.core.url", "string", function(value){

		value = declare.cast(value, "string");
		if(value && value.length && value.split(".").length > 1 && value.split(" ").length === 1) return value;

	});


	// --- functions --- //


	declare("djs.core.tools", function(keys, self, parent){ return {

		"sta detach": function(Obj, method){
			return function(){Obj[method].apply(Obj, arguments);}
		},

		"sta printDate": function(){
			
		}


	}});



}); // MODULE