/**
 * MySemisphere
 * @constructor
 */
class MySemisphere extends CGFobject
{
	constructor(scene, slices, stacks, display_slices, display_stacks)
	{
		super(scene);

        this.slices = slices;
        this.stacks = stacks;
        this.display_slices = display_slices || slices;
        this.display_stacks = display_stacks || stacks;

		this.initBuffers();
	};

	initBuffers()
	{
        
        var alpha = 2 * Math.PI / this.slices;
        var beta = Math.PI / 2 / this.stacks;
		this.slices = this.display_slices;
        this.stacks = this.display_stacks;
		this.vertices = [];
		this.indices = [];
		this.normals = [];
		this.texCoords = [];

        for (var j = 0; j <= this.stacks; j++) {

            for (var i = 0; i <= this.slices; i++) {
                this.vertices.push(Math.cos(alpha * i) * Math.cos(beta * j), Math.sin(alpha * i) * Math.cos(beta * j), Math.sin(beta * j));
                this.normals.push(Math.cos(alpha * i) * Math.cos(beta * j), Math.sin(alpha * i) * Math.cos(beta * j), Math.sin(beta * j));
                this.texCoords.push(i * 1 / this.slices, j * 1 / this.stacks);
            }
        }


        for (var i = 0; i < this.stacks; i++) {
            for (var j = 0; j < this.slices; j++) {

                this.indices.push(i * (this.slices + 1) + j, i * (this.slices + 1) + 1 + j, (i + 1) * (this.slices + 1) + j);
                this.indices.push(i * (this.slices + 1) + 1 + j, (i + 1) * (this.slices + 1) + 1 + j, (i + 1) * (this.slices + 1) + j);
            }
        }


		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
