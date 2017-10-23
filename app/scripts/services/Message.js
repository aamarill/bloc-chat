(function(){

	function Message($firebaseArray, $cookies){
		var Message = {};
		var ref = firebase.database().ref().child("messages");

		Message.getByRoomId = function(roomID) {

			var messages = $firebaseArray(ref.orderByChild('roomId').equalTo(roomID));
			Message.all = messages;
		};

		Message.send = function(roomID){

			var $textArea = document.getElementById("messageText");
			var newMessageContent = $textArea.value;

			// the logic will only execute if roomID exists
			if(roomID && newMessageContent){

				var currentUser = $cookies.get('BlocChatCurrentUser');

				var date = new Date();
				var minutes = date.getMinutes();
				var hours = date.getHours();

				if (hours<12){
					sentTime = hours + ":" + minutes + " am";
				}else{
					sentTime = hours + ":" + minutes + " pm";
				}



				$firebaseArray(ref).$add({
					content: newMessageContent,
					roomId: roomID,
					sentAt: sentTime,
					username: currentUser
				});

				$textArea.value = '';

			}// end of if statement
		};// end of message.send


		return Message;

	}


	angular
		.module('blocChat')
		.factory('Message',['$firebaseArray', '$cookies', Message]);
})();
