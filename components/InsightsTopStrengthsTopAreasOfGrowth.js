import { CircularProgressWithLabel } from "../lib/circularprogresswheels";
import Button from "@mui/material/Button";

export default function InsightsTopStrengthsTopAreasOfGrowth() {
  return (
    <div id="left-side">
      {/* top box for top strengths */}
      <div>
        <h2>Your Top Strengths</h2>
        {/* each of top three strengths */}
        <div style={{ display: "flex" }}>
          {/* score and label */}
          <div>
            <CircularProgressWithLabel value={80} variant="determinate" />
            <div>Growth Mindset</div>
          </div>
          <div>
            <CircularProgressWithLabel value={70} variant="determinate" />
            <div>Empathy</div>
          </div>
          <div>
            <CircularProgressWithLabel value={60} variant="determinate" />
            <div>Perseverance</div>
          </div>
        </div>
      </div>
      {/* middle box for top areas of growth */}
      <div>
        {/* each of top three areas of growth */}
        <h2>Your Top Areas of Growth</h2>
        <div style={{ display: "flex" }}>
          {/* score and label */}
          <div>
            <CircularProgressWithLabel value={10} variant="determinate" />
            <div>Self-Awareness</div>
          </div>
          <div>
            <CircularProgressWithLabel value={20} variant="determinate" />
            <div>Direction</div>
          </div>
          <div>
            <CircularProgressWithLabel value={40} variant="determinate" />
            <div>Time Management</div>
          </div>
        </div>
      </div>
      {/* last box of button to find out more */}
      <Button style={{ borderRadius: "5em" }} variant="contained">
        Find Out More
      </Button>
    </div>
  );
}
