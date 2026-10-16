import Portfolio from "@/sections/Portfolio";
import SliderGroup from "@/sections/SliderGroup";
import FAQ from "@/sections/FAQ";
import Reviews from "@/sections/Reviews";


export const metadata = {
    title: "Portfolio",
}

export default function () {
    return (
        <>
        <Portfolio/>
        <SliderGroup/>
        <FAQ/>
        <Reviews/>
        </>
    )
}