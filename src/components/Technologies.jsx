import React from 'react'
import { BiLogoPostgresql } from 'react-icons/bi'
import { DiRedis } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { animate, motion } from 'framer-motion'
import { FaJava } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { SiSpringboot } from "react-icons/si";
import { SiMysql } from "react-icons/si";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // For code icon
// import { faCode } from '@fortawesome/free-solid-svg-icons'; // For code icon
import { SiCplusplus } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiNumpy, SiPandas, SiPython } from "react-icons/si";
import { FaChartLine } from "react-icons/fa";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

function Technologies() {
    return (
        <div className='pb-24'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>
                Technologies
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={iconVariants(2.5)}>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={iconVariants(3)}
                    className='p-4'>
                    <TbBrandNextjs className='text-7xl text-white bg-black' />
                </motion.div>
                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={iconVariants(3.5)}
                    className='p-4'>
                    <SiTailwindcss className='text-7xl text-blue-400' />
                </motion.div>
                {/* C++ (code icon) icon */}
                {/* <motion.div
                    initial='initial'
                    animate='animate'
                    variants={iconVariants(4)}
                    className='p-4'>
                    <FontAwesomeIcon icon={faCode} className="text-7xl text-blue-600" />
                </motion.div> */}
                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={iconVariants(4)}
                    className='p-4'>
                    <SiCplusplus className='text-7xl text-blue-500' />
                </motion.div>
                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={iconVariants(5)}
                    className='p-4'>
                    <SiJavascript className='text-7xl text-yellow-300' />
                </motion.div>
                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={iconVariants(6)}
                    className='p-4'>
                    <FaJava className='text-7xl text-red-500' />
                </motion.div>
                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={iconVariants(3)}
                    className='p-4'>
                    <SiSpringboot className='text-7xl text-green-400' />
                </motion.div>
                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={iconVariants(2.5)}
                    className='p-4'>
                    <SiMysql className='text-7xl text-orange-400 ' />
                </motion.div>
                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={iconVariants(3.5)}
                    className='p-4'>
                    <FaGithub className='text-7xl text-white' />
                </motion.div>
                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={iconVariants(4.5)}
                    className='p-4'>
                    <FaGitAlt className='text-7xl text-orange-500' />
                </motion.div>
                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={iconVariants(4)}
                    className='p-4'>
                    <FaNodeJs className='text-7xl text-green-500' />
                </motion.div>
                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={iconVariants(3)}
                    className='p-4'>
                    <SiMongodb className='text-7xl text-green-600' />
                </motion.div>
                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={iconVariants(2.5)}
                    className='p-4'>
                    <SiExpress className='text-7xl text-white bg-black' />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(4)}
                    className="p-4">
                    <SiNumpy className="text-7xl text-blue-400" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(4.5)}
                    className="p-4">
                    <SiPandas className="text-7xl text-purple-500" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(5)}
                    className="p-4">
                    <FaChartLine className="text-7xl text-blue-500" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3.5)}
                    className="p-4">
                    <SiPython className="text-7xl text-yellow-400" />
                </motion.div>

            </motion.div>
        </div>
    )
}

export default Technologies