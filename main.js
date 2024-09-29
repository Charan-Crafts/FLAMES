let button = document.getElementById('button');
button.addEventListener('click', function() {
    let name1 = document.getElementById('person1').value.toLowerCase();
    let name2 = document.getElementById('person2').value.toLowerCase();
    let output=document.getElementById('output')

    if (!name1 || !name2) {
        alert("Please enter both names.");
        return;
    }

    name1 = name1.split('');
    name2 = name2.split('');

    for (let char of name1.slice()) {
        let index = name2.indexOf(char);
        if (index !== -1) {
            name2.splice(index, 1);
            name1.splice(name1.indexOf(char), 1);
        }
    }

    let combinedNames = name1.concat(name2);
    let length = combinedNames.length;

    let flames = ['F', 'L', 'A', 'M', 'E', 'S'];
    let index = 0;

    while (flames.length > 1) {
        index = (index + length - 1) % flames.length;
        flames.splice(index, 1);
    }

    let resultText = '';

    if (flames[0] === 'F') {
        resultText = "Friends";
    } else if (flames[0] === 'L') {
        resultText = "Love";
    } else if (flames[0] === 'A') {
        resultText = "Affection";
    } else if (flames[0] === 'M') {
        resultText = "Marriage";
    } else if (flames[0] === 'E') {
        resultText = "Enemy";
    } else if (flames[0] === 'S') {
        resultText = "Siblings";
    }
    output.style.display='block'
    output.innerHTML=resultText
});
