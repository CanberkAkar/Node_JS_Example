//NODE JS BİZE BİR JS ÇALIŞTIRMA ORTAMI SAĞLAR.

const arguments=process.argv.slice(2);

function radiusCalculate(radius) {
   let area= Math.PI*(radius*radius);
   console.log("Yarıçapı (Yarıçap) olan dairenin alanı:",area);
}

radiusCalculate(arguments[0]*1);
