[![License: Apache2](https://img.shields.io/badge/License-Apache2-green.svg)](https://opensource.org/licenses/Apache-2.0)

# scp-byd
[![SAP](https://i.imgur.com/kkQTp3m.png)](https://cloudplatform.sap.com)
[![SAP](https://i.imgur.com/zNslwny.png)](https://cloudplatform.sap.com)

This is a sample step by step guide of how to build cloud applications based on [Cloud Foundry](https://www.cloudfoundry.org/). 
It is coded in [NodeJ](https://nodejs.org/en/) 

It is integrated with [SAP Business ByDesign](https://www.sap.com/uk/products/business-bydesign.html) using the [OData Services](https://odata.org) to list Items. 

The idea of this application is based in the [beer-list](https://github.com/mariantalla/beer-list) app.

[Live Demo](https://scp-byd.cfapps.eu10.hana.ondemand.com/)


## Requirements
*  [Install the Cloud Foundry CLI](https://developers.sap.com/tutorials/cp-cf-download-cli.html)
*  [Learn the Fundamentals of SCP Cloud Foundry](https://developers.sap.com/tutorials/cp-cf-fundamentals.html)
* A SAP Business ByDesign Tenant 
* Deploy this [Materials OData Definition](https://github.com/SAP-samples/sapbydesign-api-samples/blob/master/Custom%20OData%20Services/vmumaterial.xml) on your tenant. [See here how](https://www.youtube.com/watch?v=z6mF_1hFths)

### Deployment
Clone this repository
```sh
git clone https://github.com/SAP-Samples/scp-byd.git
```
From the root directory, using the [Cloud Foundry CLI](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html) push your app to the SAP CP Cloud Foundry
```sh
cf push --random-route
```
Then set the Environment Variables accordingly
```sh
cf set-env scp-byd BYD_TENANT http://<your ByD Tenant server>
cf set-env scp-byd BYD_USER <ByD User>
cf set-env scp-byd BYD_PASSWORD <ByD Password>
```
**Example**
```sh
cf set-env scp-byd BYD_TENANT https://my60666.sapbydesign.com
cf set-env scp-byd BYD_USER <ByD User>
cf set-env scp-byd BYD_PASSWORD <ByD Password>
```

Restart your application (so it can read the new environment variables)
```sh
cf restart scp-byd
```

Access the app from the URL route shown in the terminal

## Support and Contributions  
This repository is provided "as-is". With no Warranty or support

If you have questions, please ask.

## License
Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSES/Apache-2.0.txt) file.