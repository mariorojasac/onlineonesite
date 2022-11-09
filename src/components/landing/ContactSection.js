import Title from "components/landing/Title";
import ContactCard from "components/landing/ContactCard";
import Form from "components/landing/Form";

export default function ContactSection() {
  return (
    <section className="pb-20 relative block bg-gray-100">
      <div className="container max-w-7xl mx-auto px-4 lg:pt-24">
        <Title heading="WEB DEVELOPMENT PROCESS">
          Get a personalised plan that meet your needs.
        </Title>

        <div className="flex flex-wrap -mt-12 justify-center">
          <ContactCard icon="location_searching" title="Discovery + Strategy">
            Define the project goals - Identify the required technologies -
            Choose a web development platform
          </ContactCard>
          <ContactCard icon="photo" title="Website Design">
            Create a beautiful UI - Identify User Flow
          </ContactCard>
          <ContactCard icon="code" title="Programming + Development">
            Create a web development plan - Develop the web site
          </ContactCard>
          <ContactCard icon="search" title="Quality Assurance">
            Test the web site
          </ContactCard>
          <ContactCard icon="launch" title="Launch + Optimization">
            Maintenance - updates
          </ContactCard>
        </div>

        <Form />
      </div>
    </section>
  );
}
