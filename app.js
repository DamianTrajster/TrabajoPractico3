const process = require('process');
const {listar,crear,filtrar} = require('./funcionesDeTareas');
let accion = process.argv[2];

switch (accion) {
    case undefined :
        console.log('Comando vacio ejecute un comando: Comandos: >listar , >crear , >filtrar')
        break;
    case 'listar':
        return  listar()
       break;
    case 'crear':
        crear(process.argv[3],process.argv[4])
       return listar()
        break;
        case 'filtrar':
            filtrar(process.argv[3])
            break;
    default:
        console.log('solo se pueden ejecutar comandos disponibles: Comandos: >listar , >crear , >filtrar')
        break;
};   