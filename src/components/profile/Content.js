import Button from "@material-tailwind/react/Button";
import Image from "@material-tailwind/react/Image";
import H3 from "@material-tailwind/react/Heading3";
import Icon from "@material-tailwind/react/Icon";
import LeadText from "@material-tailwind/react/LeadText";
import ProfilePicture from "..//profile/onlineonelogo.png";

export default function Content() {
  return (
    <section className="bg-profile-background bg-cover bg-center relative py-16 bg-gray-100">
      <div className="container max-w-7xl px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="w-40 -mt-20">
                    <Image
                      src={ProfilePicture}
                      alt="Profile picture"
                      raised
                      rounded
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center my-8">
              <H3 color="gray">About US</H3>
              <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                <Icon name="place" size="xl" />
                Indianapolis, Indiana
              </div>
            </div>

            <div className="mb-10 py-2 border-t border-gray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center space-x-4">
                  <LeadText color="blueGray">
                    We get you online ready!
                  </LeadText>
                  <LeadText color="blueGray">
                    Online One is a full-service web design, development, and digital media agency in Indianapolis. We take pride in the relationships we have with our customers. We don’t just build websites and walk away. We partner with companies to not only establish but maintain an online presence that caters to their changing needs. We leverage digital technology so that our clients can do what they do best, run their OWN businesses. 
                  </LeadText>
                  <LeadText color="blueGray">
                    Creating a better future for our communities.
                    Our company’s passion for giving back is to empower our communities to have an online presence. 
                    What makes us unique is our pursuit to be extraordinary in everything that we do, 
                    which includes caring about other people and helping in any way we can. 
                    This is why we created the get indy online program targeting small business 
                    and young professionals who make an impact in our communities learn more here.
                  </LeadText>
                  <Button>Click To Learn More!</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
