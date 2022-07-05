import React, {useEffect,useState} from 'react'
import styled from 'styled-components'
import {MdSpaceDashboard} from 'react-icons/md';
import {RiDashboard2Fill} from 'react-icons/ri';
import { FaAddressCard } from 'react-icons/fa';
import {FaTaxi} from 'react-icons/fa'
import {GitHamburgerMenu, GiTwirlCenter} from 'react-icons/gi'
import {BsFillChatTextFill} from 'react-icons/bs';
import {IoSettings} from 'react-icons/io5';
import { FiLogOut } from "react-icons/fi";





const SideBar = () => {
  return (
    <div>
        <Section>
            <div className="top">
                <div className="brand">
                  <FaTaxi  /> 
                 {/* <FaHeadphones /> */}
                 <span>My Taxi</span>
                </div>
                <div className="toggle">
                    <div className="links">
                        <ul>
                            <li>
                                <a href='#'>
                                    <MdSpaceDashboard />
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <RiDashboard2Fill/>
                                    <span>Riders</span>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <FaAddressCard/>
                                    <span>Payment Details</span>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <GiTwirlCenter />
                                    <span>Learning Center</span>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <BsFillChatTextFill />
                                    <span>FAQS</span>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <IoSettings />
                                    <span>Settings</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="logout">
                <a href="#">
                    <FiLogOut/>
                    <span className='logot'>Logout</span>
                </a>
            </div>
        </Section>
    </div>
  )
}

export default SideBar

const Section= styled.section``;