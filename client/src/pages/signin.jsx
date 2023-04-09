import React from 'react';
import '../assets/styles/signin.style.scss';
import SignInObject from '../components/sliderObject/signInObject'
import { useEffect, useRef } from "react";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";

const SignIn = () => {
  const [cookies, setCookies] = useCookies();
  const sliderDivRef = useRef();
  const history = useNavigate();

  useEffect(() => {
    if (cookies.w_auth) {
      history('/projectList');
    }
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
      <SignInObject/>
      <SignInObject/>
      <SignInObject/>
    </div>
  );
};

export default SignIn;