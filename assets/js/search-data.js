// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Here you can find some projects I&#39;ve worked on.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Hey you! Here&#39;s where I am at right now. I am looking for opportunities in the data science field. Hit me up at cmmurgav@gmail.com",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-martian",
          title: 'The Martian',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_martian/";
            },},{id: "news-i-moved-to-chapel-hill-north-carolina-i-took-a-relocation-break",
          title: 'I moved to Chapel Hill, North Carolina. I took a relocation break.',
          description: "",
          section: "News",},{id: "news-started-cse6040-computing-for-data-analytics-through-edx",
          title: 'Started CSE6040: Computing for Data Analytics through EDX',
          description: "",
          section: "News",},{id: "news-i-was-admitted-to-the-program-at-georgia-institute-of-technology",
          title: 'I was admitted to the program at Georgia Institute of Technology!',
          description: "",
          section: "News",},{id: "news-started-master-of-science-of-analytics-officially-i-transferred-the-credits-from-cse6040-too",
          title: 'Started Master of Science of Analytics officially. I transferred the credits from CSE6040...',
          description: "",
          section: "News",},{id: "projects-attendance-and-leads-report",
          title: 'Attendance and Leads Report',
          description: "BPO division wanted a dashboard where they could visualize a summary of all KPI of all",
          section: "Projects",handler: () => {
              window.location.href = "/projects/attendance_lead_report/";
            },},{id: "projects-ultra-cool-big-visualization-bpo-support",
          title: 'Ultra cool big visualization BPO Support',
          description: "BPO division wanted a dashboard where they could visualize a summary of all KPI of all",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bpo_support/";
            },},{id: "projects-confie-collections-report",
          title: 'Confie Collections Report',
          description: "Tableau Report with multiple views and filters",
          section: "Projects",handler: () => {
              window.location.href = "/projects/confie_collections_report/";
            },},{id: "projects-mea-analysis",
          title: 'MEA Analysis',
          description: "Multi Electrode Array Feature Analysis and Visualization",
          section: "Projects",handler: () => {
              window.location.href = "/projects/unc_mea_analysis/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/resume.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%6D%6D%75%72%67%61%76@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/cmurga95", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/carlosmurga95", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/carlos-alejandro-murga-8b9426235", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
