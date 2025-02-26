export const Footer = () => {
  return (
    <div class="relative bg-whiteG">
      <div className="cyber-razor-bottom bg-cyan w-full absolute top-[-16px] h-[10px]"></div>
      <div className="cyber-razor-bottom bg-red w-full absolute top-[-18px] h-[10px]"></div>
      <div className="cyber-razor-bottom bg-blue w-full absolute top-[-20px] h-[10px]"></div>
      <div className="text-center text-gray-400 text-sm mt-8">
        <div className="flex justify-center space-x-4 mb-1 text-[#0f1923]">
          <a className="hover:text-white" href="#">
            <i className="text-2xl fab fa-instagram"></i>
          </a>
          <a className="hover:text-white" href="#">
            <i className="text-2xl fab fa-github"></i>
          </a>
          <a className="hover:text-white" href="#">
            <i className="text-2xl fab fa-linkedin"></i>
          </a>
          <a className="hover:text-white" href="#">
            <i className="text-2xl fas fa-envelope"></i>
          </a>
        </div>
        <div className="mt-4 mb-2">
          <img
            alt="logo"
            className="mx-auto"
            height="75"
            src="/images/hLogo.png"
            width="125"
          />
        </div>
        <div className="font-third mb-4 px-[100px] lg:px-[500px] text-gray-800">
          © 2025 Vanes, All right reserved.
          <br></br>
          <br></br>
          This site is created to share experiences, knowledge, and creations. I
          believe that every small step leads to a big change. If you have any
          questions, want to collaborate, or simply share your story, feel free
          to reach out. Let's keep learning, growing, and inspiring each other!
          ✨
        </div>
      </div>
    </div>
  );
};
