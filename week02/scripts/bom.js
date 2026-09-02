/* ==========================================================================
   PART 1: GRAB OUR HTML ELEMENTS
   ========================================================================== */

/* 
  Logic: Find the input box, the button, and the list on the page so JS can talk to them.
  Talking point: "I save references to our input box, button, and list container into variables so we don't have to search for them every single time."
*/
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


/* ==========================================================================
   PART 2: LISTEN FOR CLICKS & ADD CHAPTERS
   ========================================================================== */

/* 
  Logic: Wait for the user to click the "Add Chapter" button.
  Talking point: "When the user clicks the button, we check for empty text, enforce the 10-item cap, and block duplicates."
*/
button.addEventListener('click', () => {
    const chapterName = input.value.trim();

    // Guard 1: Make sure the box isn't just blank spaces
    if (chapterName === '') {
        alert('Please enter a book and chapter.');
        input.focus();
        return;
    }

    // Guard 2: Enforce the "Top 10" constraint (Idea to consider #2)
    if (list.children.length >= 10) {
        alert('You have reached the limit of 10 chapters! Remove one before adding another.');
        input.focus();
        return;
    }

    // Guard 3: Prevent duplicate entries (Idea to consider #3)
    const existingItems = Array.from(list.querySelectorAll('li'));
    const isDuplicate = existingItems.some(item =>
        item.firstChild.textContent.trim().toLowerCase() === chapterName.toLowerCase()
    );

    if (isDuplicate) {
        alert('That chapter is already in your top 10 list!');
        input.focus();
        return;
    }

    /* ==========================================================================
       PART 3: BUILD AND DISPLAY THE NEW ROW
       ========================================================================== */

    /* 
      Logic: Create a brand-new list item row and a little delete button in memory.
      Talking point: "I create a fresh <li> for the chapter and a <button> for our delete icon."
    */
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    /* 
      Logic: Put the chapter text into the row, and make the button show a red X.
      Talking point: "I populate the row with whatever scripture the user typed, and give the button an X symbol with an accessibility label."
    */
    li.textContent = chapterName;
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', `Remove ${chapterName}`);

    /* 
      Logic: Put the X button inside the list item, then attach that list item to the main list on screen.
      Talking point: "I attach the X button into the row, and snap the whole row onto the screen inside our unordered list."
    */
    li.append(deleteButton);
    list.append(li);

    /* 
      Logic: Make the red X button delete its own row when clicked.
      Talking point: "If the user clicks the X button, we immediately remove that specific chapter from the list and return cursor focus back to the text box."
    */
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        input.focus();
    });

    /* 
      Logic: Clear out the typing box and put the blinking cursor back inside so the user can type the next one right away.
      Talking point: "Finally, I clear the typing box and drop the blinking cursor right back inside so the user can quickly type their next favorite chapter."
    */
    input.value = '';
    input.focus();
});