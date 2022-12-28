

export default function Form() {

    return (
      <div className="flex flex-wrap justify-center mt-24 ">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit="submit"
              >
                <input type="hidden" name="form-name" value="contact"/>
                <div className="flex gap-8 mt-16 mb-12">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    color="lightBlue"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    color="lightBlue"
                  />
                </div>

                <textarea name="message"
                  placeholder="Message">
                </textarea>
              

                <div className="flex justify-center mt-10">
                  <button type="submit" color="lightBlue" ripple="light">
                    Send Message
                  </button>
                </div>
              </form>
      </div>
    );
}
