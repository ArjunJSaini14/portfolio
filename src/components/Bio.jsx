import { motion } from 'framer-motion';

function Bio() {
  return (
    <section id="bio" className="flex flex-col justify-center items-start px-4 max-w-5xl mx-auto mt-55">
      
      {/* Header with line */}
      <motion.div 
        className="flex items-center w-full"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="pr-3 text-4xl font-semibold whitespace-nowrap text-blue-300"> &gt; about me</h2>
        <div className="grow border-t-[0.5px] border-gray-300 translate-y-2"></div>
      </motion.div>

      {/* Text and Image Container */}
      <div className="flex gap-8 mt-10 w-full items-center">
        
        {/* Text section */}
        <motion.div 
          className="flex-1 text-xl text-gray-500 leading-[1.8]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            I am a <span className="font-bold"> Computer Science and Economics </span>
            student at<span className="font-bold text-blue-300"> Northeastern University. </span>
            Previously I was a <span className="font-bold"> Software Engineer </span> at 
            <span className="text-blue-300 font-bold"> State Street </span> 
            where I was on the automation team building backend services to streamline and enhance
            financial processes for our clients.
            <br /><br />
            Technologies I am currently working with:
            <br></br>
            <span className="text-blue-300 font-bold"> Python, C++, Java, JavaScript, React, Django </span>
            <br></br>
            <br></br>

            Besides coding, I enjoy playing basketball, exploring new music, photography, video games and hiking.
            <br /><br />

          </p>
        </motion.div>

        {/* Image section */}
        <motion.div 
          className="shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <img 
            src="me.png" 
            alt="Arjun" 
            className="w-70 h-75 rounded-lg object-cover shadow-xl"
          />
        </motion.div>

      </div>

    </section>
  );
}

export default Bio;