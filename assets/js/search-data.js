// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "I work across electromagnetics, adaptive RF systems, and biomedical imaging, with a focus on designing hardware that performs reliably in dynamic, real-world conditions. My research integrates digitally programmable RF architectures with flexible and wearable conductor technologies. I currently apply these principles to advance MRI hardware design, making imaging systems more universal, accessible, and easier to use.  Current Research Goals  Create adaptive, tuning-free RF architectures that operate robustly across diverse environments Explore flexible and wearable sensing/imaging systems for next-generation biomedical imaging applications Develop open-source hardware and design frameworks for the community to improve design access. Translate designs into clinically relevant devices and systems",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-automatic-retuning-of-coils-antennas",
          title: 'Automatic Retuning of Coils/Antennas',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/autotune/";
            },},{id: "projects-early-onset-cancer-detection",
          title: 'Early-Onset Cancer Detection',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cancer/";
            },},{id: "projects-non-magnetic-electronic-systems",
          title: 'Non-magnetic Electronic Systems',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nonmag/";
            },},{id: "projects-assistive-technology-for-rehabilitation-patients",
          title: 'Assistive Technology for Rehabilitation Patients',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rehab/";
            },},{id: "projects-stretchable-coils-and-antennas",
          title: 'Stretchable Coils and Antennas',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/stretchable/";
            },},{id: "projects-broadband-rf-transmit-system",
          title: 'Broadband RF Transmit System',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/txbroadband/";
            },},{id: "teaching-202103-ma161",
          title: '202103 Ma161',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/202103-MA161/";
            },},{id: "teaching-202201-ma162",
          title: '202201 Ma162',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/202201-MA162/";
            },},{id: "teaching-202203-ma261",
          title: '202203 Ma261',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/202203-MA261/";
            },},{id: "teaching-202301-bme207",
          title: '202301 Bme207',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/202301-BME207/";
            },},{id: "teaching-202301-ece2k7",
          title: '202301 Ece2k7',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/202301-ECE2K7/";
            },},{
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
