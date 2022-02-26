export default class Config {
    public viewStyle : number = 0; // 0 : desktop, 1 : mobile, 2 : WebVR
    public controlStyle : number = 0; // 0 : mouse & keyboard, 1 : Touch, 2 : Gamepad

    constructor() {
        this.viewStyle = 0;
        this.controlStyle = 0;
    }
}