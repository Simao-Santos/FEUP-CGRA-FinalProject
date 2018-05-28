class MyTerrain extends Plane{

    constructor(scene, nrDivs, altimetry){

        super(scene, nrDivs);

        this.altimetry = altimetry;

       this.update_vertices();
    };


    //updates the this.vertices array with the new z coordinates, creating a new terrain
    update_vertices(){
        let z = 2;
        for (var j = 0; j < this.altimetry.length; j++)
		{
            //z = 2;
			for (var i = 0; i < this.altimetry[j].length; i++)
			{
                this.vertices[z] = this.altimetry[j][i];
                z = z + 3;
			}
        }
        super.initGLBuffers();
    }
};
