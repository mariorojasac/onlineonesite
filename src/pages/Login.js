import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
import Checkbox from '@material-tailwind/react/Checkbox';
import Button from '@material-tailwind/react/Button';
import DefaultNavbar from 'components/DefaultNavbar';
import SimpleFooter from 'components/SimpleFooter';
import Page from 'components/login/Page';
import Container from 'components/login/Container';
import H3 from "@material-tailwind/react/Heading3";
import Icon from "@material-tailwind/react/Icon";
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
                   
                  </LeadText>
                  <LeadText color="blueGray">
                    An artist of considerable range, Jenna the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.
                  </LeadText>
                  <LeadText color="blueGray">
                    An artist of considerable range, Jenna the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.
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
                    An artist of considerable range, Jenna the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.
                  </LeadText>
                  <LeadText color="blueGray">
                    An artist of considerable range, Jenna the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.
                  </LeadText>
                  <LeadText color="blueGray">
                    An artist of considerable range, Jenna the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.
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
                    An artist of considerable range, Jenna the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.
                  </LeadText>
                  <LeadText color="blueGray">
                    An artist of considerable range, Jenna the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.
                  </LeadText>
                  <LeadText color="blueGray">
                    An artist of considerable range, Jenna the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.
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
