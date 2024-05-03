import React, { useState } from 'react';
import { ContactWrapper, EmailSection, Form, Header } from './ContactStyles';
import { FaEnvelope } from 'react-icons/fa';
import { Section } from '../About/AboutStyles';
import HighlightedWords from '../Text/HighlightedWords';

function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);
  const emailAddress = 'ratul.hasan.rahat.bd@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  return (
    <Section id="contact">
      <Header style={{ height: '3rem' }}>
        <HighlightedWords title={'**Contact**'} />
      </Header>
      <ContactWrapper>
        <Form action="https://formsubmit.co/08805eb75a7822e3627a7e50d6649577" method="POST">
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
          <input type="text" name="_subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Message" required />
          <div className="form-buttons">
            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
            <button className="btn btn-secondary" type="reset">
              Clear Form
            </button>
          </div>
          <input type="hidden" name="_next" value={window.location.href + 'thanks.html'} />
          <input type="hidden" name="_template" value="box" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for contacting me! I will reach out to you within 24 hours UTC."
          />
        </Form>
        <EmailSection>
          <span>
            Get In Touch
            <p></p>
          </span>
          <div className="info-section">
            <FaEnvelope />
            <div className="info-content">
              <span>Email</span>
              <span>{emailAddress}</span>
            </div>
          </div>
          <img src="/undraw_envelope.svg"></img>
        </EmailSection>
      </ContactWrapper>
    </Section>
  );
}

export default Contact;
