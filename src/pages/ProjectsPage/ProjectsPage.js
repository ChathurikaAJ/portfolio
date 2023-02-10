import "./ProjectsPage.scss";
import Nav from "../../components/Nav/Nav"
import { Link } from "react-router-dom"
import ProjectCard1 from "../../components/ProjectCard/ProjectCard1";
import ProjectCard2 from "../../components/ProjectCard/ProjectCard2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default function ProjectsPage() {
    return (
        <div className="page">
            <div className="page__top">
                <div className="page__top-left"></div>
                <Link to="/"><p className="page__logo">C</p></Link>
                <div className="page__top-right"></div>
            </div>
            <div className="page__content">
                <div className="page__container page__container-left">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>{<ProjectCard1/>}</SwiperSlide>
                    <SwiperSlide>{<ProjectCard2 />}</SwiperSlide>
                </Swiper>
                </div>
                <Nav />

            </div>
            <div className="page__bottom"></div>


        </div>
    );
}
