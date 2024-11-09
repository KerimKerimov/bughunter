import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './hpd.css'
import { MdPrivacyTip } from "react-icons/md";
import { IoMdBug } from "react-icons/io";
import { MdStoreMallDirectory } from "react-icons/md";


const Hpd = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
        <div className="col-md-4">

            <div className="icon"><MdStoreMallDirectory  style={{size:'20px'}} /></div>
            <div className="text-hpd">
                <h1>Lorem</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, laudantium.</p>
                </div>
        </div>
        <div className="col-md-4"><div className="icon"><MdPrivacyTip />
        </div>
        <div className="text-hpd">
            <h1>Lorem</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nobis!</p>
        </div>
        </div>
        <div className="col-md-4"><div className="icon"><IoMdBug /></div>
        <div className="text-hpd">
        <h1>Lorem</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nobis!</p>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hpd
