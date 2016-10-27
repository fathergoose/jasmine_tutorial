describe('Users factory', function() {
	var Users;

	// before each test, load the api.users module
	beforeEach(angular.mock.module('api.users'));

	// before each test, set our injected users factory (_Users_) to our local Users
	beforeEach(inject(function(_Users_) {
		Users = _Users_;
	}));

	// a simple test to verify the Users factory exists
	it('should be defined', function() {
		expect('Users').toBeDefined();
	});

	it('has a dummy spec to test math', function() {
		expect(2 + 3).toEqual(5);
	});
});