// import _Head from "../../components/_Head";
// import Footer from "../../components/Footer";
// import HeaderStudent from "../../components/HeaderStudent";
// import InsightsDiscoverMoreInsights from "../../components/InsightsDiscoverMoreInsights";
// import InsightsMonthlyImprovements from "../../components/InsightsMonthlyImprovements";
// import InsightsPersonalityType from "../../components/InsightsPersonalityType";
// import InsightsTopStrengthsTopAreasOfGrowth from "../../components/InsightsTopStrengthsTopAreasOfGrowth";
// import styles from "../../styles/.module.css";

// export default function Insights() {
//   return (
//     <>
//       <_Head />
//       <HeaderStudent />
//       {/* styles.main interfering with other styles? */}
//       <main className={styles.container}>
//         {/* First tab section */}
//         <div id={styles.box} style={{ display: "flex" }}>
//           {/* left side */}
//           <InsightsTopStrengthsTopAreasOfGrowth />
//           {/* right side */}
//           <InsightsPersonalityType />
//         </div>
//         {/* Second tab section */}
//         <InsightsMonthlyImprovements />
//         {/* Third tab section */}
//         <InsightsDiscoverMoreInsights />
//       </main>
//       <Footer />
//     </>
//   );
// }

import _Head from "../../components/_Head";
import Footer from "../../components/Footer";
import HeaderStudent from "../../components/HeaderStudent";
import InsightsDiscoverMoreInsights from "../../components/InsightsDiscoverMoreInsights";
import InsightsMonthlyImprovements from "../../components/InsightsMonthlyImprovements";
import InsightsPersonalityType from "../../components/InsightsPersonalityType";
import InsightsTopStrengthsTopAreasOfGrowth from "../../components/InsightsTopStrengthsTopAreasOfGrowth";
import styles from "../../styles/Insights.module.css";
import commonStyles from "../../styles/common.module.css";

export default function Insights() {
  return (
    <>
      <_Head />
      <HeaderStudent />
      {/* styles.main interfering with other styles? */}
      <main className={`${commonStyles.containerRelative} ${commonStyles.flexColumn}`}>
        {/* First tab section */}
        <div id={styles.box} className={commonStyles.flexRowSpaceBetween}>
          {/* left side */}
          <InsightsTopStrengthsTopAreasOfGrowth />
          {/* right side */}
          <InsightsPersonalityType />
        </div>
        {/* Second tab section */}
        <InsightsMonthlyImprovements />
        {/* Third tab section */}
        <InsightsDiscoverMoreInsights />
      </main>
      <Footer />
    </>
  );
}
