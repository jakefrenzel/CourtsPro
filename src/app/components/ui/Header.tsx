import styles from '@/app/components/styles/Header.module.css';
import Image from 'next/image';
  
export default function Header() {
    return (
        <nav className={styles["toggle-btn"]}>
            <div className={styles['branding-container']}>
                <Image
                className={styles["company-logo"]}
                src="/CourtsProLogo.png"
                alt="CourtsPro Logo"
                width={48}
                height={48}
                />
                <p className={styles["company-name"]}>CourtsPro</p>
            </div>
            <div className={styles["company-location-container"]}>
                <p className={styles["facility-location"]}>Tempe | The Picklr</p>
            </div>
            <div className={styles["profile-container"]}>
                <svg
                className={styles["profile-icon"]}
                aria-label="User profile"
                role="image"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                width={512}
                height={512}
                >
                    <g>
                        <circle cx={256} cy={128} r={128} />
                        <path d="M256,298.667c-105.99,0.118-191.882,86.01-192,192C64,502.449,73.551,512,85.333,512h341.333   c11.782,0,21.333-9.551,21.333-21.333C447.882,384.677,361.99,298.784,256,298.667z" />
                    </g>
                </svg>
            </div>
        </nav>
    );
}