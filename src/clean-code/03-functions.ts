(() => {

    // función para obtener información de una película por Id
    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieActorsById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorInfoById( ActorId: string ) {
        console.log({ ActorId });
    }
    
    // Crear una película
    function createMovie(title: string, description: string, rating: number, cast: string[] ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    interface Funct {
        (isDead?: boolean, isSeparated?: boolean, isRetired?:boolean):number
      }
      
      let getPayAmount:Funct = (isDead = false , isSeparated = true, isRetired = false) => isDead?1500:isSeparated?2500:isRetired?3000:4000


})();
