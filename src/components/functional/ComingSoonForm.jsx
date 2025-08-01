import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function ComingSoonForm({ formData, big, web3AccessKey }) {
  useEffect(() => {
    import("react-toastify/dist/ReactToastify.css");
  }, []);

  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formParams = new URLSearchParams();
    formParams.append("email", email);
    formParams.append("access_key", web3AccessKey);
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formParams,
        mode: "no-cors",
      });
      toast.success("Form Submitted Succesfully");
      setEmail("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer />
      <div
        className={`relative mx-auto flex w-full items-center  lg:mx-0 lg:mt-5  ${
          big ? "sm:w-[480px] md:w-[556px]" : "lg:max-w-md sm:w-[80%]"
        }`}
      >
        <input
          type="email"
          name="email"
          id="email"
          className="w-full rounded-[50px] border border-ColorBlack bg-white px-5 py-[15px] pr-40 text-base font-semibold text-opacity-50 outline-none"
          placeholder={formData.placeholder}
          value={email}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="btn is-blue is-rounded absolute right-[5px] py-[10px]"
        >
          {formData.buttonText}
        </button>
      </div>
    </form>
  );
}

export default ComingSoonForm;
