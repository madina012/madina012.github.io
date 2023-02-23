let a =0 ;
function table(num) {
    for (let i = 1; i <= 9; i = i+1) {
        a = a + 7 + ' * ' + i +' = ' + 7 *i + '<br>';
        
        }
        return a;
}

out.innerHTML += table(5)

const formulas = {
    f:"sin (α + β) = sin α cos β + cos α sin β" ,
    Name : "The sine of the sum" ,};
    let text =" ";
    for (let key in formulas){
    text += formulas[key]
    text +=' ';
}
out2.innerHTML += text ;