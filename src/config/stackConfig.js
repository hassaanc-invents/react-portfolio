import stackImage from "../assets/images/stack.svg";
import HTMLIcon from "../assets/icons/technologies-icons/html.svg"
import CssIcon from "../assets/icons/technologies-icons/css.svg"
import JavaScriptIcon from "../assets/icons/technologies-icons/js.svg"
import JiraIcon from "../assets/icons/technologies-icons/jira.svg"
import TrelloIcon from "../assets/icons/technologies-icons/trello.svg"
import AdobeIcon from "../assets/icons/technologies-icons/adobexd.svg"
import BootstrapIcon from "../assets/icons/technologies-icons/bootstrap.svg"
import FigmaIcon from "../assets/icons/technologies-icons/figma.svg"
import GithubIcon from "../assets/icons/technologies-icons/github.svg"
import ReactIcon from "../assets/icons/technologies-icons/library.png";
import TypeScriptIcon from "../assets/icons/technologies-icons/typescript.png";
import SassIcon from "../assets/icons/technologies-icons/sass.png";
import StateIcon from "../assets/icons/technologies-icons/letter-m.png"
import PhpIcon from "../assets/icons/technologies-icons/php-programming-language.png"
import MySqlIcon from "../assets/icons/technologies-icons/database.png"
import HostingerIcon from "../assets/icons/technologies-icons/cloud-data.png"
import GoDaddyIcon from "../assets/icons/technologies-icons/servers.png"

export const MainiStackInformation = {
  heading: "Tech Stack",
  image: stackImage,
  detailpara:
    "Change is inevitable, so I keep on exploring new technology, learn it in a minimal possible way and then build something out of it to see how well I did :)",
};

export const StackTechnologies = [
  {
    heading:  "Frontend Development",
    skills: [
      {
        name: "HTML 5",
        icon: HTMLIcon
      },
      {
        name: "CSS 3",
        icon: CssIcon
      },
      {
        name: "Saas",
        icon: SassIcon
      },
      // {
      //   name: "Less",
      //   icon: ""
      // },
      {
        name: "Bootstrap 5",
        icon: BootstrapIcon
      },
      {
        name: "JavaScript",
        icon: JavaScriptIcon
      },
      {
        name: "TypeScript",
        icon: TypeScriptIcon
      },
      {
        name: "ReactJs",
        icon: ReactIcon
      },
      {
        name: "ReactTs",
        icon: ReactIcon
      },
      {
        name: "Mobex",
        icon: StateIcon
      }
    ]
  },
  {
    heading:  "Beckend Development & Hostings (C-Panels)",
    skills: [
      {
        name: "PHP",
        icon: PhpIcon
      },
      {
        name: "MySql",
        icon: MySqlIcon
      },
      {
        name: "Hostinger",
        icon: HostingerIcon
      },
      {
        name: "GoDaddy",
        icon: GoDaddyIcon
      }
    ]
  },
  {
    heading:  "Version Controlloing & Task Management",
    skills: [
      {
        name: "Github",
        icon: GithubIcon
      },
      {
        name: "Jira",
        icon: JiraIcon
      },
      {
        name: "Trello",
        icon: TrelloIcon
      }
    ]
  },
  {
    heading:  "UI / UX",
    skills: [
      {
        name: "Figma",
        icon: FigmaIcon
      },
      {
        name: "Adobe XD",
        icon: AdobeIcon
      }      
    ]
  }
]