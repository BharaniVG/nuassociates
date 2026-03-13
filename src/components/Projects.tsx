import { useState } from "react";

// COMMERCIAL
import BHARATIWALMART from "../assets/work/commercial/bharatiWalmart.webp";
import MARATT from "../assets/work/commercial/maratt.webp";
import SHRAVANTHITECHPARK from "../assets/work/commercial/shravanthiTechPark.webp";
import DECATHLON from "../assets/work/commercial/decathlon.webp";
import MCPANANTHNAG from "../assets/work/commercial/mcpAnantnag.webp";
import TESCOSTARBAZAAR from "../assets/work/commercial/tescoStarBazaar.webp";
import FUTUREMALL from "../assets/work/commercial/futureMall.webp";
import MCPLEH from "../assets/work/commercial/mcpLeh.webp";
import MCPPEERKHO from "../assets/work/commercial/lehParking.webp";

// HOSPITALITY
import ABS from "../assets/work/hospitality/ABS.webp";
import GINGER from "../assets/work/hospitality/Ginger.webp";
import ACEODYSSEY from "../assets/work/hospitality/ACEOdyssey.webp";
import JAMMINGGOAT from "../assets/work/hospitality/JammingGoat.webp";
import APOLLO from "../assets/work/hospitality/Apollo.webp";
import KSTEPSMUSEUM from "../assets/work/hospitality/KstepsMuseum.webp";
import AURUM from "../assets/work/hospitality/Aurum.webp";
import SUDHICOMMERCIALCOMPLEX from "../assets/work/hospitality/SudhiCommercialComplex.webp";
import CARBONSQUARE from "../assets/work/hospitality/CarbonSquare.webp";

// INDUSTRIAL

import BIOZEEN from "../assets/work/industrial/Biozeen.webp";
import NEWTRACE from "../assets/work/industrial/NewTrace.webp";
import EFDINDUCTION from "../assets/work/industrial/EFDInducation.webp";
import NUTRIFOODBISCUITS from "../assets/work/industrial/NutriFoodBiscuits.webp";
import HUBERHIN from "../assets/work/industrial/HuberHin.webp";
import SUNMOBILITY from "../assets/work/industrial/SunMobility.webp";
import KNKKARTS from "../assets/work/industrial/KNKKarts.webp";
import TLDMAINI from "../assets/work/industrial/TLDMaini.webp";
import MANIPALNATURALPVTLTD from "../assets/work/industrial/ManipalNaturalPvtLtd.webp";
import VIRYAAUTONOMOUS from "../assets/work/industrial/ViryaAutonomous.webp";
import MOLEX from "../assets/work/industrial/Molex.webp";
import VKCPRIDEWALKAROO from "../assets/work/industrial/VKCPrideWalkaroo.webp";

// CORPORATE INTERIORS

import BIOZEENCORPINTERIORS from "../assets/work/corporate_interiors/biozeen.webp";
import NEWTRACECORPINTERIORS from "../assets/work/corporate_interiors/newTrace.webp";
import COMEDCARESINNOVATIONHUB from "../assets/work/corporate_interiors/comedCaresInnovationHub.webp";
import SUNMOBILITYCORPINTERIORS from "../assets/work/corporate_interiors/sunMobility.webp";
import IIIT from "../assets/work/corporate_interiors/IIIT.webp";
import TLDMAINICORPINTERIORS from "../assets/work/corporate_interiors/tldMaini.webp";
import MOLEXPHASE1CORPINTERIORS from "../assets/work/corporate_interiors/molexPhase1.webp";
import VIRYAAUTONOMOUSCORPINTERIORS from "../assets/work/corporate_interiors/viryaAutonomous.webp";
import WESCHOOL from "../assets/work/corporate_interiors/weschool.webp";

// RESIDENTIAL APARTMENTS


import ALPINEFIESTA from "../assets/work/residential_apartments/AlpineFiesta.webp";
import ARTHARIVERA from "../assets/work/residential_apartments/ArthaRivera.webp";
import SHRAVANTHIPALLADIUM from "../assets/work/residential_apartments/ShravanthiPalladium.webp";
import UNISHIREPANAMERA from "../assets/work/residential_apartments/UnishirePanamera.webp";
import VKCDCRYSTAL from "../assets/work/residential_apartments/VKCDCrystal.webp";
import ARTHAONEWORLD from "../assets/work/residential_apartments/ArthaOneWorld.webp";
import GRSANKALPA from "../assets/work/residential_apartments/GRSankalpa.webp";
import UNISHIREATRIUM from "../assets/work/residential_apartments/UnishireAtrium.webp";
import UNISHIREPORTEFENETRE from "../assets/work/residential_apartments/UnishirePorteFenetre.webp";

// EDUCATIONAL

import AIT from "../assets/work/educational/AIT.webp";
import COMEDKARES from "../assets/work/educational/ComedKares.webp";
import GRAMTARANGTRAINING from "../assets/work/educational/GramTarangTraining.webp";
import MDRSKONAJE from "../assets/work/educational/MDRSKonaje.webp";
import MDRSMANJANADY from "../assets/work/educational/MDRSManjanady.webp";
import WESCHOOLWELINGKAR from "../assets/work/educational/weSchoolWElingkar.webp";
import DONBOSCO from "../assets/work/educational/DonBosco.webp";
import IITB from "../assets/work/educational/IITB.webp";
import PUCollege from "../assets/work/educational/PUCollege.webp";

// OTHERS

import BYLAPPAFARMHOUSE from "../assets/work/other/BylappaFamilyFarmHouse.webp";
import JOSEPHRESIDENCE from "../assets/work/other/JosephResidence.webp";
import VPRESIDENCE from "../assets/work/other/VPResidence.webp";
import BYDSHOWROOM from "../assets/work/other/BYDShowroom.webp";
import GAUGE16 from "../assets/work/other/Guage16.webp";
import MATHRUSHREEFARMHOUSE from "../assets/work/other/MathrushreeFarmhouse.webp";
import VSTKIASHOWROOMS from "../assets/work/other/VSTKIAShowrooms.webp";
import VWSHOWROOM from "../assets/work/other/VWShowroom.webp";
import ARUNFARMHOUSE from "../assets/work/other/ArunFarmHouse.webp";


const projects = [
  { id: 1, name: "Molex Phase 1", category: "Industrial" , location: "KIADB Aerospace park, Bengaluru", area: "5,50,000 sq.ft", image: MOLEX },
  { id: 2, name: "Efd Induction", category: "Industrial",location: "KIADB Aerospace park, Bengaluru", area: "1,60,000 sq.ft", image: EFDINDUCTION  },
  { id: 3, name: "Hubner HIN", category: "Industrial", location: "Dabaspete, Bengaluru", area: "1,00,000 sq.ft", image: HUBERHIN },
  { id: 4, name: "Knk Karts", category: "Industrial", location: "Belgaum, Karnataka", area: "", image: KNKKARTS},
  { id: 5, name: "Sun Mobility", category: "Industrial", location: "Doddanakundi, Bengaluru", area: "", image: SUNMOBILITY },
  { id: 6, name: "Biozeen", category: "Industrial", location: "Devanahalli, Bengaluru", area: "", image: BIOZEEN },
  { id: 7, name: "Tld Maini", category: "Industrial", location: "Nelamangala, Bengaluru", area: "", image: TLDMAINI },
  { id: 8, name: "Newtrace", category: "Industrial", location: "Doddanakundi, Bengaluru", area: "", image: NEWTRACE },
  { id: 9, name: "Virya Autonomous", category: "Industrial", location: "Bommasandra, Bengaluru", area: "", image: VIRYAAUTONOMOUS },
  { id: 10, name: "VKC Footprints (walkaroo)", category: "Industrial", location: "Dabaspete, Bengaluru", area: "", image: VKCPRIDEWALKAROO },
  { id: 11, name: "Nutrifood biscuits", category: "Industrial", location: "Ghana, Africa", area: "80,000 sq.ft", image: NUTRIFOODBISCUITS },
  { id: 12, name: "IIIT", category: "Educational", location: "Electronics City, Bengaluru", area: "1,50,000 sq.ft", image: IIIT },
  { id: 13, name: "WE School (Welingkar)", category: "Educational", location: "Electronics City, Bengaluru", area: "", image: WESCHOOLWELINGKAR },
  { id: 14, name: "Don Bosco Institute of Technology", category: "Educational", location: "Kumbalgod, Bengaluru", area: "90,000 sq.ft", image: DONBOSCO },
  { id: 15, name: "Dr. Ambedkar Institute of Technology", category: "Educational", location: "Marathahalli, Bengaluru", area: "2,00,000 sq.ft" , image: AIT},
  { id: 16, name: "Comed Kares Innovation Hub", category: "Educational", location: "Hubballi,Karnataka", area: "", image: COMEDKARES },
  { id: 17, name: "Gram Tarang Training", category: "Educational", location: "Paralakhemundi, Orissa", area: "1,20,000 sq.ft" , image: GRAMTARANGTRAINING},
  { id: 18, name: "MMDRS", category: "Educational", location: "Manjanady, Mangaluru", area: "", image: MDRSMANJANADY },
  { id: 19, name: "MMDRS", category: "Educational", location: "Konaje, Mangaluru", area: "", image: MDRSKONAJE  },
  { id: 20, name: "PU college.", category: "Educational", location: "Konaje, Mangaluru", area: "", image: PUCollege},
  { id: 21, name: "Molex Phase 1", category: "Corporate interiors", location:"KIADB Aerospace park, Bengaluru" , area: "", image: MOLEXPHASE1CORPINTERIORS },
  { id: 22, name: "Sun Mobility", category: "Corporate interiors", location:"Doddanakundi, Bengaluru" , area: "", image: SUNMOBILITYCORPINTERIORS },
  { id: 23, name: "Tld Maini", category: "Corporate interiors", location:"Nelamangala, Bengaluru" , area: "", image: TLDMAINICORPINTERIORS },
  { id: 24, name: "Newtrace", category: "Corporate interiors", location:"Doddanakundi, Bengaluru" , area: "", image: NEWTRACECORPINTERIORS },
  { id: 25, name: "Virya Autonomous", category: "Corporate interiors", location:"Bommasandra, Bengaluru" , area: "", image: VIRYAAUTONOMOUSCORPINTERIORS },
  { id: 26, name: "IIIT", category: "Corporate interiors", location:"Electronics City, Bengaluru" , area: "" , image: IIIT},
  { id: 27, name: "WE School (Welingkar)", category: "Corporate interiors", location:"Electronics City, Bengaluru" , area: "", image: WESCHOOL },
  { id: 28, name: "Comed Kares Innovation Hub", category: "Corporate interiors", location:"Hubballi,Karnataka" , area: "", image: COMEDCARESINNOVATIONHUB },
  { id: 29, name: "Biozeen", category: "Corporate interiors", location:"Devanahalli, Bengaluru" , area: "", image: BIOZEENCORPINTERIORS },
  { id: 30, name: "Tesco – star bazaar", category: "Commercial", location:"Bengaluru & Pune" , area: "1,75,000; 80,000", image: TESCOSTARBAZAAR },
  { id: 31, name: "Decathlon sports india", category: "Commercial", location:"Bengaluru, Mumbai" , area: "" , image: DECATHLON },
  { id: 32, name: "Bharti walmart", category: "Commercial", location:"Tiruppur, Thirupathi, Hubli" , area: "60,000 - 80,000 sq.ft", image: BHARATIWALMART },
  { id: 33, name: "MLCP – LEH", category: "Commercial", location:"Leh, Ladakh" , area: "4,50,000 sq.ft", image: MCPLEH },
  { id: 34, name: "MLCP - PEERKHO", category: "Commercial", location:"Peerkho, Jammu" , area: "7,00,000 sq.ft", image: MCPPEERKHO },
  { id: 35, name: "MLCP - ANANTNAG", category: "Commercial", location:"Anantnag, Kashmir" , area: "76,822 sq.ft", image: MCPANANTHNAG },
  { id: 36, name: "Commercial Complex (for Maratt)", category: "Commercial", location:"Kadubisanahalli, Bengaluru" , area: "53,346 sq.ft", image: MARATT },
  { id: 37, name: "Future Mall", category: "Commercial", location:"" , area: "84,582 sq.ft", image: FUTUREMALL },
  { id: 38, name: "Shravanthi Tech Park", category: "Commercial", location:"Bengaluru & Pune" , area: "1,80,000 sq.ft" , image: SHRAVANTHITECHPARK},
  { id: 39, name: "Unishire Atrium", category: "Residential Apartments", location:"Jakkur, Bengalurue" , area: "", image: UNISHIREATRIUM },
  { id: 40, name: "Unishire Portre Fenetre", category: "Residential Apartments", location:"HSR Layout, Bengaluru" , area: "", image: UNISHIREPORTEFENETRE },
  { id: 41, name: "Unishire Panamera", category: "Residential Apartments", location:"Thanisandra, Bengaluru" , area: "" , image: ALPINEFIESTA },
  { id: 42, name: "Alpine Fiesta", category: "Residential Apartments", location:"Whitefield, Bengaluru" , area: "4,25,000 sq.ft. (B+G+7 floors)", image: ALPINEFIESTA },
  { id: 43, name: "Shravanthi Palladium", category: "Residential Apartments", location:"Kanakapura Road, Bengaluru" , area: "1,80,000 sq.ft. (B+G+12 floors) ", image: SHRAVANTHIPALLADIUM },
  { id: 44, name: "G R Sankalpa", category: "Residential Apartments", location:"Choodasandra, Bengaluru" , area: "4,50,000 sq.ft. (B+G+4 floors)" , image: GRSANKALPA},
  { id: 45, name: "VKCD Crystal", category: "Residential Apartments", location:"Mahadevapura, Bengaluru	" , area: "" , image: VKCDCRYSTAL},
  { id: 46, name: "Artha One world", category: "Residential Apartments", location:"Bannerghatta Road, Bengaluru" , area: "", image: ARTHAONEWORLD },
  { id: 47, name: "Artha Rivera", category: "Residential Apartments", location:"Marsur, Bengaluru" , area: "", image: ARTHARIVERA },
  { id: 48, name: "Jamming Goat", category: "Hospitality", location:"Indiranagar, Bengaluru" , area: "", image: JAMMINGGOAT  },
  { id: 50, name: "Hotel Aurum", category: "Hospitality", location:"Subrahmanya, Karnataka" , area: "1,50,000 sq.ft. (58 Keys) ", image: AURUM },
  { id: 51, name: "Ginger Hotel", category: "Hospitality", location:"Hebbal, Bengaluru" , area: "3,00,000 sq.ft. (118 Keys)", image: GINGER },
  { id: 52, name: "ABS Clinic", category: "Hospitality", location:"Cochin, Kerala" , area: "", image: ABS },
  { id: 53, name: "Apollo Hospital Expansion", category: "Hospitality", location:"Mysore, Karnataka" , area: "", image: APOLLO },
  { id: 54, name: "Ksteps Museum", category: "Hospitality", location:"Madikeri, Coorg, Karnataka	" , area: "", image: KSTEPSMUSEUM },
  { id: 55, name: "Carbon Square Hotel", category: "Hospitality", location:"Hennur road, Bengaluru" , area: "", image: CARBONSQUARE },
  { id: 56, name: "ACE Odyssey", category: "Hospitality", location:"Whitefield, Bengaluru" , area: "", image: ACEODYSSEY },
  { id: 57, name: "Sudhi commercial complex", category: "Hospitality", location:"Bannerughatta Road, Bengaluru" , area: "", image: SUDHICOMMERCIALCOMPLEX },
  { id: 58, name: "VW showroom", category: "Others", location:"Mysore Road, Bengaluru" , area: "", image: VWSHOWROOM },
  { id: 59, name: "Guage 16", category: "Others", location:"Jayanagara, Bengaluru" , area: "" , image: GAUGE16},
  { id: 60, name: "VST KIA showrooms", category: "Others", location:"eshwantpur, Palace Rd & Laggere, Bengaluru" , area: "", image: VSTKIASHOWROOMS },
  { id: 61, name: "V + P residence", category: "Others", location:"Narayanapura, Bengaluru" , area: "" , image: VPRESIDENCE},
  { id: 62, name: "Joseph Residence", category: "Others", location:"Coorg, Karnataka" , area: "" , image: JOSEPHRESIDENCE},
  { id: 63, name: "BYD showroom", category: "Others", location:"Indiranagar, Bengaluru" , area: "", image: BYDSHOWROOM},
  { id: 64, name: "Arun's Farmhouse", category: "Others", location:"Mudigere, Chikamagaluru" , area: "", image: ARUNFARMHOUSE },
  { id: 65, name: "Mathrushree farmhouse", category: "Others", location:"Shivagange, Bengaluru" , area: "", image: MATHRUSHREEFARMHOUSE},
  { id: 66, name: "Bylappa family farmhouse", category: "Others", location:"Shivagange, Bengaluru" , area: "", image: BYLAPPAFARMHOUSE },
];

// Seeded color palette for interior office shots
const gradients = [
  "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  "linear-gradient(135deg, #2d1b69 0%, #11998e 100%)",
  "linear-gradient(135deg, #373b44 0%, #4286f4 100%)",
  "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
  "linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)",
  "linear-gradient(135deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)",
  "linear-gradient(135deg, #005c97 0%, #363795 100%)",
  "linear-gradient(135deg, #1d4350 0%, #a43931 100%)",
];

type Project = {
  name: string;
  location: string;
  area: string;
  image?: string;
};

interface ProjectsProps {
  project: Project;
  index: number;
}

function Projects({ project, index } : ProjectsProps) {
  const [hovered, setHovered] = useState(false);
  const gradient = gradients[index % gradients.length];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "4px",
        cursor: "pointer",
        aspectRatio: "4/3",
        background: gradient,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transform: hovered ? "scale(1.03)" : "scale(1)",
        boxShadow: hovered
          ? "0 20px 40px rgba(0,0,0,0.4)"
          : "0 4px 15px rgba(0,0,0,0.2)",
      }}
    >
      {/* Subtle pattern overlay */}
     <div
      style={{
      position: "absolute",
      inset: 0,
      backgroundImage: project.image
        ? `url(${project.image})`
        :  "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.02) 10px, rgba(255,255,255,0.02) 20px)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      pointerEvents: "none",
    }}
  />

      {/* Office interior illustration - abstract lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.15,
          backgroundImage:
            "linear-gradient(transparent 60%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0.1) 62%, transparent 62%), linear-gradient(90deg, transparent 20%, rgba(255,255,255,0.05) 20%, rgba(255,255,255,0.05) 80%, transparent 80%)",
        }}
      />

      {/* Hover overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.3)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Bottom label bar */}

      <div
        style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "8px 12px",
        background: "rgba(10, 20, 40, 0.82)",
        backdropFilter: "blur(4px)",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      }}
      >
      {/* Line 1 – Title */}
        <span
          style={{
          color: "#f0f0f0",
          fontSize: "15px",
          fontFamily: "'Tahoma', Inter, serif",
          fontWeight: 500,
          letterSpacing: "0.04em",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
        >
          {project.name}
        </span>

        {/* Line 2 – Location (left) & Area (right) */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
        <span
          style={{
            color: "rgba(180,200,255,0.6)",
            fontSize: "9px",
            fontFamily: "'Tahoma', Inter",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
        }}
        >
          {project.location}
        </span>

      </div>
    </div>

     
    {/* Top-right index number */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "12px",
          color: "rgba(255,255,255,0.2)",
          fontSize: "11px",
          fontFamily: "'Tahoma', inter",
          letterSpacing: "0.05em",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>
    </div>
  );
}

const categories = ["Industrial", "Educational", "Corporate interiors", "Commercial", "Residential Apartments", "Hospitality", "Others"];

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("Industrial");

  const filtered = projects.filter((p) => p.category === activeCategory);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        fontFamily: "'Tahoma', inter",
        padding: "0",
      }}
    >
      <style>{`

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .project-grid-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 32px 80px;
        }

        .grid-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 48px;
          border-bottom: 1px solid #ddd;
          padding-bottom: 24px;
          gap: 24px;
          flex-wrap: wrap;
        }

        .grid-title {
          font-family: 'Tahoma', Inter, serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 400;
          color: #10104c;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .grid-title em {
          font-style: italic;
          color: #4a5568;
        }

        .filter-bar {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          align-items: center;
        }

        .filter-btn {
          padding: 5px 14px;
          border: 1px solid #ccc;
          background: transparent;
          color: #555;
          font-family: 'Tahoma', inter;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 2px;
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          background: #1a1a2e;
          color: #fff;
          border-color: #1a1a2e;
        }

        .filter-btn.active {
          background: #1a1a2e;
          color: #fff;
          border-color: #1a1a2e;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        @media (max-width: 1100px) {
          .project-grid { grid-template-columns: repeat(5, 1fr); }
        }
        @media (max-width: 768px) {
          .project-grid { grid-template-columns: repeat(3, 1fr); }
          .project-grid-container { padding: 40px 20px; }
        }
        @media (max-width: 480px) {
          .project-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
        }

        .count-badge {
          font-family: 'Tahoma', inter;
          font-size: 11px;
          color: #999;
          letter-spacing: 0.05em;
          margin-top: 6px;
        }

        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          background: #1a1a2e;
          color: #fff;
          border: none;
          cursor: pointer;
          font-family: 'Tahoma', inter;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border-radius: 2px;
          margin-top: 48px;
          transition: background 0.2s ease;
        }

        .back-btn:hover { background: #0f3460; }
      `}</style>

      <div className="project-grid-container">
        <div className="grid-header">
          <div>
            <h2 className="grid-title">
              Portfolio
            </h2>
            <p className="count-badge">{filtered.length} projects</p>
          </div>
          <div className="filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="project-grid">
          {filtered.map((project, i) => (
            <Projects key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
