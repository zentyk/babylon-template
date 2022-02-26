export default class Helpers {
    private debug : boolean = false;

    constructor(debug : boolean) {
        this.debug = debug;
    }

    public Log(message: string, object:any, type: string = "info"): void {
        if(this.debug) {
            switch (type) {
                case "info":
                    console.log(`[INFO] ${message}`, object ? object : "");
                    break;
                case "error":
                    console.error(`[ERROR] ${message}`, object ? object : "");
                    break;
                case "warn":
                    console.warn(`[WARN] ${message}`, object ? object : "");
                    break;
                default:
                    console.log(`[INFO] ${message}`, object ? object : "");
                    break;
            }
        }
    }
}