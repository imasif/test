import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function Screen2() {
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

  return (
    <div className="main screen2">
      <div className="left_side">
        <div className="logo">
          <img
            alt="logo"
            src={require("../../assets/logo_2.png")}
            width={131}
            height={19}
          />
        </div>
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
        <div className="right_center">
          <div>Are you ready to begin?</div>
          <button>Start!</button>
        </div>

        <footer>
          Copyright &copy; 2016-2023 GovAssist, LLC All Rights Reserved
        </footer>
      </div>
    </div>
  );
}

export default Screen2;
