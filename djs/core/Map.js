define(["declare"], function(declare){




	declare("djs.core.Map", function(self){

		self.protected._type = false;
		self.protected.items = undefined;

		self.__construct = function(){
			runtime();
			this.items = {};
			for(var i=0; i<arguments.length; i+=2) this.set(arguments[i], arguments[i+1]);
		}

		self.protected.cast = function(mixed){
			return this._type ? cast(mixed, this._type) : mixed;
		}

		self.type = function(value){
			return this.__access('_type', value, 'type', false);
		}

		self.clear = function(){
			this.items = {};
			return this;
		}

		self.count = function(name, _else){
			var c = 0;
			for(var item in this.items) c++;
			return c;
		}

		self.has = function(name){
			return this.items[name] !== undefined;
		}

		self.get = function(name, _else){
			return (this.items[name] === undefined) ? _else : this.items[name];
		}

		self.set = function(name, value){
			for(var i=0; i<arguments.length; i+=2){
				name = arguments[i];
				value =  this.cast(arguments[i+1]);
				if(value !== undefined) this.items[name] = value;
				else if(this.items[name] !== undefined) delete this.items[name];
			}
			return this;
		}

		self.each = function(func){
			for(var item in this.items){
				if(func(item, this.items[item]) === false) return this;
			}
			return this;
		}

		// END OF CLASS
	});




});