//review of looping methods

var fruits = ['apple', 'banana', 'grape'];
//custom properties
var vegetables = ['there', 'are', 'no', 'such', 'thing', 'as', 'vegetables'];
fruits.customProperty = 'Not_in_array';
vegetables.customProperty = 'Not_in_array';

//for loop
for (var i = 0; i < fruits.length; i++) {
    gs.info('for loops: at index ' + i + ' we have ' + fruits[i]);
}

//forEach

fruits.forEach(function(item, index) {
    gs.info('forEach loop: at index ' + index + ' we have ' + item);
});

//for in 
//custom properties show up in for in loops

for (var fruit in fruits) {
    gs.info('for in loop: at index ' + fruit + ' we have ' + fruits[fruit]);
}


for (var index in vegetables) {
    gs.info('for in loop: at index ' + index + ' we have ' + vegetables[index]);
}