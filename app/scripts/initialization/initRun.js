
(function() {

	function BlocChatCookies($uibModal, $cookies, Username) {
		var currentUser = $cookies.get('BlocChatCurrentUser');

		if(!currentUser || currentUser === ''){
			//do something to allow users to set username (modal!)
			Username.uibModalInstance = $uibModal.open({
				templateUrl: '/templates/usernameModal.html',
				backdrop: 'static',
				size: 'sm',
			});
		}
	}


	angular
		.module('blocChat')
		.run(['$uibModal', '$cookies', 'Username', BlocChatCookies]);

}) ();
