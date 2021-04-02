const $btn = document.getElementById('btn-click-me');
const $counter = document.getElementById('count');

if (!$btn || !$counter) {
    throw new Error('Elements should not be null');
}

let count = 0;

$btn.addEventListener('click', () => {
    count++;
    console.log('You clicked me!');

    $counter.innerText = count.toString();
});
