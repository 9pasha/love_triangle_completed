/*module.exports = function getLoveTrianglesCount(preferences = []) {*/

	var deleted = [];
    var preferences = [2, 6, 6, 4, 2, 5, 4, 5];
    var lenPref = preferences.length - 1; /*7*/
    var tmp = {};
    var counter = 0;

    for (var i = lenPref; i >= 0; i--) {
        if (preferences[i] in tmp) continue;
        counter++;
        deleted.push(preferences[i]);
        tmp[preferences[i]] = 1;
	} 

	for (var a = 0; a <= counter - 1; a++) {
		console.log(deleted[a]);
	}

	/*---Let's try to create algoritm from min to max---*/
	
	for () {
		
	}

	/*---At the end, try to create algoritm find a triagles---*/

