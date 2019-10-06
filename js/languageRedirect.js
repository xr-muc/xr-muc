if (!document.cookie.includes('landingPage=visited;')) {
	document.cookie = "landingPage=visited; expires=Fri, 31 Dec 9999 23:59:59 GMT";

	var language = window.navigator.userLanguage || window.navigator.language;
	var lang = language.substr(0, 2);
	if (lang === "de") {
		window.location.href = "https://countdown.xr-muc.de/index.html";
	} else if (lang === "en") {
		window.location.href = "https://countdown.xr-muc.de/en/index.html";
	}
}
