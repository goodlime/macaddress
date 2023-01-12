# Mac Address Lookup

Mac Address Lookup is a JavaScript command line application written in NodeJS. The app leverages the [MacAddress.io](https://macaddress.io) API to perform a lookup of a mac address and returns the company to which that mac address is assigned.

## Assumptions

Docker and/or NodeJS is installed on the machine the application will be run on.

## Installation with Docker

To build and install the app in a Docker container. From the root of the app directory:

```bash
docker build . -t macaddress
```

To run the app within the Docker container, the mac address must be specified in an environment variable.
```bash
docker run -e ADDRESS=<mac address> macaddress
```
### Example
```bash
# returns 'Cumulus Networks, Inc'
docker run -e ADDRESS=44:38:39:ff:ef:57 macaddress
```

## Node via Command Line
From the root of the app directory:
```javascript
node . -a <mac address>
```
### Example
```javascript
// returns 'Cumulus Networks, Inc'
node . -a 44:38:39:ff:ef:57
```

## Considerations

This application was written quickly as a code example and omits various considerations that would be present in a production application.

An obvious security consideration would be the inclusion of the MacAddress.io API key in the source code. In a real-world deployment, this could be handled by setting an environment variable for the API key and referencing it within the application to avoid publication of the key. For the purposes of this example, in the interests of keeping things simple and for ease of use, the API was hard coded in the source.

## License
[MIT](https://choosealicense.com/licenses/mit/)
