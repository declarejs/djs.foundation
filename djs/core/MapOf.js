define(["declare", "./Map"], function(declare){





	d("djs.core.MapOf", "djs.core.Map", function(self, parent, lib){

		self.__construct = function(type, items){
			runtime();
			this.items = {};
			if(type) this.type(type);
			if(items === undefined) return;
			for(var item in items) this.set(item, items[item]);
		}

		// END OF CLASS
	});




});