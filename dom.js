document.addEventListener('DOMContentLoaded', function () {
    // Create a new heading element
    var heading = document.createElement('h1');
    
    // Set the text content of the heading
    heading.textContent = 'DOM Manipulation Example';

    // Append the heading to the body
    document.body.appendChild(heading);

    // Create an unordered list
    var ul = document.createElement('ul');

    // Add list items to the unordered list
    var items = ['Item 1', 'Item 2', 'Item 3'];

    items.forEach(function (itemText) {
        var li = document.createElement('li');
        li.textContent = itemText;
        ul.appendChild(li);
    });

    // Append the unordered list to the body
    document.body.appendChild(ul);

    // Add a click event listener to the heading
    heading.addEventListener('click', function () {
        alert('Heading clicked!');
    });
});