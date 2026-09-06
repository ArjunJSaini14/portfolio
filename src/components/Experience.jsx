import { motion } from 'framer-motion'; 
import { useState} from 'react';



function Experience() {
  const [selectedCompany, setSelectedCompany] = useState('Werfen');

  return (
    <section id="experience" className=" flex flex-col mt-40 justify-center items-start px-4 max-w-5xl mx-auto">
      
      {/* Header with line */}
      <motion.div 
        className="flex items-center w-full"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="pr-3 text-4xl font-semibold whitespace-nowrap text-blue-300"> &gt; experience</h2>
        <div className="grow border-t-[0.5px] border-gray-300 translate-y-2"></div>
      </motion.div>

      {/* Text and Selector Container */}
      <div className="flex gap-8 mt-10 w-full items-start">

        {/* Companies Vertical Selector */}
        <div className="flex flex-col space-y-4">
          <motion.button 
            onClick={() => setSelectedCompany('Werfen')}
            className={`text-left ${selectedCompany === 'Werfen' ? 'text-blue-300' : 'text-gray-500'}`}
            whileHover={{ scale: 1.05 }}  
          >
            Werfen
          </motion.button>

          <motion.button 
            onClick={() => setSelectedCompany('State Street')}
            className={`text-left ${selectedCompany === 'State Street' ? 'text-blue-300' : 'text-gray-500'}`}
            whileHover={{ scale: 1.05 }}
          >
            State Street
          </motion.button>

          <motion.button 
            onClick={() => setSelectedCompany('Code4Community')}
            className={`text-left ${selectedCompany === 'Code4Community' ? 'text-blue-300' : 'text-gray-500'}`}
            whileHover={{ scale: 1.05 }}
          >
            Code4Community
          </motion.button>
        </div>

        {/* Vertical Line with Sliding Highlight */}
        <div className="relative h-27  bg-blue-300">
          {/* Background line */}
          <div className="w-px bg-blue-300 h-full" />
          
   
        </div>
        
        {/* Text section */}
        <motion.div 
          className="flex-1 text-xl text-gray-500 leading-[1.8]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >


        {/* Experience Item 1 */}
        {selectedCompany === 'State Street' && (
        <div className="pl-6">
          <h3><span className="text-blue-300 text-2xl">State Street</span></h3>
          <p className="italic mb-2 text-sm">Software Engineer | JAN 2026 - JUNE 2026 | Burlington, MA</p>
          <ul className="space-y-0.1 ml-5">

            <motion.li 
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              >
              <span className="text-blue-300">»</span>
              <span className="leading-relaxed" style={{ fontSize: '0.8rem' }}>
                Developed "Create Batch from Reference" feature using Django 
                backend for Tidal Automation, reducing editing time by 60%. 
              </span>
            </motion.li>

            <motion.li 
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              >
              <span className="text-blue-300">»</span>
              <span className="leading-relaxed" style={{ fontSize: '0.8rem' }}>
                Built "Reference Modify Batch" using Django and Excel parsing to sync 
                batch configurations, reducing creation time by 75%
              </span>
            </motion.li>

            <motion.li 
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              >
              <span className="text-blue-300">»</span>
              <span className="leading-relaxed" style={{ fontSize: '0.8rem' }}>
                Developed Python and Jinja2 tools to parse Excel data into 
                reusable batch configurations, reducing manual edits by 50%. 
              </span>
            </motion.li>

            <motion.li 
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              > 
              <span className="text-blue-300">»</span>
              <span className="leading-relaxed" style={{ fontSize: '0.8rem' }}>
                Enhanced Excel UI by implementing field-level restrictions, 
                exit code modals, and context menus using jQuery and Jinja2. 
              </span>
            </motion.li>

          </ul>
        </div>
        )}

        {/* Experience Item 2 */}
        {selectedCompany === 'Code4Community' && (
          <div className="pl-6">
          <h3><span className="text-blue-300 text-2xl">Code4Community</span></h3>
          <p className="italic mb-2 text-sm">Jumpstart Developer | AUG 2025 - DEC 2025 | Boston, MA</p>
          <ul className="space-y-0.1 ml-5">
            <motion.li 
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              >
              <span className="text-blue-300">»</span>
              <span className="leading-relaxed" style={{ fontSize: '0.8rem' }}>
                Developed and deployed a task management app using 
                  React and Node.js with user authentication and CRUD operations.  
              </span>
              </motion.li>

              <motion.li 
                className="flex items-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
              <span className="text-blue-300">»</span>
              <span className="leading-relaxed" style={{ fontSize: '0.8rem' }}>
              Delivered 2 nonprofit software solutions using agile methodologies 
              and clean Git workflows with feature branching. 
              </span>
            </motion.li>

              <motion.li 
                className="flex items-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
              <span className="text-blue-300">»</span>
              <span className="leading-relaxed" style={{ fontSize: '0.8rem' }}>
              Collaborated with mentors and peers through code reviews, 
              applying best practices in software design and version control. 
              </span>
            </motion.li>
          </ul>
        </div>
        )}

        {/* Experience Item 3 */}
        {selectedCompany === 'Werfen' && (
          <div className="pl-6">
          <h3><span className="text-blue-300 text-2xl">Werfen</span></h3>
          <p className="italic mb-2 text-sm">Software Engineer | JUNE 2026 - AUG 2026 | Bedford, MA</p>
          <ul className="space-y-0.1 ml-5">
            <motion.li 
                className="flex items-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
              <span className="text-blue-300">»</span>
              <span className="leading-relaxed" style={{ fontSize: '0.8rem' }}>
              Developed optimization tool, using Raspberry Pi and Python to 
              automate GEM 5000 testing, reducing manual effort by 40%. 
              </span>
            </motion.li>

            <motion.li 
                className="flex items-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
              <span className="text-blue-300">»</span>
              <span className="leading-relaxed" style={{ fontSize: '0.8rem' }}>
              Implemented computer vision algorithms for state recognition, 
              enabling 3+ hours of unattended diagnostic system operation. 
              </span>
            </motion.li>

            <motion.li 
                className="flex items-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
              <span className="text-blue-300">»</span>
              <span className="leading-relaxed" style={{ fontSize: '0.8rem' }}>
              Developed automated end-to-end UI test scripts using 
              Playwright, improving overall test coverage by 30%.  
              </span>
            </motion.li>

            <motion.li 
                className="flex items-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
              <span className="text-blue-300">»</span>
              <span className="leading-relaxed" style={{ fontSize: '0.8rem' }}>
              Executed 5+ ServiceNow tickets weekly by validating SAP 
              transaction workflows and documenting software defects. 
              </span>
            </motion.li>  
          </ul>
        </div>
        )}

        </motion.div>
      </div>

    </section>
  );
}

export default Experience;