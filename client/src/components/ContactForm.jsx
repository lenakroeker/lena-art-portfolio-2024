import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const APP_SERVICE_ID = import.meta.env.React_APP_SERVICE_ID;
  const APP_TEMPLATE_ID = import.meta.env.React_APP_TEMPLATE_ID;
  const APP_USER_ID = import.meta.env.React_APP_USER_ID;
  console.log(APP_SERVICE_ID, APP_TEMPLATE_ID, APP_USER_ID);

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast("Thank you for your message! You will recieve a response shortly", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        from_name: name, // Make sure this matches the placeholder in your EmailJS template
        reply_to: email,
        message,
      };

      await emailjs.send(
        APP_SERVICE_ID,
        APP_TEMPLATE_ID,
        templateParams,
        APP_USER_ID
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Wrapper>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Row 1 of form */}
        <InputWrapper>
          <Input
            type="text"
            name="name"
            {...register("name", {
              required: {
                value: true,
                message: "Please enter your name",
              },
              maxLength: {
                value: 30,
                message: "Please use 30 characters or less",
              },
            })}
            className="form-control formInput"
            placeholder="Name"
          ></Input>
          {errors.name && (
            <span className="errorMessage">{errors.name.message}</span>
          )}
          <InputEmail
            type="email"
            name="email"
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
            placeholder="Email address"
          ></InputEmail>
          {errors.email && (
            <span className="errorMessage">
              Please enter a valid email address
            </span>
          )}
        </InputWrapper>
        <div>
          <div>
            <TextArea
              rows={1}
              name="message"
              {...register("message", {
                required: true,
              })}
              placeholder="Message"
            ></TextArea>
            {errors.message && (
              <span className="errorMessage">Please enter a message</span>
            )}
          </div>
        </div>
        <Button type="submit">Send Message</Button>
      </form>
      <ToastContainer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  @media only screen and (min-width: 500px) {
    margin: auto;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 90vw;
  margin: auto 8vw;
  @media only screen and (min-width: 750px) {
    display: flex;
    justify-content: start;
    grid-gap: 20px;
    max-width: 600px;
    margin: auto auto 20px auto;
  }
`;

const Button = styled.button`
  margin: 15px;
  background: black;
  color: white;
  &:hover {
    background: #0bd1f4;
    color: black;
  }
  &:active {
    background: #82ff2f;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  max-width: 350px;

  @media only screen and (min-width: 750px) {
    width: auto;
  }
`;

const InputEmail = styled.input`
  width: 100%;
  margin: 20px 0;
  padding: 10px;
  max-width: 350px;
  @media only screen and (min-width: 750px) {
    margin: 0;
    width: auto;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  margin: auto 8vw;
  padding: 5px;
  height: 8em;
  max-width: 84vw;
  @media only screen and (min-width: 750px) {
    max-width: 600px;
  }
`;
