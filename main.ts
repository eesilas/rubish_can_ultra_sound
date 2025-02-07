basic.showIcon(IconNames.SmallHeart)
let distance = 0
microIoT.microIoT_ServoRun(microIoT.aServos.S1, 0)
basic.pause(2000)
basic.forever(function () {
    basic.showIcon(IconNames.Yes)
    distance = sonar.ping(
    DigitalPin.P12,
    DigitalPin.P16,
    PingUnit.Centimeters
    )
    if (distance < 15) {
        microIoT.microIoT_ServoRun(microIoT.aServos.S1, 90)
        microIoT.microIoT_setIndexColor(PIN.P15, 0, 2, 0x00ff00)
        basic.pause(5000)
        microIoT.microIoT_ServoRun(microIoT.aServos.S1, 0)
        microIoT.microIoT_setIndexColor(PIN.P15, 0, 2, 0x7f00ff)
        basic.pause(5000)
    } else {
        microIoT.microIoT_ServoRun(microIoT.aServos.S1, 0)
        microIoT.microIoT_setIndexColor(PIN.P15, 0, 2, 0xff0000)
    }
})
