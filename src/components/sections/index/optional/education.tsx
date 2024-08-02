
// Section structure
import Section from '../../../structure/section';
import Container from '../../../structure/container';

// Section general blocks
import SectionTitle from '../../../blocks/section.title'

// Career scss
import career from '../../../../styles/scss/sections/index/career.module.scss'


export default function Education() {
    return (
        <Section classProp={`${career.section} borderBottom`}>
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle
                    title="Education"
                    preTitle="Formal"
                    subTitle="I am going into my first year at the University of Waterloo in the coop honours math program."
                />
                <section className={career.area}>

                    <article className={career.company}>
                        <div className={career.companyContent}>
        <span className={career.companyHeader}>
            <h3>Velammal College of Engineering and Technology</h3>
            <h5>Madurai, Tamil Nadu</h5>
        </span>
                            <p>I am currently pursuing my MMath Degree in Data Science and Computational Mathematics at UWaterloo. This five-year program offers a comprehensive curriculum that covers various aspects of computer science and allows me to take 5 work terms during my degree..</p>

                        </div>
                        <div className={career.companyAlt}></div>
                    </article>

                </section>
            </Container>
        </Section>
    )
}

