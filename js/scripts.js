var deviceList =[]
var faultList = []
var faultCountChart = undefined
var faultTypeCountChart = undefined
var faultDateCountChart = undefined

window.onload = () => {
    console.log("Window is loaded");
  
    getDeviceList()
    updateDeviceDropdown();

    getFaultList()
    updateFaultDropdown();

  };

//Gets list of devices and adds to global deviceList array
const getDeviceList =()=>{
    console.log("[getDeviceList] Running") //DEBUG
    faultRecords.forEach((record) => {
        if (deviceList.includes(record.device_id)==false){
            deviceList.push(record.device_id)
        }
    })
}

//Get list of faults and adds to global faultList array
const getFaultList = () =>{
    console.log("[getFaultsList] Running") //DEBUG
    faultRecords.forEach((record) => {
        let faultCodeAndDescription = `(${record.faultCode}) ${record.faultDescription}`

        if (faultList.includes(faultCodeAndDescription)==false){
            faultList.push(faultCodeAndDescription)
        }
    })
}

//Updates dropdown lists using items from deviceList and faultList
const updateDeviceDropdown = () => {
    document.getElementById("deviceList").innerHTML = "<option value='all'>All</option>";

    deviceList.forEach((record) => {
        let node = document.createElement("option"); //creates a new option node
        let textnode = document.createTextNode(record); //creates the text that goes on the option
        node.appendChild(textnode); //appends the text to the option node
        node.setAttribute("value", record); //sets the value attribute to the unique document id
        document.getElementById("deviceList").appendChild(node); //adds the new option node in the dropdown
    });
};

const updateFaultDropdown = () => {
    document.getElementById("faultList").innerHTML = "<option value='all'>All</option>";

    faultList.forEach((record) => {
        let node = document.createElement("option"); //creates a new option node
        let textnode = document.createTextNode(record); //creates the text that goes on the option
        node.appendChild(textnode); //appends the text to the option node
        node.setAttribute("value", record); //sets the value attribute to the unique document id
        document.getElementById("faultList").appendChild(node); //adds the new option node in the dropdown
    });
};

// Main function to retrive devices specific in date range
const getDevices=()=>{

    console.log("[getDevices] Running") //DEBUG

    resetMap()
    resetTable()
    resetChart()

    let records_arr = [] //stores records that match search criteria
    let device_fault_counts ={} //stores fault counts for each device
    let fault_type_counts={} //stores count of fault types
    let fault_date_counts={} //stores count of fault dates

    let selectedDevice = document.getElementById('deviceList').value
    let selectedFault = document.getElementById('faultList').value

    let startDate = document.getElementById('start-date-id').value
    let endDate = document.getElementById('end-date-id').value

    console.log("Selected Device : " + selectedDevice)
    console.log("Selected Fault : " + selectedFault)

    //Checks database for matching records
    faultRecords.forEach((record)=>{

        let faultCodeAndDescription = `(${record.faultCode}) ${record.faultDescription}`;
        let deviceId = record.device_id;
        let timeStamp =  record.dateTime;

        if (selectedDevice == 'all' && selectedFault == 'all'){
            console.log("All was selected") //DEBUG
            if (timeStamp>=startDate  && timeStamp<=endDate){
                records_arr.push(record) 
                device_fault_counts = updateDeviceFaultCount(record,device_fault_counts) //update fault counts for each device
                fault_type_counts = updateFaultTypeCount(record,fault_type_counts) //update count of each fault type
                fault_date_counts = updateFaultDateCount(record,fault_date_counts) //update count of each fault by date
            }

        }else if (selectedDevice == 'all' && selectedFault != 'all'){
            if (timeStamp>=startDate  && timeStamp<=endDate && faultCodeAndDescription==selectedFault){
                records_arr.push(record) 
                device_fault_counts = updateDeviceFaultCount(record,device_fault_counts) //update fault counts for each device
                fault_type_counts = updateFaultTypeCount(record,fault_type_counts) //update count of each fault type
                fault_date_counts = updateFaultDateCount(record,fault_date_counts) //update count of each fault by date
            }
        }else if (selectedDevice != 'all' && selectedFault == 'all'){
            if (timeStamp>=startDate  && timeStamp<=endDate && deviceId==selectedDevice){
                records_arr.push(record) 
                device_fault_counts = updateDeviceFaultCount(record,device_fault_counts) //update fault counts for each device
                fault_type_counts = updateFaultTypeCount(record,fault_type_counts) //update count of each fault type
                fault_date_counts = updateFaultDateCount(record,fault_date_counts) //update count of each fault by date
            }
        }else{
            if (timeStamp>=startDate  && timeStamp<=endDate && deviceId==selectedDevice && faultCodeAndDescription==selectedFault){
                records_arr.push(record) 
                device_fault_counts = updateDeviceFaultCount(record,device_fault_counts) //update fault counts for each device
                fault_type_counts = updateFaultTypeCount(record,fault_type_counts) //update count of each fault type
                fault_date_counts = updateFaultDateCount(record,fault_date_counts) //update count of each fault by date
            }
        }


        console.log("faultRecords loop running") //DEBUG

        // if(record.dateTime>=startDate  && record.dateTime<=endDate && rec){
        //     console.log("record pushed")
        //     records_arr.push(record) 
        //     device_fault_counts = updateDeviceFaultCount(record,device_fault_counts) //update device_fault_counts object
        // }
    })
    console.log(startDate)
    console.log(endDate)
    generateMapAndTable(records_arr) //Pass date filtered records to generate table function
    generateFaultCountByDeviceChart(device_fault_counts)
    generateFaultCountByTypeChart(fault_type_counts)
    generateFaultCountByDayChart(fault_date_counts)
}

//Updates count of faults for each device
const updateDeviceFaultCount=(record,device_fault_counts)=>{
    if (record.device_id in device_fault_counts){
        device_fault_counts[record.device_id] += 1
    }else {
        device_fault_counts[record.device_id] = 1
    }
        console.log("Device Fault counts: " + JSON.stringify(device_fault_counts)); //DEBUG
    
    return device_fault_counts
}

//Updates count of each faults for each day
const updateFaultDateCount=(record,device_date_counts)=>{
    if (record.dateTime in device_date_counts){
        device_date_counts[record.dateTime] += 1
    }else {
        device_date_counts[record.dateTime] = 1
    }
        console.log("Fault Date counts: " + JSON.stringify(device_date_counts)); //DEBUG
    
    return device_date_counts
}

//Updates count of each type of faults
const updateFaultTypeCount=(record,fault_type_counts)=>{

    let faultCodeAndDescription = `(${record.faultCode}) ${record.faultDescription}`

    if (faultCodeAndDescription in fault_type_counts){
        fault_type_counts[faultCodeAndDescription] += 1
    }else {
        fault_type_counts[faultCodeAndDescription] = 1
    }
        console.log("Fault Type counts: " + JSON.stringify(fault_type_counts)); //DEBUG
    
    return fault_type_counts
}

// Returns table listing faults for specific device
// input : Array of records
// output : Creates records table in browser
const generateMapAndTable = (records_arr) => {

    let tablerows = [];
  
    let header = document.createElement("TR");
    let headerItemCol1 = document.createElement("TH");
    let headerNodeCol1 = document.createTextNode("Device Id");
    let headerItemCol2 = document.createElement("TH");
    let headerNodeCol2 = document.createTextNode("Fault Description");
    let headerItemCol3 = document.createElement("TH");
    let headerNodeCol3 = document.createTextNode("Code");
    let headerItemCol4 = document.createElement("TH");
    let headerNodeCol4 = document.createTextNode("Time Stamp");
    let headerItemCol5 = document.createElement("TH");
    let headerNodeCol5 = document.createTextNode("Location");
  
    headerItemCol1.appendChild(headerNodeCol1);
    headerItemCol2.appendChild(headerNodeCol2);
    headerItemCol3.appendChild(headerNodeCol3);
    headerItemCol4.appendChild(headerNodeCol4);
    headerItemCol5.appendChild(headerNodeCol5);

  
    header.appendChild(headerItemCol1);
    header.appendChild(headerItemCol2);
    header.appendChild(headerItemCol3);
    header.appendChild(headerItemCol4);
    header.appendChild(headerItemCol5);
  
    tablerows.push(header);
    console.log(
      "[generateMapAndTable] Content of records_arr after being passed into function "
    ); //DEBUG
    console.log(records_arr); //DEBUG
  
    records_arr.forEach((record) => {
      console.log("[generateMapAndTable] Current record being looped through"); //DEBUG
      console.log(record); //DEBUG
  
      let list = document.createElement("TR");
  
      //Device Id column
      deviceId_Item = document.createElement("TD");
      deviceId_Node = document.createTextNode(record.device_id);
      deviceId_Item.appendChild(deviceId_Node);
        
      //Fault description column
      faultDescription_Item = document.createElement("TD");
      faultDescription_Node = document.createTextNode(record.faultDescription);
      faultDescription_Item.appendChild(faultDescription_Node);

      //Fault code column
      faultCode_Item = document.createElement("TD");
      faultCode_Node = document.createTextNode(record.faultCode);
      faultCode_Item.appendChild(faultCode_Node);

      //Fault time stamp column
      faultTimestamp_Item = document.createElement("TD");
      faultTimestamp_Node = document.createTextNode(record.dateTime);
      faultTimestamp_Item.appendChild(faultTimestamp_Node);

      //Fault location column
      faultLocation_Item = document.createElement("TD");
      faultLocation_Node = document.createTextNode(`${record.location.lat}, ${record.location.long}`);
      faultLocation_Item.appendChild(faultLocation_Node);
  
      list.appendChild(deviceId_Item);
      list.appendChild(faultDescription_Item);
      list.appendChild(faultCode_Item);
      list.appendChild(faultTimestamp_Item);
      list.appendChild(faultLocation_Item);
  
      tablerows.push(list);


    //   tagLocation(lat,long)
      tagLocation(record)

    });
  
    console.log("[generateMapAndTable] Table rows being returned by function"); //DEBUG
    console.log(tablerows); //DEBUG
  
    // return tablerows;

    tablerows.forEach((tableRow)=>{
        document.getElementById('data-table').appendChild(tableRow);
    })

    showAllMarkers()
  };

//Clear existing table
const resetTable=()=>{
document.getElementById('data-table').innerHTML=""
}

//Clear map of existing markers
const resetMap=()=>{
mymap.removeLayer(markers);

//Creates a new marker group
markers = L.layerGroup().addTo(mymap);

}

//Clear chart of existing data
const resetChart=()=>{

    if (faultCountChart != undefined){
        faultCountChart.destroy()
    }

    if (faultTypeCountChart != undefined){
        faultTypeCountChart.destroy()
    }

    if (faultDateCountChart != undefined){
        faultDateCountChart.destroy()
    }

}



//Generates charts
const generateFaultCountByDeviceChart =(device_fault_counts)=>{
    console.log(Object.keys(device_fault_counts))
    // let labels = ['G1234567','G7654321','G6234567','G3654321'] //GET THESE VALUES FROM RECORDS
    let deviceFaultCountLabels = Object.keys(device_fault_counts)
    let deviceFaultCountDataValues = Object.values(device_fault_counts)
    // let dataValues = [2, 4,5,7] // GET THESE VALUES FROM RECORDS
    const faultCountData = {
        labels: deviceFaultCountLabels,
        datasets: [{
            label: 'Device Fault Count',
            data: deviceFaultCountDataValues,
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgb(54, 162, 235)',
            ],
            borderWidth: 1
            }]
    };

        const deviceFaultCountConfig = {
        type: 'bar',
        data: faultCountData,
        options: {
            scales: {
            y: {
                beginAtZero: true
            }
            },
            responsive:true,
            maintainAspectRatio:false
        },
        };

        faultCountChart= new Chart(
        document.getElementById('deviceFaultCountChart'),
        deviceFaultCountConfig
        );
        
}

const generateFaultCountByTypeChart =(fault_type_counts)=>{
    console.log(Object.keys(fault_type_counts))
    // let labels = ['G1234567','G7654321','G6234567','G3654321'] //GET THESE VALUES FROM RECORDS
    let faultTypeCountLabels = Object.keys(fault_type_counts)
    let faultTypeCountDataValues = Object.values(fault_type_counts)
    // let dataValues = [2, 4,5,7] // GET THESE VALUES FROM RECORDS

    const faultTypeCountData = {
        labels: faultTypeCountLabels,
        datasets: [{
            label: 'Fault Type Count',
            data: faultTypeCountDataValues,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
              ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
              ],
            borderWidth: 1
            }]
    };

        const faultTypeCountConfig = {
            type: 'polarArea',
            data: faultTypeCountData,
            options: {
                scales: {
                y: {
                    beginAtZero: true
                }
                },
                responsive:true,
                maintainAspectRatio:false
            },
            };

        faultTypeCountChart= new Chart(
            document.getElementById('faultTypeCountChart'),
            faultTypeCountConfig
            );
        
}

const generateFaultCountByDayChart =(fault_date_counts)=>{
    console.log(Object.keys(fault_date_counts))
    // let labels = ['G1234567','G7654321','G6234567','G3654321'] //GET THESE VALUES FROM RECORDS
    let faultDateCountLabels = Object.keys(fault_date_counts)
    let faultDateCountDataValues = Object.values(fault_date_counts)
    // let dataValues = [2, 4,5,7] // GET THESE VALUES FROM RECORDS

    const faultDateCountData = {
        labels: faultDateCountLabels,
        datasets: [{
            label: 'Fault Date Count',
            data: faultDateCountDataValues,
            fill:true,
            backgroundColor: [
                'rgba(255,196,12,0.2)'
            ],
            borderColor: [
                'rgb(255,196,12)'
            ],
            borderWidth: 1
            }]
    };

        const faultDateCountConfig = {
            type: 'line',
            data: faultDateCountData,
            options: {
                scales: {
                y: {
                    beginAtZero: true
                }
                },
                responsive:true,
                maintainAspectRatio:false
            },
            };

        faultDateCountChart= new Chart(
            document.getElementById('faultDateCountChart'),
            faultDateCountConfig
            );
}
