import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import H3 from '@material-tailwind/react/Heading3';
import Paragraph from '@material-tailwind/react/Paragraph';
import Input from '@material-tailwind/react/Input';
import Textarea from '@material-tailwind/react/Textarea';
import Button from '@material-tailwind/react/Button';


const SERVICE_ID = "service_m90ndxc";
const TEMPLATE_ID = "template_cc5aygd";
const USER_ID = "7LwL2asTqRaOmps-9";

export default function Forms() {
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

    return (
      <div className="flex flex-wrap justify-center mt-24 ">
        <div className="w-full lg:w-8/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
            <div className="flex-auto p-5 lg:p-10">
              <div className="w-full text-center">
                <H3 color="gray">Want to work with us?</H3>
                <Paragraph color="blueGray">
                Complete this form and we will get back to you in 24 hours.
                </Paragraph>
              </div>
      
              <form onSubmit={handleOnSubmit}>
                <div className="flex gap-8 mt-16 mb-12">
                  <Input
                    id='form-input-control-email'
                    control={Input}
                    label='Email'
                    name='from_email'
                    placeholder='Email'
                    required
                    icon='mail'
                    iconPosition='left'
                  />
                  <Input
                    id='form-input-control-last-name'
                    control={Input}
                    label='Name'
                    name='from_name'
                    placeholder='Full Name'
                    required
                    icon='user circle'
                    iconPosition='left'
                  />
                </div>

                <Textarea
                  id='form-textarea-control-opinion'
                  control={Textarea}
                  label='Message'
                  name='message'
                  placeholder='Message'
                  required
                />
                <div className="flex justify-center mt-10">
                    <Button type='submit' color='blue'>Submit</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}
