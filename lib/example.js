'use strict';

import * as fs from 'fs';

const getUserNameSync = (userName) => {
    return {
        user: userName
    };
};

const getUserNameAsync = (handler) => {
    return new Promise((resolve, reject) => {
        if (handler === 1) {
            resolve({
                user: 'malforime'
            });
        } else {
            reject({
                code: 'ERROR101'
            });
        }
    });
};

const nestedAsyncPromise = () => {
    return new Promise((resolve, reject) => {
        try {
            const files = fs.readdirSync('../', {encoding: 'utf8'});
            resolve(files);
        } catch(error) {
            reject(error => reject(error));
        }
    });
};

export {getUserNameSync, getUserNameAsync, nestedAsyncPromise};
