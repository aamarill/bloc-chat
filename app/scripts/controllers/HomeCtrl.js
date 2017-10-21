(function() {

	function HomeCtrl(Room){
		this.Rooms = Room.all;
		this.changeChat = Room.changeChat;
		this.activeChatProperties = Room.activeChatProperties;

	}


	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', HomeCtrl])

})();
