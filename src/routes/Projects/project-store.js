const projectStore = [
  {
    id: 1,
    title: 'GRE Quiz App',
    frontEndRepo: 'https://github.com/rise-erpelding/jquery-quiz-app',
    liveLink: 'https://rise-erpelding.github.io/jquery-quiz-app/',
    summary: `This is a quiz app built using JavaScript and jQuery. The app tests users’ knowledge of
    GRE vocabulary words via multiple-choice questions, giving examples of the words in a
    context similar to what a user might encounter in graduate-level studies.`
  },
  {
    id: 2,
    title: 'Rabbit Hole',
    frontEndRepo: 'https://github.com/rise-erpelding/rabbit-hole',
    liveLink: 'https://rise-erpelding.github.io/rabbit-hole/',
    summary: `Rabbit Hole is a search engine that allows users to find educational podcasts. Users can listen to podcasts in the app, and also see links to Wikipedia articles that may be related to the podcast episode they are listening to. Users also have the option to search Wikipedia or click on links to other wikipedia articles inside the app, allowing for a user experience akin to "falling down a rabbit hole."`
  },
  {
    id: 3,
    title: 'FarmPicks',
    frontEndRepo: 'https://github.com/rise-erpelding/farmpicks-client',
    backEndRepo: 'https://github.com/rise-erpelding/farmpicks-server',
    liveLink: 'https://farmpicks.vercel.app/',
    summary: `FarmPicks is a directory app that allows users seeking information about local farms
    to search and browse farms and get information about them. Users can also save farms
    to their favorites to revisit later, and be part of the community effort to improve
    existing information about farms.`
  },
  {
    id: 4,
    title: 'Mix Ed',
    frontEndRepo: 'https://github.com/rise-erpelding/mixed-app',
    backEndRepo: 'https://github.com/rise-erpelding/mixed-api',
    liveLink: 'https://mixed-app.vercel.app/',
    summary: `Mix Ed is a group generator app that allows teachers to create student groups based on student data. Teachers input students' names (or other identifier, such as a number) and decide what kinds of categories they'd like to form groups based upon (for instance, test scores, personality type, topic of interest, or favorite book), then provide a value for each student within that category. Then, teachers can decide on group size and whether students within each group should be similar or whether they should be different from each other, and click generate. Generated groupings can be saved according to class for easy access or editing later on.`
  }
]

export default projectStore;