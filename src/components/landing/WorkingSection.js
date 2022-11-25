import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import Icon from "@material-tailwind/react/Icon";
import H4 from "@material-tailwind/react/Heading4";
import H6 from "@material-tailwind/react/Heading6";
import LeadText from "@material-tailwind/react/LeadText";
import Paragraph from "@material-tailwind/react/Paragraph";
import StatusCard from "components/landing/StatusCard";
import Teamwork from "assets/img/pexels-fauxels-3184292.jpg";
// import { BsFillAlarmFill } from "react-icons/bs";

export default function WorkingSection() {
  return (
    <section className="pb-20 bg-gray-200 pt-32">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap relative z-50">
          <StatusCard color="red" icon="code" title="Web Development">
            We can help you build a website from scratch or redesign an existing
            website. <br /> We have years of experience in creating
            high-quality, user-friendly websites. <br /> We can help you with
            all aspects of website design and development, from design to coding
          </StatusCard>
          <StatusCard color="lightBlue" icon="timeline" title="Analytics">
            Web analytics provides buisness owners with insights into their
            website traffic and activity. <br />
            This service would allow users to see how their website is
            performing, where their visitors are coming from, and what kinds of
            activities are being engaged in by their visitors.
          </StatusCard>
          <StatusCard color="gray" icon="photo" title="Media Production">
            Online One Services provides high-quality video and photo services
            to businesses and individuals. We specialize in creating and
            delivering compelling video and photo content that helps you connect
            with your customers and followers. Our team is dedicated to
            providing you with top-quality video and photos.
          </StatusCard>
        </div>

        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mx-auto">
            <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <Icon name="support" size="3xl" />
            </div>
            <H4 color="gray">OUR MISSION</H4>
            <LeadText color="blueGray">
              Our mission is to Optimize local businesses and give them the
              necessary tools to expand their business online. Having a presence
              in social networks and online is important today.
            </LeadText>
            <LeadText color="blueGray">
              Many small businesses don't know how many people they can reach
              through social media and online.
            </LeadText>
            {/* <a
              href="#pablo"
              className="font-medium text-light-blue-500 mt-2 inline-block"
            >
              Read More
            </a> */}
          </div>

          <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
            <Card>
              <CardImage alt="Card Image" src={Teamwork} />
              <CardBody>
                <H6 color="gray">How do we help you?</H6>
                <Paragraph color="blueGray">
                  Our team is prepared to help and grow your business.
                </Paragraph>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
