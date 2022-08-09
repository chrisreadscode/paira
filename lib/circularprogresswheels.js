import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

export function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex", width: "100%" }}>
      <CircularProgress
        style={{ margin: "auto" }}
        variant="determinate"
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}`}
        </Typography>
      </Box>
    </Box>
  );
}

export function CircularProgressWithLabelRotated(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex", width: "100%" }}>
      <CircularProgress
        style={{ margin: "auto", transform: "rotate(.5turn)" }}
        variant="determinate"
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value * 2)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
