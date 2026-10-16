import Services from '@/sections/Services'
import Photography from "@/sections/Photography";
import Collection from "@/sections/Collection";
import FAQ from "@/sections/FAQ";
import PreFooter from "@/sections/PreFooter";


export const metadata = {
    title: 'Services',
}

export default function () {
    return (
        <>
        <Photography/>
        <Collection/>
        <FAQ/>
        <PreFooter/>
        </>
    )
}
