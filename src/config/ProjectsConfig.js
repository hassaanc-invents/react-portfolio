import { Clipboard, GitHub, Globe } from "react-feather";
import Devolio from "../assets/images/projects/devolio.png";
import PacksTrack from "../assets/images/projects/packstrack.png";
import EBillPK from "../assets/images/projects/ebillpk.png";
import BrandAPK from "../assets/images/projects/apk-website.png";

export const MainProjectInformation = {
  heading: "Projects",
  description: "Stuf I'm loved working with",
};

export const ProjectsCompleted = [
    {
        name: "APK Website",
        source: "Product",
        background: BrandAPK,
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
        name: "EBillPK (Pak Electric Bill Checking)",
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
