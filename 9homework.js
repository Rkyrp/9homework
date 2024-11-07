//1задание
function isPrime(num) {
    if (num <= 1) 
        return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) 
            return false;
    }
    return true;
}

function filterPrimes(arr) {
    return arr.filter(isPrime);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const primes = filterPrimes(numbers);
console.log(primes);
//2задание
function notifBySource(notifications) {
    return notifications.reduce((result, notification) => {
        const { source, text, date } = notification;
        if (!result[source]) {
            result[source] = [];
        }
        result[source].push({ text, date });
        return result;
    }, {});
}
const notifications = [
    { source: 'email', text: 'New homework from Hillel', date: '2024-11-05' },
    { source: 'sms', text: 'Message from Ivan', date: '2024-11-06' },
    { source: 'email', text: 'Reminder: Meeting at 19.15 ', date: '2024-11-07' },
    { source: 'app', text: 'Update available', date: '2024-11-05' }
];

const grpNotifications = notifBySource(notifications);
console.log(grpNotifications);
//3задание
function group(array, keyFunction) {
    return array.reduce((result, item) => {
        const key = keyFunction(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {});
}
const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const groupedByEvenOdd = group(numb, num1 => (num1 % 2 === 0 ? 'even' : 'odd'));
console.log(groupedByEvenOdd);
