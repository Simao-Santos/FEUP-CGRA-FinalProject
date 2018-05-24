/**
 * MyTrapezoid
 * @constructor
 */
class MyTrapezoid extends CGFobject
{
	constructor(scene, midLength, rightDiff, leftDiff, topDepth, height, minS, maxS, minT, maxT)
	{
		super(scene);

		this.minS = minS || 0;
		this.maxS = maxS || 1;
		this.minT = minT || 0;
		this.maxT = maxT || 1;
        this.midLength = midLength || 1;
        this.rightDiff = rightDiff || 0;
        this.leftDiff = leftDiff || 0;
        this.topDepth = topDepth || 0;
		this.height = height || 1;

		this.initBuffers();
	};

	initBuffers()
	{
        var halfMidLength = this.midLength / 2;

		this.vertices = [
		- halfMidLength - this.leftDiff, 0, 0,
		- halfMidLength, this.height, -this.topDepth,
		halfMidLength, this.height, -this.topDepth,
		halfMidLength + this.rightDiff, 0, 0
		];

		this.indices = [
		0, 2, 1,
		0, 3, 2
		];

		this.normals = [
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,1
		]

		this.texCoords = [
			this.minS, this.maxT,
			this.minS, this.minT,
			this.maxS, this.minT,
			this.maxS, this.maxT
		];



		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
