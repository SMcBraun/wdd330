/*==========================================================================
    THE PANTRY: Raw Data and Counting Numbers
   What this file does: This file ONLY holds the numbers and changes the numbers.
   Why it matters: It does NOT draw on the screen.It is just the notebook where we do our math.
========================================================================== */

const byuiCourse = {
    // The course info
    code: "WDD 231",
    name: "Web Frontend Development I",

    // The raw list of sections, rooms, and enrolled students
    sections: [
        { sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Bro T" },
        { sectionNum: 2, roomNum: "STC 347", enrolled: 28, days: "TTh", instructor: "Sis A" }
    ],

    /* 
      What this does: Adds 1 or subtracts 1 from a section's enrollment.
      How it works: 
        1. It looks through the sections until it finds the one matching the number the user chose.
        2. If 'add' is true, it adds 1 to that section's student count. If 'add' is false, it takes 1 away.
      The "Aha!" Learning Gap: We removed the old code that drew the table here. Why? Because the storage room shouldn't be running out into the dining room to deliver food. It just updates the count.
    */
    changeEnrollment: function (sectionNum, add = true) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum === sectionNum
        );

        if (sectionIndex >= 0) {
            if (add) {
                this.sections[sectionIndex].enrolled++;
            } else {
                this.sections[sectionIndex].enrolled--;
            }
        }
    }
};

/* 
  What this does: Makes this course notebook available to any other file that asks for it.
  Why "default"? Because this entire file was made to hold this one single course object.
*/
export default byuiCourse;