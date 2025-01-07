basic.showIcon(IconNames.Sword)
let distance = 0
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    distance = sonar.ping(
    DigitalPin.P12,
    DigitalPin.P14,
    PingUnit.MicroSeconds
    )
    if (distance < 15) {
        microIoT.microIoT_ServoRun(microIoT.aServos.S1, 90)
        microIoT.microIoT_setIndexColor(PIN.P15, 0, 2, 0x00ff00)
    } else {
        microIoT.microIoT_ServoRun(microIoT.aServos.S1, 0)
        microIoT.microIoT_setIndexColor(PIN.P15, 0, 2, 0xff0000)
    }
})
