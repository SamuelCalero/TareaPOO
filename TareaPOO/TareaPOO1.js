class Persona{
    constructor(Nombre,Apellido,Edad){
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Edad = Edad;
    }
    get(){
        return this.Edad;
    }
    set(Edad){
        this.Edad =Edad;
    }
    print(){
        if (this.edad>=18) {
            return "Mi nombre es "+this.Nombre+" "+this.Apellido+"\n"+"Es mayor de edad";
        }else{
            return "Mi nombre es "+this.Nombre+" "+this.Apellido+"\n"+"Es menor de edad";
        }
        
    }
}
const persona = new Persona("Samuel","Calero",22);
console.log(persona.print());

class Usuario extends Persona{
    constructor(Nombre,Apellido,Edad, Usuario, Contraseña){
        super(Nombre,Apellido,Edad);
        this.Usuario = Usuario;
        this.Contraseña = Contraseña;
    }
    print(){
        return "Mi nombre es "+this.Nombre+" "+this.Apellido+"\n"+"Tengo "+this.Edad+ " Años"+"\n"+"Mi usuario es: "+this.Usuario+", y mi contraseña es: "+this.Contraseña;
    }
}

const usuario = new Usuario("Samuel","Calero",22,"samuelcalero","samuel");
console.log(usuario.print());

