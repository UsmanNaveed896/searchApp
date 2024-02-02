import React from 'react'
// import { AppRegistry, View, asset } from 'react-360';
import ThreeSixty from "react-360-view";
import Img from '../../assets/Shape.png'
import Img1 from '../../assets/images-black-1/civic-1.jpg'
import Img2 from '../../assets/images-black-1/civic-2.jpg'
import Img3 from '../../assets/images-black-1/civic-3.jpg'
import Img4 from '../../assets/images-black-1/civic-4.jpg'
import Img5 from '../../assets/images-black-1/civic-5.jpg'
import Img6 from '../../assets/images-black-1/civic-6.jpg'
import Img7 from '../../assets/images-black-1/civic-7.jpg'
import Img8 from '../../assets/images-black-1/civic-8.jpg'
const Productview = () => {
  const carList = [
    {
      id: 1,
      srcImg: Img1,
    },
    {
      id: 2,
      srcImg: Img2,
    },
    {
      id: 3,
      srcImg: Img3,
    },
    {
      id: 4,
      srcImg: Img4,
    },
    {
      id: 5,
      srcImg: Img5,
    },
    {
      id: 6,
      srcImg: Img6,
    },
    {
      id: 7,
      srcImg: Img7,
    },
    {
      id: 8,
      srcImg: Img8,
    },
  ]

  return (
    <>
    {/* {carList?.map((item)=>(
      <div>
    
        <ThreeSixty
          style={{ width: 1000, height: 600 }}
          amount={8}
          imagePath={item.srcImg}
          fileName="civic-{index}.jpg"
        // rotationSpeed={1} // You can adjust the rotation speed as needed
        />
 
      </div>
    ))} */}
      <ThreeSixty
    amount={36}
    imagePath="https://scaleflex.cloudimg.io/width/600/q35/https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/demo/chair-360-36"
    fileName="chair_{index}.jpg?v1"
/>
    </>

  )
}

export default Productview