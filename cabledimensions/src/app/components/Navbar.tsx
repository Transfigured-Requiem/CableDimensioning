import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { Button } from "@/components/ui/button"
import { ArrowRight, HomeIcon } from "lucide-react"
import { Home } from "lucide-react"
import { Cable } from "lucide-react"
import { ThermometerSun } from "lucide-react"
import { Boxes } from "lucide-react"
import { Ruler } from "lucide-react"
const Navbar = () => {
	return (
		<nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-zinc-100/10 bg-zinc-800/10 backdrop-blur-md transition-all">
			<MaxWidthWrapper>
				<div className="flex h-14 items-center justify-between border-b border-zinc-200">
					<Link href="/" className="flex z-40 font-semibold">
						<Home />
						<span className="ml-1 font-bold text-lg">Home</span>
					</Link>

					<div className="hidden items-center space-x-4 sm:flex">
						<Link href="/group" className="flex items-center">
							<Boxes />
							<span className="ml-2">Grouping Constant</span>
						</Link>

						<Link href="/thermal" className="flex items-center">
							<ThermometerSun />
							<span className="ml-2">Thermal Constant</span>
						</Link>

						<Link href="/resistive" className="flex items-center">
							<Cable />
							<span className="ml-2">Resistivity Constant</span>
						</Link>
						<Link href="/sizes" className="flex items-center">
							<Cable />
							<span className="ml-2">Cable Sizes</span>
						</Link>
					</div>
				</div>
			</MaxWidthWrapper>
		</nav>
	)
}

export default Navbar
