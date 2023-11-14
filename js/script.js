let containerElement = document.querySelector('container');

for (i = 1; i <= 100; i = i + 1) {

    if (i % 3 === 0) {
        let i = 'Fizz';
        console.log(i);
    } else if (i % 5 === 0) {
        let i = 'Buzz';
        console.log(i);
    } else if (i % 3 === 0 && i % 5 === 0) {
        let i = 'FizzBuzz';
        console.log(i);
    }
    console.log(i);
}