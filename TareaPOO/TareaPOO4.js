

class Libro{
    constructor(Titular,Autor,Precio){
        this.Titular = Titular;
        this.Autor = Autor;
        this.Precio = Precio;
    }


    print(){
        return "El titulo del libro es "+this.Titular+"\n Su autor es "+this.Autor+"\n y su precio es de: $"+this.Precio;
    }
}

const Libro1 =  new Libro("La Odisea","Homero",55);
console.log(Libro1.print());

class LibroTexto extends Libro{
    constructor(Titular,Autor,Precio,Curso){
        super(Titular,Autor,Precio);
        this.Curso = Curso;
    }
    print(){
        return "El titulo del libro es "+this.Titular+"\n Su autor es "+this.Autor+"\n su precio es de: $"+this.Precio+"\n Y esta asociado al curso: "+this.Curso;
    }
}

const Libro2 = new LibroTexto("Don Quijote","Miguel de cervantes",51,"Lenguaje");
console.log(Libro2.print());

class LibroUniversidad extends LibroTexto{
    constructor(Titular,Autor,Precio,Curso,Facultad){
        super(Titular,Autor,Precio,Curso);
        this.Facultad = Facultad;
    }
    print(){
        return "El titulo del libro es: "+this.Titular+"\nSu autor es: "+this.Autor+"\nSu precio es de: $"+this.Precio+"\nY esta asociado al curso: "+this.Curso+"\nPublicado en la facultad de: "+this.Facultad;
    }
}
const Libro3 = new LibroUniversidad("El Manifiesto Comunista","Karl Marx",54,"Historia","Ciencias y Humanidades");
console.log(Libro3.print());

class Novelas extends Libro{
    constructor(Titular,Autor,Precio,TipoNovela){
        super(Titular,Autor,Precio);
        this.TipoNovela = TipoNovela;
    }
    print(){
        return "El titulo de la novela es:"+this.Titular+"\nSu autor es: "+this.Autor+"\nSu precio es de: $"+this.Precio +"\nEl tipo de la novela es: "+this.TipoNovela;
    }
}

const Libro4 = new Novelas("Crepusculo","Stefanny Meyer",55,"SCI-FI, Romantica")
console.log(Libro4.print());