
try{

    const url = new URL('http://www.urlejemplo.com?name=Alexander&age=27');
    const params = url.searchParams;
    const name = params.get('name');
    const age = parseInt(params.get('age'));

    console.log(url);
    console.log(params);
    console.log({name}); //Alexander
    console.log({age}); //27


} catch (e){

    throw new Error('Url no valida');

}

