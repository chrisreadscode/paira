import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

export default function BrowserForMentor(props) {
  const icon = props.icon;
  const title = props.title;

  console.log(icon);

  const router = useRouter();

  return (
    <div id="sleeping-coach">
      <div>{title}</div>
      <>{icon}</>
      <Divider />
      <Button onClick={() => router.push("/student/choose-your-mentor")}>
        Find a Mentor
      </Button>
    </div>
  );
}
