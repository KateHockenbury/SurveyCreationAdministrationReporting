# SurveyCreationAdministrationReporting
A survey creation tool. 

<h4>Steps to run the program:</h4>
This tool was created using Visual Studio Code as the IDE but any IDE would work.
1) Download Node.js from the official website https://nodejs.org/
2) Follow these directions specific to your operating system: https://kinsta.com/blog/how-to-install-node-js/
3) You will need to clone this repository to you IDE and use the terminal in the IDE to install the following:
- React: npm install react
- Material-UI: npm install @mui/material @emotion/react @emotion/styled
- Icons: npm install @mui/icons-material
- Excel: npm install xlsx
4) Then when you have no errors and are ready to run the code, in the terminal write " npm run build " this allows for hot reload every time you save new changes to the code. Then type " npm start " to actually launch the application. When you make changes use CTRL+S or CMD+S to save and the application will reload with the changes. 

<h4>Important Files: </h4>
App.js is the main part of the code where the layout of the webpage is and the create question element function. As well as the printing and excel functions. 
App.css is where all the CSS dependencies are.
The components folder is where the 4 questions type files are held. 

<h4>How to use SCAR:</h4>
Users can type in a survey name and it will appear as header text on the survey. 
Users can type in a survey question and select from the dropdown the question type they want, and then press add question. 
The question appears. If a user wants to edit the questions text or add scale buttons/checkboxes they can press the pencil icon, make the changes and then press the save button in the same place. 
Next to the pencil edit button is a trash can icon to delete the question. 
Once all the questions have been added users press the Export to Excel button which generates an Excel sheet with the proper header row (this can be edited in the App.js file in the exportToExcel function). The Excel file can be downloaded and saved and imported to Tableau or another data visualization tool.
Lastly the user can press the print button to either print out the survey immediately or save to a PDF to be saved later. 

<h4>Notes to future developers:</h4>
We had started to implement a reordering question function using @dnd-kit but we were unable to finish. 
If you are to add the CAPS project to this we would suggest adding a button to the header before Export to Excel and using the question.text variable. You may also want to highlight the rejected questions by CAPS, so the user can fix them with our edit pencil icon button. 
We wish you the best of luck and hope senior design treats you well. 
