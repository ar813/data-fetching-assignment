import Link from 'next/link'

const NavBar = () => {
    return (
        <div className='w-full h-[60px] px-[20px] py-[10px] shadow-lg bg-[#1e3a8a] flex items-center'>
            <ul className='flex justify-end items-center gap-[20px] w-full text-[white] text-[14px] min-[375px]:text-[16px] sm:text-[18px] font-semibold'>
                <li className='relative group cursor-pointer'>
                    <span className='group-hover:text-yellow-400 transition-colors'><Link href={"/"}>Home</Link></span>
                    <div className='absolute left-0 bottom-[-6px] w-0 h-[3px] bg-yellow-400 group-hover:w-full transition-all'></div>
                </li>
                <li className='relative group cursor-pointer'>    
                    <span className='group-hover:text-yellow-400 transition-colors'><Link href={"/serverSide"}>Server side</Link></span>
                    <div className='absolute left-0 bottom-[-6px] w-0 h-[3px] bg-yellow-400 group-hover:w-full transition-all'></div>
                </li>
                <li className='relative group cursor-pointer'>    
                    <span className='group-hover:text-yellow-400 transition-colors'><Link href={"/clientSide"}>Client Side</Link></span>
                    <div className='absolute left-0 bottom-[-6px] w-0 h-[3px] bg-yellow-400 group-hover:w-full transition-all'></div>
                </li>
            </ul>
        </div>
    )
}

export default NavBar