//regular expressions

var word = /magic/;

var testing = 'The magic of regex';
gs.info('the word matches ' + word.test(testing));


//match email pattern
var email = /\S+@\S+\.\S+/;

var example = 'hello@email.com';

gs.info('does the email match ' + email.test(example));

//using .replace

var replacepattern = /SN/g; //all instances of sn that might appear in string

var string = 'SN is awesome SN is cool';
var newstring = string.replace(replacepattern, 'ServiceNow');

gs.info(newstring);