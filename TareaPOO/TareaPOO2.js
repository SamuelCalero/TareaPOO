
class CuentaBanco{
    constructor(NombreTitular,ApellidoTitular,NumCuenta,TipoCuenta){
        this.NombreTitular = NombreTitular;
        this.ApellidoTitular = ApellidoTitular;
        this.NumCuenta =NumCuenta;
        this.TipoCuenta = TipoCuenta;
        this.SaldoCuenta = 0;
    }
    getSaldo(){
        return this.SaldoCuenta;
    }
    setSaldo(SaldoCuenta){
        this.SaldoCuenta = SaldoCuenta;
    }

    print(){
        return "Nombre Cuenta: "+this.NombreTitular+" "+this.ApellidoTitular+"\n"+"Numero de cuenta: "+this.NumCuenta+"\n"+"Tipo de cuenta: "+this.TipoCuenta+"\n"+"Saldo Cuenta: $"+this.SaldoCuenta;
    }

    Consulta(){
        return "El saldo de su cuenta es: $"+this.SaldoCuenta;
    }
    Consignar(monto){
        this.SaldoCuenta +=monto;
        return "El saldo actualizado de su cuenta es: $"+this.SaldoCuenta;
    }
    Retiro(monto){
        if(monto<=this.SaldoCuenta){
            this.SaldoCuenta-=monto;
            return "Usted retiro: $"+monto+" y su saldo ahora es de: $"+this.SaldoCuenta;
        }else{
            return "El monto a retirar supera su cuenta de saldo";
        }
    }
}

const UBanco = new CuentaBanco("Samuel","Calero","5641-546","Corriente");
console.log(UBanco.print());
console.log(UBanco.Consulta());
console.log(UBanco.Consignar(69));
console.log(UBanco.Retiro(20));
console.log(UBanco.Consulta());
