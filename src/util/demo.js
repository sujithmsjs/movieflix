import {} from './'


const promise = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            resolve('Done');
        }, 3_000)
    }
)

const callAPI = async () => {

    const r = await promise;
    console.info(r);
    return r;
}

const fun = () =>{
    const r = callAPI();
    return r;
}

console.info(fun());