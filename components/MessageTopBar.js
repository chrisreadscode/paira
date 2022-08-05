import Button from "@mui/material/Button"

export default function MessageTopBar() {
  return (
    <div>
      <div>
        <div>Gina Wee</div>
        <div>Personal Mentor</div>
      </div>
      <Button href="/student/schedule" variant="contained">
        Schedule
      </Button>
    </div>
  );
}
