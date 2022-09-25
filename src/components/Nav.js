import React from 'react'

const Nav = () => {
    return (
        <nav className='fixed right-0 w-2/5 h-20 pl-4 py-8 rounded-bl-full bg-secondary text-primary-900 text-sm font-medium underline decoration-2 shadow-mine flex justify-between items-center'>
            <div className='group navIteam'>
                <a href="#"><img className='mx-auto' src="https://img.icons8.com/material-outlined/44/440F0F/home--v2.png" alt="home" /></a>
                <p className='hidden group-hover:block'>Home</p>
            </div>

            <div className='group navIteam'>
                <a href="#"><img className='mx-auto' src="https://img.icons8.com/ios-glyphs/44/440F0F/meeting-room.png" alt='meet' /></a>
                <p className='hidden group-hover:block'>Meet</p>
            </div>

            <div className='group navIteam'>
                <a href="#"><img className='mx-auto' src="https://img.icons8.com/small/44/440F0F/calendar.png" alt="calender" /></a>
                <p className='hidden group-hover:block'>Calender</p>
            </div>

            <div className='group navIteam'>
                <a href="#"><img className='mx-auto' src="https://img.icons8.com/external-creatype-outline-colourcreatype/44/440F0F/external-history-video-player-line-set-creatype-outline-colourcreatype.png" alt='history' /></a>
                <p className='hidden group-hover:block'>History</p>
            </div>

            <div className='group navIteam'>
                <a href="#"><img className='mx-auto' src="https://img.icons8.com/ios-glyphs/44/440F0F/system-task--v1.png" alt='DashBoard' /></a>
                <p className='hidden group-hover:block'>DashBoard</p>
            </div>
        </nav>
    )
}

export default Nav;