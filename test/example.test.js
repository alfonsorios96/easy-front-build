'use strict';

// test.js
import * as core from '../lib/example';

jest.mock('fs');
import * as fs from 'fs';

fs.readdirSync.mockImplementation(() => {
        return jest.fn().mockReturnValueOnce(['lib','test']);
});

/*
* This is a sync example
* */
it('getUserNameSync function', () => {
    expect(core.getUserNameSync('malforime')).toEqual({
        user: 'malforime'
    });
});

/*
* This is a promise example resolves
* */
it('getUserNameAsync function resolves', () => {
    return core
        .getUserNameAsync(1)
        .then(data => expect(data).toEqual({
            user: 'malforime'
        }));
});

/*
* This is a promise example rejects
* */
it('getUserNameAsync function rejects', () => {
    expect.assertions(1);
    return core.getUserNameAsync(2).catch(error =>
        expect(error).toEqual({
            code: 'ERROR101'
        })
    );
});

it('nestedAsyncPromise function resolves a nested thirthy-party', () => {
    return core
        .nestedAsyncPromise()
        .then(data => expect(data()).toEqual(['lib','test']));
});
