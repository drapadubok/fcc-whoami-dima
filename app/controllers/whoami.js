'use strict';

var whoami = {
    getIP: function(header) {
        return header["x-forwarded-for"];
    },
    
    getLanguage: function(header) {
        return header["accept-language"].split(",")[0];
    },
    
    getSoftware: function(header) {
    	var re = /\((.*?)\)/;
        return header["user-agent"].match(re)[1];
    },
    
    whoAmI: function(req) {
        var output = {
            "ipaddress": this.getIP(req.headers),
    		"language": this.getLanguage(req.headers),
    		"software": this.getSoftware(req.headers)
        };
        return output;
    }
}


module.exports = whoami;



