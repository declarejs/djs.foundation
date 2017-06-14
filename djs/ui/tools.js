
define(["jquery", "declare", "../core/all"], function($, declare){


	function show(mixed){if(console.log) console.log(mixed);}


	// --- datatypes --- //

	declare.datatype("djs.ui.formmethod", "uppercase", {GET: "GET", SET: "SET"});

	declare.datatype("djs.ui.element", "object", function(value){

		show(value);

		if(value instanceof Array){
			if(value.jquery) return value;
		}

		if(typeof(value) === "string" && value.length) return $(value);
	});


	// --- functions --- //

	declare("abs djs.ui.tools", function(keys, self, parent){ return {

		"sta printDate": function(Date){
			
		}


	}});




}); // MODULE



