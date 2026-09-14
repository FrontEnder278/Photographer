import './FAQ.scss'
import classNames from 'classnames'
import Section from "@/layouts/Section";
import Accordion from "@/components/Accordion";
import AccordionGroup from "@/components/Accordion/AccordionGroup";

const FAQ = (props) => {
    const {
        className,
    } = props

    const questionItems = [
        'What type of photography do you specialize in?',
        'How can I book a photography session with you?',
        'What equipment do you use for your photography?',
        'Can I request a specific location for a?',
        'What is your editing process like?',
        'Are digital files included in your photography packages?',
        'Do you offer prints of your photographs?',
        'How long does it take to receive the edited photos after a session?',
    ]

    return (
        <Section
            title='Frequently Asked Questions'
            subtitle='FAQ’s'
            titleId='faq’s-title'
        >
            <AccordionGroup columns={2}>
                {questionItems.map((question, index) => (
                    <Accordion
                    title={question}
                    name='questions'
                    id={`question-${index}`}
                    isOpen = {index === 0 }
                    key={index}
                    >
                        <p>
                            I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.
                        </p>
                    </Accordion>
                ))}

                </AccordionGroup>
        </Section>
    )
}

export default FAQ