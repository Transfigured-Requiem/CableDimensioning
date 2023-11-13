import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { buttonVariants } from "./ui/button"
import { HomeIcon } from "lucide-react"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
	MenubarLabel,
} from "@/components/ui/menubar"

import { Cable } from "lucide-react"
import { Activity } from "lucide-react"
import { Thermometer } from "lucide-react"
import { Layers } from "lucide-react"
const Navbar = () => {
	return (
		<nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-blue-100/10 bg-zinc-blue/5 backdrop-blur-md transition-all">
			<MaxWidthWrapper>
				<div className="flex h-14 items-center justify-between border-b border-blue-500">
					<Menubar className="flex border-none hover:text-blue-500">
						<Link href="/" className="flex z-40 font-semibold">
							{/* <Home /> */}
							<span className="ml-1 font-bold text-lg">Home</span>
						</Link>
					</Menubar>

					<Menubar className="flex justify-end border-none space-x-6	">
						<MenubarMenu>
							<MenubarTrigger>
								<Link href="/resistance" className="flex z-40 font-semibold ">
									{/* <Home /> */}
									<span className="ml-1 font-semibold text-base">
										Homework #01
									</span>
								</Link>
							</MenubarTrigger>
						</MenubarMenu>
						<MenubarMenu>
							<MenubarTrigger>
								<Link href="/calculator" className="flex z-40 font-semibold ">
									{/* <Home /> */}
									<span className="ml-1 font-semibold text-base">
										Homework #02
									</span>
								</Link>
							</MenubarTrigger>
						</MenubarMenu>
						<MenubarMenu>
							<MenubarTrigger className="hidden md:block font-semibold text-base ">
								Constant Tables
							</MenubarTrigger>
							<MenubarContent forceMount>
								<MenubarItem inset>
									<Link href="/group" className="flex z-40 font-semibold ">
										{/* <Home /> */}

										<span className="ml-1 font-medium text-md">
											Grouping Constant
										</span>
									</Link>
									<MenubarShortcut>
										<Layers size={20} />
									</MenubarShortcut>
								</MenubarItem>
								{/* <MenubarSeparator /> */}
								<MenubarItem inset>
									<Link href="/thermal" className="flex z-40 font-semibold ">
										{/* <Home /> */}

										<span className="ml-1 font-medium text-md">
											Thermal Constant
										</span>
									</Link>
									<MenubarShortcut>
										<Thermometer size={20} />
									</MenubarShortcut>
								</MenubarItem>
								{/* <MenubarSeparator /> */}
								<MenubarItem inset>
									<Link href="/resistive" className="flex z-40 font-semibold ">
										{/* <Home /> */}

										<span className="ml-1 font-medium text-md">
											Resistivity Constant
										</span>
									</Link>
									<MenubarShortcut>
										<Activity size={20} />
									</MenubarShortcut>
								</MenubarItem>
								<MenubarSeparator />
								<MenubarItem inset>
									<Link href="/sizes" className="flex z-40 font-semibold ">
										{/* <Home /> */}

										<span className="ml-1 font-medium text-md">
											Cable Sizes
										</span>
									</Link>
									<MenubarShortcut>
										<Cable size={20} />
									</MenubarShortcut>
								</MenubarItem>
							</MenubarContent>
						</MenubarMenu>
					</Menubar>
				</div>
			</MaxWidthWrapper>
		</nav>
	)
}

export default Navbar
