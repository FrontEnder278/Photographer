import About from "@/sections/About";
import Timeline from "@/sections/Timline";
import Reviews from "@/sections/Reviews";
import PreFooter from "@/sections/PreFooter";


export const metadata = {
    title: 'About Me',
}

export default function () {
    return (
        <>
            <About/>
            <Timeline/>
            <Reviews/>
            <PreFooter/>
        </>
    )
}