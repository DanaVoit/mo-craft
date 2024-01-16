import about from "../assets/img/about.png"

export default function About(){


    return(

        <div className="container about">
            <img src={about} width={400}/>
            <div className="about-info">
                <h3 className="about-info-title">твій стиль - твої правила</h3>
                <p className="about-info-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            </div>
        </div>
    )
}