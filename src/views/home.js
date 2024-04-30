import React from 'react'

import { Helmet } from 'react-helmet'

import Link from '../components/link'
import Work from '../components/work'
import Service from '../components/service'
import Author from '../components/author'
import Statistic from '../components/statistic'
import Client from '../components/client'
import Item from '../components/item'
import FeatureCard11 from '../components/feature-card11'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Agency modern template</title>
        <meta property="og:title" content="Agency modern template" />
      </Helmet>
      <div className="home-navbar">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div className="home-branding">
            <img alt="image" src="/goliath3_white.svg" className="home-logo" />
            <span className="home-company">
              <span>
                Goliath
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Robotics</span>
            </span>
          </div>
          <div className="home-items">
            <div className="home-links">
              <span className="nav-link">Work</span>
              <span className="nav-link">Our Approach</span>
              <span className="nav-link">About</span>
              <span className="nav-link">Contact</span>
            </div>
            <button className="home-button start-button button">
              <span className="home-text07">Start a project</span>
            </button>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="home-button1 button">
              <img alt="image" src="/hamburger.svg" className="home-image" />
              <span className="home-text08">Start a project</span>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-top">
                <div className="home-branding1">
                  <img alt="image" src="/logo.svg" className="home-logo1" />
                  <span className="home-company1">SPYRL</span>
                </div>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-items1">
                <div className="home-links1">
                  <span className="nav-link">Work</span>
                  <span className="nav-link">Services</span>
                  <span className="nav-link">About</span>
                  <span className="nav-link">Contact</span>
                </div>
                <button className="start-button button home-button2">
                  <span className="home-text13">Start a project</span>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
      <header className="home-hero">
        <div className="home-header">
          <h1 className="home-title">Getting you Going</h1>
          <p className="home-description">
            Improving the quality of life of mobility-impaired Ghanaians and
            their families through greater independence by making affordable
            assisted mobility devices which are tailored to the local context
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
        </div>
      </header>
      <div className="home-video">
        <video
          src="https://cdn.matix-media.net/dd/8915707c"
          loop="true"
          muted="true"
          poster="/video-preview-1500w.png"
          preload="auto"
          autoPlay="true"
          playsInline="true"
          className="home-video1"
        ></video>
      </div>
      <div className="home-description1">
        <div className="home-content">
          <button className="home-button3 start-button button">
            <span className="home-text14">Start a project</span>
          </button>
          <div className="home-text15">
            <h1 className="home-text16">
              <span className="home-text17">1.9M</span>
              <br className="home-text18"></br>
              <span>
                Ghanaians with disabilities Cannot access mobility aids.
              </span>
            </h1>
            <p className="home-paragraph">
              This leads to a diminished quality of life as available options
              are more expensive and ineffective.
            </p>
          </div>
        </div>
      </div>
      <div className="home-featured">
        <div className="home-header1">
          <h2 className="heading">Featured Work</h2>
          <div className="home-link">
            <Link
              caption="100+ Projects"
              rootClassName="link-root-class-name"
            ></Link>
          </div>
        </div>
        <div className="home-list">
          <Work></Work>
          <Work image="/work%20%232-1500w.png" title="ZENG"></Work>
          <Work image="/work%20%233-1500w.png" title="YORGU"></Work>
        </div>
      </div>
      <div className="home-client">
        <p className="home-text20">
          Become a client aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat.
        </p>
        <button className="start-button button home-button4">
          <span className="home-text21">Start a project</span>
        </button>
      </div>
      <div id="approach" className="home-approach">
        <div className="home-header2">
          <h2 className="heading">Our Approach</h2>
        </div>
        <div className="home-grid">
          <Service
            title="Co-Design"
            description="We work with health professionals and the mobility impaired to meet local needs"
            rootClassName="service-root-class-name"
          ></Service>
          <Service
            title="Manufacturing"
            description="Establishing local manufacturing for cheaper production and faster delivery with custom fabrication"
            rootClassName="service-root-class-name1"
          ></Service>
          <Service
            title="Accessibility"
            description="Addressing accessibility with local facilities to improve user experience"
            rootClassName="service-root-class-name5"
          ></Service>
          <Service
            title="Financing"
            description="Establishing relationships with credible lenders for product financing"
            rootClassName="service-root-class-name2"
          ></Service>
          <Service
            title="Community"
            description="Create an inclusive ecosystem in which the community is not only a beneficiary, but an active agent"
            rootClassName="service-root-class-name3"
          ></Service>
          <Service
            title="Web Development"
            rootClassName="service-root-class-name4"
          ></Service>
        </div>
      </div>
      <div id="stats" className="home-about">
        <div className="home-header3">
          <h2 className="home-company2">Word From Board Chair</h2>
          <span className="home-description2">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.”
          </span>
          <Author
            author="Fred McBagonluri"
            avatar="/board-chair-200w.jpg"
            mention=" "
          ></Author>
        </div>
        <div className="home-statistics">
          <button className="start-button button home-button5">
            <span className="home-text22">Join our team</span>
          </button>
          <div className="home-statistic-list">
            <Statistic
              value="800"
              caption="Target Annual Distribution"
              rootClassName="statistic-root-class-name3"
            ></Statistic>
            <Statistic
              value="6"
              caption="Pending Publications"
              rootClassName="statistic-root-class-name"
            ></Statistic>
            <Statistic
              value="3"
              caption="Product Families"
              rootClassName="statistic-root-class-name4"
            ></Statistic>
            <Statistic
              value="89"
              caption="Monthly Production Capacity"
              rootClassName="statistic-root-class-name1"
            ></Statistic>
            <Statistic
              value="2"
              caption="Medical Centers in Talks"
              rootClassName="statistic-root-class-name5"
            ></Statistic>
          </div>
        </div>
        <div className="home-team">
          <div className="home-header4">
            <h2 className="home-title3 heading">Team</h2>
          </div>
          <div className="home-grid1">
            <div className="home-column">
              <Client
                quote="At Goliath, Barnabas leads the development of smart electronic controllers, which power all the wheelchairs, all while working with families, healthcare professionals and the disabled to build a future of accessibility for all."
                author="Barnabas Nomo"
                avatar="/barna-200h.jpg"
                mention="Co-Founder, CEO"
                rootClassName="client-root-class-name"
              ></Client>
              <Client
                quote="“Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.“"
                author="Jeremiah Fiagbedzi"
                avatar="/jeremiah-200h.jpeg"
                mention=" "
                rootClassName="client-root-class-name1"
              ></Client>
            </div>
            <div className="home-column1">
              <Client
                quote="Andrewla is a budding mechanical engineer that has a deep passion for designing assisting technology. With her experience with product design, coupled with additive and subtractive manufacturing she leads the mechanical team to design our products which are tailored towards the local context."
                author="Andrewla Takyi"
                avatar="/andrewla-200w.jpeg"
                mention=" "
                rootClassName="client-root-class-name4"
              ></Client>
              <Client
                quote="“Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.“"
                author="Daniel Amanor"
                avatar="/danielamanor-200h.jpg"
                mention="CFO"
                rootClassName="client-root-class-name5"
              ></Client>
            </div>
            <div className="home-column2">
              <Client
                author="Kwabena Boateng"
                avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHBvdHJhaXR8ZW58MHx8fHwxNjY5MDYxMjQx&amp;ixlib=rb-4.0.3&amp;h=200"
                mention=" "
                rootClassName="client-root-class-name6"
              ></Client>
              <Client
                quote="As a Mechanical Engineer and Designer at Goliath , I focus on R&amp;D for our mobility products. My role involves coordinating design execution by sourcing materials, finding suitable manufacturing methods, and leveraging local expertise in."
                author="Patrick Ansah"
                avatar="/patrickansah3-200h.jpg"
                rootClassName="client-root-class-name7"
              ></Client>
            </div>
          </div>
        </div>
        <div className="home-client-list">
          <div className="home-header5">
            <h2 className="home-title4 heading">Client list</h2>
          </div>
          <div className="home-row">
            <span className="home-text23">2022</span>
            <div className="home-list1">
              <Item></Item>
              <Item tags="Webdevelopment / Marketing" title="Aliquaduis"></Item>
              <Item tags="Strategy / Copywriting" title="Consequat"></Item>
              <Item tags="UI / UX" title="Commodo"></Item>
              <Item tags="Webdevelopment" title="Veniam"></Item>
              <Item tags="Webdevelopment / Marketing" title="Fugiat"></Item>
            </div>
          </div>
          <div className="home-row1">
            <span className="home-text24">2021</span>
            <div className="home-list2">
              <Item></Item>
              <Item tags="Webdevelopment / Marketing" title="Aliquaduis"></Item>
              <Item tags="Strategy / Copywriting" title="Consequat"></Item>
            </div>
          </div>
        </div>
        <div className="home-features">
          <h1 className="home-text25">
            <span className="home-text26">Our Partners</span>
            <br></br>
          </h1>
          <div className="home-container1">
            <FeatureCard11
              title="Academic City University College"
              imageSrc="/acity-1500w.png"
              rootClassName="rootClassName7"
            ></FeatureCard11>
            <FeatureCard11
              title="3Dinkra"
              imageSrc="/3dinkra1-1500w.png"
              rootClassName="rootClassName6"
            ></FeatureCard11>
            <FeatureCard11
              title="Telesto Strategy"
              imageSrc="/kq8zkhll-1500w.png"
              rootClassName="rootClassName5"
            ></FeatureCard11>
            <FeatureCard11 rootClassName="rootClassName4"></FeatureCard11>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-information">
          <div className="home-details">
            <div className="home-header6">
              <div className="home-branding2">
                <img alt="image" src="/goliath2.svg" className="home-logo2" />
              </div>
              <div className="home-location">
                <span className="home-caption">Office</span>
                <span className="home-value">
                  Property # 279-302, Agbogba, Haatso
                </span>
              </div>
            </div>
            <div className="home-location1">
              <span className="home-caption1">Let&apos;s talk</span>
              <span className="home-value1">info@goliathrobotics.com</span>
            </div>
            <button className="home-button6 start-button button">
              <span className="home-text28">Contact Us</span>
            </button>
          </div>
          <div className="home-links2">
            <span className="social">Instagram</span>
            <span className="social">Linkedin</span>
            <span className="social">Twitter</span>
            <span className="social">Dribbble</span>
            <span className="social">Behance</span>
          </div>
        </div>
        <img
          alt="image"
          src="/teampic-1500w.jpg"
          loading="lazy"
          className="home-image1"
        />
      </footer>
    </div>
  )
}

export default Home
