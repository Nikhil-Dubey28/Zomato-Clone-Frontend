import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='main'>
        <div className='footer-container'> 
            <div className='footer-header'>
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo" className='zomato-logo' />
                {/* <h2>country</h2> */}
            </div>
            <div className='footer-links'>
                <div className='footer-link-container'>
                    <div className='footer-link-header'>
                    <h3>ABOUT ZOMATO</h3>
                    </div>
                    <div className='footer-link-list-container'>
                    <li>Who We Are</li>
                    <li>Blog</li>
                    <li>Work With Us</li>
                    <li>Investor Relations</li>
                    <li>Report Fraud</li>
                    <li>Contact Us</li>
                    </div>
                </div>
                <div className='footer-link-container'>
                    <div className='footer-link-header'>
                    <h3>ZOMAVERSE</h3>
                    </div>
                    <div className='footer-link-list-container'>
                    <li>Zomato</li>
                    <li>Blinkit</li>
                    <li>Feeding India</li>
                    <li>Hyperpure</li>
                    <li>Zomaland</li>
                    </div>
                </div>
                <div className='footer-link-container'>
                    <div className='footer-link-header'>
                    <h3>FOR RESTAURANTS</h3>
                    </div>
                    <div className='footer-link-list-container'>
                    <li>Partner With Us</li>
                    <li>Aps For You</li>
                    
                    </div>
                </div>
                <div className='footer-link-container'>
                    <div className='footer-link-header'>
                    <h3>LEARN MORE</h3>
                    </div>
                    <div className='footer-link-list-container'>
                    <li>Privacy</li>
                    <li>Security</li>
                    <li>Terms</li>
                    <li>Sitemap</li>
                    </div>
                </div>
                <div className='footer-link-container'>
                    <div className='footer-link-header'>
                    <h3>SOCIAL LINKS</h3>
                    </div>
                    <div className='social-link-container'>
                        <img src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png" alt=""  className='social-link-img-linkedin'/>
                        <img src="https://i.pinimg.com/736x/f0/37/d9/f037d9d9dcb24d277af0e792dc317e19.jpg" alt=""  className='social-link-img-insta'/>
                        <img src="https://i.pinimg.com/736x/f0/37/d9/f037d9d9dcb24d277af0e792dc317e19.jpg" alt=""  className='social-link-img'/>
                        <img src="https://i.pinimg.com/736x/f0/37/d9/f037d9d9dcb24d277af0e792dc317e19.jpg" alt=""  className='social-link-img'/>
                        <img src="https://i.pinimg.com/736x/f0/37/d9/f037d9d9dcb24d277af0e792dc317e19.jpg" alt=""  className='social-link-img'/>
                    </div>
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/800px-Download_on_the_App_Store_Badge.svg.png" alt="" className='app-store-img' />
                        <div>
                        <img src="https://www.designpieces.com/assets/wp-content/uploads/2016/02/google-play-badge.png" alt="" className='app-store-img' />
                        </div>
                    </div>
                </div>
                
            </div>
            <div style={{backgroundColor:"grey", height:"1px",marginTop:"40px",marginBottom:"20px"}}>

            </div>
            <p style={{color: "rgb(105, 105, 105)",fontSize:"14px"}}>

            By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Zomato™ Ltd. All rights reserved.

            </p>
        </div>
    </div>
  )
}

export default Footer