import React from "react";
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com'
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data,e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_n27tso4', e.target, 'user_5deFDeqcgSKsB3PSCMF2o')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div>
        <div className="navbar-wrap">
            <Navbar/>
        </div>
      <div className="container">
        <h2 className="heading text-center mt-5 py-5">contact me</h2>
        <div className="static_info">
            <h5>Call Me: <a href="tel:+8801794067954">+8801794067954</a></h5>
            <h5>Send Me E-Mail: <a href="mailto:jahidhasan.developer@gmail.com">jahidhasan.developer@gmail.com</a></h5>
            <h4 className="heading my-4" style={{fontWeight:'500'}}>Or send me message</h4>
        </div>
        <form className="pb-5" onSubmit={handleSubmit(onSubmit)}>
          <input className="form-control mb-2 p-3" placeholder="Enter Your Name" {...register("name", { required: true })} />
          {errors.name && <small className="waring">Name is required</small>}

          <input className="form-control mb-2 p-3" placeholder="Enter Subject" {...register("subject", { required: true })} />
          {errors.subject && <small className="waring">Subject is required</small>}

          <input className="form-control mb-2 p-3" placeholder="Enter Your Email" {...register("email", { required: true })} />
          {errors.email && <small className="waring">E-Mail is required</small>}

          <textarea name="message"  className="form-control mb-2 p-2" placeholder="Enter Your Message" style={{height:'200px'}} {...register("message", { required: true })} ></textarea>
          {errors.message && <small className="waring">Message is required</small>}

          <button className="btn btn-success p-3" type='submit'>Send Message</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactMe;
