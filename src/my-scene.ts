import * as BABYLON from 'babylonjs';
import Config, {Setup} from "./config";
import Helpers from "./Helpers";

export default class MyScene {
    private readonly _canvas : HTMLCanvasElement;
    private readonly _engine : BABYLON.Engine;
    private _scene : BABYLON.Scene;
    private _camera : BABYLON.FreeCamera;
    private _light : BABYLON.Light;
    private _config : Config;
    private _helpers : Helpers;

    constructor(canvasElement : string) {
        // Create canvas and engine.
        this._canvas = document.getElementById(canvasElement) as HTMLCanvasElement;
        this._engine = new BABYLON.Engine(this._canvas, true);
        this._helpers = new Helpers(true);
        this._config = new Config(Setup.ViewTypes.Desktop, Setup.ControllerTypes.KeyboardAndMouse);
    }

    configureGame () : void {
        //#region Configure Camera
        this._camera = new BABYLON.TouchCamera('MainCamera', new BABYLON.Vector3(0, 5,-10), this._scene);

        // Target the camera to scene origin.
        this._camera.setTarget(BABYLON.Vector3.Zero());

        // Attach the camera to the canvas.
        this._camera.attachControl(this._canvas, false);
        //#endregion
    }

    createScene() : void {
        // Create a basic BJS Scene object.
        this._scene = new BABYLON.Scene(this._engine);
        this.configureGame();

        // Create a basic light, aiming 0,1,0 - meaning, to the sky.
        this._light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), this._scene);
        this._light.diffuse = new BABYLON.Color3(1,0,2);
        this._light.specular = new BABYLON.Color3(1,0,2);

        // Create a built-in "ground" shape.
        let ground = BABYLON.MeshBuilder.CreateGround('ground1',{width: 6, height: 6, subdivisions: 2}, this._scene);
    }

    createPlayer() : void {
        // Create a built-in "sphere" shape; with 16 segments and diameter of 2.
        let sphere = BABYLON.MeshBuilder.CreateSphere('sphere1',
            {segments: 16, diameter: 2}, this._scene);

        // Move the sphere upward 1/2 of its height.
        sphere.position.y = 1;
    }

    doRender() : void {
        // Run the render loop.
        this._engine.runRenderLoop(() => {
            this._scene.render();
        });

        // The canvas/window resize event handler.
        window.addEventListener('resize', () => {
            this._engine.resize();
        });
    }
}