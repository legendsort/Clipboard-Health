# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1: Implement custom Agent ids in the Facilities table

Acceptance Criteria:

Add a new field to the Facilities table to store custom Agent ids
Update the UI to allow Facilities to enter custom ids for each Agent
Ensure that the custom id is unique within the Facility
Allow Facilities to update custom ids if necessary
Add validation to ensure that the custom id is of the correct format and length
Effort Estimate: 4-6 hours

Implementation Details:

Add a new column to the Facilities table to store the custom id
Create a UI form for Facilities to enter custom ids for each Agent
Use SQL queries to check the uniqueness of custom ids within the Facility
Implement validation on the client and server-side to ensure the correct format and length of the custom id
Add an API endpoint for Facilities to update custom ids

### Ticket 2: Update Shifts table to include custom Agent ids

Acceptance Criteria:

Add a new column to the Shifts table to store the custom Agent id
Update the getShiftsByFacility function to include the custom Agent id
Effort Estimate: 2-3 hours

Implementation Details:

Add a new column to the Shifts table to store the custom Agent id
Modify the SQL query in getShiftsByFacility to include the custom Agent id

### Ticket 3: Update generateReport function to use custom Agent ids

Acceptance Criteria:

Modify the generateReport function to use the custom Agent id instead of the internal database id
Update the PDF template to display the custom Agent id instead of the internal database id
Effort Estimate: 3-4 hours

Implementation Details:

Modify the generateReport function to use the custom Agent id from the Shifts table instead of the internal database id
Update the PDF template to display the custom Agent id instead of the internal database id

### Ticket 4: Add a field for Facilities to map custom Agent ids to internal database ids

Acceptance Criteria:

Add a new field to the Facilities table to store a mapping of custom Agent ids to internal database ids
Update the getShiftsByFacility function to return the internal database id in addition to the custom Agent id
Modify the generateReport function to use the internal database id if the custom Agent id is not available
Effort Estimate: 3-5 hours

Implementation Details:

Add a new column to the Facilities table to store a mapping of custom Agent ids to internal database ids
Modify the SQL query in getShiftsByFacility to return the internal database id in addition to the custom Agent id
Modify the generateReport function to use the internal database id if the custom Agent id is not available
Update the UI to allow Facilities to view the mapping and update it if necessary
