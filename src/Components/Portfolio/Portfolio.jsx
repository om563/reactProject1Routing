import { useEffect, useState } from "react"
import "./Portfolio.css"

export default function Portfolio() {
    
    const [selectedImage, setSelectedImage] = useState(null);
    const [check, setcheck] = useState(false);
    
    const openImage = (imageSrc) => {
        setSelectedImage(imageSrc);
        setcheck(true);
      };

      const closeImage = () => {
        setcheck(false);
      };



    return <>
    <section className="portfolio">
    <h1 className="text-center mt-4">PORTFOLIO COMPONENT</h1>

    <div className="d-flex justify-content-center align-items-center text-white mt-3">
          <i className="line"> </i>
          <i className="fa-solid fa-star mx-3 star"></i>
          <i className="line"> </i>
        </div>

        <div className="container">
            <div className="row gy-5  p-4 gx-5 ">

                <div className="col-md-4  ">
                    <div className="item">
                        
                        
                        <div onClick={()=>openImage("imges/poert1.png")}  className="position-relative layerAndImge ">
                            <img src="imges/poert1.png" className="w-100 rounded-3" alt="" />
                            <div className="layer position-absolute rounded-3 d-flex justify-content-center align-items-center">
                                <i  id="imges/poert1.png" className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className="col-md-4  ">
                    <div className="item">
                        
                        <div onClick={()=>openImage("imges/port2.png")}  className="position-relative layerAndImge ">
                            <img src="imges/port2.png" className="w-100 rounded-3" alt="" />
                            <div className="layer position-absolute rounded-3 d-flex justify-content-center align-items-center">
                                <i   className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-4  ">
                    <div className="item">
                        
                        
                        <div onClick={()=>openImage("imges/port3.png")}  className="position-relative layerAndImge ">
                            <img src="imges/port3.png" className="w-100 rounded-3" alt="" />
                            <div className="layer position-absolute rounded-3 d-flex justify-content-center align-items-center">
                                <i  className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-4  ">
                    <div className="item">
                        
                        
                        <div onClick={()=>openImage("imges/poert1.png")}  className="position-relative layerAndImge ">
                            <img src="imges/poert1.png" className="w-100 rounded-3" alt="" />
                            <div className="layer position-absolute rounded-3 d-flex justify-content-center align-items-center">
                                <i  id="imges/poert1.png" className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className="col-md-4  ">
                    <div className="item">
                        
                        <div onClick={()=>openImage("imges/port2.png")}  className="position-relative layerAndImge ">
                            <img src="imges/port2.png" className="w-100 rounded-3" alt="" />
                            <div className="layer position-absolute rounded-3 d-flex justify-content-center align-items-center">
                                <i   className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-4  ">
                    <div className="item">
                        
                        
                        <div onClick={()=>openImage("imges/port3.png")}  className="position-relative layerAndImge ">
                            <img src="imges/port3.png" className="w-100 rounded-3" alt="" />
                            <div className="layer position-absolute rounded-3 d-flex justify-content-center align-items-center">
                                <i  className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    </section>

    {check===true?
    <div onClick={closeImage} className="h-100 w-100 position-fixed top-0 end-0 start-0 bottom-0 sreenLayer d-flex justify-content-center align-items-center">
        <img src={selectedImage} className="sreenlayerIMge" alt="" />
    </div>
    :null }
    
   
    
    </>
}
