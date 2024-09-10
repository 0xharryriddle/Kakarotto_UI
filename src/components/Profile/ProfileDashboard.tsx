import React from 'react'

import ProfileTab from './ProfileTab';
import ProfileHeading from './ProfileHeading';

export default async function ProfileDashboard() {
    return (
        <div className="w-full h-full flex flex-col justify-center p-5 gap-5">
            <ProfileHeading />
            <ProfileTab />
        </div>
    )
}
