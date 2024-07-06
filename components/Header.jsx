"use client";
import React, { useContext } from 'react';
import { CursorContext } from './CursorContext';
import { motion } from 'framer-motion';


const Header = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

    return (
        <motion.header>
            header
        </motion.header>
    );
}

export default Header;
