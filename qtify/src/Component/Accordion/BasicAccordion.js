import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./BasicAccordion.css";

export default function BasicAccordion() {
  return (
    <div className="accordion-container">
      <div className="accordion-width">
        <h1 className="heading-color">FAQs</h1>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="accordion-summary"
          >
            <Typography className="typography">Is Qtify free to use</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Yes!It is 100% free, and has 0% ads!</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            className="accordion-summary"
          >
            <Typography className="typography">
              Can I download and listen to songs offline?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sorry, Unfortunately we don't provide the service to download any
              songs.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
