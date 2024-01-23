
// selecting navbar class
let navbarContainer = document.querySelector('.navbar')

const renderNavbar = () => {
    let navbarHtml =
        `
    <ul>
      <li>Home </li>
      <li>about </li>
      <li>Contact</li>
    </ul>
    `
    // Set the HTML content using innerHTML
    navbarContainer.innerHTML = navbarHtml;
}

renderNavbar()

const button = document.getElementById('myButton');

button.addEventListener('click', function () {
    console.log('Button clicked!');

    // invoked custom event handler
    customEventHandler()
});

const customEventHandler = () => {

    const customEvent = new Event('custom');

    document.addEventListener('custom', function () {
        console.log('Custom event triggered!');
    });

    // Dispatch the custom event
    document.dispatchEvent(customEvent);
}