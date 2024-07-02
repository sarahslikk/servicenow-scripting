//glide aggregate
//extends functionality of gliderecord performs stuff without need for multiple quieries
//better for larger datasets, numbers and stuff

//review of glide record, getrowcount counts records

var incidentGR = new GlideRecord('incident');
incidentGR.addQuery('priority', '1');
incidentGR.query();

gs.info('Count of high priority incidents: ' + incidentGR.getRowCount());

var record = new GlideAggregate('incident');
//what do we want to do, we want to count records
//use addAggregate to specify what we want to do
//can do count, sum, etc
record.addAggregate('COUNT');
record.addQuery('priority', '1');
record.query();

if (record.next()) {
	//get the result of our aggregate, which is count
	gs.info('Count of high priority incidents: ' + record.getAggregate('COUNT'));
}

//add conditions to aggregates
var record2 = new GlideAggregate('incident');
//how many times incidents have been reassigned
record2.addAggregate('SUM', 'reassignment_count');
record2.addQuery('reassignment_count', '!=', '0');
record2.query();

if (record2.next()) {
	gs.info('Sum of reassignments on incidents: ' + record2.getAggregate('SUM', 'reassignment_count'));
}

var record3 = new GlideAggregate('incident');
record3.addAggregate('COUNT');
record3.groupBy('category');
//aggregate groups for each category
//count but based off of each category, not just all of them
record3.query();
//if you know you're going through multiple groupings, you need a loop
while (record3.next()) {
	//DIFFERENT record aggregate for every category, so multiple .infos
	gs.info('Category : ' + record3.category + ' count: '+ record3.getAggregate('COUNT'));
}

///exercise

//glide aggregate exercise
//calculate the average priority of incidents for every assignment group

//use AVG, field priority

//groupBy for assignment_group

//getDisplayValue('assignment_group') will display name of group

var agg = new GlideAggregate('incident');
agg.addAggregate('AVG', 'priority');
agg.groupBy('assignment_group');
agg.query();

while(agg.next()) {
	gs.info('Assignment group: ' + agg.getDisplayValue('assignment_group') + ' Avg priority: ' + agg.getAggregate('AVG', 'priority'));
}