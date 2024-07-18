import { useState, useEffect } from "react";
import Notification from "../Notification/Notification";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  useEffect(() => {
    const storedFeedback = localStorage.getItem("feedback");
    if (storedFeedback) {
      setFeedback(JSON.parse(storedFeedback));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const reset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    })
  }

  return (
    <div>
      <Description />
      <Options totalFeedback={totalFeedback} reset={reset} onLeaveFeedback={updateFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          totalFeedback={totalFeedback}
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
