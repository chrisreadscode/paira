import CircularProgressWithLabel from "../lib/circularprogresswheels";

export default function CircularProgressCard(props) {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "3vw"
      }}
    >
      <CircularProgressWithLabel value={props.skillStrength} variant="determinate" />
      <div style={{ fontSize: "small", paddingTop: ".75em" }}>
        {props.skillName}
      </div>
    </div>
  );
}
