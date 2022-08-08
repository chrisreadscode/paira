import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

export default function AssessmentQuestionFiveRadioButtons(props) {
  const id = props.id;
  const question = props.question;

  return (
    <div key={id} style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FormLabel id={id}>{question}</FormLabel>
        <RadioGroup name={id} row={true}>
          <FormControlLabel
            control={<Radio />}
            label="Strongly Agree"
            labelPlacement="top"
            value="strongly-agree"
          />
          <FormControlLabel
            control={<Radio />}
            label="Agree"
            labelPlacement="top"
            value="agree"
          />
          <FormControlLabel
            control={<Radio />}
            label="Neutral"
            labelPlacement="top"
            value="neutral"
          />
          <FormControlLabel
            control={<Radio />}
            label="Disagree"
            labelPlacement="top"
            value="disagree"
          />
          <FormControlLabel
            control={<Radio />}
            label="Strongly Disagree"
            labelPlacement="top"
            value="strongly-disagree"
          />
        </RadioGroup>
      </div>
    </div>
  );
}
