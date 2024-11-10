import React from 'react'
import logo from "../assets/tamimLogo.webp"
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

function Navbar() {
    return (
        <nav className='flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <a href="/" aria-label='Home'>
                    {/* <img src={logo} className='mx-2' width={150} height={33} alt="Logo" /> */}
                </a>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href="https://linkedin.com/in/tamem-farhan"
                    target='_black'
                    rel='noopener noreferrer'
                    aria-label='LinkedIn'>
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Iftesham-Farhan-Tamim?tab=repositories"
                    target='_black'
                    rel='noopener noreferrer'
                    aria-label='GitHub'>
                    <FaGithub />
                </a>
                <a href="https://codeforces.com/profile/Iftesham_Farhan_Tamim"
                    target='_black'
                    rel='noopener noreferrer'
                    aria-label='Codeforces'>
                    <SiCodeforces />
                </a>
                <a href="https://leetcode.com/u/iftesham_farhan_tamim/"
                    target='_black'
                    rel='noopener noreferrer'
                    aria-label='LeetCode'>
                    <SiLeetcode />
                </a>     
            </div>
        </nav>
    )
}

export default Navbar