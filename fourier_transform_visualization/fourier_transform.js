function DFT(array){
    let X = [];
    const N = array.length;
    for(let k = 0; k< N; k++){
        let re = 0;
        let im = 0;
        for(let n = 0; n< array.length; n++){
            let theta = 2* PI * k * n / N;
            re += array[n] * cos(theta);
            im -= array[n] * sin(theta);

        }
        re = re / N;
        im = im / N;
        let freq = k ;
        let amplitude = sqrt(re ** 2 + im ** 2);
        let phase = atan2(im , re);
        X[k] = {re,im, freq, amplitude, phase}
    }
    return X;
}