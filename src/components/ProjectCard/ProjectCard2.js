import "./ProjectCard.scss"
import colombotodo from "../../assets/images/colombotodo.PNG"


export default function ProjectCard1() {


    return (
        <div className="projectcard">
            <h2 className="projectcard__title">ColomboToDo</h2>
            <div className="projectcard__container">
                <img className="projectcard__image" src={colombotodo} alt="Pronounce"></img>
                <div className="projectcard__details">
                    <p className="projectcard__info">NextJS Project - Blog post about local restaurants, event listings and other fun activities that the city of Colombo has to offer.</p>
                    <div className="projectcard__links">
                    <a href="https://github.com/ChathurikaAJ/colombo-to-do-blog" target="_blank" rel="noreferrer"><p className="projectcard__link">Github</p></a>
                    <a href="https://colombotodo.com/" target="_blank" rel="noreferrer"><p className="projectcard__link" >Site</p></a>
                    </div>
                </div>
            </div>
           

   
        </div>
    )
}