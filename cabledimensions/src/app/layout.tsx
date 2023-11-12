import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Navbar from "./components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Cable Sizer",
	description: "Created by A.T. K.",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className="dark">
			<body
				className={cn(
					"min-h-screen font-sans antialiased grainy",
					inter.className
				)}
			>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
