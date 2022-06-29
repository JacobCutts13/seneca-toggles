import ToggleQuestion from "./ToggleQuestion";
import officeConditions from "../data/officeConditions.json";

export default function TogglesTile(): JSX.Element {
  return (
    <div id="toggles" className="zero">
      <h1 className="questions-title">An animal cell contains</h1>
      <div className="questions-container">
        <ToggleQuestion />
      </div>
      <p className="questions-mark">The answer is incorrect</p>
    </div>
  );
}
