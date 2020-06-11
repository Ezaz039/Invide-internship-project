//get today's time-stamp;
var today = new Date();
//return time in (HH:MM:SS) format;
document.getElementById('current-time').innerHTML = (today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()).fontsize(6);
document.getElementById('current-time-zone').innerHTML = new Date();
//get query region;
let selection = document.querySelector('select');
//get header tag to return query result;
let result = document.querySelector('h5');
//show selected region;
let header_tag = document.querySelector('h2');

//Date and Time of the selected location;
var aryIannaTimeZones =
[
	"Australia/Brisbane",
	"America/New_York",
	"Asia/Kolkata",
	"Europe/Andorra",
	"Asia/Dubai",
	"Asia/Kabul",
	"Europe/Tirane",
	"Australia/Melbourne",
	"Australia/Sydney",
	"Australia/Broken_Hill",
	"Australia/Lindeman",
	"Australia/Adelaide",
	"Australia/Darwin",
	"Australia/Perth",
	"Australia/Eucla",
	"Asia/Baku",
	"America/Barbados",
	"Asia/Dhaka",
	"Europe/Brussels",
	"Europe/Sofia",
	"Atlantic/Bermuda",
	"Asia/Brunei",
	"America/La_Paz",
	"America/Cuiaba",
	"Indian/Cocos",
	"Europe/Zurich",
	"Africa/Abidjan",
	"Pacific/Rarotonga",
	"America/Santiago",
	"America/Punta_Arenas",
	"Pacific/Easter",
	"Asia/Shanghai",
	"Asia/Urumqi",
	"America/Bogota",
	"America/Costa_Rica",
	"America/Havana",
	"Atlantic/Cape_Verde",
	"America/Curacao",
	"Indian/Christmas",
	"America/Guyana",
	"Asia/Hong_Kong",
	"America/Tegucigalpa",
	"America/Port-au-Prince",
	"Asia/Jakarta",
	"Europe/Simferopol",
	"America/Caracas"
];

selection.addEventListener('change', () => {
    //get query index to get query output;
    var cnt = selection.selectedIndex;
    var date_time = new Date().toLocaleString("en-US", {timeZone: aryIannaTimeZones[cnt-1]});
    //return selected region name;
    header_tag.innerText = "Your selected region:: " + aryIannaTimeZones[cnt-1];
    //return query result;
    result.innerText = date_time;
});