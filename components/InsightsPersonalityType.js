import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import EngineeringIcon from "@mui/icons-material/Engineering";

export default function InsightsPersonalityType() {
  return (
    <div id="right-side" style={{ display: "flex", flexDirection: "column" }}>
      {/* top box of what type you are */}
      <div style={{ display: "flex" }}>
        {/* left side text portion */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div> You Are An: </div>
          <div>Analyst</div>
        </div>
        {/* right side icon */}
        <EngineeringIcon />
      </div>
      <Divider />
      {/* Strength portion */}
      <div>
        <span>Strength: </span> As an analyst, you like to think and observe
        before making a decision. You excel in strategic planning by making good
        inferences.
      </div>
      {/* Weakness portion */}
      <div>
        <span>Weakness: </span> You may find it hard to cop with back to back
        projects and struggle with stress from time management.
      </div>
      {/* last box of button to view full report */}
      <Button style={{ borderRadius: "5em" }} variant="contained">
        View Full Report
      </Button>
    </div>
  );
}
