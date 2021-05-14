const fs = require('fs');
const tarea = JSON.parse(fs.readFileSync('./data/tareas.json', 'utf-8'));


const moduleTareas = {
    listar: function() {
        tarea.forEach((tarea,i) => {
           console.log(`Tarea ${i+1} - ${tarea.titulo},${tarea.estado}`)
        });
    },
    guardar: function(moduleTareas){ 
    fs.writeFileSync('./data/tareas.json', JSON.stringify(tarea,null,2), 'utf-8');
    },
    crear: (titulo, estado = 'pendiente') => {
        let = nuevaTarea = {
            titulo,
            estado
        }
       tarea.push(nuevaTarea)
       moduleTareas.guardar()
    },
    filtrar: function(filtro){
       let filtrar = tarea.filter(tarea => tarea.estado === filtro || tarea.titulo.includes(filtro));
       console.log(filtrar)
    },
    deshacer: function(){ 
       let borrarTarea= tarea.pop()
       moduleTareas.guardar(borrarTarea)
      
    },
} 

module.exports = moduleTareas;