
class Automovil{
    constructor(Marca,Modelo,VelocidadMax,){
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.VelocidadMax = VelocidadMax;
        this.Velocidad = 0;
    }
    getVelocidad(){
        return this.Velocidad;
    }
    setVelocidad(Velocidad){
        this.Velocidad= Velocidad;
    }

    print(){
        return "El modelo del automovil es "+this.Modelo+", es de la marca "+this.Marca+"\n"+"Tiene una velocidad maxima de "+this.VelocidadMax+"Km/h";
    }
    VelocidadActual(Velo){
        this.Velocidad+=Velo;
        return "La velocidad actual es de "+this.Velocidad+"km/h";
    }
    Acelerar(Aumento){
        if ((this.Velocidad+Aumento)<this.VelocidadMax) {
            this.Velocidad+=Aumento;
            return "Acelero la velocidad en "+Aumento+"km/h \n"+"La velocidad actual es de "+this.Velocidad+"km/h";
        }else{
            return "No se puede acelerar mas alla de la velocidad maxima:(";
        }
    }
    Desacelerar(Decremento){
        if((this.Velocidad-Decremento)>0){
            this.Velocidad-=Decremento;
            return "Desacelero la velocidad en "+Decremento+"km/h \n"+"La velocidad actual es de "+this.Velocidad+"km/h";
        }else{
            return "No se puede desacelerar mas alla de 0km/h";
        }
    }
    Frenar(){
        this.Velocidad=0;
        return "Ha frenado el automovil \n"+"La velocidad actual es de "+this.Velocidad+"km/h";
    }
}

const Auto1 = new Automovil("Mazda","RX7",250);
console.log(Auto1.print());
console.log(Auto1.VelocidadActual(100));
console.log(Auto1.Acelerar(50));
console.log(Auto1.Desacelerar(100));
console.log(Auto1.Frenar());
