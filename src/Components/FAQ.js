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
        
        <a className="accordion-link" href={props.link}>
          {props.link}
        </a>
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
            <FAQAccordion title='Where can I sleep?' description='HackMerced will have a “quiet room” where you can sleep, relax, or enjoy some quiet. We recommend that you bring your own sleeping bag. If you are local to Merced, you of course are not obligated to stay on campus for the duration of the event.'/>
          </Grid>
          <Grid xs={6}>
            <FAQAccordion title='Where can I park?' description={<>'For a parking map resource, please see {<a href = "https://www.google.com/maps/d/u/0/edit?mid=1WERa2Y1r-rVHjKGyWQaXwaQ7C9iN7JU&usp=sharing">here</a>}. Parking on campus at UC Merced is free on weekends. On Friday, parking is free after 6 PM in the North Bowl, Scholars and Bellevue Lot - Green Zone lots. Parking is free after 8 PM in the Le Grand Lot, Library Lots 1 and 2 and Bellevue Lot - Gold Zone lots. Note that parking in the University Lot, Calaveras Lot, H Zones and specially marked spaces are prohibited at all times.'</>}/>
          </Grid>
          <Grid xs={6}>
            <FAQAccordion title='Can I participate if I’m in high school?' description='Yes! However, if you are under the age of 18 you must sign the waiver in our registration form with a parent or guardian. Additionally, you are not permitted to sleep in campus buildings overnight (we advise leaving and returning to campus during the day).'/>
          </Grid>
          <Grid xs={6}>
            <FAQAccordion title='How do I win free swag?' description='This year, HackMerced is proud to present HackerPass, an RFID-based attendance tracking system. When you participate in workshops or activities, simply scan the badge you obtain at check-in to earn points which can be redeemed for swag.'/>
          </Grid>
          <Grid xs={6}>
            <FAQAccordion title='Can I apply to judge or mentor?' description={<>If you are interested in mentoring, please apply using {<a href="https://forms.gle/JbsZTo9VYRxuRrJQA">this form</a>}. If you would like to judge a track, please consider sponsoring us by contacting Intiser Aziz at iaziz2@ucmerced.edu.</>}/>
          </Grid>
          <Grid xs={6}>
          <FAQAccordion title='I have more questions!' description='Please join the HackMerced Community Discord server! If you have personal questions, feel free to open a ticket with us there. Please join our Discord at ' link='https://discord.gg/E5GsRt3jPs'>
          </FAQAccordion>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default FAQ;
