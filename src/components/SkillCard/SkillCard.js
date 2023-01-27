import "./SkillCard.scss"

export default function SkillCard({skill}){
    return(
        <div className="skills__card">
            <p>{skill}</p>
        </div>
    )
}