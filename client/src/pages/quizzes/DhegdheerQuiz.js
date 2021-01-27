import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './quiz.css'


function DhegdheerQuiz() {
    const questions = [
		{
			questionText: 'Who is Dhegdheer?',
			answerOptions: [
				{ answerText: 'An old lady', isCorrect: false },
				{ answerText: 'A witch', isCorrect: false },
				{ answerText: 'A cannibal', isCorrect: true },
				
			],
		},

		{
			questionText: 'What does Dhegdheer mean?',
			answerOptions: [
				{ answerText: 'Long eared', isCorrect: true},
				{ answerText: 'One eyed', isCorrect: false },
				{ answerText: 'Bow legged', isCorrect: false },
				
			],
		},

		{
			questionText: 'Where does Dhegdheer live?',
			answerOptions: [
				{ answerText: 'Boholaha Cagaaran', isCorrect: false },
				{ answerText: 'Boholaha Xergagan', isCorrect: true },
				{ answerText: 'Boolka Madoow', isCorrect: false },
				
			],
		},
		{
			questionText: 'How many daughters has Dhegdheer?',
			answerOptions: [
				{ answerText: '1', isCorrect: true },
				{ answerText: '3', isCorrect: false },
				{ answerText: '0', isCorrect: false },
				
			],
		},
		{
			questionText: 'How can you understand that Dhegdheer is asleep?',
			answerOptions: [
				{ answerText: 'Her eyes are shut', isCorrect: false },
				{ answerText: 'Her long ear is folded on itself', isCorrect: true },
				{ answerText: 'She snores', isCorrect: false },

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
				<button><NavLink to ="/pages/dhegdheer">Go back to story</NavLink></button>
				<button><NavLink to = "/pages/qayblibaax">Go to the next story</NavLink></button>
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
    
    )};

export default DhegdheerQuiz
