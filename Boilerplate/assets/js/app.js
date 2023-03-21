window.addEventListener('DOMContentLoaded', () => {

    const myDiv = document.querySelector('#myDiv');

    myDiv.style.border = '1px solid red';
    myDiv.style.width = '100px';
    myDiv.style.height = '100px';

    myDiv.addEventListener('click', function(event) {
        console.log(event);
        let eventTarget = event.target;
        console.log(eventTarget);
        eventTarget.style.background = 'blue'
    });

    myDiv.onclick = function(event1) {
        console.log(event1);
        // event1.target.style.background = 'yellow'
    }

    myDiv.onmouseenter = function(event2) {
        console.log(event2);
        event2.target.style.background = 'orange'
    }



    const myDiv1 = document.querySelector('#myDiv1');

    myDiv1.style.border = '1px solid red';
    myDiv1.style.width = '100px';
    myDiv1.style.height = '100px';


    myDiv1.addEventListener('mouseenter', function(event3) {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    event3.target.style.background = `rgb(${red}, ${green}, ${blue})`;
    });

    const container = document.getElementById('container');
    const rows = 10;
    const col = 10;
    const dimension = '75px';

    for(let i = 0; i < rows; i++) {
        let rowDiv = document.createElement('div');
        for(let j = 0; j < col; j++) {
            let div = document.createElement('div');
            div.style.width = dimension;
            div.style.height = dimension;
            div.style.border = '1px solid black';
            div.style.display = 'inline-block';

            div.addEventListener('mouseenter', function(event4) {
                let red = Math.floor(Math.random() * 255);
                let green = Math.floor(Math.random() * 255);
                let blue = Math.floor(Math.random() * 255);
            
                event4.target.style.background = `rgb(${red}, ${green}, ${blue})`;
                });

            rowDiv.append(div);
        }
        container.append(rowDiv);
    }

    


});

    