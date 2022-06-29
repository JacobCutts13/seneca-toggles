export default function ToggleQuestion(): JSX.Element {
  return (
    <div className="single-question-container">
      <button className="question-button">
        <div className="answer active">
          <p>ans 1</p>
        </div>
        <div className="answer inactive">
          <p>ans 2</p>
        </div>
        <div className={`answer-slider`}></div>
      </button>
    </div>
  );
}
