//glide system
//methods to interact with SN platform, user info, querying records, etc.
gs.info('Current user: ' + gs.getUserName());

//find more info about logged in user
var currentuser = gs.getUser();
gs.info('Current user ID: ' + currentuser.getID());
gs.info('Current user roles: ' + currentuser.getRoles());

//info about instance
gs.info('Instance name: ' + gs.getProperty('instance_name'));
gs.info('URL of instance: ' + gs.getProperty('glide.servlet.uri') + 'sp');

//other stuff
gs.info(gs.beginningOfLastWeek());
gs.info(gs.beginningOfLastMonth());
gs.info(gs.isLoggedIn()); //check if user is logged in