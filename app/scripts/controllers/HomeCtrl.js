(function() {

	function HomeCtrl(Room){
		this.Rooms = Room.all;

	}


	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', HomeCtrl])

})();
