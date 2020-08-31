// var tex= document.getElementById('textbox').value
var moemory = 0;
var act = '';

function numbersoftext(buttonvalue)
{
    if(document.getElementById('textbox').value==0)
    {
        document.getElementById('textbox').value=""
    }
    document.getElementById('textbox').value +=buttonvalue
}
function c()
{
    document.getElementById('textbox').value=0
}
function acttion(mem)
{
   act= mem
}
function calculatore()
{
 
    document.getElementById('textbox').value=eval(document.getElementById('textbox').value) 
}
