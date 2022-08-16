import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

export default function CircularProgressWithLabel(props) {
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress
        style={{
          transform: `${
            props.halfcircle == "true" ? "rotate(.5turn)" : "rotate(-.25turn)"
          }`,
          color: "#73C2FB"
          // width: "6vw", perhaps this needs to grow equally on both sides, and it is not?
        }}
        thickness={4}
        variant="determinate"
        {...props}
      />
      <Box
        sx={{
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          color="text.secondary"
          component="div"
          style={{ fontSize: "medium" }}
          variant="caption"
        >
          {`${
            props.halfCircle
              ? Math.round(props.value * 2)
              : Math.round(props.value)
          }`}
        </Typography>
      </Box>
    </Box>
  );
}
