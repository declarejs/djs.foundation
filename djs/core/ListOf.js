define(["declare", "./List"], function(declare){






	declare("djs.core.ListOf", "djs.core.List", function(self, parent, lib){

		self.__construct = function(type, arr){
			runtime();
			this.items = [];
			if(type) this.type(type);
			if(arr === undefined) return;
			for(var i=0; i<arr.length; i++) this.push(arr[i]);
		}

		// END OF CLASS
	});




});