/**
 * MyCylinder
 * @constructor
 */
class MyCylinder extends CGFobject
{
	constructor(scene, slices, stacks, display_slices)
	{
		super(scene);

        this.slices = slices;
        this.stacks = stacks;
		this.display_slices = display_slices || slices;

		this.initBuffers();
	};

	initBuffers()
	{
		var degToRad = Math.PI / 180.0;
		var alpha = (360 / this.slices) * degToRad;
		var ang = Math.PI * 2 / this.slices;
		this.slices = this.display_slices;
		this.vertices = [];
		this.indices = [];
		this.normals = [];
		this.texCoords = [];

		for (var j = 0; j <= this.stacks; j++) {
	          for (var i = 0; i <= this.slices; i++) {
	              this.vertices.push(Math.cos(ang * i), Math.sin(ang * i), j * 1 / this.stacks);
	              this.normals.push(Math.cos(i * ang), Math.sin(i * ang), 0);
	              this.texCoords.push(i * 1 / this.slices, j * 1 / this.stacks);
	          }
	      }


		for (i = 0; i < this.stacks; i++) {
		        for (j = 0; j < this.slices; j++) {

		            this.indices.push(i * (this.slices + 1) + j, i * (this.slices + 1) + 1 + j, (i + 1) * (this.slices + 1) + j);
		            this.indices.push(i * (this.slices + 1) + 1 + j, (i + 1) * (this.slices + 1) + 1 + j, (i + 1) * (this.slices + 1) + j);
		        }
		    }


		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
