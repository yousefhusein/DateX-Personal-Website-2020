import * as Constants from "../../../utils/constants";

import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
} from "react-bootstrap";

import React from "react";
import Section from "../../../components/Section/Section";

const budgets = [
  { label: "50$-500$" },
  { label: "500$-1000$" },
  { label: "1000$-1500$" },
];

const defaultFormData = {
  fullname: "",
  email: "",
  budget: 0,
  phone: "",
  message: "",
};

export default function Clients() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState(defaultFormData);

  const handleChange = (event) => {
    setFormData((data) => {
      data[event.target.name] = event.target.value;
      return { ...data };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let message = formData.message.trim() + "\n";
    let url = new URL(`mailto:${Constants.email}`);

    message += `\n- Budget: ${budgets[formData.budget].label}`;
    message += `\n- Email: ${formData.email}`;

    if (formData.phone) {
      message += `\n- Phone Number: ${formData.phone}`;
    }

    url.searchParams.append("subject", `Message From ${formData.fullname}`);
    url.searchParams.append("body", message);
    window.open(url.toString().replace(/\+/g, "%20"), "blank");
  };

  return (
    <Section
      id="contact"
      color="dark"
      label="CONTACT US"
      description="Velit, voluptates sit quas ipsum exercitationem quasi sapiente assumenda repudiandae."
      pattern>
      <form className="row align-items-center" onSubmit={handleSubmit}>
        <div className="col-12 col-md-6 p-2">
          <FormGroup className="mb-4">
            <FormLabel htmlFor="fullname" className="fw-bold">
              FULL NAME: <span className="text-danger">*</span>
            </FormLabel>
            <FormControl
              type="text"
              name="fullname"
              placeholder="John Doe"
              id="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="email" className="fw-bold">
              EMAIL ADDRESS: <span className="text-danger">*</span>
            </FormLabel>
            <FormControl
              type="email"
              name="email"
              placeholder="example@example.com"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
        </div>
        <div className="col-12 col-md-6 p-2">
          <FormGroup className="mb-4">
            <FormLabel htmlFor="budget" className="fw-bold">
              YOUR BUDGET: <span className="text-danger">*</span>
            </FormLabel>
            <FormSelect
              name="budget"
              id="budget"
              value={formData.budget.toString()}
              onChange={handleChange}
              required>
              {budgets.map((budget, index) => (
                <option value={budget.value || index} key={index}>
                  {budget.label}
                </option>
              ))}
            </FormSelect>
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="phone" className="fw-bold">
              PHONE NUMBER:
            </FormLabel>
            <FormControl
              type="tel"
              name="phone"
              id="phone"
              onChange={handleChange}
              value={formData.phone}
              placeholder="+1 (987) 654 3210"
            />
          </FormGroup>
        </div>
        <div className="col-12 p-2">
          <FormGroup className="mt-2">
            <FormLabel htmlFor="phone" className="fw-bold">
              MESSAGE: <span className="text-danger">*</span>
            </FormLabel>
            <textarea
              name="message"
              id="message"
              minLength={200}
              maxLength={1000}
              value={formData.message}
              rows={4}
              onChange={handleChange}
              required
              placeholder="YOUR MESSAGE GOES HERE..."
              className="form-control"
            />
          </FormGroup>
        </div>
        <div className="col-12 p-2">
          <Button
            type="submit"
            size="lg"
            variant="primary"
            className="mt-2 me-2 text-uppercase"
            disabled={isSubmitting}>
            SUBMIT MESSAGE <i className="ri-send-plane-line"></i>
          </Button>
          <Button
            type="reset"
            onClick={() => setFormData(defaultFormData)}
            variant="danger"
            size="lg"
            className="mt-2 me-2 text-uppercase"
            disabled={isSubmitting}>
            RESET <i className="ri-restart-line"></i>
          </Button>
        </div>
      </form>
    </Section>
  );
}
