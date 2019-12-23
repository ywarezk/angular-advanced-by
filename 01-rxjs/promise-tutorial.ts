

// promise
// class
// wraps async code
// to give the async code a single language
// promise 3 states:
// pending -> resolved / rejected
// resolve or rejected once

const myTimerPromise : Promise<string> = new Promise((resolve, reject) => {
    // code async is here
    setTimeout(() => {
        resolve('hello');
        // resolve('world');
        // reject(new Error('hello'));
    }, 1000);
});

const anotherPromise : Promise<number | boolean> = myTimerPromise.then(
    (msg : string) => {
        console.log('hello');
        return msg.length;
    },
    (err) => {
        return true;
    }
)


// Promise Chaining
// Promise.rejected
myTimerPromise
    .then((url : string) => {
        return fetch(url) // Promise<Response>
    })
    .catch((err) => {
        // return {};
        throw new Error('server error');
    })
    .then((res : Response) => {
        return res.json() // Promise<Object>
    })
    .then((objFromServer) => {

    })
    .catch((err) => {
        throw new Error('websocket');
    });

// async await

/**
 * @returns {Promise<Object>}
 */
async function bunchOfPromises() {

    // number of entry or exit points


        
    
    const url : string = await myTimerPromise;
    const res : Response = await fetch(url);
    const objFromServer = await res.json();
    return objFromServer;
}

bunchOfPromises();