const CustomFetch = (timeout, task) => {
    return new Promise((resolve,reject) => {
    setTimeout(()=>{
        if(true){
            resolve(task);
        } else {
            reject("error");
        }
    }, timeout);
}
)
}

export default CustomFetch