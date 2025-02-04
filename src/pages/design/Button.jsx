import ButtonSvg from "./ButtonSvg";

const Button = ({ className, children, px, white, downloadPdf }) => {
  const classes = `button relative inline-flex items-center justify-center
    h-11 transition-all bg-transparent duration-700 ease-out hover:text-[#34d2f0]
    ${px || "px-7"}
    ${white ? "text-[#0E0C15]" : "text-[#FFFFFF]"} ${className || ""}`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <a href={downloadPdf} target="_blank" className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return renderButton();
};

export default Button;
