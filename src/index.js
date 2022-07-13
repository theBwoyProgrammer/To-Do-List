import './index.css';

const list = [
{
    description: 'cook',
    completed: false,
    index: 0,
},
{
    description: 'cook',
    completed: false,
    index: 0,
},
{
    description: 'cook',
    completed: false,
    index: 0,
},
{
    description: 'cook',
    completed: false,
    index: 0,
},
{
    description: 'cook',
    completed: false,
    index: 0,
},
{
    description: 'cook',
    completed: false,
    index: 0,
},
];

const unorderedList = document.querySelector('.list-items');

for(let i = 0; i<list.length; i+=1){
const listMom = document.createElement('li');
listMom.setAttribute('class', 'list');

const input = document.createElement('input');
input.setAttribute('contenteditable', false);
input.setAttribute('type', 'checkbox');

const span = document.createElement('span');
span.setAttribute('contenteditable', true);

const icon = document.createElement('i');
icon.setAttribute('class', 'bi bi-three-dots-vertical');
icon.setAttribute('id', 'three-dots');

span.textContent += list[i].description;
listMom.append(input, span, icon);
unorderedList.append(listMom);
}

