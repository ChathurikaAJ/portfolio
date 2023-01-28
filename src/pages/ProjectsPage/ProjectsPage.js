import "./ProjectsPage.scss";
import Nav from "../../components/Nav/Nav"
import { Link } from "react-router-dom"
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function ProjectsPage() {
    return (
        <div className="page">
            <div className="page__top"><div className="page__top-left"></div><div className="page__top-right"></div></div>
            <Link to="/"><p className="page__logo">C</p></Link>
            <div className="page__content">
                <div className="page__container page__container-left">
                    <ProjectCard />
                </div>
                <Nav />

            </div>
            <div className="page__bottom"></div>


        </div>
    );
}
