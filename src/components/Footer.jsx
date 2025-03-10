export const Footer = () => {
  return (
    <div class="relative bg-whiteG ">
      <div className="cyber-razor-bottom bg-cyan w-full absolute top-[-16px] h-[10px]"></div>
      <div className="cyber-razor-bottom bg-red w-full absolute top-[-18px] h-[10px]"></div>
      <div className="cyber-razor-bottom bg-blue w-full absolute top-[-20px] h-[10px]"></div>
      <div className="text-center text-gray-400 text-sm mt-8">
        <div className="flex justify-center space-x-4 mb-1 text-[#0f1923]">
          <a
            className="hover:text-gray-600"
            href="http://instagram.com/vanesliu_"
          >
            <i className="text-2xl fab fa-instagram"></i>
          </a>
          <a className="hover:text-gray-600" href="https://github.com/vanes16">
            <i className="text-2xl fab fa-github"></i>
          </a>
          <a
            className="hover:text-gray-600"
            href="https://id.linkedin.com/in/vanes-vanes-4894b1308"
          >
            <i className="text-2xl fab fa-linkedin"></i>
          </a>
          <a
            className="hover:text-gray-600"
            href="https://www.fiverr.com/vanesgg?source=gig_page"
          >
            <i className="text-2xl fas fa-briefcase"></i>
          </a>
          <a
            className="hover:text-gray-600"
            href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=vanesliu23@gmail.com"
          >
            <i className="text-2xl fas fa-envelope"></i>
          </a>
        </div>
        <div className="font-third mb-1 mt-4 mx-[40px] lg:mx-[160px] text-gray-800">
          This site is created to share experiences, knowledge, and creations. I
          believe that every small step leads to a big change. If you have any
          questions, want to collaborate, or simply share your story, feel free
          to reach out. Let's keep learning, growing, and inspiring each other!
          <br></br>
        </div>
        <div className="border-t border-[#ff003c] mt-2 mb-2 mx-[40px] lg:mx-[160px]"></div>
        <div className="flex justify-center items-center h-[50px]">
          <span className="text-black text-center">
            © 2025 Vanes, This content is open for future reference and
            inspiration.
          </span>
        </div>
      </div>
    </div>
  );
};
