let n1 = 8, n2 = 7, m = (n1 + n2)/2, f = 75;
if(m >= 0 && m <=10){
    if(f >= 75 && f <= 100){
        if(m >=2 && m <= 6){
            console.log("Avaliação de Recuperação");
        }else if(m => 6 && m <= 10){
            console.log("Aprovado");
        }else console.log("Reprovado")
    }else{
        console.log("Reprovado");
    }
}else{
    console.log("Nota invalida");
}