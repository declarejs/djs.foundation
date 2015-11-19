define(["declare", "./Base", "./Request"], function(declare){




	declare.abstract("djs.core.Control", "djs.core.Base", function(self, parent, core){

        self.Model = undefined;
        self.Request = undefined;

        self.model = function(Obj){
            if(Obj === undefined) return this.Model;
            this.Model = (Obj instanceof core.Model) ? Obj : undefined;
            return this;
        }

        self.submit = function(Req){
        	return this.Request = declare.mustCast(Req, core.Request);
        }

        self.response = function(){
        	this.Request = new core.Request();
        	this.Request.set.apply(this.Request, arguments);
        	return this.Request.response();
        }


		// END OF CLASS

	}, "djs.core");



}); // END MODULE

