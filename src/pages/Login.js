import Card from '@material-tailwind/react/Card';
// import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
// import H5 from '@material-tailwind/react/Heading5';
// import InputIcon from '@material-tailwind/react/InputIcon';
// import Checkbox from '@material-tailwind/react/Checkbox';
import Button from '@material-tailwind/react/Button';
import DefaultNavbar from 'components/DefaultNavbar';
// import SimpleFooter from 'components/SimpleFooter';
import Page from 'components/login/Page';
import Container from 'components/login/Container';
import H3 from "@material-tailwind/react/Heading3";
// import Icon from "@material-tailwind/react/Icon";
import LeadText from "@material-tailwind/react/LeadText";

export default function Login() {
    return (
      <Page>
        <DefaultNavbar />
          <Container>
              <Card className="m-12"> 
                <div className="text-center my-8">
                  <H3 color="gray">Web Development</H3>
                </div>
                <CardBody>
                  <div className="mb-10 py-2 border-t border-gray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4 flex flex-col items-center space-x-4">
                        <LeadText color="blueGray">
                          We make websites ...
                        </LeadText>
                        <LeadText color="blueGray">
                          We'll start with an idea, or a vision. 
                          Then we'll help you get there, whether that means helping you design it, or creating it from scratch. 
                          We believe in getting to know our clients—we work with them every step of the way, so they know exactly what they're getting when they hire us. 
                          And we have a ton of experience working with all kinds of clients and projects, so whatever your needs are, we can make sure they're met.
                        </LeadText>
                      </div>
                    </div>
                  </div>
                </CardBody>
                <CardFooter>
                        <div className="flex justify-center bg-bb">
                            <Button
                                color="lightBlue"
                                buttonType="link"
                                size="lg"
                                ripple="dark"
                            >
                                Get Started
                            </Button>
                        </div>
                    </CardFooter>
              </Card>
              <Card className="m-12">

                <div className="text-center my-8">
                    <H3 color="gray">Media Production</H3>
                </div>
                    <CardBody>
                    <div className="mb-10 py-2 border-t border-gray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center space-x-4">
                  <LeadText color="blueGray"> 
                  We use our experience with current technologies to produce high-quality media for businesses and projects. 
                  </LeadText>
                  <LeadText color="blueGray">
                  We specialize in photography, video, and digital media production. 
                  Our services are designed to help your business reach its full potential
                  </LeadText>
                </div>
              </div>
            </div>
                    </CardBody>
                    <CardFooter>
                        <div className="flex justify-center bg-bb">
                            <Button
                                color="lightBlue"
                                buttonType="link"
                                size="lg"
                                ripple="dark"
                            >
                                Get Started
                            </Button>
                        </div>
                    </CardFooter>
              </Card>
                <Card className="m-12">

                <div className="text-center my-8">
                    <H3 color="gray">iPhone Repair</H3>
                </div>
                    <CardBody>
                    <div className="mb-10 py-2 border-t border-gray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center space-x-4">
                  <LeadText color="blueGray">
                   No warranty or insurance coverage?
                  </LeadText>
                  <LeadText color="blueGray">
                   If your iPhone screen is cracked, our screen repair services can help. 
                   We use Grade A+ replacement parts to make sure your iPhone is as close to new as possible. 
                  </LeadText>
                </div>
              </div>
            </div>
                    </CardBody>
                    <CardFooter>
                        <div className="flex justify-center bg-bb">
                            <Button
                                color="lightBlue"
                                buttonType="link"
                                size="lg"
                                ripple="dark"
                            >
                                Get Started
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </Container>
        </Page>
    );
}
