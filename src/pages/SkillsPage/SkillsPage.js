import "./SkillsPage.scss"
import Nav from "../../components/Nav/Nav"
import SkillCard from "../../components/SkillCard/SkillCard"

export default function SkillsPage() {

    const skillslist = ["HTML","JavaScript","CSS","Sass","ReactJS","NodeJS","ExpressJS","MySQL"]

    return (
        <div className="page">
            <div className="page__top"></div>
            <div className="page__content">
                <div className="page__container page__container-left">
                    <p className="page__subtitle">Techincal Skills<span className="page__highlight">.</span></p>
                    <div className="skills__container">
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