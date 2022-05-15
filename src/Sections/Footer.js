const Footer = () => {
  return (
    <>
      <div class="bg-form justify-items-center">
        <div class="container flex items-center justify-between block px-2 py-6 mx-auto">
          <a
            href="#"
            class="text-sm font-bold text-white hover:text-gray-400 ml-10"
          >
            <span className="text-white">
              zo<span className="text-secondaryAlternative">ft</span>
            </span>
          </a>
          <p class=" text-gray-400 text-[9px] lg:text-[15px] center sm:py-0 w-2/3">
            © 2018 - 2022 | Zoft Limited | All Rights Reserved
          </p>
        </div>
        <img
          class="pb-6 mx-auto"
          src="https://cdn.naudrinks.com/wp-content/uploads/2018/05/Payment_services_eng.png"
          width="322"
          height="34"
        />
      </div>
    </>
  );
};

export default Footer;
