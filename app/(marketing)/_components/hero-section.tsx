/* eslint-disable @next/next/no-img-element */
'use client'
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";

import logo from '@/public/logo.svg'
import Link from 'next/link'
import { useState } from 'react'
import { Button, buttonVariants } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

import arcjet from '@/public/companies/arcjet.png'
import kinde from '@/public/companies/kinde.png'
import motion from '@/public/companies/motion.png'
import neon from '@/public/companies/neon.png'
import orpc from '@/public/companies/orpc.webp'
import vercel from '@/public/companies/vercel.svg'
import prisma from '@/public/companies/prisma.svg'
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const menuItems = [
    { name: 'Features', href: '#' },
    { name: 'Solution', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'About', href: '#' },
]

export default function HeroSection() {
    const [menuState, setMenuState] = useState(false)
    const { getUser, isLoading} = useKindeBrowserClient()
    const user = getUser()
    return (
        <>
            <header>
                <nav
                    data-state={menuState && 'active'}
                    className="fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent">
                    <div className="m-auto max-w-5xl px-6">
                        <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                            <div className="flex w-full justify-between lg:w-auto">
                                <Link
                                    href="/"
                                    aria-label="home"
                                    className="flex items-center space-x-2">
                                    <Image className="h-8 w-auto"
                                        src={logo}
                                        alt="Logo"
                                    />
                                    <span className="text-2xl font-bold">ChatFlow</span>
                                </Link>

                                <button
                                    onClick={() => setMenuState(!menuState)}
                                    aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                    className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                    <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                    <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                                </button>
                            </div>

                            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                                <div className="lg:pr-4">
                                    <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                                        {menuItems.map((item, index) => (
                                            <li key={index}>
                                                <Link
                                                    href={item.href}
                                                    className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                    <span>{item.name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                

                                {isLoading ? null : (
                                    <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                                    {user ? (
                                        <>
                                        <Link className={buttonVariants({ variant: "default", size: "sm" })} href="/dashboard">
                                            <span>Dashboard</span>
                                        </Link>

                                        <LogoutLink className={buttonVariants({ variant: "outline", size: "sm" })}>
                                            Logout
                                        </LogoutLink>
                                        </>
                                    ) : (
                                        <>
                                        <LoginLink className={buttonVariants({ variant: "outline", size: "sm" })}>
                                            Login
                                        </LoginLink>
        
                                        <RegisterLink className={buttonVariants({ variant: "default", size: "sm" })}>
                                            Sign Up
                                        </RegisterLink>
                                        </>
                                    )}
                                </div>
                                )}
                                
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                <div
                    aria-hidden
                    className="z-2 absolute inset-0 isolate hidden opacity-50 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>

                <section className="bg-muted/50 dark:bg-background overflow-hidden">
                    <div className="relative mx-auto max-w-5xl px-6 pt-28 lg:pt-24">
                        <div className="relative z-10 mx-auto max-w-2xl text-center">
                            <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">Team collaboration, supercharged with AI</h1>
                            <p className="text-muted-foreground mx-auto my-8 max-w-2xl text-xl">Experience seamless team collaboration with intelligent AI features that help you communicate faster, work smarter, and stay organized effortlessly.</p>

                            <div className="flex items-center justify-center gap-4">
                                <Button
                                    asChild
                                    variant="default"
                                    size="lg">
                                    <Link href="#">
                                        <span className="btn-label">Get Started</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg">
                                    <Link href="#">
                                        <span className="btn-label">Request Demo</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto 2xl:max-w-7xl">
                        <div className="perspective-distant pl-8 lg:pl-44">
                            <div className="lg:h-176 rotate-x-20 mask-b-from-55% mask-b-to-100% mask-r-from-75% skew-x-12 pl-6 pt-6">
                                <Image
                                    className="rounded-(--radius) border shadow-xl dark:hidden"
                                    src="/card.png"
                                    alt="Tailark hero section"
                                    width={2880}
                                    height={2074}
                                />
                                <Image
                                    className="rounded-(--radius) hidden border shadow-xl dark:block"
                                    src="/dark-card.webp"
                                    alt="Tailark hero section"
                                    width={2880}
                                    height={2074}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="dark:bg-background bg-muted/50 relative z-10 py-16">
                    <div className="m-auto max-w-5xl px-6">
                        <h2 className="text-center text-lg font-medium">Your favorite companies are our partners.</h2>
                        <div className="mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 max-w-3xl items-center justify-items-center gap-8">
                            <div className="flex items-center justify-center p-4">
                                <Image
                                    className="mx-auto h-7 object-contain dark:invert"
                                    src={arcjet}
                                    alt="Arcjet Logo"
                                />
                            </div>
                            <div className="flex items-center justify-center p-4">
                                <Image
                                    className="h-5 object-contain dark:invert"
                                    src={kinde}
                                    alt="Kinde Logo"
                                />
                            </div>
                            <div className="flex items-center justify-center p-4">
                                <Image
                                    className="mx-auto h-7 object-contain invert dark:invert-0"
                                    src={motion}
                                    alt="Motion Logo"
                                />
                            </div>
                            <div className="flex items-center justify-center p-4">
                                <Image
                                    className="mx-auto h-7 object-contain invert dark:invert-0"
                                    src={neon}
                                    alt="Neon Logo"
                                />
                            </div>
                            <div className="flex items-center justify-center p-4">
                                <Image
                                    className="mx-auto h-7 object-contain"
                                    src={orpc}
                                    alt="ORPC Logo"
                                />
                            </div>
                            <div className="flex items-center justify-center p-4">
                                <Image
                                    className="mx-auto h-7 object-contain dark:invert"
                                    src={prisma}
                                    alt="Prisma Logo"
                                />
                            </div>
                            <div className="flex items-center justify-center p-4">
                                <Image
                                    className="mx-auto h-4 object-contain dark:invert"
                                    src={vercel}
                                    alt="Vercel Logo"
                                />
                            </div>
                            <div className="flex items-center justify-center p-4">
                                <img
                                    className="h-6 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/openai.svg"
                                    alt="OpenAI Logo"
                                    height="24"
                                    width="auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
