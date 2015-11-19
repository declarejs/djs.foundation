define(["declare", "./Message"], function(declare){



	// for minification
	
	var dc = "djs.core.", 
		dcm = dc + "Message"; 


	// message classes

	declare(dc + "Error", dcm);

	declare(dc + "Warning", dcm);

	declare(dc + "Notice", dcm);

	declare(dc + "Affirm", dcm);

	declare(dc + "MessageList", dc + "List", function(self, parent, core){

		self.__construct = function(){
            this._type = core.Message;
			parent.__construct.apply(this, arguments);
		}

	});




});