import "./ProjectsPage.scss";
import { Carousel } from "react-responsive-carousel";
import project1 from "../../assets/images/cat-1.jpg"
import project2 from "../../assets/images/cat-2.jpg"
import "react-responsive-carousel/lib/styles/carousel.css";
import Nav from "../../components/Nav/Nav"
import { Link } from "react-router-dom"

export default function ProjectsPage() {
    return (
        <div className="page">
            <div className="page__top"><div className="page__top-left"></div><div className="page__top-right"></div></div>
            <Link to="/"><p className="page__logo">C</p></Link>
            <div className="page__content">
                <div className="page__container page__container-left">
                  

                    <div className="projcets">
                        <Carousel className="projects__container">
                            <div>
                                <img className="projects_image" src={project1} alt="Project: Pronounce" />
                                <p className="projects__details">Pronounce</p>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                                <div>
                                    <p>Github</p>
                                    <p>Site</p>
                                </div>
                            </div>
                            <div>
                                <img className="projects_image" src={project2} alt="Project: Cross It Off" />
                                <p>Cross It Off</p>
                            </div>
                        </Carousel>
                    </div>

                </div>
                <Nav />

            </div>
            <div className="page__bottom"></div>


        </div>
    );
}
