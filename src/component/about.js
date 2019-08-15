import React from 'react'
import aboutimage from '../component/layout/images/about.jpg';

class About extends React.Component {
  render() {
    return <section id="about-us">
    <div class="container">
        <div id="about">
        <div class="row">
             <div class="col-sm-7">        
                        <h1>ABOUT US</h1>
                        <p></p><div>Medicalschoolquizzes.com provides a platform for rapid review of key concepts for all students of healthcare professions.&nbsp; Medical students world wide benefit from high level quizzes that cover key concepts using a tutorial - quiz format.</div><div>Quizzes are built to cover the complete medical school curriculum and provide complete and concise review of concepts before exams.</div><div><br/></div><div>"MSQ Drills" or repeated attempts at the same quiz, can be used to build knowledge or as a last minute review before exams.</div><div><br/></div><div>For questions, to collaborate with peers or to respectfully vent - please join our Forum.</div><p></p>
                        <p><a class="custom-btn" href="#">Contact Us</a></p>                       
            </div>
            <div class="col-sm-5">
                <div class="about_img">
                <img src={aboutimage} class="img-responsive" alt="aboutimage" />
            </div>
            </div>
            </div>
        </div>
</div>
</section>
  }
}
export default About