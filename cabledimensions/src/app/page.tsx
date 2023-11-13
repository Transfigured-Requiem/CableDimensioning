import MaxWidthWrapper from "./components/MaxWidthWrapper"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
	return (
		<div className="overflow-hidden h-[94vh] ">
			<MaxWidthWrapper className="mb-12 mt-10 sm:mt-40 flex flex-col items-center justify-center text-center ">
				{/* <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
					<p className="text-sm font-semibold text-gray-700">Calculate now!</p>
				</div> */}
				<div className="flex flex-col space-y-8 space-x-7 lg:flex-row lg:space-y-0 lg:space-x-8">
					{/* Homework #01 */}
					<div className="flex-1">
						<h1 className="max-w-4xl text-4xl font-bold md:text-6xl lg:text-7xl">
							Wound Rotor Motor{" "}
							<span className="text-blue-600">External Resistance </span>
						</h1>
						<div className="mt-20"></div>
						<p className="mt-5 max-w-prose text-zinc-300 opacity-70 sm:text-lg">
							This is a <b>POC</b> solution for the{" "}
							<b>Industrial Power Network</b> Homework for wound rotor induction
							motor starter added <b>external resistance.</b>
						</p>
						<div className="mt-6"></div>
						<Link
							className={buttonVariants({
								size: "lg",
								variant: "outline",
							})}
							href="/resistance"
							target="_blank"
						>
							<b>Homework #01</b> <ArrowRight className="ml-2 h-5 w-5" />
						</Link>
					</div>

					{/* Homework #02 */}
					<div className="flex-1">
						<h1 className="max-w-4xl text-4xl font-bold md:text-6xl lg:text-7xl">
							<span className="text-blue-600">IEC 60364-5-52</span> Cable
							Dimensioning
						</h1>
						<div className="mt-20"></div>
						<p className="mt-5 max-w-prose text-zinc-300 opacity-70 sm:text-lg">
							This is a <b>POC</b> solution for the{" "}
							<b>Industrial Power Network</b> Homework for cable dimensioning
							using the <b>IEC 60364-5-52</b> standard.
						</p>
						<div className="mt-6"></div>
						<Link
							className={buttonVariants({
								size: "lg",
								variant: "outline",
							})}
							href="/calculator"
							target="_blank"
						>
							<b>Homework #02</b> <ArrowRight className="ml-2 h-5 w-5" />
						</Link>
					</div>
				</div>

				<p className="mt-20 max-w-prose sm:text-xl">
					<span className=" text-blue-400">
						Made by: <br />
						<strong> Abderrahmane Taha Khenchouche</strong>
					</span>
				</p>

				{/* <p className="mt-10 text-xl text-zinc-500">
					IEC 60364, known as Electrical Installations for Buildings, is an
					international standard established by the International
					Electrotechnical Commission (IEC). This standard aims to unify and
					standardize the electrical installation requirements for buildings. It
					is also published within the European Union under the name HD
					60364&quot;by CENELEC. Many European countries, including the UK (BS
					7671), have adopted versions of this standard. While they closely
					follow IEC 60364&apos;s structure, they may include additional
					provisions to accommodate historical practices and simplify the use
					and compliance checking by electricians and inspectors. National
					electrical codes and site guides are created to align with the
					principles of IEC 60364 and offer specific rules for individuals
					involved in installing and inspecting electrical systems.
				</p> */}
			</MaxWidthWrapper>

			{/* value proposition section */}

			<div>
				<div className="relative isolate ">
					<div
						aria-hidden="true"
						className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
					>
						<div
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
							className="h-screen overflow-hidden relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
						/>
					</div>
					{/* 
					<div>
						<div className="mx-auto max-w-6xl px-6 lg:px-8">
							<div className="mt-16 flow-root sm:mt-24">
								<div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
									<Image
										src="/Cab.png"
										alt="product preview"
										width={1577}
										height={433}
										quality={100}
										className="rounded-md bg-white/5 p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
									/>
								</div>
							</div>
						</div>
					</div> */}

					<div
						aria-hidden="true"
						className="pointer-events-none absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
					>
						<div
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
							className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr opacity-10 from-[#ff80b5] to-[#9089fc] sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
						/>
					</div>
				</div>
			</div>

			{/* Feature section */}
		</div>
	)
}
