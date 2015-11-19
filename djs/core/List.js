define(["declare", "./Map"], function(declare){





	declare("djs.core.List", "djs.core.Map", function(self, parent, lib){


		self.__construct = function(){
			runtime();
			this.items = [];
			for(var i=0; i<arguments.length; i++) this.push(arguments[i]);
		}


		self.protected.passOn = function(method, args, setting){
			if(setting){
				for(var i=0; i<args.length; i++){
					args[i] = this.cast(args[i]);
					if(args[i] === undefined) error('BAD_TYPE', self.className());
				}
			}
			var r = Array.prototype[method].apply(this.items, args);
			if(r === this.items) return this;
			return (r instanceof Array) ? r.list() : r;
		}

		self.clear = function(){
			this.items = [];
			return this;
		}

		self.count = function(){return this.items.length; }


		self.set = function(pos, value){
			for(var i=0; i<arguments.length; i++){
				pos = arguments[i];
				value =  this.cast(arguments[i+1]);
				if(value === undefined) continue;
				if(this.items[pos] !== undefined) this.items[pos] = value;
				else if(this.items.length === name) this.push(value);
			}
			return this;
		}

		self.each = function(func){
			for(var i=0; i<this.items.length; i++){
				if(func(i, this.items[i]) === false) return this;
			}
			return this;
		}

		// copy array methods

		var methods = {split: false, push: true, pop: false};
		var pass = function(method, setting){
			return function(){return this.passOn(method, arguments, setting);}
		}

		for(var item in methods) self.public[item] = pass(item, methods[item]);

		self.public.append = self.public.push;

		// END OF CLASS
	});




});