# SurveyCreationAdministrationReporting
A survey creation tool. 

<h4>Steps to run the program:</h4>
<p>This tool was created using Visual Studio Code as the IDE but any IDE would work.</p>
<p>1) Download Node.js from the official website https://nodejs.org/</p>
<p>2) Follow these directions specific to your operating system: https://kinsta.com/blog/how-to-install-node-js/</p>
<p>3) You will need to clone this repository to you IDE and use the terminal in the IDE to install the following:</p>
<p>- React: npm install react</p>
<p>- Material-UI: npm install @mui/material @emotion/react @emotion/styled</p>
<p>- Icons: npm install @mui/icons-material</p>
<p>- Excel: npm install xlsx</p>
<p>4) Then when you have no errors and are ready to run the code, in the terminal write " npm run build " this allows for hot reload every time you save new changes to the code. Then type " npm start " to actually launch the application. When you make changes use CTRL+S or CMD+S to save and the application will reload with the changes. </p>

<h4>Important Files: </h4>
<p>App.js is the main part of the code where the layout of the webpage is and the create question element function. As well as the printing and excel functions. </p>
<p>App.css is where all the CSS dependencies are.</p>
<p>The components folder is where the 4 questions type files are held. </p>

<h4>How to use SCAR:</h4>
<p>Users can type in a survey name and it will appear as header text on the survey. </p>
<p>Users can type in a survey question and select from the dropdown the question type they want, and then press add question. </p>
<p>The question appears. If a user wants to edit the questions text or add scale buttons/checkboxes they can press the pencil icon, make the changes and then press the save button in the same place. </p>
<p>Next to the pencil edit button is a trash can icon to delete the question. </p>
<p>Once all the questions have been added users press the Export to Excel button which generates an Excel sheet with the proper header row (this can be edited in the App.js file in the exportToExcel function). The Excel file can be downloaded and saved and imported to Tableau or another data visualization tool.</p>
<p>Lastly the user can press the print button to either print out the survey immediately or save to a PDF to be saved later. </p>

<h4>Notes to future developers:</h4>
<p>We had started to implement a reordering question function using @dnd-kit but we were unable to finish. </p>
<p>If you are to add the CAPS project to this we would suggest adding a button to the header before Export to Excel and using the question.text variable. You may also want to highlight the rejected questions by CAPS, so the user can fix them with our edit pencil icon button. </p>
<p>We wish you the best of luck and hope senior design treats you well. </p>
