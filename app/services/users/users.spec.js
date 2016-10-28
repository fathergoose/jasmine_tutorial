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

	describe('.all()', function() {
		var userList = [
			{
	        id: '1',
	        name: 'Jane',
	        role: 'Designer',
	        location: 'New York',
	        twitter: 'gijane'
	      },
	      {
	        id: '2',
	        name: 'Bob',
	        role: 'Developer',
	        location: 'New York',
	        twitter: 'billybob'
	      },
	      {
	        id: '3',
	        name: 'Jim',
	        role: 'Developer',
	        location: 'Chicago',
	        twitter: 'jimbo'
	      },
	      {
	        id: '4',
	        name: 'Bill',
	        role: 'Designer',
	        location: 'LA',
	        twitter: 'dabill'
	      }
      ]

		it('should be defined', function() {
			expect(Users.all).toBeDefined();
		});

		it('should return a hard-coded list of users', function() {
			expect(Users.all()).toEqual(userList);
		});
	});
});
