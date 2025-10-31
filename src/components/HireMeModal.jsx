import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import Button from "./reusable/Button";
import { useState } from "react";
import emailjs from "emailjs-com";

const selectOptions = [
  "MERN stack Projects",
  "Micro Frontend Projects",
  "E-commerce Projects",
  "React Projects",
  // 'Angular Projects',
];

const HireMeModal = ({ onClose, onRequest }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sendSuccessMsg, setSendSuccessMsg] = useState("");
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDisabledBtn(true);
	console.log("form submitted", e.target);
    emailjs
      .sendForm(
        "service_exgwfmc",
        "template_vj9rhx9",
        e.target,
        "oWHYizbZPcmkaIL9g"
      )
      .then(() => {
        setSendSuccessMsg(
          "Thank You for sending message. will get back to you very soon."
        );
      })
      .catch((error) => {
        setSendSuccessMsg("");
        alert("Failed to send message. Please try again later.");
        setIsDisabledBtn(false);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
    >
      {/* Modal Backdrop */}
      <div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

      {/* Modal Content */}
      <main className="flex flex-col items-center justify-center h-full w-full">
        <div className="modal-wrapper flex items-center z-30">
          <div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
            <div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
              <h5 className=" text-primary-dark dark:text-primary-light text-xl">
                What project are you looking for?
              </h5>
              <button
                onClick={onClose}
                className="px-4 font-bold text-primary-dark dark:text-primary-light"
              >
                <FiX className="text-3xl" />
              </button>
            </div>
            <div className="modal-body p-5 w-full h-full">
             
                <form
                  onSubmit={handleSubmit}
                  className="max-w-xl m-4 text-left"
                >
                  <div className="">
                    <input
                      className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                      id="name"
                      name="name"
                      type="text"
                      required=""
                      placeholder="Name"
                      aria-label="Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mt-6">
                    <input
                      className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                      id="email"
                      name="email"
                      type="text"
                      required=""
                      placeholder="Email"
                      aria-label="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mt-6">
                    <select
                      className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                      id="subject"
                      name="subject"
                      type="text"
                      required=""
                      aria-label="Project Category"
                      value={formData.category}
                      onChange={handleChange}
                    >
                      {selectOptions.map((option) => (
                        <option className="text-normal sm:text-md" key={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-6">
                    <textarea
                      className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                      id="message"
                      name="message"
                      cols="14"
                      rows="6"
                      aria-label="Details"
                      placeholder="Project description"
                      value={formData.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="mt-6 pb-4 sm:pb-1">
                    <span
                      className="px-4
											sm:px-6
											py-2
											sm:py-2.5
											text-white
											bg-indigo-500
											hover:bg-indigo-600
											rounded-md
											focus:ring-1 focus:ring-indigo-900 duration-500"
                      aria-label="Submit Request"
                    >
                      <Button
                        title="Send Request"
                        type="submit"
                        aria-label="Send Request"
                        disabled={isDisabledBtn}
                      />
                    </span>
                  </div>
                </form>
				 {sendSuccessMsg !== "" && (
				<p style={{ color: "green", fontSize: "16px" }}>Thanks You. Your Request send succssfully. Will get in touch with you very soon.</p>
			  )}
              {/* ) : (
                <p style={{ color: "green", fontSize: "16px" }}>
                  {sendSuccessMsg}
                </p>
              )} */}
            </div>
            <div className="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right">
              <span
                onClick={onClose}
                type="button"
                className="px-4
									sm:px-6
									py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light
									rounded-md
									focus:ring-1 focus:ring-indigo-900 duration-500"
                aria-label="Close Modal"
              >
                <Button title="Close" />
              </span>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default HireMeModal;
