"use strict";

let username = 'Khinememe-Kyaw'

function getLastCommitDate() {
    const url = `https://api.github.com/users/${username}/repos`;

    return fetch(url)
        .then(response => response.json())
        .then(repos => {
            if (repos.length === 0) {
                throw new Error('User has no repositories.');
            }

            const latestRepo = repos.reduce((prev, current) => {
                if (!prev || new Date(current.updated_at) > new Date(prev.updated_at)) {
                    return current;
                }
                return prev;
            });

            const lastCommitDate = latestRepo.updated_at;

            return lastCommitDate;
        });
}

getLastCommitDate('Khinememe-Kyaw')
    .then(lastCommitDate => {
        console.log('Last commit date:', lastCommitDate);
    })

    .catch(error => {
        console.error('Error:', error);
    })


//Set Timeout function

function wait(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(milliseconds);
        }, milliseconds);
    });
}

wait(1000).then((ms) => console.log(`You'll see this after ${ms} milliseconds`));
wait(3000).then((ms) => console.log(`You'll see this after ${ms} milliseconds`));
