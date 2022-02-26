export default class Config {
    public viewStyle : Setup.ViewTypes = Setup.ViewTypes.Desktop;
    public controlStyle : Setup.ControllerTypes = Setup.ControllerTypes.KeyboardAndMouse;

    constructor(view : Setup.ViewTypes, control : Setup.ControllerTypes) {
        this.viewStyle = view;
        this.controlStyle = control;
    }
}

export namespace Setup {
    export enum ViewTypes {
        Desktop = 0,
        Mobile = 1,
        WebVR = 2
    }

    export enum ControllerTypes {
        KeyboardAndMouse = 0,
        Touch = 1,
        GamePad = 2,
        VRControllers = 3
    }
}