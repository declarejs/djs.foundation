
define(["declare", "./all", "../core/all"], function(declare){



	declare("djs.ui.Templatize : djs.core.Controller", function(keys, self, parent){return {

		"pro all! template": "",
		

		"submit": function(){
			
			var str = this[keys.template];
			if(!str.length) return;

			var parts = str.split("?>").join("<?").split("<?");

			for(var i=1; i<parts.length; i+=2){
				var parts2 = parts[i].split(" ");
				
				for(var j=0; j<parts2.length; j++){
					if(parts2.length) 
				}

			}

			
		},


	}});



}); // MODULE
