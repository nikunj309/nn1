import React from 'react'
// import a1 from "../assets/img/proj1/IMG-20240307-WA0125.jpg"
import a4 from "../assets/img1/kitchen/kitchena1.jpeg"
import a1 from "../assets/img1/kitchen/kichenb1.jpeg"
import a2 from "../assets/img1/kitchen/kitchenb2.jpeg"
import a3 from "../assets/img1/kitchen/kitchenb5.jpeg"
// import a4 from "../assets/img/proj1/proj2.jpg"
import a5 from "../assets/img1/kitchen/kitchena2.jpeg"

const ShowProjectDetails = () => {
    return (
        <>

            <div class="container">
                <div class="project">
                    <h2 style={{ justifyContent: "center", textAlign: "center" }}>Kitchen project</h2>
                    <div class="images" style={{ justifyContent: "center", textAlign: "center" }}>

                        <h3>Before Work</h3>
                        <a href="/" data-fancybox="project1" data-caption="Image 1">
                            <img src={a1} alt="Image1 " style={{ width: "28%", height: "28%", margin: "8px" }} />
                        </a>
                        <a href="/" data-fancybox="project1" data-caption="Image 2">
                            <img src={a2} alt="Image 2" style={{ width: "28%", height: "28%", margin: "8px" }} />
                        </a>
                        <a href="/" data-fancybox="project1" data-caption="Image 1">
                            <img src={a3} alt="Image1 " style={{ width: "28%", height: "28%", margin: "8px" }} />
                        </a>

                        <h3>After Work</h3>
                        <a href="/" data-fancybox="project1" data-caption="Image 1">
                            <img src={a4} alt="Image1 " style={{ width: "28%", height: "28%", margin: "8px" }}/>
                        </a>

                        <a href="/" data-fancybox="project1" data-caption="Image 5">
                            <img src={a5} alt="Image 5" style={{ width: "28%", height: "28%", margin: "8px" }}/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowProjectDetails