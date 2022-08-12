import AssessmentQuestionSkillsToLearnCheckbox from "./AssessmentQuestionSkillsToLearnCheckbox";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";

export default function AssessmentQuestionSkillQuestion() {
  const [formats, setFormats] = useState();

  const skillsToLearn = [
    "time-management",
    "direction-in-life",
    "self-awareness",
    "growth-mindset",
    "resilience",
    "critical-thinking",
    "perserverance",
    "communication",
  ];

  return (
    <div
      key="skills-to-learn"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", paddingBottom: "10vh", paddingTop: "1vh", fontSize: "large" }}>
        Select some skills you would like to learn
      </div>
      <ToggleButtonGroup
        onChange={(event, newFormats) => setFormats(newFormats)}
        style={{display: "flex", flexWrap: "wrap", gap: "3vw", justifyContent: "center", paddingLeft: "5%", paddingBottom: "10vh", width: "90%"}}
        value={formats}
      >
        {skillsToLearn.map((skill, i) =>
          AssessmentQuestionSkillsToLearnCheckbox({ i, skill })
        )}
        <ToggleButton
          name="other"
          style={{ display: "flex", flexDirection: "column" }}
          value={`${skillsToLearn.length}`}
        >
          Other
          <TextField placeholder="Enter here"></TextField>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
