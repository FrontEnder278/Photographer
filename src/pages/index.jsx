import Hero from "@/sections/Hero";
import Damien from "@/sections/Damien";
import Services from "@/sections/Services";
import Work from "@/sections/Work";
import FAQ from "@/sections/FAQ";
import Reviews from "@/sections/Reviews";
import PreFooter from "@/sections/PreFooter";


export const metadata = {
    title: 'Home',
}

export default function () {
    return (
        <>
        <Hero/>
        <Damien/>
        <Services/>
        <Work/>
        <FAQ/>
        <Reviews/>
        <PreFooter/>
        </>
    )
}
