class TTS extends Game {
    constructor() {
        super();
        this.graphicAssets = {
            ships: {
                path: "assets/simpleSpace_sheet.png",
                img: null
            },
            crosshair: {
                path: "assets/crosshair060.png",
                img: null
            }
        };

        // background gradient
        this.bgGrad = null;

        this.mouseCircle = null;
        this.player = null;

        this.sceneLimits = null;
    }

    Start() {
        super.Start();

        // configure background gradient
        this.bgGrad = new LinearGradient(0, 0, 0, canvas.height, [
            [0, "#191200"],
            [0.1, "#000000"],
            [0.35, "#07073e"],
            [0.95, "#22375e"],
            [1, "#274f98"]
        ]);

        this.mouseCircle = new Circumference(new Vector2(0, 0), 5, 'red', 1);

        this.sceneLimits = new Rectangle(Vector2.Zero(), canvas.width, canvas.height - 100, "white", true);

        this.player = new PlayerShip(new Vector2(canvas.width / 2, canvas.height / 2), 0, 1, this.graphicAssets.ships.img, this.sceneLimits);
        this.gameObjects.push(this.player);
    }

    Update(deltaTime) {
        super.Update(deltaTime);

        this.mouseCircle.position.Set(Input.mouse.x, Input.mouse.y);
    }

    Draw(ctx) {
        // background
        ctx.fillStyle = this.bgGrad.gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        this.sceneLimits.Draw(ctx);

        super.Draw(ctx);

        // draw the mouse position
        this.mouseCircle.Draw(ctx);
    }
}

// initialize the game
if (game === null)
    game = new TTS();