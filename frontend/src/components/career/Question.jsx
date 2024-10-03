import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../../styles/Questions.css';
import { useNavigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { toast } from 'react-toastify';

function Question() {
  const  navigate = useNavigate()
  const location = useLocation();
  const jobData = location.state;  
  
//    console.log(selectedJob)
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);  // Holds the total score

  // Handle option change for each question
  const handleOptionChange = (questionId, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  // Handle form submission to calculate the score
  const handleSubmit = async () => {
    const valuesArray = Object.values(answers);

    if(valuesArray.length < 3){
      toast("answer all the Questions")
      return
      
    }
 
    
    let calculatedScore = 0;

    // Iterate through each question and compare user's answers with correct answers
    jobData.questions.forEach((e) => {
      const questionId = e._id;  // Unique question identifier
      const correctAnswer = e.answer;  // Correct answer index from the database

      // Check if the user's answer matches the correct answer
      if (answers[questionId] === correctAnswer) {
        calculatedScore += 1;
      }
    });
    const parentData = {jobData,calculatedScore}

    // Update the score state
    setScore(calculatedScore);
        navigate(`/apply/${jobData._id}`, { state: parentData });

  };
  return (
    <div className='question_main'>
      <div className='qustion_div1'>
        <h1> Take the Quiz!</h1>
      </div>
      <div className='instruction_div'>
      <div className='instructions'>

  <p>
    Instructions:
  </p>
  <ol>
    <li>Please read each question carefully.</li>
    <li>Select the most appropriate answer for each question from the options provided.</li>
    <li>Once you have answered all questions, click the "Submit Test" button to evaluate your score.</li>
    <li>Good luck, and thank you for participating!</li>
  </ol>
</div>
      </div>
      <div className='question_con'>
        {jobData.questions.map((item, index) => (
          <div key={item._id} className='question_container'>
            <div>
              <h3>{index + 1}. {item.question}</h3>
            </div>
            <div  className='option_container'>
              <FormControl component="fieldset">
                <RadioGroup  
                  aria-labelledby={`radio-buttons-group-${index}`}
                  name={`question-${index}`}
                  value={answers[item._id] || ''}
                  onChange={(e) => handleOptionChange(item._id, e.target.value)}
                >
                  {item.options.map((option, optionIndex) => (
                    <FormControlLabel style={{color:"#c7c7c7",fontWeight:"lighter"}}
                      key={optionIndex}
                      value={option}
                      control={
                        <Radio
                          sx={{
                            '&.MuiRadio-root': {
                              color: 'lightblue', // Change the default color
                            },
                          }}
                        />
                      }
                      label={option}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        ))}
      </div>
      <div className='question_divbtn'>
        <button onClick={handleSubmit} className="submit_button">
          Submit Test
        </button>
      </div>
    </div>
  );
}

export default Question;
