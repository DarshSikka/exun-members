import React from 'react';

class ApplyWithDevfolio extends React.Component {
  componentDidMount = () => {
    window.onload = this.loadApplyNowScript();
  };

  loadApplyNowScript = () => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co';
    script.async = true;
    document.body.appendChild(script);

    script.onload = this.handleLoad;
  };

  handleLoad = () => {
    new Devfolio({
      key: 'exun',
      buttonSelector: '#devfolio-apply-now',
    });
  };

  render() {
    return (
      <button
        id="devfolio-apply-now"
        style={{
          fontSize: '16px',
          display: 'flex',
          alignItems: 'center',
          margin: '0 auto',
        }}
      >
        <svg
          class="logo"
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
          viewBox="0 0 115.46 123.46"
          style={{ height: '24px', width: '24px' }}
        >
          <path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z" />
          <path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z" />
        </svg>
        Apply with Devfolio
      </button>
    );
  }
}

export default [
  {
    name: 'Build',
    description: (
      <>
        <p>
          Build is an event that requires creative participants from a team to
          come together and build solutions to pervasive problems. Build at Exun
          2020 will feature three separate sub-events, the Designathon,
          Hackathon, and Unreality (GameDev).
        </p>
        <ApplyWithDevfolio />
      </>
    ),
    eligibility: 'Open',
  },
  {
    name: 'SpaceTech',
    description: (
      <p>
        Exun Clan is collaborating with the Delhi Chapter of the prestigious
        National Space Society (USA) to give students the opportunity to explore
        the realms of space and its concurrence with technology.
      </p>
    ),
    eligibility: 'Open',
  },
  {
    name: 'Sudocrypt',
    description: (
      <p>
        Sudocrypt, Exun Clan???s annual online cryptic hunt, will be held over 48
        hours from 00:00:00 IST on 9th November to 23:59:59 IST on 10th
        November. Details will be released soon. Participants are required to
        join the{' '}
        <a href="//exun.co/sudocrypt" target="_blank">
          <b>official Sudocrypt Discord server</b>
        </a>
        .
      </p>
    ),
    eligibility: 'Open',
    shortlink: '//sudocrypt.com',
  },
  {
    name: 'Competitive Programming',
    description: (
      <p>
        Participants will face problems of logic, algorithms and data structures
        and will be tested on time taken and their solution(s).
      </p>
    ),
    eligibility: 'Open',
  },
  {
    name: 'LessWrong',
    description: (
      <p>
        LessWrong is a first of a kind competitive programming event combining
        the excitement of short contests with the forethought necessary for
        preparing problems.
      </p>
    ),
    eligibility: 'Open',
  },
  {
    name: 'Lockout',
    description: (
      <p>
        Another new addition to Exun 2020, Lockout is a competitive programming
        event, where participants go head to head in a knockout style lockout
        tournament featuring handpicked problems.
      </p>
    ),
    eligibility: 'Open',
  },
  {
    name: 'Turing Test',
    description: (
      <p>
        Computational linguists are interested in providing computational models
        of various kinds of linguistic phenomena, and it is this field that we
        invite you to explore in Turing Test.
      </p>
    ),
    eligibility: 'Open',
  },
  {
    name: 'ExML',
    description: (
      <p>
        Tired of the usual plug-and-chug in contests? Look no further, we bring
        you a cross-disciplinary Machine Learning event where there will be a
        rich variety of unique yet equally mesmerising machine learning
        paradigms on display and in use.
      </p>
    ),
    eligibility: 'Open',
  },
  {
    name: 'Group Discussion',
    description: <p>A test of creativity, logical skills and wit.</p>,
    eligibility: 'Open',
  },
  {
    name: 'Hardware',
    description: (
      <p>
        Power up your cores and overclock that grey matter, because you???re in
        for some serious hands-on competition. Identify components belonging to
        a plethora of devices and show off your know-how about hardware.
      </p>
    ),
    eligibility: 'Open',
  },
  {
    name: 'Surprise',
    description: (
      <p>
        Participants will face unconventional challenges linked to the world of
        technology. Nothing is guaranteed.
      </p>
    ),
    eligibility: 'Open',
  },
  {
    name: 'Open Quiz',
    description: (
      <p>
        An enigmatic quiz based on the field of computers, technology, and
        recent events in the world of IT &mdash; a battleground for quizzers to
        test their wits under extreme pressure.
      </p>
    ),
    eligibility: 'Open',
  },
  {
    name: 'Crossword',
    description: (
      <p>
        A cryptic crossword based on wit, presence of mind, and an excellent
        sense of humour. All answers will be related to the fields of computers,
        technology, and recent events in the field of IT.
      </p>
    ),
    eligibility: 'Open',
  },
  {
    name: 'DomainSquare+ Gaming',
    description: (
      <p>
        The prelims will be held online in multiple batches, on 10th, 11th and
        12th November. Games for the prelims will be revealed a week before on
        the Discord server. All further details will be given on the official
        Domain<sup>2</sup>+ Discord server.
      </p>
    ),
    eligibility: 'Open',
  },
  {
    name: 'Make-A-Thon',
    description: (
      <p>
        Build an innovative solution to solve real-life problems using Robotics
        and Engineering.
      </p>
    ),
    eligibility: 'Open',
  },
  {
    name: 'BISCUITS - Build and Simulate Circuits',
    description: (
      <p>
        Race your problem solving skills in circuits and electronics in a new
        cryptic hunt format.
      </p>
    ),
    eligibility: 'Open',
  },
  {
    name: 'Girls in Tech by WWC Delhi',
    description: (
      <p>
        At Exun Clan, we feel that a diverse set of participants is important
        for the success of our event. With that in mind, Exun 2020 will feature
        an exciting surprise event for girls in collaboration with Women Who
        Code Delhi.
      </p>
    ),
    eligibility: 'Open',
  },
  {
    name: 'Cubing by CubXL',
    description: (
      <div>
        <p>
          It???s always the small pieces that make the big picture. Participants
          can individually compete in 3 events:
        </p>
        <ul>
          <li>Pyraminx</li>
          <li>2x2 Cubing</li>
          <li>3X3 Cubing</li>
        </ul>
      </div>
    ),
    eligibility: 'Open',
  },
];
