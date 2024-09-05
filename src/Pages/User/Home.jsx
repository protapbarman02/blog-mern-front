import React from 'react'
 import DynamicButton from "../../Components/Blog/Button";
// import Pragrap from "../../Components/Blog/Pragrap";
// import Heading from "../../Components/Blog/Heading";
// import CardBody from "../../Components/Blog/CardBody";
 import Images from "../../Components/Blog/Images";
// import Card from "../../Components/Blog/Card";

export default function Home() {
    function handleClick(){
        console.log ("hello");
    }
    return (
        <div>Home
            <div className="card">
                <img src="https://www.21kschool.com/ng/wp-content/uploads/sites/28/2023/07/Coding.png" className="card-img-top" alt=".."/>
                    <div className="card-body max-w-5">
                        <h5 className="card-title font-bold">I am Coder</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content......</p>

                    </div>

                <DynamicButton
                    label="Disabled Button"
                    onClick={handleClick}
                    disabled={false}
                    style={{ backgroundColor: 'gray' }}
                />
                
                {/* <Pragrap text=".."/> */}
                {/* <Heading text=".."/> */}
                {/* <CardBody text=".."/> */}
                <Images text=".." />
                {/* <Card text=".." /> */}

                
            </div>
        </div>
        
    )
}

