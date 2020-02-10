export class Conversor{
    btod(num : string) : string {
        return "";
    };
    dtob(num : string) : string {
        return "";
    };
}


export class CalculadoraBinaria {
    conversor : Conversor;
    constructor(conversor : Conversor){
        this.conversor = conversor;
    }
    sumar(sum1 : string, sum2 : string ) : string {
        //1. Convierto los sumandos a base 10
        let sum1Dec = this.conversor.btod(sum1);
        let sum2Dec = this.conversor.btod(sum2);
        //2. Realizo la suma en base 10
        let resDec = parseInt(sum1Dec) + parseInt(sum2Dec);
        //3. El resultado (en base 10) lo convierto a base 2
        return this.conversor.dtob(resDec + "");
    }
}