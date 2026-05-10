// CRUD MongoDB - Feria de Logros 7° Grado - G7 TechSolutions
use('TechSolutions_G7');

// CREATE - Insertar 3 alumnos
db.feria_logros_7grado.insertMany([
  { nombre: "Alumno 1", grado: "7°", proyecto: "Robótica", nota: 95 },
  { nombre: "Alumno 2", grado: "7°", proyecto: "Ciencias", nota: 88 },
  { nombre: "Alumno 3", grado: "7°", proyecto: "Arte", nota: 92 }
]);

// READ - Consultar todos
db.feria_logros_7grado.find();

// UPDATE - Actualizar nota
db.feria_logros_7grado.updateOne(
  { nombre: "Alumno 1" }, 
  { $set: { nota: 100 } }
);

// DELETE - Eliminar un registro
db.feria_logros_7grado.deleteOne({ nombre: "Alumno 3" });


