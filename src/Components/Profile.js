import React from "react";
import GitHub from "./GitHub/GitHub";
import "./profile.css";
class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      hasData: false,
      data: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      userName: e.target.value
    });
  };
  sendData = e => {
    e.preventDefault();
    // Github comnponent returns a promise
    GitHub.getUserData(this.state.userName).then(res => {
      this.setState({
        hasData: true,
        data: res
      });
      console.log(this.state.data);
    });
  };

  render() {
    return (
      <div>
        <br />
        <h1>Welcome to the Profile Section</h1>
        <br />
        <form onSubmit={this.sendData} className="profile-form">
          <input
            type="text"
            value={this.state.userName}
            onChange={this.handleSubmit}
            placeholder="Enter GitHub username"
          />
          <button
            type="submit"
            disabled={this.state.userName.length > 0 ? false : true}
          >
            Submit
          </button>
        </form>
        <br />
        {this.state.hasData ? (
          <div className={`repo-card dark`}>
            <img src={this.state.data.avatar_url} alt="Owner Avatar" />
            <a href={this.state.data.html_url}>{this.state.data.login}</a>
            <div className="repo-data">
              <p>
                <svg
                  width="28.028px"
                  height="28.028px"
                  viewBox="0 0 43.028 43.028"
                  style={{ enableBackground: "new 0 0 43.028 43.028" }}
                >
                  <g>
                    <path
                      d="M39.561,33.971l-0.145,0.174c-4.774,5.728-11.133,8.884-17.902,8.884c-6.77,0-13.128-3.155-17.903-8.884l-0.144-0.174
                                            l0.034-0.223c0.922-6.014,4.064-10.845,8.847-13.606l0.34-0.196l0.271,0.284c2.259,2.37,5.297,3.674,8.554,3.674
                                            s6.295-1.305,8.554-3.674l0.271-0.284l0.34,0.196c4.783,2.761,7.925,7.592,8.848,13.606L39.561,33.971z M21.514,21.489
                                            c5.924,0,10.744-4.82,10.744-10.744C32.258,4.821,27.438,0,21.514,0S10.77,4.821,10.77,10.744S15.59,21.489,21.514,21.489z"
                    />
                  </g>
                </svg>{" "}
                {this.state.data.name}
              </p>
              <p>
                <svg
                  version="1.1"
                  id="Capa_1"
                  width="28.028px"
                  height="28.028px"
                  viewBox="0 0 550.795 550.795"
                  style={{ enableBackground: "new 0 0 550.795 550.795" }}
                >
                  <g>
                    <path
                      d="M501.613,491.782c12.381,0,23.109-4.088,32.229-12.16L377.793,323.567c-3.744,2.681-7.373,5.288-10.801,7.767
                                c-11.678,8.604-21.156,15.318-28.434,20.129c-7.277,4.822-16.959,9.737-29.045,14.755c-12.094,5.024-23.361,7.528-33.813,7.528
                                h-0.306h-0.306c-10.453,0-21.72-2.503-33.813-7.528c-12.093-5.018-21.775-9.933-29.045-14.755
                                c-7.277-4.811-16.75-11.524-28.434-20.129c-3.256-2.387-6.867-5.006-10.771-7.809L16.946,479.622
                                c9.119,8.072,19.854,12.16,32.234,12.16H501.613z"
                    />
                    <path
                      d="M31.047,225.299C19.37,217.514,9.015,208.598,0,198.555V435.98l137.541-137.541
                                C110.025,279.229,74.572,254.877,31.047,225.299z"
                    />
                    <path
                      d="M520.059,225.299c-41.865,28.336-77.447,52.73-106.75,73.195l137.486,137.492V198.555
                                C541.98,208.396,531.736,217.306,520.059,225.299z"
                    />
                    <path
                      d="M501.613,59.013H49.181c-15.784,0-27.919,5.33-36.42,15.979C4.253,85.646,0.006,98.97,0.006,114.949
                                c0,12.907,5.636,26.892,16.903,41.959c11.267,15.061,23.256,26.891,35.961,35.496c6.965,4.921,27.969,19.523,63.012,43.801
                                c18.917,13.109,35.368,24.535,49.505,34.395c12.05,8.396,22.442,15.667,31.022,21.701c0.985,0.691,2.534,1.799,4.59,3.269
                                c2.215,1.591,5.018,3.61,8.476,6.107c6.659,4.816,12.191,8.709,16.597,11.683c4.4,2.975,9.731,6.298,15.985,9.988
                                c6.249,3.685,12.143,6.456,17.675,8.299c5.533,1.842,10.655,2.766,15.367,2.766h0.306h0.306c4.711,0,9.834-0.924,15.368-2.766
                                c5.531-1.843,11.42-4.608,17.674-8.299c6.248-3.69,11.572-7.02,15.986-9.988c4.406-2.974,9.938-6.866,16.598-11.683
                                c3.451-2.497,6.254-4.517,8.469-6.102c2.057-1.476,3.605-2.577,4.596-3.274c6.684-4.651,17.1-11.892,31.104-21.616
                                c25.482-17.705,63.01-43.764,112.742-78.281c14.957-10.447,27.453-23.054,37.496-37.803c10.025-14.749,15.051-30.22,15.051-46.408
                                c0-13.525-4.873-25.098-14.598-34.737C526.461,63.829,514.932,59.013,501.613,59.013z"
                    />
                  </g>
                </svg>{" "}
                {this.state.data.email}{" "}
              </p>
              <p>
                <svg
                  version="1.1"
                  width="24.961px"
                  height="24.961px"
                  viewBox="0 0 123.961 123.961"
                  style={{ enableBackground: "new 0 0 123.961 123.961;" }}
                >
                  <g>
                    <path
                      d="M49.8,29.032c3.1-1.3,4.4-5,3-8l-4.9-10.3c-1.4-2.899-4.8-4.2-7.8-2.899c-8.5,3.6-15.8,8.3-21.6,14
                                        C11.4,28.532,6.6,36.232,4,44.732c-2.6,8.601-4,20.3-4,35.2v30.7c0,3.3,2.7,6,6,6h39.3c3.3,0,6-2.7,6-6v-39.3c0-3.301-2.7-6-6-6
                                        H26.5c0.2-10.101,2.6-18.2,7-24.301C37.1,36.133,42.5,32.133,49.8,29.032z"
                    />
                    <path
                      d="M120.4,29.032c3.1-1.3,4.399-5,3-8l-4.9-10.199c-1.4-2.9-4.8-4.2-7.8-2.9c-8.4,3.6-15.601,8.3-21.5,13.9
                                        c-7.101,6.8-12,14.5-14.601,23c-2.6,8.399-3.899,20.1-3.899,35.1v30.7c0,3.3,2.7,6,6,6H116c3.3,0,6-2.7,6-6v-39.3
                                        c0-3.301-2.7-6-6-6H97.1c0.2-10.101,2.601-18.2,7-24.301C107.7,36.133,113.1,32.133,120.4,29.032z"
                    />
                  </g>
                </svg>{" "}
                {this.state.data.bio}
              </p>
              <p>
                <svg
                  version="1.1"
                  width="24.961px"
                  height="24.961px"
                  viewBox="0 0 512 512"
                  style={{ enableBackground: "new 0 0 512 512;" }}
                >
                  <g>
                    <g>
                      <path
                        d="M497,80.333h-65.334V15c0-8.284-6.716-15-15-15s-15,6.716-15,15v65.333h-65.332c-8.284,0-15,6.716-15,15s6.716,15,15,15
                                            h65.332v65.334c0,8.284,6.716,15,15,15s15-6.716,15-15v-65.334H497c8.284,0,15-6.716,15-15S505.284,80.333,497,80.333z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M175.666,321.334C78.804,321.334,0,400.138,0,497c0,8.284,6.716,15,15,15h321.334c8.284,0,15-6.716,15-15
                                            C351.334,400.138,272.529,321.334,175.666,321.334z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M175.666,64.267c-52.566,0-95.332,42.767-95.332,95.334s42.766,95.333,95.332,95.333
                                            c52.567,0,95.334-42.766,95.334-95.333C271,107.034,228.233,64.267,175.666,64.267z"
                      />
                    </g>
                  </g>
                </svg>{" "}
                Followers: {this.state.data.followers}
              </p>
              <p>
                <svg
                  version="1.1"
                  x="0px"
                  y="0px"
                  width="24.961px"
                  height="24.961px"
                  viewBox="0 0 495.19 495.19"
                  style={{ enableBackground: "new 0 0 495.19 495.19;" }}
                >
                  <g>
                    <path
                      d="M449.29,187.01c-10.592-14.863-31.246-18.335-46.117-7.742l-50.864,36.242c0,0.008-14.29-28.402-26.642-52.98
		c-10.626-21.096-26.918-38.462-47.28-50.485c-8.363-5.198-17.874-7.055-26.948-5.909c-11.934,1.5-23.124,8.162-29.986,19.167
		L120.078,288.27c-19.104,30.736-12.676,71.524,14.969,94.874l34.765,29.373H81.099c-22.834,0-41.337,18.504-41.337,41.337
		c0,22.832,18.503,41.337,41.337,41.337h201.713c17.357,0,32.859-10.836,38.817-27.136c5.957-16.294,1.115-34.579-12.142-45.778
		l-81.464-68.82l61.812-115.268l19.797,41.354c4.215,8.807,12.11,15.308,21.557,17.747c2.728,0.701,5.506,1.048,8.268,1.048
		c6.814,0,13.532-2.107,19.184-6.136l82.898-59.065C456.427,222.536,459.883,201.889,449.29,187.01z"
                    />
                    <path
                      d="M361.997,119.677c33.054,0,59.825-26.79,59.825-59.835C421.822,26.789,395.051,0,361.997,0
		c-33.053,0-59.843,26.789-59.843,59.842C302.154,92.887,328.944,119.677,361.997,119.677z"
                    />
                  </g>
                </svg>{" "}
                Following: {this.state.data.following}
              </p>
              <p>
                <svg viewBox="0 -20 512 511" width="24.961px" height="24.961px">
                  <path d="m363.550781 154.410156h-363.550781v267.449219c0 27.8125 22.628906 50.429687 50.449219 50.429687h312.640625c28.070312 0 50.910156-22.847656 50.910156-50.9375v-216.511718c0-27.808594-22.628906-50.429688-50.449219-50.429688zm-291.121093 186.589844h46.910156c8.289062 0 15 6.71875 15 15s-6.710938 15-15 15h-46.910156c-8.28125 0-15-6.71875-15-15s6.71875-15 15-15zm93.820312 74.820312h-93.820312c-8.28125 0-15-6.71875-15-15 0-8.289062 6.71875-15 15-15h93.820312c8.289062 0 15 6.710938 15 15 0 8.28125-6.710938 15-15 15zm0 0" />
                  <path d="m170.71875 90.550781c-9.347656-15.0625-25.527344-24.050781-43.257812-24.050781h-76.550782c-28.070312 0-50.910156 22.828125-50.910156 50.878906v7.03125h192.710938zm0 0" />
                  <path d="m194.71875 62.550781.898438 1.320313h97.863281l-24.761719-39.320313c-9.359375-15.0625-25.527344-24.050781-43.257812-24.050781h-76.550782c-23.621094 0-43.53125 16.160156-49.25 38h51.800782c17.730468 0 33.910156 8.988281 43.257812 24.050781zm0 0" />
                  <path d="m461.230469 96.410156h-243.527344l19.007813 28h130.964843c42.152344 0 76.324219 34.171875 76.324219 76.324219v213.234375c0 .179688.144531.320312.320312.320312h16.769532c28.070312 0 50.910156-22.847656 50.910156-50.9375v-216.171874c0-28.039063-22.730469-50.769532-50.769531-50.769532zm0 0" />
                </svg>{" "}
                {this.state.data.public_repos}
              </p>
            </div>
          </div>
        ) : (
          <h4>Please Enter the Username</h4>
        )}
      </div>
    );
  }
}

export default Profile;
