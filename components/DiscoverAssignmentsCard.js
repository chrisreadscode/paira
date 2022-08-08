import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

export default function DiscoverAssignmentsCard(props) {
  const { time, title } = props;
  return (
    <div>
      <h6>{title}</h6>
      Image
      <div style={{ display: "flex" }}>
        <PlayCircleOutlineIcon />
        <div>{time}</div>
      </div>
    </div>
  );
}
