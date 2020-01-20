// Service Layer module to interact with B1 Data */
// Server Configuration and User Credentials set in environment variables

module.exports = {
    GetMaterials: function (response) {
        return (GetMaterials(response));
    }
}

//Load Configurations
var bydTenant =   process.env.BYD_TENANT+":"
var csrfToken = null;

//Load Node Modules
var req = require('request') // HTTP Client
//Connect to Service Layer

//Retrieve Items
function GetMaterials(callback) {

    var options = {
        method: "GET",
        url: bydTenant + "/sap/byd/odata/cust/v1/vmumaterial/MaterialCollection?$format=json",
        headers: setByDHeaders()
    }

    //Set HTTP Request Options
    console.log("Preparing BYD Request - " + options.method + " - " + options.url)

    //Make Request
    req.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            body = JSON.parse(body);
            return callback(null, body);
        } else {
            return callback(error);
        }
    });
}

function setByDHeaders(method){

    csrf = csrfToken
    if (method == "GET" || method == "HEAD") {
        // Get Method doesnt require token
        csrf = 'fetch'
    }
    return(header =  {
        "x-csrf-token": csrf,
        "Accept":"application/json",
        "Authorization": "Basic " + new Buffer(process.env.BYD_USER + ":" + process.env.BYD_PASSWORD).toString("base64") 
    })

}
