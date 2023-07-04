import React from "react";
import axios from "axios";

const IntegrateAI: React.FC = () => {
	const [prompt, setPrompt] = React.useState("");
	const [response, setResponse] = React.useState("");

	const getOpenAIResponse = async (e: React.FormEvent<EventTarget>) => {
		e.preventDefault();
		const MAX_RETRIES = 3;
		const INITIAL_BACKOFF_DELAY = 1000; // 1 second
		let retries = 0;
		let backoffDelay = INITIAL_BACKOFF_DELAY;
		try {
			const apiResponse = await axios.post(
				"https://api.openai.com/v1/engines/gpt-3.5-turbo/completions",
				{
					messages: [
						{
							role: "system",
							content: "You are a helpful assistant.",
						},
						{
							role: "user",
							content: prompt,
						},
					],
				},
				{
					headers: {
						Authorization:
							"Bearer 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",
						"Content-Type": "application/json",
					},
				}
			);

			const completion = apiResponse.data.choices[0].message.content;
			setResponse(completion);
		} catch (error) {
			if (error.response?.status === 429) {
				// Retry after backoff delay
				await new Promise((resolve) =>
					setTimeout(resolve, backoffDelay)
				);
				backoffDelay *= 2; // Increase backoff delay exponentially
				retries++;
			} else {
				console.error("Error:", error);
			}
		}
	};

	return (
		<>
			<form onSubmit={getOpenAIResponse}>
				<input
					id="chat-input"
					type="text"
					value={prompt}
					onChange={(e) => setPrompt(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>

			{!!response && <div>{response}</div>}
		</>
	);
};

export default IntegrateAI;

// check if there is 2 orbs next to each other, then check around them 3rd orb
