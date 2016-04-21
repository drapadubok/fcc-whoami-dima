'use strict';

function getIP(header) {
    return header["x-forwarded-for"];
}

function getLanguage(header) {
    return header["accept-language"].split(",")[0];
}

function getSoftware(header) {
	var re = /\((.*?)\)/;
    return header["user-agent"].match(re)[1];
}

function whoAmI(req) {
    var output = {
        "ipaddress": getIP(req.headers),
		"language": getLanguage(req.headers),
		"software": getSoftware(req.headers)
    };
    return output;
}

module.exports = {
    getIP: getIP,
    getLanguage: getLanguage,
    getSoftware: getSoftware,
    whoAmI: whoAmI
};



