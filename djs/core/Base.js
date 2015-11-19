define(['declare', "./all.globals"], function(declare){

	



	declare.abstract("djs.core.Base", function(self){

		self.handlers = undefined;

		self.__construct = function(){
			this.handlers = {};
		}

		self.on = function(event, func){ 
			func = declare.mustCast(func, 'function');
			if(!this.handlers[event]) this.handlers[event] = [func];
			else if(this.handlers[event]["triggered"]) func.apply({}, handlers[event]);
			else this.handlers[event].push(func);
			return this;
		}

		self.trigger = function(event){
			if(!this.handlers[event]) return this;
			for(var i=0; i<this.handlers[event].length; i++) this.handlers[event][i].apply({}, arguments);
			return this;
		}

		self.triggerOnce = function(event){
			if(this.handlers[event]) {
				for(var i=0; i<this.handlers[event].length; i++) this.handlers[event][i].apply({}, arguments);
			}
			// save arguments and set indicator
			this.handlers[event] = arguments;
			this.handlers[event].triggered = true;
			return this;
		}

		// END OF CLASS
	});






});