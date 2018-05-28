class Road extends CGFobject{

	constructor(scene)
	{
		super(scene);

        this.road1 = new Plane(this.scene, 50);

        this.road1Texture = new CGFappearance(this.scene);
		this.road1Texture.loadTexture("../resources/images/Road.png");
        this.road1Texture.setTextureWrap("REPEAT", "REPEAT");


        this.roadcorner = new Plane(this.scene, 50);

        this.roadcornerTexture = new CGFappearance(this.scene);
		this.roadcornerTexture.loadTexture("../resources/images/Road-corner.png");
        this.roadcornerTexture.setTextureWrap("REPEAT", "REPEAT");
    };

	//Road present in the terrain, made using planes
    display(){

    var coord = 0;
       for (var i = 0; i < 2; i++) {
        this.scene.pushMatrix();
            this.scene.translate(coord, 0.01, 8.5);
            this.scene.scale(10, 1, 10);
            this.scene.rotate(-Math.PI / 2, 1, 0, 0);
            this.scene.rotate(-Math.PI / 2, 0, 0, 1);
            this.road1Texture.apply();
            this.road1.display();
        this.scene.popMatrix();

            coord -= 10;
    }

    this.scene.pushMatrix();
        this.scene.translate(-20, 0.01, 8.5);
        this.scene.scale(10, 1, 10);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.roadcornerTexture.apply();
        this.roadcorner.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
        this.scene.translate(-20, 0.01, -9);
        this.scene.scale(10, 1, 10);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.roadcornerTexture.apply();
        this.roadcorner.display();
    this.scene.popMatrix();

    coord = 0;
       for (var i = 0; i < 2; i++) {
            this.scene.pushMatrix();
            this.scene.translate(coord, 0.01, -9);
            this.scene.scale(10, 1, 10);
            this.scene.rotate(-Math.PI / 2, 1, 0, 0);
            this.scene.rotate(-Math.PI / 2, 0, 0, 1);
            this.road1Texture.apply();
            this.road1.display();
            this.scene.popMatrix();

            coord -= 10;
    }

    }
}
