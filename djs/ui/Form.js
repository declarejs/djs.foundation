define(["declare", "../core/all"], function(declare){

	declare("abs djs.ui.Form : djs.ui.Control", "djs.core.Controller", function(keys, self, parent, cController){return {

		//"make_"	

		"make_element": function(){
			return $("<form/>");
		}

	}});



}); // MODULE