import { MdAlternateEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

export const navItems = [
    {'id' : '001', 'label' : 'Home', 'url' : '/'},
    {'id' : '002', 'label' : 'Professional Experience', 'url' : '/professional'},
    {'id' : '003', 'label' : 'Projects', 'url' : '/projects'},
    {'id' : '004', 'label' : 'Education', 'url' : '/education'},
    {'id' : '005', 'label' : 'About Me', 'url' : '/about-me'},
]

export const socialItems = [
    {'id' : '001', 'label' : 'linkedin', 'url' : 'https://www.linkedin.com/in/ankush-sangwan-2901/', 'logo' : FaLinkedinIn},
    {'id' : '002', 'label' : 'github', 'url' : 'https://github.com/elucidator007', 'logo' : FiGithub},
    {'id' : '003', 'label' : 'email', 'url' : 'mailto:ankush2000sangwan+work@gmail.com', 'logo' : MdAlternateEmail}
]