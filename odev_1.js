function daireAlan(yariCap) {

    let pi = 3.141592653589793;
    let alan = pi*(yariCap*yariCap);
    console.log('Yarıçapı ' + yariCap + ' olan dairenin alanı: '+alan);

}

daireAlan(process.argv[2]);