export default function Options({ totalFeedback, reset, onLeaveFeedback }) {
  return (
    <div>
      <button onClick={() => onLeaveFeedback("good")}>Good</button>
      <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
      <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
      {totalFeedback > 0 ? <button onClick={reset}>Reset</button> : null}
    </div>
  );
}
