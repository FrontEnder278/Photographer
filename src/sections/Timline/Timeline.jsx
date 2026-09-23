import './Timeline.scss'
import classNames from 'classnames'
import Section from "@/layouts/Section";
import TimelineCard from "@/sections/Timline/components/TimelineCard";

const Timeline = (props) => {
    const {
        className,
    } = props

    const timelineItems = [
        {
            title: 'Year - 2005',
            description: 'In 2005, Damien acquired her first camera, igniting her passion for photography. She started experimenting with landscapes and candid shots, marking the beginning of her visual storytelling journey.',
        },
        {
            title: 'Year - 2010',
            description: 'Damien pursued a degree in Fine Arts with a focus on photography, refining her technical skills and artistic sensibilities. ',
        },
        {
            title: 'Year - 2012',
            description: 'In 2012, Damien held her first solo exhibition, showcasing her unique perspective on nature and people through her lens.',
        },
        {
            title: 'Year - 2015',
            description: 'Damien officially launched her photography business in 2015, offering portrait, event, and commercial photography services.',
        },
        {
            title: 'Year - 2017',
            description: 'Damien\'s work took her beyond the USA, capturing breathtaking scenes and cultures from around the world.',
        },
        {
            title: 'Year - 2020',
            description: 'In 2020, Damien\'s dedication and creativity earned her several prestigious photography awards, solidifying her position as a visionary photographer.',
        },
    ]

    return (
        <Section
            title="Damien's Journey - A Timeline"
            subtitle='Journey'
            titleId='timline-title'
        >
            <div className="timeline__body">
            {timelineItems.map((timelineItem, index) => (
                <TimelineCard
                    {...timelineItem}
                    key={index}
                />
            ))}
            </div>
        </Section>
    )
}

export default Timeline