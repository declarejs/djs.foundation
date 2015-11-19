define(["declare", "./Base", "./Control"], function(declare){




	declare("djs.core.Validate", "djs.core.Control", function(self, parent, core){

		self.__construct = function(){
			parent.__construct.call(this);
			this.Model = new core.Model();
		}

		self.addField = function(){
			this.Model.addField.apply(this, arguments);
			return this;
		}

        self.submit = function(Req){
        	//alert("it works 222");
            parent.submit.call(this, Req);
        	
        	console.log("--- validate");

        	Req.each(function(name, value){
        		if(!Model.hasField(name)) return;
        		if(declare.cast(value, Model.type(name)) === undefined) Req.addError(name, "djs_core_invalid_type");
        		//if(declare.cast(value))
        		//console.log("===== go: " + name + ", " + value);
        	});

            return Req;
        }



		// END OF CLASS

	}, "djs.core");



}); // END MODULE

