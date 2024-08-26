
const displayData = (content) =>
{
    result.value += content
}

const clearData = () =>
{
    result.value = ''
    result.placeholder=0
}

const clearEntry = () => 
{
    result.value = result.value.slice(0, -1);
}

const evaluateExpr = ()=>
{
    try
    {
        result.placeholder = eval(result.value)
        result.value=''
    }
    catch
    {
        result.value = "Invalid Expression"
    }

}
