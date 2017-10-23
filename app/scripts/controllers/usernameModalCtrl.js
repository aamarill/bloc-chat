(function(){

	function usernameModalCtrl($uibModal, $cookies, Username){

		this.enterUsername = function(){
			var username = document.getElementById("username").value;

			usernameNoSpaces = username.replace(/ /g,"");

			if(usernameNoSpaces && usernameNoSpaces != ""){

				$cookies.put('BlocChatCurrentUser', usernameNoSpaces);
				console.log("$cookies.get('BlocChatCurrentUser') = " + $cookies.get("BlocChatCurrentUser"));	
				Username.uibModalInstance.close();
			}

		}

	}

	angular
		.module('blocChat')
		.controller('usernameModalCtrl', ['$uibModal', '$cookies', 'Username',usernameModalCtrl])
})();
