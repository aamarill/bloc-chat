(function(){


	function newChatRoomCtrl($uibModal,Room){

		this.modalInstance = {};
		/**
		* @function .open
		* @desc Opens the modal to create a new chat room
		*/
		this.open = function() {

			console.log('Modal commanded to open');

			var modalInstance = $uibModal.open({
				templateUrl: '/templates/new_chat_room.html',
				backdrop: 'static',
				size: 'sm'
			});

			/* Store the instance so we can close the modal later.
			Not sure if this is poluting the global workspace though.
			*/
			newChatRoomCtrl.modalInstance = modalInstance;

		}

		/**
		* @function .cancel
		* @desc Cancels the new chat room entry and closes the modal
		*/
		this.cancel = function(){
			console.log("You clicked cancel");
			newChatRoomCtrl.modalInstance.close();
		}


		/**
		* @function .create
		* @desc Create the room and close modal
		*/
		this.create = function() {
			console.log("You clicked Create room");
			console.log("Room = ", Room);

			/* Get the input text*/
			var element = document.getElementById('roomName');

			/* example: list.$add({ foo: "bar" })*/
			Room.add(element.value);
			newChatRoomCtrl.modalInstance.close();


		}

	}

	angular
		.module('blocChat')
		.controller('newChatRoomCtrl', ['$uibModal','Room',newChatRoomCtrl])


})();
