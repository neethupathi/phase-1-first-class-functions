function receivesAFunction(spy)
{
    return spy();
}

function returnsANamedFunction()
{
return function fun(){
console.log("function");
};
}
function returnsAnAnonymousFunction()
{
return function (){

};
}
receivesAFunction(function ()
{
return "spy";
});