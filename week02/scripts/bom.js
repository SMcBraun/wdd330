/* ==========================================================================
   PART 1: GRABBING SCREEN ITEMS
   ========================================================================== */

// Logic: Store the text box so JavaScript can read what the user types.
// Talking point: "Here, I'm reaching into the HTML to grab the scripture input box."
const input = document.querySelector('#favchap');

// Logic: Store the Add Chapter button so we can listen for clicks.
// Talking point: "Next, I grab the submit button so we know when to trigger the action."
const button = document.querySelector('button');

// Logic: Store the blank list container where new rows will be dropped.
// Talking point: "Finally, I grab the empty unordered list where our chapters will appear."
const list = document.querySelector('#list');


/* ==========================================================================
   PART 2: RUNNING CODE ON CLICK
   ========================================================================== */

// Logic: Wait for the user to click the button before doing anything.
// Talking point: "I add a click event listener to the button so this function runs on click."
button.addEventListener('click', () => {

    // Logic: Stop the code if the user leaves the box empty.
    // Talking point: "First, I make sure the input isn't blank so we don't add empty entries."
    if (input.value.trim() !== '') {

        // Logic: Create an empty row element in the browser's memory.
        // Talking point: "I create a brand-new list item element to hold our scripture."
        const li = document.createElement('li');

        // Logic: Create an empty button element in memory to act as the delete button.
        // Talking point: "Then, I create a button element that will serve as our delete icon."
        const deleteButton = document.createElement('button');

        // Logic: Take the text the user entered and put it inside the row.
        // Talking point: "I copy the user's typed text directly into the list item's content."
        li.textContent = input.value;

        // Logic: Put a visible red X icon on the delete button.
        // Talking point: "I label the delete button with an X symbol."
        deleteButton.textContent = '❌';

        // Logic: Add a description to the button for screen-reading tools.
        // Talking point: "I add an aria-label so screen readers can describe what this button deletes."
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

        // Logic: Tuck the delete button inside the row right beside the scripture text.
        // Talking point: "Next, I attach the delete button inside the list item."
        li.append(deleteButton);

        // Logic: Drop the completed row onto the web page inside the list.
        // Talking point: "Then, I attach the full list item onto the page inside our unordered list."
        list.append(li);

        // Logic: Give this specific row's delete button its own click reaction.
        // Talking point: "I give this delete button its own listener: when clicked, it removes this row."
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        // Logic: Wipe the input field empty so it is fresh for the next scripture.
        // Talking point: "I clear out the text box so it's ready for the next entry."
        input.value = '';

    }

    // Logic: Put the flashing text cursor back into the box automatically.
    // Talking point: "Lastly, I use focus to return the cursor right back to the text field."
    input.focus();
});