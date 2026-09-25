const fs = require('fs');

let content = fs.readFileSync('src/components/about.tsx', 'utf8');

const oldStr = `<div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-16 lg:gap-24">`;

const newStr = `<div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-16 lg:gap-24">`;

content = content.replace(oldStr, newStr);

const closingDivs = `        </motion.div>
      </div>
    </section>`;

const newClosingDivs = `          </motion.div>
        </div>
      </div>
    </section>`;

content = content.replace(closingDivs, newClosingDivs);

fs.writeFileSync('src/components/about.tsx', content);
