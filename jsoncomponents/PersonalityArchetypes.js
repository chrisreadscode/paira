// // Developer Note: It may be easier to store these personality types as under components
// model personalitytype {
//     id        Int    @id @default(autoincrement())
//     createdAt Float  @default(dbgenerated("SELECT extract(epoch from now());"))
//     strength  String
//     title     String
//     weakness  String
//     updatedAt Float  @default(dbgenerated("SELECT extract(epoch from now());"))
//   }

// Example
// Title: Analyst
// Strength: Analytical thinking is strongly exhibited and useful for...
// Weakness: Time management for...

export default personalityArchetype = {
    "analyst": {
        strength: "Analytical thinking is strongly exhibited and useful for...",
        weakness: "Time management for...",
    }
}