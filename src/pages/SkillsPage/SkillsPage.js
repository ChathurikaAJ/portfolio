import "./SkillsPage.scss"
import Nav from "../../components/Nav/Nav"
import SkillCard from "../../components/SkillCard/SkillCard"
import { Link } from "react-router-dom"

export default function SkillsPage() {

    const skillslist = ["HTML","JavaScript","CSS","Sass","ReactJS","NodeJS","ExpressJS","MySQL", "NextJS", "PHP", "Tailwind CSS"]

    return (
        <div className="page">
            <div className="page__top">
                <div className="page__top-left"></div>
                <Link to="/"><p className="page__logo">C</p></Link>
                <div className="page__top-right"></div>
            </div>
            <div className="page__content">
                <div className="page__container page__container-left skills__container">
                    <p className="page__subtitle">Techincal Skills<span className="page__highlight">.</span></p>
                    <div className="skills__cardbox">
                        {skillslist.map((skill)=>(
                        <SkillCard skill={skill}/>
                    ))}</div>
                </div>
                <Nav/>
            </div>
            <div className="page__bottom"></div>
        </div>
    )
}