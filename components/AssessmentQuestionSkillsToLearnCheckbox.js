import ToggleButton from "@mui/material/ToggleButton";

export default function AssessmentQuestionSkillsToLearnCheckbox(props) {
  const skill = props.skill;
  const i = props.i;

  const frontendString = (skill) => {
    const changeDashesToSpaces = skill.replaceAll("-", " ");
    return changeDashesToSpaces;
  };

  return (
    <ToggleButton
      key={`skill-${i}`}
      style={{ borderRadius: "5em" }}
      value={`${i}`}
    >
      {frontendString(skill)}
    </ToggleButton>
  );
}
