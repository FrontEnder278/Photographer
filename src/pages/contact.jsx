import ContactTouch from "@/sections/ContactTouch";
import ContactForm from "@/sections/ContactForm";
import Form from "@/sections/ContactForm/Form";
import Reviews from "@/sections/Reviews";


export const metadata = {
    title: 'Contact',
}

export default function () {
    return (
        <>
          <ContactTouch/>
          <ContactForm/>
          <Reviews/>
        </>
    )
}