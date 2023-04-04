import "./ProjectCard.scss"
import wandering from "../../assets/images/wandering.PNG"


export default function ProjectCard3() {


    return (
        <div className="projectcard">
            <h2 className="projectcard__title">Wandering Minds Psychology</h2>
            <div className="projectcard__container">
                <img className="projectcard__image" src={wandering} alt="Pronounce"></img>
                <div className="projectcard__details">
                    <p className="projectcard__info">Client Site - Designed and developed a WordPress website for a Psychology Practice. 
                    Utilized PHP expertise to tailor pages and enhance user experience.</p>
                    <div className="projectcard__links projectcard__links-project3">
                    <a href="https://wanderingmindspsychology.com/" target="_blank" rel="noreferrer"><p className="projectcard__link" >Site</p></a>
                    </div>
                </div>
            </div>
           

   
        </div>
    )
}