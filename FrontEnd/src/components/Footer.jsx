function Footer() {
  return (
    <footer className="bg-white border-t border-[#e8e8ed] mt-10">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        
        {/* LEFT */}
        <p className="text-sm text-[#6e6e73]">
          © {new Date().getFullYear()} MyBlog. All rights reserved.
        </p>

        {/* RIGHT LINKS */}
        <div className="flex gap-4 text-sm">
          <h1 className="text-[#0066cc]">
            HelpLine :
          </h1>
          <h1 className="text-[#0066cc] ">
            23466777878,
          </h1>
          <h1 className="text-[#0066cc] ">
            8725372512
          </h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;