import React from 'react'
import Link from 'next/link';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"
  import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
const Menu = () => {
  return (
    <div>
         <NavigationMenu>
            <NavigationMenuList>
            <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className='text-2xl xl:text-3xl'>Home</span>
                </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>


            <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className='text-2xl xl:text-3xl'>About</span>
                </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
            <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className='text-2xl xl:text-3xl'>Blog</span>
                </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
            <Link href="/projects" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className='text-2xl xl:text-3xl'>Projects</span>
                </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
            <Link href="/services" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className='text-2xl xl:text-3xl'>Services</span>
                </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>

              
            </NavigationMenuList>
        </NavigationMenu>
    </div>
  )
}

export default Menu