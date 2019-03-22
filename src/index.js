module.exports = function getLoveTrianglesCount(preferences = []) {

	var counter = 0;
	var lenPref = preferences.length;

	for (var i = 0; i < lenPref; i++) {
		let next = preferences[i] - 1;
		if (next == i) continue;
		let nextnext = preferences[next] - 1;
		if (nextnext == next) continue;
		let nextnextnext = preferences[nextnext] - 1;
		if (nextnextnext == nextnext) continue;
		if (nextnextnext == i) {
			counter ++;
		}
	}

	return counter/3;
}