(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.map( file => file.flagged );

    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const currentDate = new Date();
    
    // días transcurridos - elapsed time in days
    const elapsedDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory 
    const numberOfFilesInDirectory = 33;
    
    // primer nombre - first name
    const names = 'Fernando';
    
    // primer apellido - last name
    const lastname = 'Herrera';

    // días desde la última modificación - days since modification
    const daysLastModify = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const studentMaxClass = 6;
/* Es mejor tener nombres largos que se puedan entender ya que luego la computadora se encarga de la optmizacion de las variables */

})();
