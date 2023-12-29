import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import Input from "../../atoms/Input";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

type FormData = {
  name: string;
  email: string;
  message: string;
  context: string;
  agreement: boolean;
  [key: string]: string | boolean;
};

type TouchedFields = { [K in keyof FormData]?: boolean; };

function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [touchedFields, setTouchedFields] = useState<TouchedFields>({});

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    context: '',
    agreement: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    setTouchedFields(prevState => ({ ...prevState, [name]: true }));
  };

  const validateForm = () => {
    for (let key in formData) {
      const typedKey = key as keyof FormData;
      if (formData[typedKey] === '' || formData[typedKey] === false) {
        return false;
      }
    }
    return true;
  };




  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
    } else {
      setIsSubmitDisabled(true);
    }
  };

  useEffect(() => {
    // Disable the submit button if any of the form fields are empty
    const isAnyFieldEmpty = Object.values(formData).some(value => value === '' || value === false);
    setIsSubmitDisabled(isAnyFieldEmpty);
  }, [formData]);

  return (
    <motion.div
      className="main"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <React.Suspense fallback={<div className="container content-contact">
        <h1 className="text-2xl font-bold text-white mb-4">Loading</h1>
      </div>}>
        <section className="hero">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="my-10 p-4">
            <div className="container content-contact">
              <h1 className="text-2xl font-bold text-white mb-4">Contact Us</h1>
              <p className='text-white/90 mb-4'>We welcome your interest in Imperfect and Company. Please fill out the form below to inquire about partnerships, proposals, investment opportunities, or any other inquiries.</p>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
                <Input as="input" type="text" name="name" value={formData.name} onChange={handleChange} label="Your Name" required={true} placeholder="Joe Mama" error={touchedFields.name && !formData.name} errorMessage="" />

                <Input as="input" type="email" name="email" value={formData.email} onChange={handleChange} label="Your Email" required={true} placeholder="joemama32@gmail.com" error={touchedFields.email && !formData.email} errorMessage="" />
                <Input
                  label="Please select the context of your inquiry"
                  required={true}
                  radios={[
                    { as: 'radio', value: 'partnership', label: 'Partnership', name: 'context', checked: formData.context === 'partnership', onChange: handleChange },
                    { as: 'radio', value: 'proposal', label: 'Proposal', name: 'context', checked: formData.context === 'proposal', onChange: handleChange },
                    { as: 'radio', value: 'investment', label: 'Investment', name: 'context', checked: formData.context === 'investment', onChange: handleChange },
                    { as: 'radio', value: 'other', label: 'Other', name: 'context', checked: formData.context === 'other', onChange: handleChange }
                  ]}
                />
                <Input as="textarea" name="message" value={formData.message} onChange={handleChange} label="Your Message" required={true} placeholder="Do you know Joe Mama?" error={touchedFields.message && !formData.message} errorMessage="" />
                <div className="items-end flex flex-col space-y-2 mb-2">
                  <div>
                    <Input as="checkbox" name="agreement" checked={formData.agreement} onChange={handleChange} label="I agree to the terms of service"  required={true} error={touchedFields.agreement && !formData.agreement} errorMessage=""/>
                  </div>
                  <div>
                    <Input as="submit" value="Submit" disabled={isSubmitDisabled} />                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </section>
      </React.Suspense>
      <Footer />
    </motion.div>
  );
}

export default Contact;