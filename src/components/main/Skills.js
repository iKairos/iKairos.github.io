import covidmap from '../../static/images/Manila COVID Active Cases (July - August).gif'
import floodmap from '../../static/images/Agusan del Sur - Bah-bah-Talacogon Road - Typhoon Odette.png'
import phmap from '../../static/images/PHMAP.png'

export default function Skills(){
    return(
        <div className="container">
            <div className="inner1_content">
                <h1>Skills and What I <strike>Can</strike> Do</h1>
                <hr className="small_hr"/>
                <br/>

                <h2>Programming Languages</h2>
                <div className="grid">
                    <div class="grid_item">
                        <div className='center'>
                            <h1>Python</h1>
                        </div>
                        <div className='center'>
                            Python is my most used language through out my career as it empowers me to do efficient 
                            tasks on <span className="highlight">Data Science</span>, <span className="highlight"> 
                            Analysis</span>, and <span className="highlight">Engineering</span>. Most of my projects 
                            are written in Python.
                        </div>
                    </div>
                    <div class="grid_item">
                        <div className='center'>
                            <h1>JavaScript</h1>
                        </div>
                        <div className='center'>
                            The websites I designed and programmed are all done using NodeJS alongside web 
                            frameworks / libraries such as <span className="highlight">React</span>. I also have experience working with <span className="highlight">RESTful APIs</span> for 
                            web applications.
                        </div>
                    </div>
                    <div class="grid_item">
                        <div className='center'>
                            <h1>Java</h1>
                        </div>
                        <div className='center'>
                            I seldom program with Java but I have worked with it for university courses and projects. My last project with Java was 
                            a desktop application for Water Monitor equipped with Machine Learning capabilities.
                        </div>
                    </div>
                    <div class="grid_item">
                        <div className='center'>
                            <h1>C#</h1>
                        </div>
                        <div className='center'>
                            I seldom use C# in my career but I have experience working with it during my residency in the university. The last project 
                            I was involved in using C# was a desktop antivirus program for a university project.
                        </div>
                    </div>
                    <div class="grid_item">
                        <div className='center'>
                            <h1>C++</h1>
                        </div>
                        <div className='center'>
                            Has a shallow knowledge of C++ and have a couple of experience using it with university projects and commissions. I usually program 
                            with C++ when someone commissions me for a C++ project.
                        </div>
                    </div>
                    <div class="grid_item">
                        <div className='center'>
                            <h1>C</h1>
                        </div>
                        <div className='center'>
                            C is one of my introductory programming language in the university. I did a couple of university projects and practical tests with C being
                            the language required.
                        </div>
                    </div>
                </div>
            </div>
            <div className="whiteSection">
                <div className="whiteSection_content">
                    <img src={covidmap} className='img-left'/>
                    <div className='right-text'>
                        <h1>Geographic Information Systems</h1>
                        <p>
                            I find doing visualization and geospatial analysis fun especially when I dive into a pool of data waiting to be 
                            geocoded. Most of my GIS projects are related to COVID-19 cases analysis with data coming from open-sources and 
                            government agencies.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="floatingSection_content">
                <img src={floodmap} className='img-right'/>
                <div className='left-text'>
                    <h1>Remote Sensing</h1>
                    <p>
                        My internship with the <span className='highlight'>Philippine Space Agency (PhilSA)</span> taught me to process satellite images. With remote sensing, I am able to 
                        understand and interpret satellite images and turn it into information that is useful for us in the ground.
                    </p>
                </div>
            </div>

            <div className="whiteSection">
                <div className="whiteSection_content">
                    <img src={phmap} className='img-left'/>
                    <div className='right-text'>
                        <h1>Playing with Data</h1>
                        <p>
                            Exposing yourself in thousands of rows of data makes me giddy of excitement to process, analyze, and visualize the data. Being able 
                            to immerse myself in studying analytics enabled me to understand certain phenomena, circumstance, or hypotheses through thorough 
                            statistical analysis, data processing, data engineering, data storytelling, and more.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}