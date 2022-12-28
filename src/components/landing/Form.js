import Input from '@material-tailwind/react/Input';
import Textarea from '@material-tailwind/react/Textarea';
import Button from '@material-tailwind/react/Button';

export default function Form() {

    return (
      <div className="flex flex-wrap justify-center mt-24 ">
              <form
                name="contact"
                method="POST"
                netlify
                data-netlify="true"
                onSubmit="submit"
              >
                <input type="hidden" name="form-name" value="contact"/>
                <div className="flex gap-8 mt-16 mb-12">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    color="lightBlue"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    color="lightBlue"
                  />
                </div>

                <Textarea
                  name="message"
                  color="lightBlue"
                  placeholder="Message"
                />

                <div className="flex justify-center mt-10">
                  <Button type="submit" color="lightBlue" ripple="light">
                    Send Message
                  </Button>
                </div>
              </form>
      </div>
    );
}
