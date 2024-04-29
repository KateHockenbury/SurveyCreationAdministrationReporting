import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import OpenResponseQuestions from './componets/OpenResponseQuestions';
import YesNoQuestion from './componets/yesno.js';
import CheckboxGroup from './componets/checkbox.js';
import Scale from './componets/scale.js';
import DeleteIcon from '@mui/icons-material/Delete'; //trash icon
import * as XLSX from 'xlsx'; // excel xlsx library
import CreateIcon from '@mui/icons-material/Create';
import EditIcon from '@mui/icons-material/Edit'; //pencil icon 

function SurveyApp() {
  const [surveyName, setSurveyName] = useState('');
  const [participantName, setParticipantName] = useState('');
  const [questions, setQuestions] = useState([]);
  const [newQuestionText, setNewQuestionText] = useState('');
  const [newQuestionType, setNewQuestionType] = useState('');
  const [editMode, setEditMode] = useState(false); // State for editing mode
  const [editedQuestionText, setEditedQuestionText] = useState(''); // State for edited question text
  const [editedQuestionIndex, setEditedQuestionIndex] = useState(-1); // State for edited question text

  let questionNumber = 1;
  {/*const printSection = () => {
    const printableSection1 = document.getElementById('printable-section1');
    const printableSection2 = document.getElementById('printable-section2');
    if (printableSection1 && printableSection2) {
      // Hide remove buttons before printing
      const removeButtons = document.querySelectorAll('.remove-button');
      removeButtons.forEach(button => button.style.display = 'none');
  
      const originalBody = document.body.innerHTML;
      const sectionToPrint1 = printableSection1.innerHTML;
      const sectionToPrint2 = printableSection2.innerHTML;
      document.body.innerHTML = sectionToPrint1 + sectionToPrint2;
      window.print();
      document.body.innerHTML = originalBody;
  
      // Show remove buttons after printing
      //removeButtons.forEach(button => button.style.display = 'inline-block');
    }
    };*/}
    
    const printSection = () => {
      const printableSection2 = document.getElementById('printable-section2');
      if (printableSection2) {
        const removeButtons = document.querySelectorAll('.remove-button');
        removeButtons.forEach(button => button.style.display = 'none');
    
        const originalBody = document.body.innerHTML;
        const sectionToPrint2 = printableSection2.innerHTML;
        document.body.innerHTML = sectionToPrint2;
        window.print();
        document.body.innerHTML = originalBody;
    
        //removeButtons.forEach(button => button.style.display = 'inline-block');
      }
    };

    function addQuestion(newQuestionText, newQuestionType) {
      if (newQuestionText && newQuestionType) {
        setQuestions(prevQuestions => [...prevQuestions, { text: newQuestionText, type: newQuestionType }]);
        setNewQuestionText(''); // Clear the question text box
      }
    }

    function removeQuestion(index) {
      setQuestions(prevQuestions => prevQuestions.filter((_, i) => i !== index));
    }

    function handleSurveyNameChange(event) {
      setSurveyName(event.target.value);
    }

    function handleParticipantNameChange(event) {
      setParticipantName(event.target.value);
    }

    function toggleEditMode() {
      setEditMode(prevMode => !prevMode);
    }
    
    function editQuestion(index) {
      if (editMode && index === editedQuestionIndex) {
        return; // Do nothing if the question is already being edited
      }
     

      setEditedQuestionText(questions[index].text);
      setEditedQuestionIndex(index);
      setEditMode(true);
      

    }

    function saveEditedQuestion(index) {
    // If the edited question text is empty, do nothing
    if (!editedQuestionText.trim()) {
      return;
    }

    // Update the text of the selected question with the edited text
    setQuestions(prevQuestions => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].text = editedQuestionText.trim();
      return updatedQuestions;
    });

    setEditedQuestionText('');
    setEditedQuestionIndex(-1);
    setEditMode(false);
  }

    
    function createQuestionElement(question, index) {
      questionNumber = index + 1;
      let questionElement;
      if (question.type === "yesNo") {
        questionElement = (
          <div key={index}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ textAlign: 'left', margin: '0' }}>
          {questionNumber}. {' '}
          {editMode && index === editedQuestionIndex ? (
            <TextField
              style={{width: '600px'}}
              value={editedQuestionText}
              onChange={(event) => setEditedQuestionText(event.target.value)}
            />
          ) : (
            question.text
          )}
          </h3>
{/* Render edit button next to each question */}
<Box sx={{padding: '10px'}}>
{editMode && index === editedQuestionIndex ? (
          <Button className="remove-button" onClick={() => saveEditedQuestion(index)}>Save</Button>
        ) : (
          <Button className="remove-button" onClick={() => editQuestion(index)}><EditIcon /></Button>
        )}
<Button className="remove-button"  style={{color: 'red' }}  onClick={() => removeQuestion(index)}> <DeleteIcon /> </Button>
</Box>
</div>
            {/*<p>{question.text} - {question.type}</p>*/}
            <YesNoQuestion/>          
            
            <p> </p>
            <p> </p>
            <p> </p>
          </div>
        );
      } else if (question.type === "scale") {
        questionElement = (
          <div key={index}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ textAlign: 'left', margin: '0' }}>
          {questionNumber}. {' '}
          {editMode && index === editedQuestionIndex ? (
            <TextField
              style={{width: '600px'}}
              value={editedQuestionText}
              onChange={(event) => setEditedQuestionText(event.target.value)}
            />
          ) : (
            question.text
          )}
          </h3>
        <Box sx={{padding: '10px'}}>
        {editMode && index === editedQuestionIndex ? (
          <Button className="remove-button" onClick={() => saveEditedQuestion(index)}>Save</Button>
        ) : (
          <Button className="remove-button" onClick={() => editQuestion(index)}><EditIcon /></Button>
        )}
        <Button className="remove-button"  style={{color: 'red' }}  onClick={() => removeQuestion(index)}> <DeleteIcon /> </Button>
        </Box>
        </div>
        <Scale editMode={editMode} />

          </div>
        );
      } else if (question.type === "checkbox") {
        questionElement = (
          <div key={index}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ textAlign: 'left', margin: '0' }}>
          {questionNumber}. {' '}
          {editMode && index === editedQuestionIndex ? (
            <TextField
              style={{width: '600px'}}
              value={editedQuestionText}
              onChange={(event) => setEditedQuestionText(event.target.value)}
            />
          ) : (
            question.text
          )}
          </h3>
          <Box sx={{padding: '10px'}}>
        {editMode && index === editedQuestionIndex ? (
          <Button className="remove-button" onClick={() => saveEditedQuestion(index)}>Save</Button>
        ) : (
          <Button className="remove-button" onClick={() => editQuestion(index)}><EditIcon /></Button>
        )}
        <Button className="remove-button"  style={{color: 'red' }}  onClick={() => removeQuestion(index)}> <DeleteIcon /> </Button>
        </Box>
        </div>
            <CheckboxGroup editMode={editMode} />
          </div>
        );
      } else if (question.type === "openResponse") {
        questionElement = (
          <div key={index}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ textAlign: 'left', margin: '0' }}>
          {questionNumber}. {' '}
          {editMode && index === editedQuestionIndex ? (
            <TextField
              style={{width: '600px'}}
              value={editedQuestionText}
              onChange={(event) => setEditedQuestionText(event.target.value)}
            />
          ) : (
            question.text
          )}
          </h3>
          <Box sx={{padding: '10px'}}>
        {editMode && index === editedQuestionIndex ? (
          <Button className="remove-button" onClick={() => saveEditedQuestion(index)}>Save</Button>
        ) : (
          <Button className="remove-button" onClick={() => editQuestion(index)}><EditIcon /></Button>
        )}
        <Button className="remove-button"  style={{color: 'red' }}  onClick={() => removeQuestion(index)}> <DeleteIcon /> </Button>
      </Box>
      </div> 
          <OpenResponseQuestions/>
          </div>
        );
      }
      return questionElement;
    }
    

    function exportToExcel() {
      const columnTitles = ['Participant Number', 'Scenario Number', 'Question Text', 'Question Type', 'Question Number', 'Participant Response', 'Payload', 'Station'];
      const dataRows = questions.map((question, index) => [
        '', // Participant Number
        '', // Scenario Number
        question.text, // Question Text
        question.type, // Question Type (empty for now)
        index + 1, // Question Number (empty for now)
        '', // Participant Response
        '', // Payload
        '' // Station
      ]);
    
      const wsData = [];
      wsData.push(columnTitles); // Add column titles as the first row
      // Add data rows
      for (let i = 0; i < dataRows.length; i++) {
        wsData.push(dataRows[i]);
      }
    
      const ws = XLSX.utils.aoa_to_sheet(wsData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, surveyName);
      XLSX.writeFile(wb, surveyName+'.xlsx');
    }
    

    return (
      <div>
        <div style={{ position: 'fixed', top: '0', width: '100%', zIndex: '999' }}>
          {/* Locked box at the top of the screen */}
          <Box sx={{ border: '1px solid #ddd', padding: '10px', backgroundColor: '#f9f9f9' }}>
          <TextField label="Survey Name" value={surveyName} onChange={handleSurveyNameChange} sx={{ padding: '10px', marginTop: '10px', width: '600px' }}/>
            {/*<div id="printable-section1">8/}
              {/* Survey name and participant name inputs */}
            {/*</div>*/}
            {/* Input for adding new questions */}
            <TextField label="Type in a Question" id="questionText" name="questionText" value={newQuestionText} onChange={(event) => setNewQuestionText(event.target.value)} sx={{ padding: '10px', marginTop: '10px', marginRight: '10px', width: '900px' }}/>
            <FormControl sx={{ marginTop: '10px', width: '400px' }}>
              <InputLabel id="questionTypeLabel" sx={{ padding: '0px', width: '600px' }}>Select the Question Type</InputLabel>
              <Select
                labelId="questionTypeLabel"
                id="questionType"
                style={{ margin: '10px' }}
                value={newQuestionType}
                onChange={(event) => setNewQuestionType(event.target.value)}
              >
                <MenuItem value="yesNo">Yes/No</MenuItem>
                <MenuItem value="scale">Scale</MenuItem>
                <MenuItem value="checkbox">Checkboxes</MenuItem>
                <MenuItem value="openResponse">Open Response</MenuItem>
              </Select>
            </FormControl>
            {/* Buttons for adding, exporting, and printing */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="contained" onClick={() => addQuestion(newQuestionText.trim(), newQuestionType)} style={{ height: '45px', width: '150px', marginRight: '10px', marginTop: '10px' }}>
                Add Question
              </Button>
              <Button variant="contained" onClick={exportToExcel} style={{ height: '45px', width: '200px', padding: '10px', margin: '10px' }}>
                Export to Excel
              </Button>
              <Button variant="contained" onClick={printSection} style={{ height: '45px', width: '150px', padding: '10px', margin: '10px' }}>
                Print Survey
              </Button>
            </div>
          </Box>
        </div>
        <Box style={{ paddingTop: '230px', margin: '15px' }}>{/*the box that contains the survey questions*/}
          <div id="printable-section2">
            <div id="dynamicQuestions">
              <h1>{surveyName}</h1>
              <h3>Participant Name: _________________________________________________________</h3>
              {questions.map((question, index) => createQuestionElement(question, index))}
            </div>
          </div>
        </Box>
      </div>
    );
    
}

export default SurveyApp;
