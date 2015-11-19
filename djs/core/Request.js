define(["declare", "./messages"], function(declare){




	declare("djs.core.Request", "djs.core.Map", function(self, parent, core){

        self.ErrorMap = undefined;
        self.Response = undefined;

        self.__construct = function(){
        	parent.__construct.apply(this, arguments);
        	this.ErrorMap = new declare.Map(declare.List);
        	this.Response = new declare.Map();
        }

        self.submitTo = function(Control){
        	declare.mustCast(Control, core.Control);
        	return Control.submit(this);
        }

        // errors

        self.errorMap = function(name){return name ? this.ErrorMap : this.ErrorMap.get(name);}

        self.hasError = function(name){return name ? this.ErrorMap.has(name) : (this.ErrorMap.count() ? true : false);}

        self.addError = function(name, Obj){
        	var List = this.ErrorMap.get(name);
        	if(List) List.push(Obj);
        	else List.set(name, new declare.ListOf(core.Error, Obj));
        	return this;
        }
        
        // response

        self.response = function(){
        	if(!arguments.length) return this.Request;
        	if(arguments.length === 1) return this.Request.get(arguments[0]);
        	this.Request.set.apply(this.Request, arguments);
        	return this;
        }

		// END OF CLASS

	}, "djs.core");





});