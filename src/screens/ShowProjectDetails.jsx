import React from 'react'
import a1 from "../assets/img/proj1/IMG-20240307-WA0125.jpg"
import a2 from "../assets/img/proj1/IMG-20240307-WA0130.jpg"
import a3 from "../assets/img/proj1/proj1.jpg"
import a4 from "../assets/img/proj1/proj2.jpg"
import a5 from "../assets/img/proj1/IMG-20240307-WA0172.jpg"
import a6 from "../assets/img/proj1/IMG-20240307-WA0176.jpg"

const ShowProjectDetails = () => {
    return (
        <>
            {/* <header style={{justifyContent:"center", textAlign:"center"}}>
                <h1>Projects Showcase</h1>
            </header> */}

            <div class="container">
                <div class="project">
                    <h2 style={{ justifyContent: "center", textAlign: "center" }}>Karen project</h2>
                    <div class="images" style={{ justifyContent: "center", textAlign: "center" }}>

                        <h3>Before Work</h3>
                        <a href="img/proj1/IMG-20240307-WA0125.jpg" data-fancybox="project1" data-caption="Image 1">
                            <img src={a1} alt="Image1 " style={{ width: "28%", height: "28%", margin: "8px" }} />
                        </a>
                        <a href="img/proj1/IMG-20240307-WA0130.jpg" data-fancybox="project1" data-caption="Image 2">
                            <img src={a2} alt="Image 2" style={{ width: "28%", height: "28%", margin: "8px" }} />
                        </a>
                        <a href="img/proj1/proj1.jpg" data-fancybox="project1" data-caption="Image 1">
                            <img src={a3} alt="Image1 " style={{ width: "28%", height: "28%", margin: "8px" }} />
                        </a>

                        <h3>After Work</h3>
                        <a href="img/proj1/proj2.jpg" data-fancybox="project1" data-caption="Image 1">
                            <img src={a4} alt="Image1 " style={{ width: "28%", height: "28%", margin: "8px" }}/>
                        </a>

                        <a href="img/proj1/IMG-20240307-WA0172.jpg" data-fancybox="project1" data-caption="Image 5">
                            <img src={a5} alt="Image 5" style={{ width: "28%", height: "28%", margin: "8px" }}/>
                        </a>
                        <a href="img/proj1/IMG-20240307-WA0176.jpg" data-fancybox="project1" data-caption="Image 6">
                            <img src={a6} alt="Image 6" style={{ width: "28%", height: "28%", margin: "8px" }}/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowProjectDetails