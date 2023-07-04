const fs = require("fs");

/* const leerArchivo = async (archivo) => {
    try {
        fs.readFileSync(`../db/${archivo}`, "utf-8", (error, data) => {
            let lectura = JSON.parse(data)
            return lectura
        })
    } catch (error) {
        throw new Error({message: "Error al leer el archivo :c", error})
        
    }
} */

const leerArchivo2 = (archivo) => {
    return new Promise((resolve, reject) => {
        fs.readFile(`../db/${archivo}`, "utf-8", (error, data) => {
            if(error) {
                console.log(`Error: ${error}`)
                reject("Error al leer el archivo :c")
            }
            resolve(JSON.parse(data))
        })
    })
    
}

