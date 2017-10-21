(function(){

	function Message($firebaseArray){
		var Message = {};
		var ref = firebase.database().ref().child("messages");
		var messages = {};

		/* This function will populate the messages */
		Message.getByRoomId = function(roomID) {
			console.log('roomID = ' + roomID);
			console.log("ref = " + ref);

			var messages1 = $firebaseArray(ref);

			console.log('messages1 = ' + messages1);

			Message.all = messages1;


			/*return ref.orderByChild('roomId').equalTo(roomID)*/
		};


		return Message;

	}


	angular
		.module('blocChat')
		.factory('Message',['$firebaseArray', Message]);
})();
