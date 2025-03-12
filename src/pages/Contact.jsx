import Form from "../components/Form";

export default function Contact() {
  return (
    <div className="w-full bg-old-lace min-h-screen text-leandro">
      <div className="w-full p-10 flex items-center justify-center">
        <h1 className="font-switzer font-semibold tracking-tight text-6xl">
          Contact us
        </h1>
      </div>
      <div className="w-full grid grid-cols-2">
        <div className="w-full p-4 flex items-center justify-center">
          <div class="flex justify-center p-4">
            <iframe
              class="w-full md:w-[600px] h-[500px] rounded-xl shadow-lg border border-leandro/20"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7775.262126044727!2d77.61420700000001!3d12.995433!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae175dea0deccd%3A0xf0706be74d37a076!2sKunafa%20World!5e0!3m2!1sen!2sin!4v1741761740746!5m2!1sen!2sin"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="w-full h-full flex flex-col gap-4 p-4">
          <h1 className="font-switzer font-semibold tracking-tight text-3xl">
            Message for any query
          </h1>
          <Form />
        </div>
      </div>
    </div>
  );
}
