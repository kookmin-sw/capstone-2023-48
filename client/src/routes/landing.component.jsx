import React, {useContext} from 'react';
import FirstObject from '../components/slider-object/first-object-component'
import { useEffect, useRef } from "react";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";
import {getUser} from "../action/user-action";
import {UserContext} from "../contexts/user.context";

const Landing = () => {
  const [cookies, setCookies] = useCookies();
  const sliderDivRef = useRef();
  const history = useNavigate();
  const { setCurrentUser } = useContext(UserContext);
  const { setDisplayUserName } = useContext(UserContext);

  useEffect(() => {
    (async function () {
      console.log(cookies);
      if (cookies.w_auth) {
        const response = await getUser(cookies.user_id);
        setCurrentUser({ email: response.data.id, password: response.data.password });
        setDisplayUserName(response.data.id.substring(0, response.data.id.indexOf("@")));
        history('/projectList');
      }
    })();
  }, [cookies]);


  useEffect(() => {
    const wheelHandler = (e) =>{
      e.preventDefault();
      const { deltaY } = e; //Vertical change
      const { scrollTop } = sliderDivRef.current; //Top of scroll
      const pageHeight = window.innerHeight;  //Height of page
      
      // when scroll down
      if(deltaY > 0){
        //scroll down in first page
        if(scrollTop >= 0 && scrollTop < pageHeight) {
          sliderDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        }
        //scroll down in second page 
        else if(scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          sliderDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
        } 
        //scroll down in last page
        else {
          sliderDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
        }

      // when scroll up
      } else {
        // when scroll up first page
        if(scrollTop >= 0 && scrollTop < pageHeight) {
          sliderDivRef.current.scrollTo({
            top:0,
            left:0,
            behavior: "smooth",
          });
        } 
        // when scroll up second page
        else if(scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          sliderDivRef.current.scrollTo({
            top:0,
            left:0,
            behavior: "smooth",
          });
        } 
        // when scroll up last page
        else {
          sliderDivRef.current.scrollTo({
            top:pageHeight,
            left:0,
            behavior: "smooth",
          });
        }
      }
    };
    const sliderDivRefCurrnet = sliderDivRef.current;
    sliderDivRefCurrnet.addEventListener("wheel", wheelHandler);
    return () => {
      sliderDivRefCurrnet.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  return (
    <div ref={sliderDivRef} className="slider">
      <FirstObject/>
      <FirstObject/>
      <FirstObject/>
    </div>
  );
};

export default Landing;