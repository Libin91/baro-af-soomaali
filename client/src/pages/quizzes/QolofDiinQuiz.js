import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './quiz.css'

function QolofDiinQuiz() {
    const questions = [
		{
			questionText: 'Which animal is main character of the story?',
			answerOptions: [
				{ answerText: 'The Turtle', isCorrect: false },
				{ answerText: 'The Jackal', isCorrect: false },
				{ answerText: 'The Tortoise', isCorrect: true },
				
			],
		},
		{
			questionText: `What was the Tortoise's shell made of?`,
			answerOptions: [
				{ answerText: 'Lean muscle', isCorrect: false },
				{ answerText: 'It had no shell', isCorrect: true },
				{ answerText: 'Fat', isCorrect: false },
				
			],
		},
		{
			questionText: `What was the animals' plan?`,
			answerOptions: [
				{ answerText: 'To eat the Tortoise first thing in the morning', isCorrect: true },
				{ answerText: 'To make the Tortoise a shell', isCorrect: false },
				{ answerText: 'To build the Tortoise a new house', isCorrect: false },
				
			],
		},
		{
			questionText: 'What did the Jackal do?',
			answerOptions: [
				{ answerText: 'It went home', isCorrect: false },
				{ answerText: 'It went to warn the Tortoise', isCorrect: true },
				{ answerText: 'It told the Tortoise no animal wanted to eat it', isCorrect: false },
				
			],
		},
		{
			questionText: 'What happened the next morning?',
			answerOptions: [
				{ answerText: 'The Tortoise grew a shell', isCorrect: true },
				{ answerText: 'The Tortoise run away', isCorrect: false },
				{ answerText: 'The Tortoise died', isCorrect: false },
				
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
    return (
        <div className='quiz'>
			
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}
				<button><NavLink to ="/pages/qolofdiin">Go back to story</NavLink></button>
				<button><NavLink to = "/stories">Go to Stories Home</NavLink></button>
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

export default QolofDiinQuiz
