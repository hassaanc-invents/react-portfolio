import { Clipboard, GitHub, Globe } from "react-feather";
import Devolio from "../assets/images/projects/devolio.png";
import PacksTrack from "../assets/images/projects/packstrack.png";
import EBillPK from "../assets/images/projects/ebillpk.png";
import ApkWebsite from "../assets/images/projects/apk-website.png";
import BrandEye from "../assets/images/projects/brand-eye.png";
import DnaCards from "../assets/images/projects/dna-cards.png";

export const MainProjectInformation = {
  heading: "Projects",
  description: "Stuf I'm loved working with",
};

export const ProjectsCompleted = [
    {
        name: "Brand Eye (Survey Website)",
        source: "Product",
        background: BrandEye,
        availableOn: [
            {
                title: "Private",
                icon: <Clipboard size={15} className="me-2"/>,
                referTo: ''
            },
            {
                title: "Website",
                icon: <Globe size={15} className="me-2"/>,
                referTo: 'https://brand-eye.identitors.it/'
            }
        ]
    },
    {
        name: "DNA Cards (Digital DNA Platform)",
        source: "Product",
        background: DnaCards,
        availableOn: [
            {
                title: "Private",
                icon: <Clipboard size={15} className="me-2"/>,
                referTo: ''
            },
            {
                title: "Website",
                icon: <Globe size={15} className="me-2"/>,
                referTo: 'https://dna-cards.com/'
            }
        ]
    },
    {
        name: "APK Website (Custom Blog)",
        source: "Product",
        background: ApkWebsite,
        availableOn: [
            {
                title: "Private",
                icon: <Clipboard size={15} className="me-2"/>,
                referTo: '#'
            }
        ]
    },
    {
        name: "Dev Portfolio (ReactJs)",
        source: "Open Source",
        background: Devolio,
        availableOn: [
            {
                title: "Github",
                icon: <GitHub size={15} className="me-2"/>,
                referTo: 'https://github.com/hassaanc-invents/react-portfolio'
            },
            {
                title: "Website",
                icon: <Globe size={15} className="me-2"/>,
                referTo: 'https://hassaan.info/'
            }
        ]
    },
    {
        name: "Packstrack (Php Custom Blog Site)",
        source: "Open Source",
        background: PacksTrack,
        availableOn: [
            {
                title: "Github",
                icon: <GitHub size={15} className="me-2"/>,
                referTo: 'https://github.com/hassaanc-invents/packstrack_web'
            },
            {
                title: "Website",
                icon: <Globe size={15} className="me-2"/>,
                referTo: 'https://packstrack.com/'
            }
        ]
    },
    {
        name: "EBillPK (Electric Bill Checking)",
        source: "Open Source",
        background: EBillPK,
        availableOn: [
            {
                title: "Github",
                icon: <GitHub size={15} className="me-2"/>,
                referTo: 'https://github.com/hassaanc-invents/e-billing'
            },
            {
                title: "Website",
                icon: <Globe size={15} className="me-2"/>,
                referTo: 'https://ebillpk.com/'
            }
        ]
    }
]
