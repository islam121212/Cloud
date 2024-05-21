import React from 'react';
import { TiTick } from "react-icons/ti";
import Image from "next/image";
import CloudImage from '../../../public/cloud-hosting.png';
import styles from './hero.module.css'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroleft}>
                <h1 className={styles.title}>Cloud Hosting</h1>
                <p className={styles.desc}>
                    The best hosting solution for online success
                </p>
                <div className={styles.services}>
                    <div className={styles.serviceItem}>
                        <TiTick /> Easy To Use Control Panel
                    </div>
                    <div className={styles.serviceItem}>
                        <TiTick /> Secure Hosting
                    </div>
                    <div className={styles.serviceItem}>
                        <TiTick /> Website Maintenance
                    </div>
                </div>
            </div>
            <div>
                <Image src={CloudImage} alt="cloud" width={500} height={500} />
            </div>
        </div>
    );
}

export default Hero;