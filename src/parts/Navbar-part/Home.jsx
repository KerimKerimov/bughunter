import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './home/home.css';
import Swiper from './home/Swiper';
import Hpd from '../Navbar-part/home/Hpd';


const Home = () => {
  return (
    <>
     {/* <Slide/> */}
     <Swiper/>
    <div className="container-fluid home-section">
     <div className="row">

     <div className="col-md-3"></div>
        <div className="col-md-6">
        <p>BU GÜN HAKLARIN QARŞISINI ALIN</p>
        <h1>Təhlükəsizlik rəqabətlə gücləndirilir</h1>
        <p>Təşkilatınız üçün rəqabətli, qabaqcıl kibertəhlükəsizlik monitorinqi ilə təhdidləri aradan qaldırın. Aparıcı Azərbaycan tədqiqatçıları tərəfindən 24/7 fasiləsiz sınaqla aktivlərinizi hətta ən son hücumlara qarşı qoruyun. Zəiflikləri problemə çevrilməzdən əvvəl azaldın.</p>
        <a href="" className='btn  btn-primary btn-sec'>Hacker kimi qoşul</a>
        <a href="" className='btn btn-primary btn-sec'>Şirkət kimi qoşul</a>
        </div>
        <div className="col-md-3"></div>
       
     </div>
     <Hpd/>
    </div>
    </>
  )
}

export default Home
