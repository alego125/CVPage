export class NuevoUsuario {

    nombre: String;
    nombreUsuario: String;
    email: String;
    password: String;
    apellido: String;

    constructor(nombre: String, nombreUsuario: String, email: String, password: String, apellido: String) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nombreUsuario = nombreUsuario;
        this.email = email;
        this.password = password;
    }

    usuarioAdmin() {
        let json = {
            "nombre": this.nombre.toLowerCase(),
            "nombreUsuario": this.nombreUsuario.toLowerCase(),
            "email": this.email.toLowerCase(),
            "password": this.password,
            "roles": ["admin"],
            "apellido": this.apellido.toLowerCase()
        }
        return json;
    }
    usuario() {
        let json = {
            "nombre": this.nombre.toLowerCase(),
            "nombreUsuario": this.nombreUsuario.toLowerCase(),
            "email": this.email.toLowerCase(),
            "password": this.password,
            "apellido": this.apellido.toLowerCase()
        }
        return json;
    }

}