// --- Fantastic Overseas Local Storage Database Layer ---

const DB = {
  // Key helpers
  KEYS: {
    PACKAGES: 'fo_packages',
    AGENTS: 'fo_agents',
    CLIENTS: 'fo_clients',
    CURRENT_USER: 'fo_current_user',
    ABOUT: 'fo_about',
    MESSAGES: 'fo_messages',
    GALLERY: 'fo_gallery'
  },

  // Initialize DB with seed data if empty
  init() {
    if (!localStorage.getItem(this.KEYS.PACKAGES)) {
      const defaultPackages = [
        {
          id: 'pkg-1',
          titleEn: 'Work Abroad',
          titleBn: 'বিদেশী কর্মসংস্থান',
          descEn: 'Complete global manpower recruitment. We match engineers, technicians, and medical staff with verified overseas employers.',
          descBn: 'সম্পূর্ণ আন্তর্জাতিক ম্যানপাওয়ার রিক্রুটমেন্ট। আমরা ইঞ্জিনিয়ার, টেকনিশিয়ান এবং মেডিকেল কর্মীদের বিদেশী নিয়োগকর্তাদের সাথে যুক্ত করি।',
          priceEn: '৳ 45,000',
          priceBn: '৳ ৪৫,০০০',
          featuresEn: ['Verified Employer Companies', 'Fast Document Processing', 'Secure Salary Escrows'],
          featuresBn: ['অনুমোদিত নিয়োগকারী প্রতিষ্ঠান', 'দ্রুত ফাইল প্রসেসিং', 'নিরাপদ বেতন ব্যবস্থা']
        },
        {
          id: 'pkg-2',
          titleEn: 'Hajj & Umrah Packages',
          titleBn: 'হজ্জ ও ওমরাহ প্যাকেজ',
          descEn: 'Providing premium, transparently managed Hajj and Umrah packages, arranging comfortable lodging and seamless travel.',
          descBn: 'প্রিমিয়াম এবং স্বচ্ছ হজ্জ ও ওমরাহ প্যাকেজ, আরামদায়ক হোটেল এবং চমৎকার গাইড সুবিধা প্রদান।',
          priceEn: '৳ 2,50,000',
          priceBn: '৳ ২,৫০,০০০',
          featuresEn: ['Premium Lodging near Haram', '15 Days Standard Tour', 'Experienced Local Guides'],
          featuresBn: ['হারামের নিকটবর্তী হোটেল', '১৫ দিন স্ট্যান্ডার্ড ট্যুর', 'অভিজ্ঞ লোকাল গাইড']
        },
        {
          id: 'pkg-3',
          titleEn: 'Skilled Migration',
          titleBn: 'দক্ষ অভিবাসন',
          descEn: 'Guidance for points-based skilled migration visas targeting Canada, Australia, and UK. Expert initial eligibility assessment.',
          descBn: 'কানাডা, অস্ট্রেলিয়া এবং যুক্তরাজ্যে পয়েন্ট-ভিত্তিক দক্ষ অভিবাসনের জন্য গাইডেন্স এবং যোগ্যতা মূল্যায়ন।',
          priceEn: '৳ 20,000',
          priceBn: '৳ ২০,০০০',
          featuresEn: ['Points Assessment Audit', 'Document Authentication Support', 'Language Score Roadmap'],
          featuresBn: ['পয়েন্ট অ্যাসেসমেন্ট অডিট', 'নথি প্রমাণীকরণ সমর্থন', 'ভাষা স্কোরের রোডম্যাপ']
        }
      ];
      localStorage.setItem(this.KEYS.PACKAGES, JSON.stringify(defaultPackages));
    }

    if (!localStorage.getItem(this.KEYS.AGENTS)) {
      const defaultAgents = [
        { id: 'admin', name: 'Super Admin', email: 'admin@fantasticoverseas.com', password: 'admin', role: 'admin' },
        { id: 'agent1', name: 'Md. Karim Uddin', email: 'karim@fantasticoverseas.com', password: 'password', role: 'agent' },
        { id: 'agent2', name: 'Shafiqul Islam', email: 'shafiq@fantasticoverseas.com', password: 'password', role: 'agent' }
      ];
      localStorage.setItem(this.KEYS.AGENTS, JSON.stringify(defaultAgents));
    }

    if (!localStorage.getItem(this.KEYS.CLIENTS)) {
      const defaultClients = [
        {
          name: 'Rahim Uddin',
          passport: 'A12345678',
          phone: '01711-123456',
          trade: 'General Worker',
          totalCost: 150000,
          amountPaid: 150000,
          documents: ['Passport Copy', 'Medical Fit Certificate', 'Police Clearance', 'Passport Size Photos'],
          approved: true,
          statusStep: 4, // Visa Stamped
          statusMessageEn: 'Visa has been successfully stamped. Booking flight tickets.',
          statusMessageBn: 'ভিসা সফলভাবে স্ট্যাম্প করা হয়েছে। বিমান টিকিট বুকিং চলছে।',
          agentId: 'agent1',
          updatedAt: '2026-06-22'
        },
        {
          name: 'Jamil Hossain',
          passport: 'B87654321',
          phone: '01822-654321',
          trade: 'Electrician',
          totalCost: 220000,
          amountPaid: 200000,
          documents: ['Passport Copy', 'Medical Fit Certificate', 'Police Clearance'],
          approved: true,
          statusStep: 2, // Medical Clearance
          statusMessageEn: 'Medical reports cleared. Submitting to Embassy.',
          statusMessageBn: 'মেডিকেল রিপোর্ট ক্লিয়ার হয়েছে। দূতাবাসে ফাইল জমা দেওয়ার প্রস্তুতি চলছে।',
          agentId: 'agent2',
          updatedAt: '2026-06-23'
        },
        {
          name: 'Tasnim Begum',
          passport: 'C45678912',
          phone: '01933-789012',
          trade: 'Hospitality Staff',
          totalCost: 180000,
          amountPaid: 180000,
          documents: ['Passport Copy', 'Medical Fit Certificate', 'Police Clearance', 'Passport Size Photos', 'Experience Certificate'],
          approved: true,
          statusStep: 5, // Departure Ready
          statusMessageEn: 'Orientation briefing complete. Ready for airport departure on June 30.',
          statusMessageBn: 'প্রাক-প্রস্থান ব্রিফিং সম্পূর্ণ। ৩০ জুন বিমান যাত্রার জন্য প্রস্তুত।',
          agentId: 'agent1',
          updatedAt: '2026-06-20'
        }
      ];
      localStorage.setItem(this.KEYS.CLIENTS, JSON.stringify(defaultClients));
    }

    // Seed About Page Content
    if (!localStorage.getItem(this.KEYS.ABOUT)) {
      const defaultAbout = {
        titleEn: 'Building Trust Through Global Recruitment',
        titleBn: 'বৈশ্বিক নিয়োগে বিশ্বস্ততা অর্জন',
        desc1En: 'Fantastic Overseas is a premier recruiting agency based in Bangladesh, recognized for connecting qualified and talented workforce with reputable global industries.',
        desc1Bn: 'ফ্যান্টাস্টিক ওভারসিজ বাংলাদেশের অন্যতম শীর্ষস্থানীয় রিক্রুটিং এজেন্সি, যা যোগ্য ও প্রতিভাবান কর্মীদের বৈশ্বিক শিল্প প্রতিষ্ঠানের সাথে যুক্ত করতে প্রতিশ্রুতিবদ্ধ।',
        desc2En: 'We stand as a reliable bridge for career growth and professional corporate development. Our team manages visa documentation, screening, language preparation, and medical compliance, ensuring absolute transparency at every step.',
        desc2Bn: 'আমরা ক্যারিয়ার বৃদ্ধি এবং পেশাগত কর্পোরেট উন্নয়নের জন্য একটি বিশ্বস্ত সেতুবন্ধন হিসেবে কাজ করি। আমাদের টিম ভিসা ডকুমেন্টেশন, স্ক্রীনিং, ভাষা প্রস্তুতি এবং মেডিকেল কমপ্লায়েন্স পরিচালনা করে থাকে।'
      };
      localStorage.setItem(this.KEYS.ABOUT, JSON.stringify(defaultAbout));
    }

    // Seed Message/Leadership Page Content
    const msgData = localStorage.getItem(this.KEYS.MESSAGES);
    if (msgData && (!msgData.includes('JAHANGIR') || !msgData.includes('director img.jpeg'))) {
      localStorage.removeItem(this.KEYS.MESSAGES);
    }

    if (!localStorage.getItem(this.KEYS.MESSAGES)) {
      const defaultMessages = {
        proprietorName: 'MD. JAHANGIR ALAM',
        proprietorRoleEn: 'Proprietor & Managing Director',
        proprietorRoleBn: 'স্বত্বাধিকারী ও ব্যবস্থাপনা পরিচালক',
        proprietorQuoteEn: 'Welcome to Fantastic Overseas. In a global economy characterized by rapid developments and expanding industries, finding the right employment fit is paramount. We are fully committed to connecting Bangladesh\'s vibrant, hardworking workforce with global employers in a manner that is transparent, ethical, and fully law-compliant. Our state-of-the-art training facilities and language courses ensure that candidates arriving overseas are fully prepared to deliver value on day one. We bridge operational borders and maintain close embassy contact to deliver fast, hassle-free processing times. We thank our corporate clients and candidates for placing their trust in us.',
        proprietorQuoteBn: 'ফ্যান্টাস্টিক ওভারসিজে আপনাকে স্বাগত। দ্রুত পরিবর্তনশীল বিশ্ব অর্থনীতিতে সঠিক কর্মসংস্থান খুঁজে পাওয়া অত্যন্ত গুরুত্বপূর্ণ। আমরা বাংলাদেশের পরিশ্রমী কর্মীবাহিনীকে আন্তর্জাতিক নিয়োগকর্তাদের সাথে স্বচ্ছ, নৈতিক এবং আইনি নিয়ম মেনে যুক্ত করতে প্রতিশ্রুতিবদ্ধ। আমাদের আধুনিক প্রশিক্ষণ কেন্দ্র এবং ভাষা কোর্স নিশ্চিত করে যে কর্মীরা বিদেশে পৌঁছে প্রথম দিন থেকেই দক্ষতার সাথে কাজ করতে পারে। আমরা দ্রুত ফাইল প্রক্রিয়াকরণ নিশ্চিত করতে সব ধরণের আইনি কাজ নিখুঁতভাবে সম্পন্ন করি। আমাদের অংশীদার ও প্রার্থীদের ধন্যবাদ।',
        proprietorPhoto: 'images/director img.jpeg',
        
        directorName: 'MD. JAHANGIR ALAM',
        directorRoleEn: 'Proprietor & Managing Director',
        directorRoleBn: 'স্বত্বাধিকারী ও ব্যবস্থাপনা পরিচালক',
        directorQuoteEn: 'Welcome to Fantastic Overseas. In a global economy characterized by rapid developments and expanding industries, finding the right employment fit is paramount. We are fully committed to connecting Bangladesh\'s vibrant, hardworking workforce with global employers in a manner that is transparent, ethical, and fully law-compliant. Our state-of-the-art training facilities and language courses ensure that candidates arriving overseas are fully prepared to deliver value on day one. We bridge operational borders and maintain close embassy contact to deliver fast, hassle-free processing times. We thank our corporate clients and candidates for placing their trust in us.',
        directorQuoteBn: 'ফ্যান্টাস্টিক ওভারসিজে আপনাকে স্বাগত। দ্রুত পরিবর্তনশীল বিশ্ব অর্থনীতিতে সঠিক কর্মসংস্থান খুঁজে পাওয়া অত্যন্ত গুরুত্বপূর্ণ। আমরা বাংলাদেশের পরিশ্রমী কর্মীবাহিনীকে আন্তর্জাতিক নিয়োগকর্তাদের সাথে স্বচ্ছ, নৈতিক এবং আইনি নিয়ম মেনে যুক্ত করতে প্রতিশ্রুতিবদ্ধ। আমাদের আধুনিক প্রশিক্ষণ কেন্দ্র এবং ভাষা কোর্স নিশ্চিত করে যে কর্মীরা বিদেশে পৌঁছে প্রথম দিন থেকেই দক্ষতার সাথে কাজ করতে পারে। আমরা দ্রুত ফাইল প্রক্রিয়াকরণ নিশ্চিত করতে সব ধরণের আইনি কাজ নিখুঁতভাবে সম্পন্ন করি। আমাদের অংশীদার ও প্রার্থীদের ধন্যবাদ।',
        directorPhoto: 'images/director img.jpeg'
      };
      localStorage.setItem(this.KEYS.MESSAGES, JSON.stringify(defaultMessages));
    }

    // Seed Gallery Images Content
    if (!localStorage.getItem(this.KEYS.GALLERY)) {
      const defaultGallery = [
        { id: 'gal-1', src: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=600&auto=format&fit=crop', alt: 'Pre-departure training seminar for overseas candidates' },
        { id: 'gal-2', src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop', alt: 'Active panel interview with recruitment delegates' },
        { id: 'gal-3', src: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=600&auto=format&fit=crop', alt: 'Pre-selection examination and candidate briefing' },
        { id: 'gal-4', src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop', alt: 'Candidate orientation and briefing meeting' },
        { id: 'gal-5', src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop', alt: 'Language training session and technical assessment center' },
        { id: 'gal-6', src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop', alt: 'Fantastic Overseas corporate staff meeting' },
        { id: 'gal-7', src: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=600&auto=format&fit=crop', alt: 'Technical engineering candidates assessment test' },
        { id: 'gal-8', src: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop', alt: 'Construction and engineering candidates training session' },
        { id: 'gal-9', src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop', alt: 'Candidate resume submission and screening interview' },
        { id: 'gal-10', src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop', alt: 'Corporate office global partnership handshake' },
        { id: 'gal-11', src: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop', alt: 'Candidate technical orientation briefing session' },
        { id: 'gal-12', src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop', alt: 'Successful candidate pre-departure airport photo group' }
      ];
      localStorage.setItem(this.KEYS.GALLERY, JSON.stringify(defaultGallery));
    }
  },

  // Read data
  getPackages() {
    return JSON.parse(localStorage.getItem(this.KEYS.PACKAGES)) || [];
  },
  getAgents() {
    return JSON.parse(localStorage.getItem(this.KEYS.AGENTS)) || [];
  },
  getClients() {
    return JSON.parse(localStorage.getItem(this.KEYS.CLIENTS)) || [];
  },
  getCurrentUser() {
    return JSON.parse(localStorage.getItem(this.KEYS.CURRENT_USER)) || null;
  },
  getAbout() {
    return JSON.parse(localStorage.getItem(this.KEYS.ABOUT)) || {};
  },
  getMessages() {
    return JSON.parse(localStorage.getItem(this.KEYS.MESSAGES)) || {};
  },
  getGallery() {
    return JSON.parse(localStorage.getItem(this.KEYS.GALLERY)) || [];
  },

  // Save data
  savePackages(packages) {
    localStorage.setItem(this.KEYS.PACKAGES, JSON.stringify(packages));
  },
  saveAgents(agents) {
    localStorage.setItem(this.KEYS.AGENTS, JSON.stringify(agents));
  },
  saveClients(clients) {
    localStorage.setItem(this.KEYS.CLIENTS, JSON.stringify(clients));
  },
  saveAbout(about) {
    localStorage.setItem(this.KEYS.ABOUT, JSON.stringify(about));
  },
  saveMessages(messages) {
    localStorage.setItem(this.KEYS.MESSAGES, JSON.stringify(messages));
  },
  saveGallery(gallery) {
    localStorage.setItem(this.KEYS.GALLERY, JSON.stringify(gallery));
  },

  // Auth Operations
  login(email, password) {
    const agents = this.getAgents();
    const user = agents.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem(this.KEYS.CURRENT_USER, JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }));
      return user;
    }
    return null;
  },
  logout() {
    localStorage.removeItem(this.KEYS.CURRENT_USER);
  },
  
  // Update credentials inside dashboard
  updateCredentials(userId, email, password) {
    const agents = this.getAgents();
    const user = agents.find(u => u.id === userId);
    if (user) {
      const isEmailTaken = agents.some(u => u.email.toLowerCase() === email.toLowerCase() && u.id !== userId);
      if (isEmailTaken) {
        return { success: false, message: 'Email address is already in use by another user.' };
      }
      user.email = email;
      user.password = password;
      this.saveAgents(agents);
      
      const curUser = this.getCurrentUser();
      if (curUser && curUser.id === userId) {
        curUser.email = email;
        localStorage.setItem(this.KEYS.CURRENT_USER, JSON.stringify(curUser));
      }
      return { success: true };
    }
    return { success: false, message: 'User not found.' };
  },



  // Add / edit package
  addPackage(pkg) {
    const packages = this.getPackages();
    pkg.id = 'pkg-' + Date.now();
    packages.push(pkg);
    this.savePackages(packages);
    return pkg;
  },
  deletePackage(id) {
    const packages = this.getPackages().filter(p => p.id !== id);
    this.savePackages(packages);
  },

  // Add / edit agent
  addAgent(agent) {
    const agents = this.getAgents();
    agent.id = 'agent-' + Date.now();
    agent.role = 'agent';
    agents.push(agent);
    this.saveAgents(agents);
    return agent;
  },
  deleteAgent(id) {
    const agents = this.getAgents().filter(a => a.id !== id);
    this.saveAgents(agents);
  },

  // Client Operations
  addClient(client) {
    const clients = this.getClients();
    client.updatedAt = new Date().toISOString().split('T')[0];
    client.approved = false; // Candidates registered by agents require admin approval
    clients.push(client);
    this.saveClients(clients);
    return client;
  },
  approveClient(passport) {
    const clients = this.getClients();
    const client = clients.find(c => c.passport.toLowerCase() === passport.toLowerCase());
    if (client) {
      client.approved = true;
      client.updatedAt = new Date().toISOString().split('T')[0];
      this.saveClients(clients);
      return client;
    }
    return null;
  },
  updateClientStatus(passport, step, msgEn, msgBn) {
    const clients = this.getClients();
    const client = clients.find(c => c.passport.toLowerCase() === passport.toLowerCase());
    if (client) {
      client.statusStep = parseInt(step, 10);
      client.statusMessageEn = msgEn;
      client.statusMessageBn = msgBn;
      client.updatedAt = new Date().toISOString().split('T')[0];
      this.saveClients(clients);
      return client;
    }
    return null;
  },
  searchClient(passport, name) {
    const clients = this.getClients();
    return clients.find(c => 
      c.passport.toLowerCase().trim() === passport.toLowerCase().trim() && 
      c.name.toLowerCase().trim() === name.toLowerCase().trim()
    );
  },

  // Gallery Operations
  addGalleryImage(img) {
    const gallery = this.getGallery();
    img.id = 'gal-' + Date.now();
    gallery.push(img);
    this.saveGallery(gallery);
    return img;
  },
  deleteGalleryImage(id) {
    const gallery = this.getGallery().filter(g => g.id !== id);
    this.saveGallery(gallery);
  }
};

// Initialize on load
DB.init();
window.FO_DB = DB; // Attach to window for global access
