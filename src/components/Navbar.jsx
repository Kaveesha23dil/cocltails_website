import React from 'react'
import gsap from 'gsap'
import { navLinks } from '../../constants/index'
import { useGSAP } from '@gsap/react'

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        });
        navTween.fromTo('nav', {backgroundColor: 'transparent' }, {
            backgroundColor: '#00000050',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
        })
    })
  return (
    <nav>
        <div>
            <a href="#home" className='flex items-center'>
                <img src="/images/logo.png" alt="logo" />
                <p>Velvet Pour</p>
            </a>

            <ul>
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <a href={`#s{link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar