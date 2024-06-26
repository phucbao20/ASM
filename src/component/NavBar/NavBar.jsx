import React from 'react'

const NavBar = () => {
    return (
        <div className='NavBar h-14 w-full px-20 py-2 sticky-top z-50'>
            <div className='h-full w-full  flex justify-between'>
                <div className='image h-full'>
                    <img className='h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQjDuRopnonYQ8arRpuS6JfND4BaWIesn_r2LnHhVFt27zDbH-d4y7bm3k70w82o1Zes&usqp=CAU" />
                </div>
                <div className=' h-full w-3/4 flex justify-between'>
                    <div className='NavBar_Link h-full w-4/5 flex justify-evenly items-center *:px-2 *:py-1 *:font-semibold *:text-slate-500'>
                        <a href='/'>Home</a>
                        <a href='/About'>About</a>
                        <a href='/Q&A'>Q&A</a>
                        <a href='/Contact'>Contact</a>
                        <a href='/Accout'>Accout</a>
                    </div>
                    <div className='NavBar-btn h-full w-1/5 *:px-4 *:py-2 flex justify-between *:rounded-full *:w-24 *:text-center'>
                        <a href='/Login'>Login</a>
                        <a href='/Singup'>Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
