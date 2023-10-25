import React, { useState, useRef, useEffect, Fragment } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import Stepper from "../../components/stepper";

function Screen3() {
  const [phone, setPhone] = useState("");
  const options = [
    {
      value: "en",
      label: (
        <div>
          <img
            src={require("../../assets/en.png")}
            className="languageSelectorImg"
          />
          English
        </div>
      ),
    },
    {
      value: "es",
      label: (
        <div>
          <img
            src={require("../../assets/es.png")}
            className="languageSelectorImg"
          />
          Spanish
        </div>
      ),
    },
  ];
  const defaultOption = options[0];

  const [acceptFirstTerms, setAcceptFirstTerms] = useState({
      checked: true,
      touched: true,
    }),
    [acceptSecondTerms, setAcceptSecondTerms] = useState({
      checked: false,
      touched: false,
    }),
    [acceptThirdTerms, setAcceptThirdTerms] = useState({
      checked: false,
      touched: false,
    }),
    [isSecondStepLoading, setIsSecondStepLoading] = useState(false);

  const firstTermsHandler = () => {
    setAcceptFirstTerms((prev) => ({ checked: !prev.checked, touched: true }));
  };

  const secondTermsHandler = () => {
    setAcceptSecondTerms((prev) => ({ checked: !prev.checked, touched: true }));
  };

  const thirdTermsHandler = () => {
    setAcceptThirdTerms((prev) => ({ checked: !prev.checked, touched: true }));
  };

  //for demo purposes only
  const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const secondStepAsyncFunc = async () => {
    //it can be an API call
    setIsSecondStepLoading(true);
    await timeout(3000);
    setIsSecondStepLoading(false);
    console.log("second step clicked");
  };

  const stepperContent = [
    {
      label: "Name",
      content: <div></div>,
      isError: false,
      isComplete: true,
    },
    {
      label: "Contact Information",
      content: (
        <div>
          <div className="right_center2">
            <h1>2.1. - Phone number</h1>
            <form>
              <PhoneInput
                placeholder="+1 604 123 4567"
                enableSearch={true}
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
              <button>
                ok{"     "}
                <FontAwesomeIcon style={{ marginLeft: 10 }} icon={faCheck} />
              </button>
            </form>
          </div>

          <footer>
            Copyright &copy; 2016-2023 GovAssist, LLC All Rights Reserved
          </footer>
        </div>
      ),
      clicked: () => secondStepAsyncFunc(),
      isLoading: isSecondStepLoading,
      isError: !acceptSecondTerms.checked && acceptSecondTerms.touched,
      isComplete: acceptSecondTerms.checked,
    },
    {
      label: "Gender",
      content: <div></div>,
      isError: !acceptThirdTerms.checked && acceptThirdTerms.touched,
      isComplete: acceptThirdTerms.checked,
    },
    {
      label: "Country of Eligibility",
      content: <div></div>,
      isError: !acceptThirdTerms.checked && acceptThirdTerms.touched,
      isComplete: acceptThirdTerms.checked,
    },
    {
      label: "Photograph",
      content: <div></div>,
      isError: !acceptThirdTerms.checked && acceptThirdTerms.touched,
      isComplete: acceptThirdTerms.checked,
    },
    {
      label: "Mailing Address",
      content: <div></div>,
      isError: !acceptThirdTerms.checked && acceptThirdTerms.touched,
      isComplete: acceptThirdTerms.checked,
    },
    {
      label: "Additional Information",
      content: <div></div>,
      isError: !acceptThirdTerms.checked && acceptThirdTerms.touched,
      isComplete: acceptThirdTerms.checked,
    },
    {
      label: "Payment",
      content: <div></div>,
      isError: !acceptThirdTerms.checked && acceptThirdTerms.touched,
      isComplete: acceptThirdTerms.checked,
    },
  ];

  const submitStepper = () => {
    console.log("submitted");
  };

  return (
    <div className="main screen2">
      {/* <div className="left_side">
        <h1>
          Eletronic <span className="green_text">diversity visa</span> entry
          form
        </h1>
        <h2>Here you will fill all your information to reach your dream.</h2>

        <div className="remaining_time">
          <img
            style={{ marginRight: 15 }}
            alt="remaining time"
            src={require("../../assets/icon_remaining.png")}
            width={28}
            height={31}
          />
          10 minutes to finish
        </div>
        <div className="note">
          This is a full copy of the official DV Lottery application form. Use
          it for training only. You will need to apply on the official website
          www.dvlottery.state.gov when it opens to take part in the lottery.
        </div>
      </div>
      <div className="right_side">
        <header>
          <nav>
            <div className="nav_right_content">
              <Dropdown
                options={options}
                className="language_selector"
                onChange={() => {}}
                value={defaultOption}
                placeholder="Select an option"
              />
              <button>Live chat</button>
            </div>
          </nav>
        </header>
      </div> */}

      <Stepper
        stepperContent={stepperContent}
        submitStepper={submitStepper}
        isVertical
      />
    </div>
  );
}

export default Screen3;
