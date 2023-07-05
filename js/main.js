    const el = document.getElementById('app');
const text = 'Eu sou Rodrigo Oliveira';
const delay = 100;
var count = 0;

function showText(el, text, delay) {
    const char = text.split('').reverse();
    const typer = setInterval(() => {
        if(!char.length)
        {
            return clearInterval(typer);
        }
        const next = char.pop();
        if ((count > 6) && (count < 14)) {
            count ++;
            el.innerHTML += `<span style="color: orangered;">${next}</span>`;
          } else {
            count ++;
           el.innerHTML += next;
          }
    },delay);
}

showText(el, text, delay);

function selectsobre(event)
{
    event.preventDefault();
    document.getElementById('card-sobre').style.display = 'block';
    document.getElementById('card-skill').style.display = 'none';
}

function selectskill(event)
{
    event.preventDefault();
    document.getElementById('card-sobre').style.display = 'none';
    document.getElementById('card-skill').style.display = 'block';
}

