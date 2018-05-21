/**
 * MyTrapeze
 * @constructor
 */
class MyTrapezePrism extends CGFobject
{
	constructor(scene, midLength, leftSideDiff, rightSideDiff, topWidthDiff, stacks, minS, maxS, minT, maxT)
	{
		super(scene);

		this.midLength = midLength;
        this.leftSideDiff = leftSideDiff || 0;
        this.rightSideDiff = rightSideDiff || 0;
		this.topWidthDiff = topWidthDiff || 0;
		this.stacks = stacks || 1;
		this.minS = minS || 0;
		this.maxS = maxS || 1;
		this.minT = minT || 0;
		this.maxT = maxT || 1;


		this.initBuffers();
	};

	initBuffers()
	{

        this.vertices = [];
		this.indices = [];
		this.normals = [];
		//this.texCoords = [];

		/*
		The right alpha is the internal angle formed by the right inclined face with xOz, and the left one the same but for the left face.
		The respective beta angles are internal angles formed by the xOz and the normals of each side
		*/

		var halfMidLength = this.midLength / 2;
		var top_floorHeight = (1 - 2 * this.topWidthDiff) / this.stacks;
		var bot_floorHeight = 1 / this.stacks;
		var bot_z_coord, top_z_coord, initial_index = 0, max_vertice_indice = 0;
		var right_alpha = Math.atan(1 / this.rightSideDiff);
		var left_alpha = Math.atan(1 / this.leftSideDiff);
		var right_beta = Math.PI / 2 - right_alpha;
		var left_beta = Math.PI / 2 - left_alpha;

		/*
		Pushes all vertices.
		For each cycle, pushes the 4 vertices of one side os each stack.
		*/
		for(var j = 0; j <= this.stacks; j++){

			bot_z_coord = bot_floorHeight * j;
			top_z_coord = this.topWidthDiff + top_floorHeight * j;

			this.vertices.push(halfMidLength + this.rightSideDiff, 0, bot_z_coord);
			this.vertices.push(halfMidLength, 1, top_z_coord);

			this.vertices.push(- halfMidLength, 1, top_z_coord);
			this.vertices.push(- halfMidLength - this.leftSideDiff, 0, bot_z_coord);

		}

		this.vertices.push(halfMidLength + this.rightSideDiff, 0, 0);
		this.vertices.push(halfMidLength, 1, this.topWidthDiff + 0);

		this.vertices.push(- halfMidLength, 1, this.topWidthDiff + 0);
		this.vertices.push(- halfMidLength - this.leftSideDiff, 0, 0);

		this.vertices.push(halfMidLength + this.rightSideDiff, 0, bot_floorHeight * this.stacks);
		this.vertices.push(halfMidLength, 1, this.topWidthDiff + top_floorHeight * this.stacks);

		this.vertices.push(- halfMidLength, 1, this.topWidthDiff + top_floorHeight * this.stacks);
		this.vertices.push(- halfMidLength - this.leftSideDiff, 0, bot_floorHeight * this.stacks);

		/*
		Pushes the indices from both trapezoid sides of the prism
		*/

		this.indices.push(0, 3, 2);
		this.indices.push(2, 1, 0);

		/*There are 8 vertices at the end that are the vertices of each of the top faces of the solid, so we subtract them to obtain the last of the vertices*/
		max_vertice_indice = (this.vertices.length) / 3 - 1 - 8;

		this.indices.push(max_vertice_indice - 3, max_vertice_indice - 2, max_vertice_indice - 1);
		this.indices.push(max_vertice_indice - 1, max_vertice_indice, max_vertice_indice - 3);

		/*
		Pushes the side faces of the trapezium prism
		First pushes the right side face of a stack, then the left one
		*/
		for(var i = 0; i < this.stacks; i++){

			for(var s = 0; s < 3; s += 2) {
				this.indices.push(initial_index + s, initial_index + s + 1, initial_index + s + 5);
				this.indices.push(initial_index + s + 5, initial_index + s + 4, initial_index + s);
			}

			initial_index += 4;

		}

		/*
		Pushes top prism face
		*/
		initial_index = 1;
		for(var i = 0; i < this.stacks; i++){

				this.indices.push(initial_index, initial_index + 1, initial_index + 5);
				this.indices.push(initial_index + 5, initial_index + 4, initial_index);

			initial_index += 4;

		}

		/*
		Pushes bot prism face
		*/
		// initial_index = 0;
		// for(var i = 0; i < this.stacks; i++){
		//
		// 		this.indices.push(initial_index , initial_index + 3, initial_index + 7);
		// 		this.indices.push(initial_index + 7, initial_index + 4, initial_index );
		//
		// 	initial_index += 4;
		//
		// }

		/*
		Pushes normals
		*/

		var average_top_angle_right = (Math.PI / 2 - right_beta ) / 2;
		var average_top_angle_left = (Math.PI / 2 - left_beta ) / 2;

		for(var i = 0; i <= this.stacks; i++) {

			this.normals.push(Math.cos(right_beta), Math.sin(right_beta), 0);
			this.normals.push(Math.cos(right_beta), Math.sin(right_beta), 0);

			this.normals.push( -Math.cos(left_beta), Math.sin(left_beta), 0);
			this.normals.push( -Math.cos(left_beta), Math.sin(left_beta), 0);

		}
/*
		for(var a = 0; a < 4; a++) {
			this.normals.push(0, 0, -1);
		}

		for(var a = 0; a < 4; a++) {
			this.normals.push(0, 0, 1);
		}*/


		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
