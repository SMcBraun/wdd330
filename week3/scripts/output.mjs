/* ==========================================================================
   THE SERVER / SCREEN PAINTER (DOM RENDERING MODULE)
   What/Why/Purpose: Manages drawing and updating visual DOM elements.
   The Logic: Receives pure data arrays or objects from the controller and generates HTML strings.
   The "Aha!" Learning Gap: Separates presentation from calculations. If a layout or table style changes, this is the only file that needs editing.
   ========================================================================== */

/* 
  What/Why/Purpose: Injects the course name and code into the empty header tags.
  The Logic: Uses .textContent to safely assign string values to the DOM targets.
  The "Aha!" Learning Gap: Using textContent avoids the security risks and parsing overhead of innerHTML when rendering plain text.
*/
export function setTitle(course) {
    document.querySelector("#courseName").textContent = course.name;
    document.querySelector("#courseCode").textContent = course.code;
}

/* 
  What/Why/Purpose: Builds table rows dynamically from an array of sections.
  The Logic: 
    1. Iterates over the sections array using .map().
    2. Constructs a template literal string representing each <tr> and <td> set.
    3. Merges the resulting array of strings into a single unified HTML block using .join("").
    4. Inserts the compiled HTML block into the <tbody> element.
  The "Aha!" Learning Gap: Instead of manually building DOM elements node-by-node in a loop, .map() + .join("") creates the entire table structure in one batch.
*/
export function renderSections(sections) {
    const html = sections.map(
        (section) => `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td>
    </tr>`
    );

    document.querySelector("#sections").innerHTML = html.join("");
}