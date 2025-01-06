basic.showIcon(IconNames.Sword)
let distance = 0
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    distance = sonar.ping(
    DigitalPin.P12,
    DigitalPin.P14,
    PingUnit.MicroSeconds
    )
    if (distance < 8) {
        microIoT.microIoT_ServoRun(microIoT.aServos.S1, 90)
    } else {
        microIoT.microIoT_ServoRun(microIoT.aServos.S1, 0)
    }
})
