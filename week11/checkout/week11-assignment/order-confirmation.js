/* Get the customer first and last name and generate a thank-you message that includes their name */

const urlParams = new URLSearchParams(window.location.search);

const firstName = urlParams.get("firstName") || "";
const lastName = urlParams.get("lastName") || "";

const thankYouElement = document.getElementById("thankYouMessage");

if (thankYouElement) {
    thankYouElement.textContent = `Thank you, ${firstName} ${lastName}!`;
}
