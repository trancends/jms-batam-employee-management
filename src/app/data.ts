export interface Employee {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date | string;
  basicSalary: number;
  status: 'active' | 'inactive';
  group:
    | 'Marketing'
    | 'Management'
    | 'HR'
    | 'BackEnd Engineer'
    | 'FrontEnd Engineer'
    | 'DevOps'
    | 'Product Manager'
    | 'Project Manager'
    | 'Sales'
    | 'C Level'
    | 'Finance';
  description: Date | string;
}

export const group = [
  'Marketing',
  'Management',
  'HR',
  'BackEnd Engineer',
  'FrontEnd Engineer',
  'DevOps',
  'Product Manager',
  'Project Manager',
  'Sales',
  'C Level',
  'Finance',
];

export const data: Employee[] = [
  {
    username: 'Caryn Dennis',
    firstName: 'Caesar',
    lastName: 'Goodwin',
    email: 'a@hotmail.org',
    birthDate: '10/29/1999',
    basicSalary: 11655042,
    status: 'active',
    group: 'Marketing',
    description: '08/25/2022',
  },
  {
    username: 'Macy Flynn',
    firstName: 'Tara',
    lastName: 'Landry',
    email: 'aliquet@google.couk',
    birthDate: '08/10/1989',
    basicSalary: 14307472,
    status: 'active',
    group: 'Marketing',
    description: '08/27/2022',
  },
  {
    username: 'Ann Montgomery',
    firstName: 'Quon',
    lastName: 'Byrd',
    email: 'semper.tellus@protonmail.ca',
    birthDate: '06/29/1990',
    basicSalary: 21415689,
    status: 'active',
    group: 'Marketing',
    description: '01/11/2014',
  },
  {
    username: 'Fatima Hopper',
    firstName: 'Callum',
    lastName: 'Glass',
    email: 'auctor.velit@yahoo.net',
    birthDate: '07/20/1990',
    basicSalary: 21158662,
    status: 'active',
    group: 'Marketing',
    description: '02/10/2022',
  },
  {
    username: 'Norman Brewer',
    firstName: 'Kelly',
    lastName: 'Patrick',
    email: 'vel.est@aol.net',
    birthDate: '09/16/1998',
    basicSalary: 19626289,
    status: 'active',
    group: 'Marketing',
    description: '08/02/2012',
  },
  {
    username: 'Ann Cochran',
    firstName: 'Fleur',
    lastName: 'Haney',
    email: 'purus.sapien.gravida@hotmail.couk',
    birthDate: '02/06/1994',
    basicSalary: 17347697,
    status: 'active',
    group: 'Marketing',
    description: '10/06/2015',
  },
  {
    username: 'Claudia Owen',
    firstName: 'Lisandra',
    lastName: 'Campbell',
    email: 'tempor.arcu@icloud.ca',
    birthDate: '12/10/1994',
    basicSalary: 18283125,
    status: 'active',
    group: 'Marketing',
    description: '08/13/2012',
  },
  {
    username: 'Amir Casey',
    firstName: 'Kasimir',
    lastName: 'Orr',
    email: 'at@hotmail.org',
    birthDate: '01/03/1999',
    basicSalary: 10737193,
    status: 'active',
    group: 'Marketing',
    description: '12/07/2012',
  },
  {
    username: 'Ferris Simpson',
    firstName: 'Tamara',
    lastName: 'Paul',
    email: 'non.magna.nam@outlook.couk',
    birthDate: '09/06/1992',
    basicSalary: 14766164,
    status: 'active',
    group: 'Marketing',
    description: '03/01/2018',
  },
  {
    username: 'Caesar Figueroa',
    firstName: 'Jonas',
    lastName: 'Gardner',
    email: 'id.sapien.cras@google.org',
    birthDate: '03/27/1988',
    basicSalary: 12550581,
    status: 'active',
    group: 'Marketing',
    description: '05/13/2017',
  },
  {
    username: 'Herman Key',
    firstName: 'Hector',
    lastName: 'Ware',
    email: 'aliquam.nec@outlook.couk',
    birthDate: '01/02/1998',
    basicSalary: 9604783,
    status: 'active',
    group: 'Management',
    description: '02/11/2023',
  },
  {
    username: 'Melodie Barr',
    firstName: 'Christopher',
    lastName: 'Kerr',
    email: 'proin.non@hotmail.couk',
    birthDate: '11/05/1994',
    basicSalary: 23724871,
    status: 'active',
    group: 'Management',
    description: '05/09/2018',
  },
  {
    username: 'Larissa Roman',
    firstName: 'Elliott',
    lastName: 'French',
    email: 'orci.lobortis@icloud.ca',
    birthDate: '05/27/1991',
    basicSalary: 22219731,
    status: 'active',
    group: 'Management',
    description: '11/09/2018',
  },
  {
    username: 'Ishmael Mullins',
    firstName: 'Coby',
    lastName: 'Santiago',
    email: 'tellus.non.magna@yahoo.org',
    birthDate: '06/02/1994',
    basicSalary: 17080701,
    status: 'active',
    group: 'Management',
    description: '07/20/2015',
  },
  {
    username: 'Brittany Michael',
    firstName: 'Kamal',
    lastName: 'Mendoza',
    email: 'montes@icloud.net',
    birthDate: '05/01/1995',
    basicSalary: 22231074,
    status: 'active',
    group: 'Management',
    description: '07/15/2018',
  },
  {
    username: 'Alfonso Maddox',
    firstName: 'Octavius',
    lastName: 'George',
    email: 'facilisi.sed@hotmail.ca',
    birthDate: '03/31/1988',
    basicSalary: 22639799,
    status: 'active',
    group: 'Management',
    description: '06/13/2022',
  },
  {
    username: 'Willow Owen',
    firstName: 'Kelsie',
    lastName: 'Rollins',
    email: 'rhoncus.donec@google.edu',
    birthDate: '10/17/1996',
    basicSalary: 13135497,
    status: 'active',
    group: 'Management',
    description: '06/06/2017',
  },
  {
    username: 'Emily Whitney',
    firstName: 'Reagan',
    lastName: 'Riley',
    email: 'ultrices.iaculis@yahoo.com',
    birthDate: '05/27/1991',
    basicSalary: 16573278,
    status: 'active',
    group: 'Management',
    description: '09/18/2022',
  },
  {
    username: 'Dorian Mercer',
    firstName: 'Macon',
    lastName: 'Dejesus',
    email: 'a.auctor@yahoo.couk',
    birthDate: '01/14/1990',
    basicSalary: 9124962,
    status: 'active',
    group: 'Management',
    description: '12/04/2018',
  },
  {
    username: 'Melyssa Barrett',
    firstName: 'Deacon',
    lastName: 'Macdonald',
    email: 'ac.libero.nec@outlook.edu',
    birthDate: '12/18/1991',
    basicSalary: 17235805,
    status: 'active',
    group: 'Management',
    description: '04/15/2021',
  },
  {
    username: 'Brady Tanner',
    firstName: 'Kane',
    lastName: 'Martin',
    email: 'ullamcorper.duis.at@protonmail.ca',
    birthDate: '03/19/1989',
    basicSalary: 11836008,
    status: 'active',
    group: 'HR',
    description: '04/26/2020',
  },
  {
    username: 'Mara Price',
    firstName: 'Stone',
    lastName: 'Jordan',
    email: 'risus.quis@outlook.net',
    birthDate: '01/03/1997',
    basicSalary: 24602394,
    status: 'active',
    group: 'HR',
    description: '10/05/2018',
  },
  {
    username: 'Irene Velez',
    firstName: 'Colby',
    lastName: 'Collier',
    email: 'diam.duis@aol.org',
    birthDate: '08/21/1994',
    basicSalary: 13883522,
    status: 'active',
    group: 'HR',
    description: '08/01/2019',
  },
  {
    username: 'Edan Fischer',
    firstName: 'Hammett',
    lastName: 'Guerra',
    email: 'lorem.vitae.odio@aol.couk',
    birthDate: '05/14/1997',
    basicSalary: 20154056,
    status: 'active',
    group: 'HR',
    description: '02/02/2024',
  },
  {
    username: 'Maryam Ferrell',
    firstName: 'Frances',
    lastName: 'Donaldson',
    email: 'sed.et@hotmail.couk',
    birthDate: '12/15/1989',
    basicSalary: 11529763,
    status: 'active',
    group: 'HR',
    description: '12/20/2020',
  },
  {
    username: 'Yolanda Ewing',
    firstName: 'Petra',
    lastName: 'Richards',
    email: 'interdum.nunc@icloud.net',
    birthDate: '09/20/1998',
    basicSalary: 15233361,
    status: 'active',
    group: 'HR',
    description: '10/03/2023',
  },
  {
    username: 'Serina Molina',
    firstName: 'Jenette',
    lastName: 'Schultz',
    email: 'varius@outlook.net',
    birthDate: '10/14/1998',
    basicSalary: 20411482,
    status: 'active',
    group: 'HR',
    description: '08/21/2021',
  },
  {
    username: 'Palmer Dudley',
    firstName: 'Denton',
    lastName: 'Mckee',
    email: 'non.arcu@hotmail.ca',
    birthDate: '05/17/1996',
    basicSalary: 16725557,
    status: 'active',
    group: 'HR',
    description: '10/06/2017',
  },
  {
    username: 'Allen Vaughn',
    firstName: 'Lionel',
    lastName: 'Landry',
    email: 'bibendum.ullamcorper.duis@outlook.com',
    birthDate: '06/06/1988',
    basicSalary: 19530958,
    status: 'active',
    group: 'HR',
    description: '10/12/2016',
  },
  {
    username: 'Diana Good',
    firstName: 'Kamal',
    lastName: 'Dominguez',
    email: 'proin.mi@hotmail.couk',
    birthDate: '09/19/1989',
    basicSalary: 19284601,
    status: 'active',
    group: 'HR',
    description: '07/24/2014',
  },
  {
    username: 'Raymond Sandoval',
    firstName: 'MacKensie',
    lastName: 'Fowler',
    email: 'arcu@aol.net',
    birthDate: '09/30/1988',
    basicSalary: 13882501,
    status: 'active',
    group: 'Project Manager',
    description: '08/01/2022',
  },
  {
    username: 'Jennifer Gill',
    firstName: 'Carol',
    lastName: 'Klein',
    email: 'adipiscing.elit@aol.ca',
    birthDate: '05/10/1990',
    basicSalary: 16167648,
    status: 'active',
    group: 'Project Manager',
    description: '10/18/2022',
  },
  {
    username: 'Demetrius Hess',
    firstName: 'Adena',
    lastName: 'Welch',
    email: 'ut.sem@protonmail.com',
    birthDate: '04/10/1988',
    basicSalary: 19050793,
    status: 'active',
    group: 'Project Manager',
    description: '03/19/2016',
  },
  {
    username: 'Dexter Richmond',
    firstName: 'Alec',
    lastName: 'Jackson',
    email: 'pede.ultrices@google.net',
    birthDate: '05/23/1997',
    basicSalary: 22803138,
    status: 'active',
    group: 'Project Manager',
    description: '11/08/2014',
  },
  {
    username: 'Drew Robles',
    firstName: 'Olympia',
    lastName: 'Potts',
    email: 'commodo.auctor.velit@icloud.com',
    birthDate: '09/06/1995',
    basicSalary: 23676306,
    status: 'active',
    group: 'Project Manager',
    description: '08/19/2016',
  },
  {
    username: 'Lucian Rios',
    firstName: 'Naomi',
    lastName: 'Yates',
    email: 'aenean.eget@aol.couk',
    birthDate: '10/07/1993',
    basicSalary: 10443421,
    status: 'active',
    group: 'Project Manager',
    description: '01/17/2024',
  },
  {
    username: 'Joelle Holden',
    firstName: 'Calvin',
    lastName: 'Lamb',
    email: 'libero@aol.couk',
    birthDate: '12/24/1991',
    basicSalary: 21918797,
    status: 'active',
    group: 'Project Manager',
    description: '02/15/2023',
  },
  {
    username: 'Dillon Tate',
    firstName: 'Kim',
    lastName: 'Carey',
    email: 'nullam@outlook.couk',
    birthDate: '03/18/1994',
    basicSalary: 21706582,
    status: 'active',
    group: 'Project Manager',
    description: '02/21/2017',
  },
  {
    username: 'Carol Estes',
    firstName: 'Lenore',
    lastName: 'Graham',
    email: 'nunc.interdum@icloud.edu',
    birthDate: '11/12/1993',
    basicSalary: 23375604,
    status: 'active',
    group: 'Project Manager',
    description: '08/27/2016',
  },
  {
    username: 'Kylie Norton',
    firstName: 'Brent',
    lastName: 'Sharpe',
    email: 'fusce.aliquet@protonmail.net',
    birthDate: '09/19/1998',
    basicSalary: 16414121,
    status: 'active',
    group: 'Project Manager',
    description: '06/04/2022',
  },
  {
    username: 'Axel Hull',
    firstName: 'Carlos',
    lastName: 'Mcpherson',
    email: 'duis.risus.odio@google.couk',
    birthDate: '11/21/1998',
    basicSalary: 20359975,
    status: 'active',
    group: 'Product Manager',
    description: '08/26/2019',
  },
  {
    username: 'Philip Hebert',
    firstName: 'Elliott',
    lastName: 'Mendez',
    email: 'nec.malesuada@hotmail.com',
    birthDate: '02/05/1992',
    basicSalary: 22329439,
    status: 'active',
    group: 'Product Manager',
    description: '10/11/2015',
  },
  {
    username: 'Colorado Cohen',
    firstName: 'Liberty',
    lastName: 'Hendrix',
    email: 'odio.etiam@aol.com',
    birthDate: '01/05/2000',
    basicSalary: 20750810,
    status: 'active',
    group: 'Product Manager',
    description: '06/13/2021',
  },
  {
    username: 'Constance Sawyer',
    firstName: 'Ferdinand',
    lastName: 'Lynn',
    email: 'mi.pede@hotmail.com',
    birthDate: '04/05/1988',
    basicSalary: 9053660,
    status: 'active',
    group: 'Product Manager',
    description: '12/23/2017',
  },
  {
    username: 'Susan Ballard',
    firstName: 'Helen',
    lastName: 'Wall',
    email: 'praesent.luctus@outlook.net',
    birthDate: '07/02/1995',
    basicSalary: 9500098,
    status: 'active',
    group: 'Product Manager',
    description: '03/03/2013',
  },
  {
    username: 'Peter Beard',
    firstName: 'Kasimir',
    lastName: 'Sampson',
    email: 'amet.consectetuer@aol.edu',
    birthDate: '03/10/1999',
    basicSalary: 15954109,
    status: 'active',
    group: 'Product Manager',
    description: '09/08/2018',
  },
  {
    username: 'Talon Simmons',
    firstName: 'Wyoming',
    lastName: 'Barrett',
    email: 'ante.dictum@outlook.couk',
    birthDate: '05/13/1998',
    basicSalary: 14333355,
    status: 'active',
    group: 'Product Manager',
    description: '06/21/2015',
  },
  {
    username: 'Uriel Blanchard',
    firstName: 'Jameson',
    lastName: 'Frederick',
    email: 'dictum.eu@hotmail.ca',
    birthDate: '07/18/1989',
    basicSalary: 15044083,
    status: 'active',
    group: 'Product Manager',
    description: '10/15/2015',
  },
  {
    username: 'Elmo Gordon',
    firstName: 'Simone',
    lastName: 'Castillo',
    email: 'augue.ac@protonmail.ca',
    birthDate: '02/18/1995',
    basicSalary: 22995953,
    status: 'active',
    group: 'Product Manager',
    description: '12/14/2013',
  },
  {
    username: 'Walker Harris',
    firstName: 'Susan',
    lastName: 'Poole',
    email: 'urna.justo@outlook.net',
    birthDate: '01/02/1990',
    basicSalary: 22661882,
    status: 'active',
    group: 'Product Manager',
    description: '11/16/2023',
  },
  {
    username: 'Sophia Bean',
    firstName: 'Joan',
    lastName: 'Wiley',
    email: 'ac@icloud.couk',
    birthDate: '01/21/1998',
    basicSalary: 9255315,
    status: 'active',
    group: 'DevOps',
    description: '04/19/2016',
  },
  {
    username: 'Jeremy Holt',
    firstName: 'Kennan',
    lastName: 'Colon',
    email: 'auctor.vitae.aliquet@icloud.couk',
    birthDate: '02/27/1999',
    basicSalary: 18181069,
    status: 'active',
    group: 'DevOps',
    description: '04/10/2012',
  },
  {
    username: 'Elliott Neal',
    firstName: 'Jacob',
    lastName: 'Dillon',
    email: 'quam.a.felis@hotmail.edu',
    birthDate: '03/08/1991',
    basicSalary: 10321101,
    status: 'active',
    group: 'DevOps',
    description: '06/01/2023',
  },
  {
    username: 'Chastity Burch',
    firstName: 'Timothy',
    lastName: 'Stone',
    email: 'curabitur.egestas@google.couk',
    birthDate: '09/19/1996',
    basicSalary: 12241502,
    status: 'active',
    group: 'DevOps',
    description: '03/01/2017',
  },
  {
    username: 'Macaulay Evans',
    firstName: 'Melinda',
    lastName: 'Strong',
    email: 'est@aol.couk',
    birthDate: '02/06/1990',
    basicSalary: 15031194,
    status: 'active',
    group: 'DevOps',
    description: '05/15/2015',
  },
  {
    username: 'Veronica Mercado',
    firstName: 'Illiana',
    lastName: 'Briggs',
    email: 'ante.bibendum@yahoo.ca',
    birthDate: '05/21/1999',
    basicSalary: 16630372,
    status: 'active',
    group: 'DevOps',
    description: '02/09/2017',
  },
  {
    username: 'Amaya Anderson',
    firstName: 'Palmer',
    lastName: 'Dawson',
    email: 'ornare.tortor@outlook.net',
    birthDate: '01/19/1998',
    basicSalary: 11096460,
    status: 'active',
    group: 'DevOps',
    description: '12/20/2021',
  },
  {
    username: 'Germaine Buckley',
    firstName: 'Irene',
    lastName: 'Berg',
    email: 'sem.ut@protonmail.ca',
    birthDate: '01/01/1998',
    basicSalary: 15796091,
    status: 'active',
    group: 'DevOps',
    description: '10/22/2013',
  },
  {
    username: 'Kirestin Rice',
    firstName: 'Hilel',
    lastName: 'Whitaker',
    email: 'velit@yahoo.com',
    birthDate: '09/30/1990',
    basicSalary: 9525350,
    status: 'active',
    group: 'DevOps',
    description: '02/27/2018',
  },
  {
    username: 'Dorothy Rollins',
    firstName: 'Aphrodite',
    lastName: 'Jefferson',
    email: 'semper@outlook.couk',
    birthDate: '12/25/1989',
    basicSalary: 11820188,
    status: 'active',
    group: 'DevOps',
    description: '10/01/2019',
  },
  {
    username: 'Ivy Conrad',
    firstName: 'Quentin',
    lastName: 'Mckinney',
    email: 'aliquam.eu@yahoo.net',
    birthDate: '03/03/1992',
    basicSalary: 14139033,
    status: 'active',
    group: 'FrontEnd Engineer',
    description: '12/31/2023',
  },
  {
    username: 'Leandra Sharp',
    firstName: 'Unity',
    lastName: 'Eaton',
    email: 'fermentum.metus@protonmail.org',
    birthDate: '01/28/1996',
    basicSalary: 9122712,
    status: 'active',
    group: 'FrontEnd Engineer',
    description: '03/23/2022',
  },
  {
    username: 'Freya Le',
    firstName: 'Jana',
    lastName: 'Bishop',
    email: 'convallis@aol.edu',
    birthDate: '06/16/1993',
    basicSalary: 19896404,
    status: 'active',
    group: 'FrontEnd Engineer',
    description: '03/13/2020',
  },
  {
    username: 'Cailin Russell',
    firstName: 'Jelani',
    lastName: 'Reid',
    email: 'ut@icloud.edu',
    birthDate: '09/29/1995',
    basicSalary: 16789046,
    status: 'active',
    group: 'FrontEnd Engineer',
    description: '10/23/2017',
  },
  {
    username: 'Shafira Ramos',
    firstName: 'Hu',
    lastName: 'Cooper',
    email: 'faucibus.orci@hotmail.ca',
    birthDate: '11/18/1991',
    basicSalary: 19298461,
    status: 'active',
    group: 'FrontEnd Engineer',
    description: '08/08/2022',
  },
  {
    username: 'Shay May',
    firstName: 'Callie',
    lastName: 'Slater',
    email: 'massa.integer@outlook.com',
    birthDate: '05/09/1991',
    basicSalary: 22774924,
    status: 'active',
    group: 'FrontEnd Engineer',
    description: '03/25/2017',
  },
  {
    username: 'Oprah Peters',
    firstName: 'Illiana',
    lastName: 'Church',
    email: 'odio@hotmail.edu',
    birthDate: '03/18/1996',
    basicSalary: 10538822,
    status: 'active',
    group: 'FrontEnd Engineer',
    description: '04/15/2021',
  },
  {
    username: 'Hamish Vang',
    firstName: 'Keelie',
    lastName: 'Tran',
    email: 'posuere.at@yahoo.couk',
    birthDate: '07/13/1993',
    basicSalary: 19112147,
    status: 'active',
    group: 'FrontEnd Engineer',
    description: '03/29/2012',
  },
  {
    username: 'Quentin Cochran',
    firstName: 'Carlos',
    lastName: 'Saunders',
    email: 'dui@aol.couk',
    birthDate: '10/13/1993',
    basicSalary: 15650124,
    status: 'active',
    group: 'FrontEnd Engineer',
    description: '08/25/2023',
  },
  {
    username: 'Galvin Hester',
    firstName: 'Caryn',
    lastName: 'Short',
    email: 'nullam.lobortis@aol.net',
    birthDate: '11/06/1989',
    basicSalary: 14462150,
    status: 'active',
    group: 'FrontEnd Engineer',
    description: '03/30/2022',
  },
  {
    username: 'Tyrone Merrill',
    firstName: 'Willow',
    lastName: 'Morrison',
    email: 'consequat.lectus@aol.couk',
    birthDate: '03/15/1998',
    basicSalary: 9927617,
    status: 'active',
    group: 'BackEnd Engineer',
    description: '10/19/2013',
  },
  {
    username: 'Ainsley Heath',
    firstName: 'Tanya',
    lastName: 'Bolton',
    email: 'faucibus@aol.ca',
    birthDate: '10/01/1992',
    basicSalary: 19925020,
    status: 'active',
    group: 'BackEnd Engineer',
    description: '09/02/2013',
  },
  {
    username: 'Olivia Petersen',
    firstName: 'Liberty',
    lastName: 'Spence',
    email: 'fermentum.arcu@protonmail.ca',
    birthDate: '07/22/1999',
    basicSalary: 22971582,
    status: 'active',
    group: 'BackEnd Engineer',
    description: '10/11/2021',
  },
  {
    username: 'Matthew Ashley',
    firstName: 'Lacy',
    lastName: 'Haney',
    email: 'semper.egestas@aol.couk',
    birthDate: '07/18/1991',
    basicSalary: 9998681,
    status: 'active',
    group: 'BackEnd Engineer',
    description: '04/18/2013',
  },
  {
    username: 'Martena Gomez',
    firstName: 'Ralph',
    lastName: 'Velazquez',
    email: 'integer.vulputate@aol.edu',
    birthDate: '03/20/1990',
    basicSalary: 9932540,
    status: 'active',
    group: 'BackEnd Engineer',
    description: '08/05/2015',
  },
  {
    username: 'Ulysses Hodge',
    firstName: 'Molly',
    lastName: 'Santos',
    email: 'dui.nec@icloud.edu',
    birthDate: '12/20/1990',
    basicSalary: 18142273,
    status: 'active',
    group: 'BackEnd Engineer',
    description: '06/09/2013',
  },
  {
    username: 'Keefe Mccoy',
    firstName: 'Herrod',
    lastName: 'Mcleod',
    email: 'accumsan@yahoo.org',
    birthDate: '10/13/1991',
    basicSalary: 9726114,
    status: 'active',
    group: 'BackEnd Engineer',
    description: '08/12/2021',
  },
  {
    username: 'Indigo Morrison',
    firstName: 'Mira',
    lastName: 'Pitts',
    email: 'felis@icloud.edu',
    birthDate: '09/14/1997',
    basicSalary: 17117215,
    status: 'active',
    group: 'BackEnd Engineer',
    description: '01/15/2014',
  },
  {
    username: 'Jemima Coleman',
    firstName: 'Nissim',
    lastName: 'Schwartz',
    email: 'proin@aol.ca',
    birthDate: '12/03/1998',
    basicSalary: 17720598,
    status: 'active',
    group: 'BackEnd Engineer',
    description: '02/06/2024',
  },
  {
    username: 'Jarrod Bright',
    firstName: 'Tallulah',
    lastName: 'Simmons',
    email: 'dapibus.ligula@protonmail.couk',
    birthDate: '02/11/1998',
    basicSalary: 9763569,
    status: 'active',
    group: 'BackEnd Engineer',
    description: '03/15/2021',
  },
  {
    username: 'Buffy Mcclure',
    firstName: 'Quin',
    lastName: 'Greene',
    email: 'id.magna@aol.couk',
    birthDate: '06/03/1992',
    basicSalary: 18311571,
    status: 'active',
    group: 'C Level',
    description: '02/02/2021',
  },
  {
    username: 'Randall Rodriguez',
    firstName: 'Brent',
    lastName: 'Wilder',
    email: 'magnis.dis.parturient@yahoo.couk',
    birthDate: '07/24/1993',
    basicSalary: 19123122,
    status: 'active',
    group: 'C Level',
    description: '05/26/2020',
  },
  {
    username: 'Tanner Mcfarland',
    firstName: 'Forrest',
    lastName: 'Sanford',
    email: 'molestie.arcu.sed@outlook.com',
    birthDate: '05/16/1993',
    basicSalary: 21786584,
    status: 'active',
    group: 'C Level',
    description: '07/07/2023',
  },
  {
    username: 'Holmes Chang',
    firstName: 'Indigo',
    lastName: 'Morse',
    email: 'in.scelerisque@yahoo.org',
    birthDate: '04/22/1993',
    basicSalary: 17929078,
    status: 'active',
    group: 'C Level',
    description: '11/20/2013',
  },
  {
    username: 'Dominic Blackwell',
    firstName: 'Nell',
    lastName: 'Price',
    email: 'sit.amet.consectetuer@protonmail.net',
    birthDate: '02/04/1995',
    basicSalary: 12763496,
    status: 'active',
    group: 'C Level',
    description: '05/03/2014',
  },
  {
    username: 'Talon Giles',
    firstName: 'Kelsey',
    lastName: 'Hampton',
    email: 'feugiat.sed@yahoo.edu',
    birthDate: '03/01/1997',
    basicSalary: 11753078,
    status: 'active',
    group: 'C Level',
    description: '03/24/2022',
  },
  {
    username: 'Jerome Larsen',
    firstName: 'Davis',
    lastName: 'Holland',
    email: 'semper.nam@aol.net',
    birthDate: '07/06/1994',
    basicSalary: 23650141,
    status: 'active',
    group: 'C Level',
    description: '09/23/2017',
  },
  {
    username: 'Stuart Wilcox',
    firstName: 'Pascale',
    lastName: 'French',
    email: 'tincidunt.adipiscing@google.edu',
    birthDate: '01/27/1991',
    basicSalary: 16086280,
    status: 'active',
    group: 'C Level',
    description: '10/03/2012',
  },
  {
    username: 'Dillon Nichols',
    firstName: 'Quinlan',
    lastName: 'Barber',
    email: 'tincidunt.aliquam@aol.org',
    birthDate: '12/09/1999',
    basicSalary: 8255137,
    status: 'active',
    group: 'C Level',
    description: '02/14/2015',
  },
  {
    username: 'Rama Sweet',
    firstName: 'Byron',
    lastName: 'Guy',
    email: 'vel.pede@google.ca',
    birthDate: '08/04/1996',
    basicSalary: 9021305,
    status: 'active',
    group: 'C Level',
    description: '11/24/2020',
  },
  {
    username: 'Jerry Bentley',
    firstName: 'Ebony',
    lastName: 'Mcpherson',
    email: 'ante.bibendum@hotmail.ca',
    birthDate: '01/16/1995',
    basicSalary: 9654602,
    status: 'active',
    group: 'Sales',
    description: '12/21/2016',
  },
  {
    username: 'John Salazar',
    firstName: 'Jacqueline',
    lastName: 'Thornton',
    email: 'vitae.aliquam.eros@outlook.ca',
    birthDate: '08/06/1991',
    basicSalary: 22182735,
    status: 'active',
    group: 'Sales',
    description: '08/29/2012',
  },
  {
    username: 'Michael Pearson',
    firstName: 'Shad',
    lastName: 'Hall',
    email: 'luctus.ut.pellentesque@icloud.ca',
    birthDate: '09/29/1997',
    basicSalary: 10086234,
    status: 'active',
    group: 'Sales',
    description: '11/17/2017',
  },
  {
    username: 'Avye Hinton',
    firstName: 'Alyssa',
    lastName: 'Cervantes',
    email: 'natoque.penatibus.et@hotmail.com',
    birthDate: '03/07/1994',
    basicSalary: 22620392,
    status: 'active',
    group: 'Sales',
    description: '12/07/2022',
  },
  {
    username: 'Linus Horton',
    firstName: 'Burke',
    lastName: 'Petersen',
    email: 'fusce@hotmail.edu',
    birthDate: '06/03/1989',
    basicSalary: 15239823,
    status: 'active',
    group: 'Sales',
    description: '07/25/2021',
  },
  {
    username: 'Gavin Thomas',
    firstName: 'Sylvia',
    lastName: 'Carrillo',
    email: 'malesuada.vel@outlook.edu',
    birthDate: '05/28/1995',
    basicSalary: 23987988,
    status: 'active',
    group: 'Sales',
    description: '09/19/2021',
  },
  {
    username: 'Alec Noel',
    firstName: 'Alice',
    lastName: 'Sykes',
    email: 'tincidunt.vehicula@icloud.edu',
    birthDate: '09/01/1995',
    basicSalary: 11604581,
    status: 'active',
    group: 'Sales',
    description: '08/07/2019',
  },
  {
    username: 'Hakeem Romero',
    firstName: 'Sierra',
    lastName: 'Huffman',
    email: 'sed.hendrerit.a@icloud.com',
    birthDate: '07/27/1992',
    basicSalary: 17725454,
    status: 'active',
    group: 'Sales',
    description: '02/06/2015',
  },
  {
    username: 'Lillian Flores',
    firstName: 'Gillian',
    lastName: 'Herring',
    email: 'ipsum.dolor.sit@yahoo.com',
    birthDate: '01/21/1999',
    basicSalary: 10772241,
    status: 'active',
    group: 'Sales',
    description: '05/07/2012',
  },
  {
    username: 'Sonya Joyce',
    firstName: 'Cassandra',
    lastName: 'Underwood',
    email: 'mauris.quis.turpis@outlook.ca',
    birthDate: '04/22/1999',
    basicSalary: 11701256,
    status: 'active',
    group: 'Sales',
    description: '05/14/2012',
  },
];
