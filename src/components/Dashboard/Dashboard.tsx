import React, { useRef } from 'react'
import Banner from './Banner'
import Introduction from './Introduction'


const Dashboard = () => {
    return (
        <div className="flex flex-col w-full ">
            <Banner />
            <Introduction />
        </div>
    )
}

export default Dashboard