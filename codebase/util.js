const someAsyncTask = async function (timeOut) {
    setTimeout(() => {
        return 23
    }, timeOut)
};

const someAsyncTaskWithPromise = async function (timeOut) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('waiting');
            resolve(90);
        }, timeOut);

    });
};

const someSyncTask = function (x) {
    return x;
};

const callPromisMethod = async function () {
    await someAsyncTaskWithPromise(5000)
};

module.exports = {
    someAsyncTask,
    someSyncTask,
    someAsyncTaskWithPromise,
    callPromisMethod
};
