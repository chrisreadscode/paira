import AssignmentCard from "../components/AssignmentCard";

export default function RecommendedResources() {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <h2>Recommended Resources</h2>
      <div style={{ display: "flex" }}>
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard wide={"wide"} />
      </div>
    </div>
  );
}
