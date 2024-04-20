import React from 'react'
import Portfolio from '../components/Portfolio'

const ProjectScreen = () => {
  return (
    <div className="wrapper">
         <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Our Projects</h2>
                        </div>
                        <div className="col-12">
                            <a href="/">Home</a>
                            <a href="/projects">Our Projects</a>
                        </div>
                    </div>
                </div>
            </div>
            <Portfolio/>
    </div>
  )
}

export default ProjectScreen