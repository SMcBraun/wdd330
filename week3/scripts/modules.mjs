/* ==========================================================================
   THE MANAGER / CONDUCTOR (APPLICATION ORCHESTRATOR)
   What/Why/Purpose: The central coordinator module that pulls together tools from our specialized helper files, runs the opening setup, and manages button clicks.
   The Logic: It does not store data or construct HTML strings directly. It delegates those responsibilities and directs the sequence of events.
   The "Aha!" Learning Gap: By stripping out data manipulation and DOM templates, this file acts as pure event orchestration. If an event fails, we debug here first.
   ========================================================================== */

/* 
  What/Why/Purpose: Imports our primary course data store.
  The Logic: 'byuiCourse' is imported without curly braces because it was exported as the 'default' item from course.mjs.
  The "Aha!" Learning Gap: Default exports represent the single primary object of a file, imported directly without destructuring brackets.
*/
import byuiCourse from './course.mjs';

/* 
  What/Why/Purpose: Imports the menu-maker helper that builds our dropdown list.
  The Logic: Encased in curly braces { setSectionSelection } because it is a named export from sections.mjs.
  The "Aha!" Learning Gap: Named exports allow a file to export multiple functions, and we selectively pull in only the tools we need using brackets.
*/
import { setSectionSelection } from './sections.mjs';

/* 
  What/Why/Purpose: Imports our visual screen-painting functions.
  The Logic: Combines multiple named exports from output.mjs into one single import statement, separated by a comma.
  The "Aha!" Learning Gap: Instead of multiple script tags littering our HTML, one file explicitly requests the specific tools it needs to update the view.
*/
import { setTitle, renderSections } from './output.mjs';


/* ==========================================================================
   INITIALIZATION LIFECYCLE (MORNING SETUP)
   What/Why/Purpose: Populates the header text, dropdown options, and table rows immediately when the page loads.
   The Logic: Executes imported functions in order, feeding them the starting data from byuiCourse.
   The "Aha!" Learning Gap: Because our HTML file left the headers, select list, and tbody empty, this block fills them dynamically on load.
   ========================================================================== */

// 1. Injects course name and code into top headers
setTitle(byuiCourse);

// 2. Populates section dropdown with available sections
setSectionSelection(byuiCourse.sections);

// 3. Renders initial table rows showing student enrollment numbers
renderSections(byuiCourse.sections);


/* ==========================================================================
   EVENT LISTENERS & USER ACTIONS
   What/Why/Purpose: Responds to button clicks to modify enrollment and refresh the view.
   The Logic: Reads selected section number, calls the data model to change counts, and calls the renderer to redraw the table.
   The "Aha!" Learning Gap: We do not reload the page. We update our data object in memory, then immediately repaint only the table rows.
   ========================================================================== */

// Event: Enroll Student
document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum);
    renderSections(byuiCourse.sections);
});

// Event: Drop Student
document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum, false);
    renderSections(byuiCourse.sections);
});