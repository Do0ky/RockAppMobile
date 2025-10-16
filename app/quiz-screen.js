import { useNavigation } from '@react-navigation/native';
import { Button, Card, Text } from '@rneui/themed';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import quizData from '../data/quiz.json';

export default function QuizScreen() {
	const navigation = useOptionalNavigation();
	const [current, setCurrent] = useState(0);
	const [selected, setSelected] = useState(null);
	const [score, setScore] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const [nextAnim, setNextAnim] = useState(false);

	const question = quizData[current];

	const handleOptionClick = (idx) => {
		console.log('Option clicked:', idx);
		setSelected(idx);
	};

	const handleNext = () => {
		setNextAnim(true);
		setTimeout(() => setNextAnim(false), 300);
		if (selected === question.answer) setScore(score + 1);
		setTimeout(() => {
			setSelected(null);
			if (current < quizData.length - 1) {
				setCurrent(current + 1);
			} else {
				setShowResult(true);
			}
		}, 300);
	};

	const handleRestart = () => {
		setCurrent(0);
		setSelected(null);
		setScore(0);
		setShowResult(false);
	};

	const progress = showResult ? 1 : current / quizData.length;

	return (
		<SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
			<ScrollView 
				contentContainerStyle={styles.scrollContent}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.quizContainer}>
					<Text h1 style={styles.title}>Rock Quiz</Text>
					
					{navigation && (
						<View style={styles.buttonContainer}>
							<Button
								title="Back to Home"
								onPress={() => navigation.goBack()}
								buttonStyle={styles.backButton}
								titleStyle={styles.buttonTitle}
							/>
						</View>
					)}

					{!showResult && (
						<View style={styles.progressContainer}>
							<View style={styles.progressTrack}>
								<View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
							</View>
							<Text style={styles.progressText}>
								{Math.round(progress * 100)}% Complete
							</Text>
						</View>
					)}

					{showResult ? (
						<Card containerStyle={styles.resultCard}>
							<Card.Title style={styles.resultTitle}>Quiz Complete!</Card.Title>
							<Card.Divider />
							<Text style={styles.scoreText}>
								Your Score: <Text style={styles.scoreValue}>{score} / {quizData.length}</Text>
							</Text>
							<Button
								title="Restart Quiz"
								onPress={handleRestart}
								buttonStyle={styles.restartButton}
								containerStyle={styles.restartButtonContainer}
								titleStyle={styles.buttonTitle}
							/>
						</Card>
					) : (
						<Card containerStyle={styles.quizCard}>
							<View style={styles.badgeContainer}>
								<View style={styles.badge}>
									<Text style={styles.badgeText}>
										Question {current + 1} of {quizData.length}
									</Text>
								</View>
							</View>
							
							<Text h3 style={styles.question}>{question.question}</Text>
							
							<View style={styles.optionsContainer}>
								{question.options.map((opt, idx) => (
									<Pressable
										key={idx}
										onPress={() => handleOptionClick(idx)}
										style={[
											styles.optionButton,
											selected === idx && styles.selectedOption
										]}
									>
										<Text style={[
											styles.optionText,
											selected === idx && styles.selectedOptionText
										]}>
											{opt}
										</Text>
									</Pressable>
								))}
							</View>

							<Button
								title={current === quizData.length - 1 ? 'Finish' : 'Next'}
								onPress={handleNext}
								disabled={selected === null}
								buttonStyle={[
									styles.nextButton,
									selected === null && styles.disabledButton
								]}
								containerStyle={styles.nextButtonContainer}
								disabledStyle={styles.disabledButton}
								titleStyle={styles.buttonTitle}
							/>
						</Card>
					)}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

function useOptionalNavigation() {
	try {
		const nav = useNavigation();
		return nav;
	} catch {
		return null;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ae988b', // Rock gallery background color
	},
	scrollContent: {
		flexGrow: 1,
		justifyContent: 'center',
		paddingVertical: 20,
	},
	quizContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 20,
	},
	title: {
		color: '#3d2630', // Dark heading color from rock-gallery
		marginBottom: 20,
		textAlign: 'center',
		fontSize: 48,
		fontWeight: '900',
		fontFamily: 'UnicaOne', // Unica One font
	},
	buttonContainer: {
		marginVertical: 15,
		width: '100%',
		maxWidth: 400,
	},
	backButton: {
		backgroundColor: '#4d313d', // collection-button background
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 3,
	},
	buttonTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#f3e4dc', // collection-button color
		fontFamily: 'Rationale',
	},
	resultCard: {
		width: '100%',
		maxWidth: 400,
		borderRadius: 16,
		padding: 24,
		backgroundColor: '#f3e4dc', // modal-content background
		borderWidth: 1,
		borderColor: '#5c3b4b',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 8,
		elevation: 8,
	},
	resultTitle: {
		fontSize: 28,
		fontWeight: '900',
		marginBottom: 16,
		color: '#4b313e',
		fontFamily: 'UnicaOne',
	},
	scoreText: {
		fontSize: 20,
		textAlign: 'center',
		marginVertical: 15,
		color: '#4b313e',
		fontFamily: 'Rationale',
	},
	scoreValue: {
		fontWeight: 'bold',
		color: '#4b313e',
		fontSize: 22,
		fontFamily: 'Rationale',
	},
	restartButtonContainer: {
		marginTop: 15,
	},
	restartButton: {
		backgroundColor: '#4d313d', // collection-button
		paddingVertical: 12,
		borderRadius: 3,
	},
	quizCard: {
		width: '100%',
		maxWidth: 400,
		borderRadius: 16,
		padding: 24,
		backgroundColor: '#f3e4dc',
		borderWidth: 1,
		borderColor: '#5c3b4b',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 8,
		elevation: 8,
		overflow: 'hidden',
	},
	badgeContainer: {
		alignItems: 'flex-start',
		marginBottom: 15,
	},
	badge: {
		backgroundColor: '#5c3b4b', // Border color used as badge background
		paddingHorizontal: 12,
		paddingVertical: 8,
		borderRadius: 6,
	},
	badgeText: {
		fontSize: 14,
		color: '#f3e4dc',
		fontWeight: 'bold',
		fontFamily: 'Rationale',
	},
	question: {
		fontSize: 22,
		fontWeight: '900',
		marginBottom: 20,
		color: '#4b313e',
		fontFamily: 'UnicaOne',
	},
	optionsContainer: {
		width: '100%',
		gap: 10,
	},
	optionButton: {
		width: '100%',
		padding: 15,
		borderRadius: 8,
		backgroundColor: 'rgba(197, 191, 184, 0.664)', // entry-card background
		borderWidth: 2,
		borderColor: '#5c3b4b',
		marginBottom: 10,
	},
	selectedOption: {
		backgroundColor: '#ffd3ee', // quiz-answer-btn.selected-answer
		borderColor: '#5c3b4b',
		borderWidth: 2,
		shadowColor: '#ae988b',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.6,
		shadowRadius: 8,
		elevation: 4,
	},
	optionText: {
		fontSize: 20,
		color: '#4b313e',
		textAlign: 'left',
		fontWeight: '500',
		fontFamily: 'Rationale',
	},
	selectedOptionText: {
		color: '#4b313e', // Selected answer color
		fontWeight: 'bold',
	},
	nextButtonContainer: {
		marginTop: 20,
	},
	nextButton: {
		backgroundColor: '#4d313d', // collection-button
		paddingVertical: 12,
		borderRadius: 3,
	},
	disabledButton: {
		backgroundColor: '#8c7a6e', // Muted version of the button
		opacity: 0.6,
	},
	progressContainer: {
		width: '100%',
		maxWidth: 400,
		marginBottom: 20,
	},
	progressTrack: {
		height: 8,
		backgroundColor: '#f3e4dc',
		borderRadius: 4,
		overflow: 'hidden',
		marginBottom: 8,
	},
	progressBar: {
		height: '100%',
		backgroundColor: '#4d313d',
		borderRadius: 4,
	},
	progressText: {
		fontSize: 14,
		color: '#4b313e',
		fontFamily: 'Rationale',
		textAlign: 'center',
		fontWeight: 'bold',
	},
});
