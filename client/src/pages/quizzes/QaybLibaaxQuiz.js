import React, { useState} from 'react'
import { NavLink } from 'react-router-dom';
import './quiz.css'

function QaybLibaaxQuiz() {

    const questions = [
		{
			questionText: 'What did the animals of the savannah do?',
			answerOptions: [
				{ answerText: 'They went grazing', isCorrect: false },
				{ answerText: 'They took part in a race', isCorrect: false },
				{ answerText: 'They hunted a prey', isCorrect: true },
				
			],
		},
		{
			questionText: 'Who is king of the animals?',
			answerOptions: [
				{ answerText: 'The Giraffe', isCorrect: false },
				{ answerText: 'The Lion', isCorrect: true },
				{ answerText: 'The Hyena', isCorrect: false },
				
			],
		},
		{
			questionText: 'Who is the first animal charged with dividing up the meat?',
			answerOptions: [
				{ answerText: 'The Hyena', isCorrect: true },
				{ answerText: 'The Jackal', isCorrect: false },
				{ answerText: 'The Fox', isCorrect: false },
				
			],
		},
		{
			questionText: 'Who is the second animal charged with dividing up the meat?',
			answerOptions: [
				{ answerText: 'The Fox', isCorrect: false },
				{ answerText: 'The Jackal', isCorrect: true },
				{ answerText: 'The Hyena', isCorrect: false },
				
			],
		},
		{
			questionText: 'Whose decision does the Lion agree with?',
			answerOptions: [
				{ answerText: `The Fox's`, isCorrect: false },
				{ answerText: `The Hyena's`, isCorrect: false },
				{ answerText: `The Jackal's`, isCorrect: true },
				
			],
		},
	];
	
	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [showScore, setShowScore] = useState(false);

    const [score,setScore] = useState(0);

	const handleAnswerButtonClick = (isCorrect) => {
		if (isCorrect === true) {
			setScore(score + 1);
		};
	
		
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        };
	};
	
	const handleResetButton = (score) => {
		setCurrentQuestion(0);
		setShowScore(false);
		setScore(0);
	};
    
    return (

        
           <div className='quiz'>
			
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}
				<button onClick={()=> handleResetButton(score)}>Try again!</button>
				<button><NavLink to ="/pages/qayblibaax">Go back to story</NavLink></button>
				<button><NavLink to = "/pages/qolofdiin">Go to the next story</NavLink></button>
				</div>
				
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{ questions[currentQuestion].questionText }</div>
					</div>
					<div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption)=>
                         (<button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>))}
					</div>
				</>
			)}
			 
        </div>
    )
}

export default QaybLibaaxQuiz
