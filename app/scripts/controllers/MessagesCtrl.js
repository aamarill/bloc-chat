(function(){

	function MessagesCtrl(Message, $cookies){

		this.send = Message.send;

	}



	angular
		.module('blocChat')
		.controller('MessagesCtrl', ['Message', '$cookies', MessagesCtrl])
})();
