import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ToggleButton from "@mui/material/ToggleButton";
import { useState } from "react";

export default function AssignmentCard(props) {
  const wide = props.wide;

  const [saved, setSaved] = useState(false);

  return (
    <div className={wide ? "assignment-card-wide" : "assignment-card"}>
      Image
      <ToggleButton onChange={() => setSaved(!saved)}>
        {saved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
      </ToggleButton>
      <div>Title: Self-Care Vision Board</div>
      <div>Exercise/Activity/Type</div>
      <div>60 minute practice</div>
      <div>Description: In this activity, learn to</div>
    </div>
  );
}
