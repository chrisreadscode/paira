import Button from "@mui/material/Button"

export default function MessageHeader() {
  return (
    <div>
      <div>
        <div>Gina Wee</div>
        {/* Or Student */}
        <div>Personal Mentor</div>
      </div>
      <Button href="/student/schedule" variant="contained">
        Schedule
      </Button>
    </div>
  );
}
