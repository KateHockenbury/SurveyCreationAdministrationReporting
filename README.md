# SurveyCreationAdministrationReporting
A survey creation tool. 

<h4>Steps to run the program:</h4>
<p>This tool was created using Visual Studio Code as the IDE but any IDE would work.</p>
<p>1) Download Node.js from the offical website https://nodejs.org/</p>
<p>2) Follow these dicrections spefic to your operating system: https://kinsta.com/blog/how-to-install-node-js/</p>
<p>3) You will need to clone this repository to you IDE and use the terminal in the IDE to install the following:</p>
- React: npm install react
- Material-UI: npm install @mui/material @emotion/react @emotion/styled
- Icons: npm install @mui/icons-material
- Excel: npm install xlsx
<p>4) Then when you have no errors and are ready to run the code, in the terminal write " npm run build " this allows for hot relaod evrythime you save new changes to the code. Then type " npm start " to actually launch the application. When you make changes use CTRL+S or CMD+S to save and the application will reload with the changes. 
</p>
<h4>Important Files: </h4>
App.js is the main part of the code where the layput of the webpage is and the create question element function. As well as the printing and excel funstions. 
App.css is where all the CSS dependancies are.
The componets folder is where the 4 questions type files are held. 

<h4>How to use SCAR:</h4>
Users can type in a survey name and it will appear as header text on the survey. 
Users can type in a survey question and select from the dropdown the question type they want, and then press add question. 
The question appears. If a user wants to edit the questions text or add scale buttons/checkboxes they can press the penicl icon, makes the chnages and then press the save button in the same place. 
Next to the pencil edit button is a trashcan icon to delete the question. 
Once all the questions have been added users press the Export to Excel button which gereates an Excel sheet with the proper header row (this can be edited in the App.js file in the exportToExcel function). The Excel file can be download and saved and imported to Tableau or another data visualization tool. 
Lastly the user can press the print button to either print out the survey immediately or save to a PDF to be saved later. 

<h4>Notes to future developers:</h4>
We had started to implement a reordering question function using @dnd-kit but we were unable to finish. 
If you are to add the CAPS project to this we would suggest adding a button to the header before Export to Excel and using the question.text variable. You may also want to highlight the rejected questions by CAPS, so the user can fix them with out edit pencil icon button. 
We wish you the best of luck and hope senior design treats you well. 
