class FlashLamp {
    constructor () {

    }
    setBattery(battery) {
        this.battery = battery;
    }
    getBatteryInfor() {
        return this.battery.getEnergy();
    }
    light () {
        if (this.status) {
            alert ("Lighting");
        }else {
            alert ("Not Lighting");
        }
    }
    turnOn() {
        this.status = true;
    }
    turnOff () {
        this.status = false;
    }
}

