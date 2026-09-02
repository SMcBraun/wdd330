/* ==========================================================================
   THE MENU MAKER (UI DROPDOWN BUILDER)
   What/Why/Purpose: Builds the dynamic <option> elements for the section selector.
   The Logic: Iterates over the raw sections array and injects formatted option tags into the DOM.
   The "Aha!" Learning Gap: By isolating this function, any change to how sections are displayed in dropdowns (e.g., adding room numbers or teacher names) is handled in one place without touching data or event code.
   ========================================================================== */

/* 
  What/Why/Purpose: Populates the section picker dropdown.
  The Logic:
    1. Grabs the <select> element via '#sectionNumber'.
    2. Resets the innerHTML so options don't duplicate if called multiple times.
    3. Iterates through each section object using .forEach().
    4. Creates a new <option> node, assigns its numeric value and display text, and appends it.
  The "Aha!" Learning Gap: Setting option.value ensures the event listeners receive clean data rather than having to parse display text strings later.
*/
export function setSectionSelection(sections) {
    const sectionSelect = document.querySelector("#sectionNumber");
    sectionSelect.innerHTML = "";

    sections.forEach((section) => {
        const option = document.createElement("option");
        option.value = section.sectionNum;
        option.textContent = `${section.sectionNum} (${section.roomNum})`;
        sectionSelect.appendChild(option);
    });
}