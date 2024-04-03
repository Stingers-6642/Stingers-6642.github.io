// TBAInterface funcitons to pull data from TheBlueAlliance.com
var teams = null;
var schedule = null;
var authKey = "zLdiWPvcB5i1cMrUdATfG5b8Gwj10Szewa7Lf6zlAtIJKvzDBMhZXSHCkvvxkAbk";
/**
 * Get list of teams in event
 *
 * @param {eventCode} eventCode the event code (i.e. 2020caln) to pull the team list
 */
function getTeams(eventCode) {
	if (authKey) {
		var xmlhttp = new XMLHttpRequest();
		var url = "https://www.thebluealliance.com/api/v3/event/2024mimtp/teams/simple";
		xmlhttp.open("GET", url, true);
		xmlhttp.setRequestHeader("X-TBA-Auth-Key", authKey);
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = this.responseText;
				teams = JSON.parse(response);
			}
		};
		// Send request
		xmlhttp.send();
	}
}

/**
 * Get schefule for event
 *
 * @param {eventCode} eventCode the event code (i.e. 2020caln) to pull the team list
 */
function getSchedule(eventCode) {
	if (authKey) {
		var xmlhttp = new XMLHttpRequest();
		var url = "https://www.thebluealliance.com/api/v3/event/2024milac/matches/simple";
		xmlhttp.open("GET", url, true);
		xmlhttp.setRequestHeader("X-TBA-Auth-Key", authKey);
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = this.responseText;
				schedule = JSON.parse(response);
			}
		};
		// Send request
		xmlhttp.send();
	}
}
