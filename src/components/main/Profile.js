import karos from '../../static/images/KAROS.png'

export default function Profile(){
    return(
        <div className="container">
            <div className="inner2_center">
                <img src={karos} width='200px'/>
            </div>

            <div className="inner2_content">
                <h2>John Chris Torres</h2>
                <div className='tag'>
                    <h3>Data Analyst</h3>
                </div>
            </div>
        </div>
    )
}