import { Dropdown } from 'flowbite';

// set the dropdown menu element
const $targetEl = document.getElementById('dropdownMenu');

// set the element that trigger the dropdown menu on click
const $triggerEl = document.getElementById('dropdownButton');

const dropdown = new Dropdown($targetEl, $triggerEl);

export default dropdown;