import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import RightArrow from "../Assets/arrow_right.svg";
const FAQAccordion = (props) => {
  return (
    <Accordion disableGutters className="FAQ-accordion">
      <AccordionSummary
        className="FAQ-summary"
        expandIcon={<img src={RightArrow} alt="right arrow" />}
      >
        <h1 className="accordion-title">{props.title}</h1>
      </AccordionSummary>
      <AccordionDetails>
        <p className="accordion-description">
          {props.description}
        </p>
      </AccordionDetails>
    </Accordion>
  );
};

function FAQ() {
  return (
    <div className="FAQ" id="faq">
      <div className="FAQ-container">
        <h2 className="title">frequently asked questions</h2>
        <Grid className="FAQ-grid" container spacing={2} columns={{ xs: 12 }}>
          <Grid xs={6}>
            <FAQAccordion title='What is a hackathon?' description='A hackathon is an event where anyone with an interest in technology can attend to learn about technology, build a project, and share it over the course of a weekend to win prizes and more! People from all disciplines, regardless of their experience in programming, are welcome to participate.'/>
          </Grid>
          <Grid xs={6}>
            <FAQAccordion title='Do I need to know how to code?' description='No! HackMerced will provide learning resources, workshops, activities, and more. You do not have to code to contribute to a team.'/>
          </Grid>
          <Grid xs={6}>
            <FAQAccordion title='I’ve never participated in a hackathon before. Can I participate?' description='Yes! HackMerced welcomes people of all experience levels. We will also have beginner friendly workshops, events, and prize categories for those unacquainted with hackathons.'/>
          </Grid>
          <Grid xs={6}>
            <FAQAccordion title='Will HackMerced VIII be in-person or virtual?' description='HackMerced VIII will be a fully in-person event! It will take place at the University of California, Merced. Workshop resources will also be shared in our Discord server.'/>
          </Grid>
          <Grid xs={6}>
            <FAQAccordion title='How many people can be on a team?' description='Teams can consist of 1-4 people.'/>
          </Grid>
          <Grid xs={6}>
            <FAQAccordion title='Does it cost money?' description='No! HackMerced will be providing food, resources, etc. for free.'/>
          </Grid>
          <Grid xs={6}>
            <FAQAccordion title='What if I don’t have a team?' description='We will be hosting a team mixer where you can meet other individuals looking to form teams! You are also welcome to participate alone, however, we always encourage meeting new people.'/>
          </Grid>
          <Grid xs={6}>
            <FAQAccordion title='Who can attend?' description='All students are eligible to participate. You do not need to attend UC Merced.'/>
          </Grid>
          <Grid xs={6}>
            <FAQAccordion title='Can I apply to judge or mentor?' description='We will be opening mentor applications in the near future for interested parties. If you would like to judge a track, please consider sponsoring us by contacting Intiser Aziz at iaziz2@ucmerced.edu.'/>
          </Grid>
          <Grid xs={6}>
            <FAQAccordion title='I have more questions!' description='Please join the HackMerced Community Discord server! If you have personal questions, feel free to open a ticket with us there.'/>
          </Grid>

        </Grid>
      </div>
    </div>
  );
}

export default FAQ;
