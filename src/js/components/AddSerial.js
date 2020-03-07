import React from 'react';
import  store  from "../store/index"

import { connect } from 'react-redux';


@connect((store)=>{
  return{
    test: store.propsPage.test
  }
})
class AddSerial extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        baudRate:"",
        port:null
    }
    this.handleBaudChange = this.handleBaudChange.bind(this);
    this.connectSerialPort = this.connectSerialPort.bind(this);
    this.writeTest = this.writeTest.bind(this);
  }
  connectSerialPort(){
    //navigator.serial.getPorts().then((ports)=>{console.log("all ports"); console.log(ports)})

    let serialPort;
    try {
      const requestOptions = {
        // Filter on devices with the Arduino USB vendor ID.
        filters: [{ vendorId: 0x2341 }],
      };

      navigator.serial.requestPort().then((port)=>{
        console.log("connected")
        this.setState({port: port});
      })
      .catch((error)=>{
        console.log("failed request port");
        console.log(error);
      })

    }
    catch (e) {
        console.log("Failed: " + e.message);
        return;
    }
  }
  handleBaudChange(event){
    this.setState({baudRate: event.target.value});
  }
  async getData(reader){
    await reader.read()
    while(true){
      const { value, done } = await reader.read();
      if (value) {
        console.log(value);
      }
    }
    
  }
  writeTest(){
    console.log(this.state.port)
    /*
    SerialOptions {
      long baudrate = 9600;
      octet databits = 8;
      octet stopbits = 1;
      ParityType parity = "none";
      long buffersize = 255;
      boolean rtscts = false;
      boolean xon = false;
      boolean xoff = false;
      boolean xany = false;
    };
    */


    this.state.port.open({ baudrate: 115200 }).then(()=>{
      console.log("go inside")
      let decoder = new TextDecoderStream();
      let inputDone = this.state.port.readable.pipeTo(decoder.writable);
      let inputStream = decoder.readable;
      
      let reader = inputStream.getReader();
      this.getData(reader);
    }).catch((error)=>{
      console.log("failed to open");
      console.log(error);
    })
  }
  render (){
    return(
        <div id="addSerial">
          <button onClick={this.connectSerialPort}>
            select port
          </button>
          <select name="baud" value={this.state.baudRate} onChange={this.handleBaudChange}>
              <option value="4800">4800</option>
              <option value="9600">9600</option>
              <option value="19200">19200</option>
              <option value="38400">38400</option>
              <option value="57600">57600</option>
              <option value="115200">115200</option>
          </select>
          <button onClick={this.writeTest}>
            try and write message
          </button>

          <button onClick={this.writeTest}>
            load config file
          </button>
        </div>);
  };
}

export default AddSerial;