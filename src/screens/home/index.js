import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Checkbox from "react-custom-checkbox";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "react-accessible-accordion/dist/fancy-example.css";
import CountDown from "../../components/countdown";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function Home() {
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

  const options2 = [
    {
      value: "us",
      label: "United States",
    },
    {
      value: "ca",
      label: "Canada",
    },
  ];

  const options3 = [
    {
      value: "single",
      label: "Single",
    },
    {
      value: "married",
      label: "Married",
    },
  ];

  return (
    <div className="main">
      <header className="App-header">
        <nav>
          <img
            alt="logo"
            src={require("../../assets/logo.png")}
            width={208}
            height={104}
          />

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
        <div className="background_gradient">
          <div className="container">
            <div className="inner_area">
              <div className="left_area">
                <div className="left_area_inner">
                  <h1>Win the right to live</h1>
                  <h2>in the USA!</h2>

                  <div className="mid">
                    <div className="mid_inner">
                      <h3>
                        The official deadline is running, so hurry up and{" "}
                        <a href="#">apply here!</a>
                      </h3>

                      <CountDown />
                    </div>

                    <div className="header_bottom_area_left">
                      <h4>
                        <img
                          className="left_icon"
                          src={require("../../assets/icon_people.png")}
                          alt="left icon"
                        />
                        50,000 people and their families will Live, Work and
                        Study in USA.
                      </h4>
                      <h4>
                        <img
                          className="left_icon"
                          src={require("../../assets/icon_medalstar.png")}
                          alt="left icon"
                        />
                        OFFICIAL USA Governmental program.
                      </h4>
                      <h4>
                        <img
                          className="left_icon"
                          src={require("../../assets/icon_walletcheck.png")}
                          alt="left icon"
                        />
                        Your chance to LIVE, WORK & STUDY in USA.
                      </h4>
                      <h4>
                        <img
                          className="left_icon"
                          src={require("../../assets/icon_clock.png")}
                          alt="left icon"
                        />
                        Simple registration within 5 minutes.
                      </h4>
                      <h4>
                        <img
                          className="left_icon"
                          src={require("../../assets/icon_message.png")}
                          alt="left icon"
                        />
                        Personal support in every step.
                      </h4>
                      <h4>
                        <img
                          className="left_icon"
                          src={require("../../assets/icon_lovely.png")}
                          alt="left icon"
                        />
                        Double chance for married people to win the Green Card.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right_area">
                <form className="green_card_eligibility" action="#">
                  <h4>
                    <div className="icon_arrow">
                      <img
                        src={require("../../assets/icon_arrow_right.png")}
                        alt="green card arrow"
                      />
                    </div>
                    Check now for free
                  </h4>

                  <h1>Green card eligibility</h1>
                  <div className="form_row">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                  </div>
                  <div className="form_row">
                    <input type="text" placeholder="Email Address" />
                    <input type="text" placeholder="Your email again" />
                  </div>
                  <div className="form_row">
                    <Dropdown
                      options={options2}
                      className="form_selector"
                      onChange={() => {}}
                      placeholder="Your country of birth"
                    />
                  </div>
                  <div className="form_row">
                    <Dropdown
                      options={options3}
                      className="form_selector"
                      onChange={() => {}}
                      placeholder="Marital Status"
                    />
                  </div>
                  <div className="form_row">
                    <Checkbox
                      className="agree_checkbox"
                      borderColor="#170A61"
                      labelStyle={{ color: "#01264A" }}
                      icon={
                        <img
                          src={require("../../assets/check.png")}
                          style={{ width: 18 }}
                          alt=""
                        />
                      }
                      style={{ cursor: "pointer", marginRight: 20 }}
                      label="Yes, I finished high school OR I have qualifying training."
                    />
                  </div>
                  <div className="form_row">
                    <button className="continue_button">Continue</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="middle_contents">
        <div className="section_title">
          <img
            style={{ marginRight: 20 }}
            src={require("../../assets/icon_document_text.png")}
            width={22}
            height={22}
          />
          Find the right visa for you!
        </div>
        <div className="inner_container">
          <Accordion>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Diversity Visa Cost</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="visa_costs_wrapper">
                  <div className="main_title_wrapper">
                    <div className="title_wrap">
                      Mandatory Government Fees for Green Cards
                    </div>
                    <div className="button_wrap">
                      <button>Apply now</button>
                    </div>
                  </div>

                  <div className="main_body_wrap">
                    <div className="pricing_table_header">
                      <div>Fee Type</div>
                      <div>Cost (to Applicant Living in the U.S.)</div>
                      <div>Cost (to Applicant Living Abroad)</div>
                    </div>
                    <div className="pricing_table_body">
                      <div className="pricing_table_row">
                        <div>
                          Family Sponsorship Form{" "}
                          <a href="https://www.boundless.com/immigration-resources/form-i-130-explained/">
                            (I-130)
                          </a>
                        </div>
                        <div>$535</div>
                        <div>$535</div>
                      </div>
                      <div className="pricing_table_row">
                        <div>
                          Green Card Application Form{" "}
                          <a href="https://www.figma.com/exit?url=https%3A%2F%2Fwww.boundless.com%2Fimmigration-resources%2Fform-i-485-explained%2F">
                            (I-485)
                          </a>
                        </div>
                        <div>$1140</div>
                        <div>Not required</div>
                      </div>
                      <div className="pricing_table_row">
                        <div>
                          Financial Support Form{" "}
                          <a href="https://www.boundless.com/immigration-resources/what-is-an-affidavit-of-support/">
                            (I-864)
                          </a>
                        </div>
                        <div>$0</div>
                        <div>$120</div>
                      </div>
                      <div className="pricing_table_row">
                        <div>
                          Work Permit Application Form{" "}
                          <a href="https://www.figma.com/exit?url=https%3A%2F%2Fwww.boundless.com%2Fimmigration-resources%2Fform-i765-work-permit%2F">
                            (I-765)
                          </a>{" "}
                          (optional)
                        </div>
                        <div>$0</div>
                        <div>Not required</div>
                      </div>
                      <div className="pricing_table_row">
                        <div>
                          Travel Permit Application Form{" "}
                          <a href="https://www.boundless.com/immigration-resources/the-advance-parole-travel-document-explained/">
                            (I-131)
                          </a>{" "}
                          (optional)
                        </div>
                        <div>$0</div>
                        <div>Not required</div>
                      </div>
                      <div className="pricing_table_row">
                        <div>
                          <a href="https://www.boundless.com/immigration-resources/biometrics-appointment/">
                            Biometrics
                          </a>{" "}
                          (Fingerprints & Photo)
                        </div>
                        <div>$85</div>
                        <div>$0</div>
                      </div>
                      <div className="pricing_table_row">
                        <div>
                          <a href="https://www.boundless.com/immigration-resources/the-ds260-and-ds261-online-forms/">
                            State Department Processing
                          </a>
                        </div>
                        <div>Not required</div>
                        <div>$325</div>
                      </div>
                      <div className="pricing_table_row">
                        <div>
                          <a href="https://www.figma.com/exit?url=https%3A%2F%2Fwww.uscis.gov%2Fforms%2Ffiling-fees%2Fuscis-immigrant-fee">
                            USCIS Immigrant Fee
                          </a>
                        </div>
                        <div>Not required</div>
                        <div>$220</div>
                      </div>
                      <div className="pricing_table_row">
                        <div>
                          <a href="https://www.figma.com/exit?url=https%3A%2F%2Fwww.boundless.com%2Fimmigration-resources%2Fpreparing-for-the-medical-exam%2F">
                            Medical Examination
                          </a>
                        </div>
                        <div>*Varies</div>
                        <div>*Varies</div>
                      </div>
                    </div>
                    <div className="pricing_table_footer">
                      <div>Total</div>
                      <div>$1760</div>
                      <div>$1200</div>
                    </div>
                  </div>
                </div>

                <div className="bottom_note">
                  Fees are subject to change, please use{" "}
                  <a href="https://www.uscis.gov/feecalculator">
                    this calculator
                  </a>
                </div>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Diversity Visa Timeline
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="visa_timeline_wrapper">
                  <div className="main_title_wrapper">
                    <div className="title_wrap">
                      The 2023 Green Card Lottery program year (also called
                      DV2025) follows:
                    </div>
                    <div className="button_wrap">
                      <button>Apply now</button>
                    </div>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Diversity Visa FAQs</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="middle_contents second">
        <div className="section_title_wrap">
          <div className="section_title">
            <img
              style={{ marginRight: 20 }}
              src={require("../../assets/icon_star.png")}
              width={34}
              height={26}
            />
            Our Jobs Speaks for Ourselves
          </div>

          <img
            style={{ marginRight: 20 }}
            src={require("../../assets/trust_pilot_logo.png")}
            width={176}
            height={83}
          />
        </div>

        <div className="testimonial">
          <div className="carousel_wrapper">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={2}
              visibleSlides={1}
            >
              <Slider>
                <Slide index={0}>
                  <div className="review_wrap">
                    <div className="review_title_wrap">
                      <img
                        src={require("../../assets/carosel_image.png")}
                        width={72}
                        height={72}
                      />
                      <div className="review_right_side">
                        <div className="reivewer_name">
                          <a href="https://www.trustpilot.com/users/6481ca53107fe50012c018f0">
                            Yeonseo Choi
                          </a>
                        </div>
                        <div className="review_summery">
                          <div>1 Review</div>
                          <div className="review_location">
                            <img
                              src={require("../../assets/carosel_map_pin.png")}
                              width={24}
                              height={24}
                              style={{ marginRight: 20 }}
                            />{" "}
                            KR
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="review_body_wrap">
                      <div className="body_top">
                        <div className="rating">
                          <img
                            src={require("../../assets/review_full_star.png")}
                            width={36}
                            height={36}
                            style={{ marginRight: 5 }}
                          />
                          <img
                            src={require("../../assets/review_full_star.png")}
                            width={36}
                            height={36}
                            style={{ marginRight: 5 }}
                          />
                          <img
                            src={require("../../assets/review_full_star.png")}
                            width={36}
                            height={36}
                            style={{ marginRight: 5 }}
                          />
                          <img
                            src={require("../../assets/review_full_star.png")}
                            width={36}
                            height={36}
                            style={{ marginRight: 5 }}
                          />
                          <img
                            src={require("../../assets/review_full_star.png")}
                            width={36}
                            height={36}
                            style={{ marginRight: 5 }}
                          />
                        </div>

                        <div className="date_wrap">Mar 20, 2023</div>
                      </div>
                      <div className="body_bottom">
                        <h4>Highly Recommend</h4>
                        <p>
                          Nikka was a very professional consultant, always ready
                          to assist us each step of the way. I was reminded of
                          everthing and I had to take with to the interview and
                          also later to pick my passport and my son`s. Thanks
                          once more, I certainly recommend the service.
                        </p>
                        <h4>Date of experience: February 28, 2023</h4>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className="review_wrap">
                    <div className="review_title_wrap">
                      <img
                        src={require("../../assets/carosel_image.png")}
                        width={72}
                        height={72}
                      />
                      <div className="review_right_side">
                        <div className="reivewer_name">Alexandra Bastos</div>
                        <div className="review_summery">
                          <div>1 Review</div>
                          <div className="review_location">
                            <img
                              src={require("../../assets/carosel_map_pin.png")}
                              width={24}
                              height={24}
                              style={{ marginRight: 20 }}
                            />{" "}
                            KR
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="review_body_wrap">
                      <div className="body_top">
                        <div className="rating">
                          <img
                            src={require("../../assets/review_full_star.png")}
                            width={36}
                            height={36}
                            style={{ marginRight: 5 }}
                          />
                          <img
                            src={require("../../assets/review_full_star.png")}
                            width={36}
                            height={36}
                            style={{ marginRight: 5 }}
                          />
                          <img
                            src={require("../../assets/review_full_star.png")}
                            width={36}
                            height={36}
                            style={{ marginRight: 5 }}
                          />
                          <img
                            src={require("../../assets/review_full_star.png")}
                            width={36}
                            height={36}
                            style={{ marginRight: 5 }}
                          />
                          <img
                            src={require("../../assets/review_full_star.png")}
                            width={36}
                            height={36}
                            style={{ marginRight: 5 }}
                          />
                        </div>

                        <div className="date_wrap">Mar 20, 2023</div>
                      </div>
                      <div className="body_bottom">
                        <h4>The right choice for your immigration need</h4>
                        <p>
                          Nikka was a very professional consultant, always ready
                          to assist us each step of the way. I was reminded of
                          everthing and I had to take with to the interview and
                          also later to pick my passport and my son`s. Thanks
                          once more, I certainly recommend the service.
                        </p>
                        <h4>Date of experience: February 28, 2023</h4>
                      </div>
                    </div>
                  </div>
                </Slide>
              </Slider>
              <div className="button_wrap">
                <ButtonBack>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </ButtonBack>
                <ButtonNext>
                  <FontAwesomeIcon icon={faChevronRight} />
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </div>

        <div className="section_title">
          <h2>Let's keep in touch for news</h2>
        </div>

        <div className="subscriber_wrap">
          <div>
            <h4>
              Subscribe to be the first do receive updates and be in advantage
              on your application proccess
            </h4>
          </div>
          <div>
            <form action="#">
              <input type="text" placeholder="Your email here" />
              <button>
                Subscribe{"    "}
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer_top">
          <img
            alt="logo"
            src={require("../../assets/logo.png")}
            width={208}
            height={104}
          />
          <div className="link_wrap">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Legal Disclaimer</a>
            <a href="#">Refund policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
        <div className="footer_bottom">
          <p>
            Disclaimer: GovAssist is not affiliated with any United States
            government agency or department. Costs for consulting services do
            NOT include any government application, medical examination, filing,
            or biometric fees. This website does not provide legal advice and we
            are not a law firm. None of our customer service representatives are
            lawyers and they also do not provide legal advice. We are a private,
            internet-based travel and immigration consultancy provider dedicated
            to helping individuals travel to the United States. You may apply by
            yourself directly at travel.state.gov or at uscis.gov. GovAssist is
            affiliated with the UT law firm GovAssist Legal which provides legal
            services on immigration matters. Only licensed immigration
            professionals can provide advice, explanation, opinion, or
            recommendation about possible legal rights, remedies, defenses,
            options, selection of forms or strategies.
          </p>
        </div>
      </div>

      <div className="footer_copyright">
        Copyright © 2016-2023 GovAssist, LLC All Rights Reserved
      </div>
    </div>
  );
}

export default Home;
