import React from 'react';
import { motion } from "framer-motion"

const HomeHero = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <div className='flex'>
                        <motion.img
                            animate={{ y: [-100, 0, -50] }}
                            transition={{ repeat: Infinity, duration: 5 }}
                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                            className="max-w-sm rounded-lg shadow-2xl" />
                        <motion.img
                            animate={{ x: [-200, 40, 0] }}
                            transition={{ repeat: Infinity, duration: 5 }}
                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                            className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                </div>
                <div className='flex-1'>
                    <motion.h1
                        animate={{ y: [50, 0] }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl font-bold">Your Job Is Here!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;