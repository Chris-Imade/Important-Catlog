import React from 'react';
import styles from  './skeletonLoader.module.css';

const SkeletonLoader = () => {
    const arr = [{id: "00u889"}, {id: "109uh"}, {id: "20897"}, {id: "3563"}, {id: "4354"}, {id: "53454"}, {id: "6345"}, {id: "7353"}, {id: "83453"}, {id: "9353"}, {id: "10353"}, {id: "11353"}, {id: "12345"}, {id: "133534"}, {id: "143534"}];
    return (
        <div className='flex items-center justify-center w-full flex-wrap'>
            {
                arr.map((item) => (
                    <React.Fragment key={item.id}>
                        <div key={item.id} className={`${styles.loaderBody} flex flex-col justify-between items-start border-gray-200 rounded-md border-6 m-2 h-96 bg-pink-100`}>
                            <div className={`${styles.loaderImg} bg-pink-50 w-full h-60 self-start rounded-md`}></div>
                            <div className={`${styles.LoaderText} bg-pink-50 h-14 ml-4 rounded-md`}></div>
                            <div className={`${styles.LoaderText2} bg-pink-50 h-14 ml-4 rounded-md`}></div>
                            <div className={`${styles.LoaderBtn} bg-pink-50 h-14 mb-4 ml-4 rounded-md`}></div>
                        </div>
                    </React.Fragment>
                ))
            }
        </div>
    )
}
export default SkeletonLoader;