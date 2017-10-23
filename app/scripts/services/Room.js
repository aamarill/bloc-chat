( function(){

	function Room($firebaseArray, Message){
		var Room = {};
		var ref = firebase.database().ref().child("rooms");
		var rooms = $firebaseArray(ref);
		var messages = {};

		Room.all = rooms;
		Room.add = function(room){
			rooms.$add(room);
		}

		/**
		* @prop (Property)
		* @desc Initialization the object to hold the properties of the current chat.
		*/
		Room.activeChatProperties = {
			title: 'Please select a chat room',
			id: '',
			messages: {},
		};

		/** @method changeChat
		*	@desc Updates the chat displayed when a user clicks on a chat room on the left
		*	@arg {Object}
		*/
		Room.changeChat = function(room){

			/*
			Now that we have the room id, we can populate the messages section with the messages.
 			*/
			Message.getByRoomId(room.$id);

			/* Populate active chat properties */
			this.activeChatProperties = {
				title: room.$value,
				id: room.$id,
				messages: Message.all,
			};

		}

		return Room;
	}


	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', 'Message', Room]);
})();
