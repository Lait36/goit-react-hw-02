import { useEffect } from "react";
export default function Feedback({ totalFeedback, good, neutral, bad }) {
  useEffect(() => {
    const feedbackData = {
      totalFeedback,
      good,
      neutral,
      bad,
    };
    localStorage.setItem("feedback", JSON.stringify(feedbackData));
  }, [totalFeedback, good, neutral, bad]);

  return (
    <div>
      <h2>Feedback</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {Math.round((good / totalFeedback) * 100)}%</p>
    </div>
  );
}
