define(["declare", "./Message"], function(declare){




	var dcm = "djs.core.Message"; // for minification

	declare("djs.core.Error", dcm);

	declare("djs.core.Warning", dcm);

	declare("djs.core.Notice", dcm);

	declare("djs.core.Affirm", dcm);

	declare("djs.core.MessageList", "djs.List", function(self, parent, core){

		self.__construct = function(){
            this._type = core.Message;
			parent.__construct.apply(this, arguments);
		}

	});




});