var keystone = require('keystone');
var Types = keystone.Field.Types;


var Test = new keystone.List('Test', {
	
});

Test.add({
	haha: { type: String, required: false }
});


Test.register();


require('../updates/0.0.1-admins.js')();
