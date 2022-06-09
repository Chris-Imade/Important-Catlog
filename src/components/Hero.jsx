import React from 'react';
import styles from './hero.module.css';
import HeroImg from '../public/heroimg.png';
// import Herotxt from '../public/herotxtleft.png';

const Hero = () => {
  return (
    <div className={`flex flex-col md:flex-row px-10 mt-80 md:mt-32`}>
        <div className={`${styles.hero__left}`}>
        <svg className={`${styles.hero__svg}`} viewBox="0 0 500 153" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M164.067 145.337C163.118 143.104 163.778 140.52 165.713 139.055C174.881 132.113 201.723 112.479 224.199 102.924C246.768 93.3295 280.941 87.0931 292.618 85.143C295.025 84.741 297.362 86.0567 298.317 88.3028V88.3028C299.68 91.5093 297.692 95.1571 294.264 95.7793C280.624 98.2546 249.284 104.546 228.657 113.412C208.679 122 183.325 139.633 172.3 147.606C169.464 149.657 165.436 148.558 164.067 145.337V145.337Z" fill="#5ACC00"/>
            <path d="M195.946 148.44C195.264 146.836 195.748 144.983 197.151 143.948C203.978 138.914 224.324 124.39 241.244 117.197C258.234 109.974 283.873 104.997 292.468 103.453C294.193 103.143 295.876 104.079 296.561 105.692V105.692C297.521 107.951 296.14 110.522 293.73 110.987C283.73 112.917 260.022 117.913 244.401 124.623C229.266 131.125 209.911 144.311 201.746 150.078C199.733 151.5 196.91 150.708 195.946 148.44V148.44Z" fill="#5ACC00"/>
            <path d="M228.689 148.715C228.174 147.502 228.478 146.103 229.479 145.245C233.742 141.586 245.502 131.933 255.675 127.608C265.885 123.267 281.617 121.268 287.375 120.652C288.697 120.511 289.934 121.261 290.454 122.484V122.484C291.269 124.401 289.994 126.573 287.928 126.838C281.077 127.715 267.305 129.851 258.282 133.741C249.556 137.503 238.873 145.664 233.603 149.914C231.974 151.228 229.508 150.641 228.689 148.715V148.715Z" fill="#5ACC00"/>
            <path d="M17.954 62V40.004H41.432V27.914H17.954V16.526H44.63V4.358H5.084V62H17.954ZM82.357 23.78C78.691 20.036 74.323 18.164 69.175 18.164C63.169 18.164 58.099 20.27 54.121 24.482C50.143 28.694 48.115 33.998 48.115 40.394C48.115 46.868 50.065 52.25 54.043 56.618C58.021 60.908 63.091 63.092 69.175 63.092C74.323 63.092 78.691 61.298 82.357 57.632V62H93.901V19.256H82.357V23.78ZM60.361 40.55C60.361 37.43 61.375 34.778 63.403 32.594C65.509 30.41 68.083 29.318 71.281 29.318C74.479 29.318 77.053 30.41 79.159 32.594C81.265 34.778 82.357 37.43 82.357 40.55C82.357 43.67 81.265 46.322 79.159 48.584C77.053 50.846 74.479 51.938 71.281 51.938C68.083 51.938 65.509 50.846 63.403 48.662C61.375 46.4 60.361 43.748 60.361 40.55ZM127.961 18.164C123.047 18.164 118.913 19.958 115.559 23.468V2.642H103.313V62H115.169V57.242C118.523 61.142 122.813 63.092 127.961 63.092C134.045 63.092 139.115 60.986 143.171 56.696C147.227 52.406 149.255 47.102 149.255 40.628C149.255 34.232 147.227 28.928 143.093 24.638C139.037 20.348 133.967 18.164 127.961 18.164ZM136.775 40.55C136.775 43.748 135.761 46.4 133.733 48.584C131.705 50.768 129.131 51.86 125.933 51.86C122.735 51.86 120.161 50.768 118.055 48.584C116.027 46.4 115.013 43.748 115.013 40.55C115.013 37.43 116.027 34.778 118.055 32.672C120.161 30.488 122.735 29.396 125.933 29.396C129.131 29.396 131.705 30.488 133.733 32.672C135.761 34.778 136.775 37.43 136.775 40.55ZM168.727 62V42.5C168.727 33.764 172.705 29.864 178.711 29.864C180.505 29.864 182.299 30.176 184.093 30.8L185.107 19.1C183.157 18.398 181.441 18.086 179.803 18.086C174.733 18.086 170.911 20.348 168.181 24.794V19.256H156.481V62H168.727ZM196.623 14.888C200.679 14.888 203.877 11.768 203.877 7.634C203.877 3.5 200.679 0.379998 196.623 0.379998C192.489 0.379998 189.291 3.5 189.291 7.634C189.291 11.768 192.489 14.888 196.623 14.888ZM202.629 19.256H190.383V62H202.629V19.256ZM232.45 62.936C241.42 62.936 248.986 58.49 252.73 51.548L242.824 45.698C241.03 49.208 237.052 51.704 232.762 51.704C229.642 51.704 227.068 50.69 224.962 48.584C222.934 46.478 221.92 43.748 221.92 40.55C221.92 37.43 222.934 34.778 225.04 32.672C227.146 30.566 229.72 29.474 232.918 29.474C237.208 29.474 240.562 31.502 243.058 35.558L252.808 30.332C249.298 22.532 241.498 18.164 232.684 18.164C225.898 18.164 220.438 20.27 216.148 24.482C211.858 28.616 209.752 33.998 209.752 40.55C209.752 47.102 211.858 52.484 216.07 56.696C220.282 60.83 225.742 62.936 232.45 62.936ZM274.216 63.17C279.52 63.17 283.732 61.844 286.93 59.192C290.128 56.54 291.766 53.186 291.766 49.208C291.766 44.45 289.348 40.862 284.512 38.288C282.328 37.118 278.974 35.87 274.372 34.388C271.798 33.53 270.55 32.36 270.55 30.8C270.55 29.006 272.266 27.758 274.996 27.758C278.428 27.758 281.782 29.084 284.98 31.736L290.674 23.78C286.54 19.802 281.392 17.852 275.23 17.852C270.16 17.852 266.104 19.1 263.062 21.518C260.02 23.936 258.538 27.134 258.538 31.034C258.538 36.104 261.112 39.926 266.182 42.344C267.118 42.812 268.99 43.514 271.72 44.528C274.45 45.464 276.166 46.088 276.79 46.4C278.584 47.258 279.442 48.272 279.442 49.52C279.442 51.626 277.258 52.952 274.216 52.952C269.692 52.952 265.636 51.08 261.97 47.336L255.964 55.292C260.566 60.518 266.65 63.17 274.216 63.17ZM328.394 62H341.342V16.76H357.566V4.358H312.092V16.76H328.394V62ZM375.61 62V39.38C375.61 33.374 379.276 29.318 384.814 29.318C389.884 29.318 393.082 32.828 393.082 39.068V62H405.328V35.87C405.328 30.176 403.69 25.73 400.492 22.688C397.294 19.646 393.394 18.086 388.792 18.086C382.552 18.086 377.56 21.128 375.298 24.95V2.642H363.364V62H375.61ZM446.382 23.78C442.716 20.036 438.348 18.164 433.2 18.164C427.194 18.164 422.124 20.27 418.146 24.482C414.168 28.694 412.14 33.998 412.14 40.394C412.14 46.868 414.09 52.25 418.068 56.618C422.046 60.908 427.116 63.092 433.2 63.092C438.348 63.092 442.716 61.298 446.382 57.632V62H457.926V19.256H446.382V23.78ZM424.386 40.55C424.386 37.43 425.4 34.778 427.428 32.594C429.534 30.41 432.108 29.318 435.306 29.318C438.504 29.318 441.078 30.41 443.184 32.594C445.29 34.778 446.382 37.43 446.382 40.55C446.382 43.67 445.29 46.322 443.184 48.584C441.078 50.846 438.504 51.938 435.306 51.938C432.108 51.938 429.534 50.846 427.428 48.662C425.4 46.4 424.386 43.748 424.386 40.55ZM495.886 49.832C493.156 51.236 490.816 51.938 488.866 51.938C485.044 51.938 483.172 49.52 483.172 44.684V29.396H496.9V19.256H483.172V4.124H471.004V19.256H464.14V29.396H470.926V45.854C470.926 57.32 475.996 63.092 486.214 63.092C491.284 63.092 495.652 61.922 499.318 59.582L495.886 49.832Z" fill="black"/>
            <path d="M22.868 132.014C29.42 132.014 34.724 130.298 38.702 126.944C42.758 123.59 44.786 119.222 44.786 113.996C44.786 107.366 41.354 102.452 34.412 99.332C32.93 98.63 30.746 97.772 27.782 96.602L22.166 94.34C19.046 92.936 17.486 91.22 17.486 89.27C17.486 86.462 19.982 84.512 24.35 84.512C28.64 84.512 34.022 86.462 37.376 89.66L43.772 80.066C38.39 74.996 31.838 72.422 24.194 72.422C18.188 72.422 13.196 74.06 9.374 77.336C5.552 80.612 3.68 84.746 3.68 89.738C3.68 96.056 6.8 100.97 12.962 104.324C14.6 105.182 17.096 106.274 20.372 107.522L25.52 109.394C28.874 110.876 30.512 112.67 30.512 114.776C30.512 117.974 27.314 120.002 22.946 120.002C16.784 120.002 11.558 117.428 7.268 112.358L0.248 121.562C5.552 128.348 13.742 132.014 22.868 132.014ZM76.9366 87.164C71.7886 87.164 67.4206 89.114 63.9106 93.014V88.256H51.8206V148.628H64.0666V126.632C67.5766 130.298 71.8666 132.092 76.9366 132.092C82.9426 132.092 87.9346 129.908 91.9126 125.54C95.8906 121.172 97.9186 115.868 97.9186 109.55C97.9186 103.31 95.9686 98.006 91.9906 93.716C88.0126 89.348 83.0206 87.164 76.9366 87.164ZM85.5166 109.628C85.5166 115.946 80.9926 120.86 74.6746 120.86C68.3566 120.86 63.9106 115.946 63.9106 109.628C63.9106 106.508 64.9246 103.856 66.9526 101.75C68.9806 99.566 71.5546 98.474 74.6746 98.474C77.8726 98.474 80.4466 99.566 82.4746 101.75C84.5026 103.856 85.5166 106.508 85.5166 109.628ZM147.261 108.614C147.261 101.984 145.233 96.758 141.177 92.936C137.121 89.114 131.973 87.164 125.655 87.164C118.947 87.164 113.487 89.27 109.353 93.56C105.219 97.772 103.113 103.076 103.113 109.55C103.113 115.868 105.141 121.172 109.119 125.462C113.175 129.752 118.947 131.936 126.513 131.936C133.767 131.936 140.007 129.986 145.233 126.008L140.397 117.662C136.341 120.392 131.895 121.796 127.059 121.796C120.819 121.796 116.919 119.144 115.437 113.762H146.871C147.105 111.812 147.261 110.096 147.261 108.614ZM125.655 97.07C130.725 97.07 134.313 100.112 135.483 105.026H115.359C116.685 100.034 120.663 97.07 125.655 97.07ZM186.56 92.78C182.894 89.036 178.526 87.164 173.378 87.164C167.372 87.164 162.302 89.27 158.324 93.482C154.346 97.694 152.318 102.998 152.318 109.394C152.318 115.868 154.268 121.25 158.246 125.618C162.224 129.908 167.294 132.092 173.378 132.092C178.526 132.092 182.894 130.298 186.56 126.632V131H198.104V88.256H186.56V92.78ZM164.564 109.55C164.564 106.43 165.578 103.778 167.606 101.594C169.712 99.41 172.286 98.318 175.484 98.318C178.682 98.318 181.256 99.41 183.362 101.594C185.468 103.778 186.56 106.43 186.56 109.55C186.56 112.67 185.468 115.322 183.362 117.584C181.256 119.846 178.682 120.938 175.484 120.938C172.286 120.938 169.712 119.846 167.606 117.662C165.578 115.4 164.564 112.748 164.564 109.55ZM250.494 131L230.526 105.65L249.246 88.256H234.114L219.762 101.906V71.642H207.516V131H219.762V115.556L222.18 113.294L235.674 131H250.494ZM268.123 132.17C273.427 132.17 277.639 130.844 280.837 128.192C284.035 125.54 285.673 122.186 285.673 118.208C285.673 113.45 283.255 109.862 278.419 107.288C276.235 106.118 272.881 104.87 268.279 103.388C265.705 102.53 264.457 101.36 264.457 99.8C264.457 98.006 266.173 96.758 268.903 96.758C272.335 96.758 275.689 98.084 278.887 100.736L284.581 92.78C280.447 88.802 275.299 86.852 269.137 86.852C264.067 86.852 260.011 88.1 256.969 90.518C253.927 92.936 252.445 96.134 252.445 100.034C252.445 105.104 255.019 108.926 260.089 111.344C261.025 111.812 262.897 112.514 265.627 113.528C268.357 114.464 270.073 115.088 270.697 115.4C272.491 116.258 273.349 117.272 273.349 118.52C273.349 120.626 271.165 121.952 268.123 121.952C263.599 121.952 259.543 120.08 255.877 116.336L249.871 124.292C254.473 129.518 260.557 132.17 268.123 132.17Z" fill="black"/>
        </svg>
        <div className="px-5">
            <p className={`${styles.herotxt} text-gray-400`}>
                We sell Ankara up & down, Customized Bags <br />& Wigs.
            </p>
            <div className="">
            <button className={`${styles.hero__btn}`}>Start Shopping Now</button>
            </div>
        </div>
        </div>
        <div className={`${styles.hero__right}`}>
            <img src={HeroImg} alt="hero img" width={620} height={620} />
        </div>
    </div>
  );
};
export default Hero;