class Complex{
    constructor(x,y){
        this.re = x;
        this.im = y;
    }
    static cxproduct(a,b){
        return new Complex(a.re * b.re - a.im * b.im, a.re * b.im + a.im * b.re)
    }
    static add(a,b){
        a.re += b.re;
        a.im += b.im;
    }
    
}



function DFT(array){
    let X = [];
    const N = array.length;
    for(let k = 0; k< N; k++){
        let sum = new Complex(0,0);
        for(let n = 0; n< array.length; n++){
            let theta = 2* PI * k * n / N;
            const c = new Complex(cos(theta), - sin(theta))
            Complex.add(sum, Complex.cxproduct(x[n],c));
        }
        sum.re = sum.re / N;
        sum.im = sum.im / N;
        let freq = k ;
        let amplitude = sqrt(sum.re ** 2 + sum.im ** 2);
        let phase = atan2(sum.im , sum.re);
        X[k] = {re: sum.re,im: sum.im, freq, amplitude, phase}
    }
    return X;
}