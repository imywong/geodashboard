//DATABASE
const faultRecords = [
    {
        device_id : "G91111111",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-15",
        location : {
            lat:-34.9,
            long:138.6
        } 
    },
    {
        device_id : "G91111112",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-19",
        location : {
            lat:-34.95,
            long:138.65
        } 
    },
    {
        device_id : "G91111111",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-18",
        location : {
            lat:-34.99,
            long:138.69
        } 
    },
    {
        device_id : "G91111111",
        faultCode : 20,
        faultDescription : "No communication",
        dateTime :"2022-10-21",
        location : {
            lat:-34.91,
            long:138.6
        } 
    },
    {
        device_id : "G91111112",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-19",
        location : {
            lat:-34.951,
            long:138.65
        } 
    },
    {
        device_id : "G91111113",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-18",
        location : {
            lat:-33,
            long:138.71
        } 
    },
    {
        device_id : "G91111114",
        faultCode : 20,
        faultDescription : "No communication",
        dateTime :"2022-10-22",
        location : {
            lat:-34.93,
            long:138.84
        } 
    },
    {
        device_id : "G91111115",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-19",
        location : {
            lat:-33.81,
            long:138.81
        } 
    },
    {
        device_id : "G91111118",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-18",
        location : {
            lat:-33.99,
            long:138.75
        } 
    },
    {
        device_id : "GG9111112",
        faultCode : 20,
        faultDescription : "No communication",
        dateTime :"2022-10-23",
        location : {
            lat:-33.91,
            long:138.57
        } 
    },
    {
        device_id : "G91111113",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-19",
        location : {
            lat:-33.951,
            long:138.51
        } 
    },
    {
        device_id : "GG9111117",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-19",
        location : {
            lat:-33.2,
            long:138.56
        } 
    },
    {
        device_id : "G91111119",
        faultCode : 30,
        faultDescription : "Accelerometer failure",
        dateTime :"2022-10-17",
        location : {
            lat:-33.03,
            long:138.41
        } 
    },
    {
        device_id : "G91111114",
        faultCode : 30,
        faultDescription : "Accelerometer failure",
        dateTime :"2022-10-25",
        location : {
            lat:-33.95,
            long:138.42
        } 
    },
    {
        device_id : "G91111115",
        faultCode : 30,
        faultDescription : "Accelerometer failure",
        dateTime :"2022-10-16",
        location : {
            lat:-32.96,
            long:138.41
        } 
    },
    {
        device_id : "G91111117",
        faultCode : 15,
        faultDescription : "Cellular signal weak",
        dateTime :"2022-10-17",
        location : {
            lat:-32.96,
            long:138.41
        } 
    },
    {
        device_id : "G91111111",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-17",
        location : {
            lat:-32.77,
            long:139.41
        } 
    },
    {
        device_id : "G91111112",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-17",
        location : {
            lat:-33.03,
            long:138.41
        } 
    },
    {
        device_id : "G91111113",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-20",
        location : {
            lat:-34.9,
            long:138.6
        } 
    },
    {
        device_id : "G91111118",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-09",
        location : {
            lat:-34.95,
            long:138.65
        } 
    },
    {
        device_id : "G91111119",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-18",
        location : {
            lat:-34.99,
            long:138.69
        } 
    },
    {
        device_id : "G91111112",
        faultCode : 20,
        faultDescription : "No communication",
        dateTime :"2022-10-20",
        location : {
            lat:-34.91,
            long:138.6
        } 
    },
    {
        device_id : "G91111112",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-26",
        location : {
            lat:-34.95,
            long:138.65
        } 
    },
    {
        device_id : "G91111117",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-18",
        location : {
            lat:-33.34,
            long:138.11
        } 
    },
    {
        device_id : "G91111121",
        faultCode : 20,
        faultDescription : "No communication",
        dateTime :"2022-10-20",
        location : {
            lat:-34.11,
            long:138.33
        } 
    },
    {
        device_id : "G91111121",
        faultCode : 20,
        faultDescription : "No communication",
        dateTime :"2022-10-20",
        location : {
            lat:-34.11,
            long:138.33
        } 
    },
    {
        device_id : "G91111122",
        faultCode : 15,
        faultDescription : "Cellular signal weak",
        dateTime :"2022-10-24",
        location : {
            lat:-33.92,
            long:138.19
        } 
    },
    {
        device_id : "G91111121",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-15",
        location : {
            lat:-33.01,
            long:138.21
        }
    },
    {
        device_id : "G91111123",
        faultCode : 20,
        faultDescription : "No communication",
        dateTime :"2022-10-16",
        location : {
            lat:-33.81,
            long:138.67
        } 
    },
    {
        device_id : "G91111124",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-15",
        location : {
            lat:-33.02,
            long:138.19
        } 
    },
    {
        device_id : "G91111125",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-15",
        location : {
            lat:-33.02,
            long:138.18
        } 
    },
    {
        device_id : "G91111126",
        faultCode : 30,
        faultDescription : "Accelerometer failure",
        dateTime :"2022-10-13",
        location : {
            lat:-33.23,
            long:138.22
        } 
    },
    {
        device_id : "G91111127",
        faultCode : 30,
        faultDescription : "Accelerometer failure",
        dateTime :"2022-10-13",
        location : {
            lat:-33.76,
            long:138.78
        } 
    },
    {
        device_id : "G91111128",
        faultCode : 30,
        faultDescription : "Accelerometer failure",
        dateTime :"2022-10-11",
        location : {
            lat:-32.23,
            long:138.65
        } 
    },
    {
        device_id : "G91111123",
        faultCode : 15,
        faultDescription : "Cellular signal weak",
        dateTime :"2022-10-11",
        location : {
            lat:-32.45,
            long:138.67
        } 
    },
    {
        device_id : "G91111129",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-11",
        location : {
            lat:-32.69,
            long:139.21
        } 
    },
    {
        device_id : "G91111124",
        faultCode : 10,
        faultDescription : "Cellular signal weak",
        dateTime :"2022-10-10",
        location : {
            lat:-33.03,
            long:138.22
        } 
    },
    {
        device_id : "G91111130",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-10",
        location : {
            lat:-33.01,
            long:138.23
        } 
    },
    {
        device_id : "G91111130",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-11",
        location : {
            lat:-33.03,
            long:138.23
        } 
    },
    {
        device_id : "G91111130",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-13",
        location : {
            lat:-33.02,
            long:138.22
        } 
    },
    {
        device_id : "G91111130",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-14",
        location : {
            lat:-33.01,
            long:138.21
        } 
    },
    {
        device_id : "G91111130",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-15",
        location : {
            lat:-33.02,
            long:138.20
        } 
    },
    {
        device_id : "G91111130",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-16",
        location : {
            lat:-33.01,
            long:138.20
        } 
    },
        {
        device_id : "G91111130",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-15",
        location : {
            lat:-33.01,
            long:138.23
        } 
    },
    {
        device_id : "G91111130",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-15",
        location : {
            lat:-33.03,
            long:138.23
        } 
    },
    {
        device_id : "G91111130",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-13",
        location : {
            lat:-33.02,
            long:138.22
        } 
    },
    {
        device_id : "G91111130",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-14",
        location : {
            lat:-33.01,
            long:138.21
        } 
    },
    {
        device_id : "G91111130",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-15",
        location : {
            lat:-33.02,
            long:138.20
        } 
    },
    {
        device_id : "G91111130",
        faultCode : 15,
        faultDescription : "Device unplugged",
        dateTime :"2022-10-13",
        location : {
            lat:-33.01,
            long:138.20
        } 
    },    
    {
        device_id : "G91111132",
        faultCode : 10,
        faultDescription : "No GPS",
        dateTime :"2022-10-10",
        location : {
            lat:-32.01,
            long:137.27
        } 
    },
    {
        device_id : "G91111132",
        faultCode : 10,
        faultDescription : "No GPS",
        dateTime :"2022-10-11",
        location : {
            lat:-32.03,
            long:137.31
        } 
    },
    {
        device_id : "G91111132",
        faultCode : 10,
        faultDescription : "No GPS",
        dateTime :"2022-10-13",
        location : {
            lat:-32.02,
            long:137.34
        } 
    },
    {
        device_id : "G91111132",
        faultCode : 10,
        faultDescription : "No GPS",
        dateTime :"2022-10-14",
        location : {
            lat:-32.01,
            long:137.13
        } 
    },
    {
        device_id : "G91111132",
        faultCode : 10,
        faultDescription : "No GPS",
        dateTime :"2022-10-15",
        location : {
            lat:-32.02,
            long:137.11
        } 
    },
    {
        device_id : "G91111132",
        faultCode : 10,
        faultDescription : "No GPS",
        dateTime :"2022-10-15",
        location : {
            lat:-32.01,
            long:137.16
        } 
    },
    {
        device_id : "G91111132",
        faultCode : 10,
        faultDescription : "No GPS",
        dateTime :"2022-10-16",
        location : {
            lat:-32.02,
            long:137.18
        } 
    },
    {
        device_id : "G91111132",
        faultCode : 10,
        faultDescription : "No GPS",
        dateTime :"2022-10-16",
        location : {
            lat:-32.03,
            long:137.22
        } 
    },
    {
        device_id : "G91111132",
        faultCode : 10,
        faultDescription : "No GPS",
        dateTime :"2022-10-16",
        location : {
            lat:-32.04,
            long:137.23
        } 
    },
    {
        device_id : "G91111111",
        faultCode : 400,
        faultDescription : "Duress triggered",
        dateTime :"2022-10-16",
        location : {
            lat:-30.04,
            long:140.23
        } 
    },
    {
        device_id : "G91111112",
        faultCode : 400,
        faultDescription : "Duress triggered",
        dateTime :"2022-10-17",
        location : {
            lat:-30.043,
            long:140.23
        } 
    },
    {
        device_id : "G91111113",
        faultCode : 400,
        faultDescription : "Duress triggered",
        dateTime :"2022-10-18",
        location : {
            lat:-30.044,
            long:140.23
        } 
    },
    {
        device_id : "G91111114",
        faultCode : 400,
        faultDescription : "Duress triggered",
        dateTime :"2022-10-19",
        location : {
            lat:-30.041,
            long:140.23
        } 
    }

]