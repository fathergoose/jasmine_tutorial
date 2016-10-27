(function() {
	'use strict';

	// Create the module and factory we referenced in beore_each blocks
	angular.module('api.users', [])
	.factory('Users', function() {
		var Users = {};
		return Users;
	});
})();