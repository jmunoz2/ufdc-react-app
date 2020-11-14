const collections = [
  {
    id: 1,
    title: "The 3 little kittens",
    slug: "the-3-little-kittens",
    creatorId: 1,
    typeId: 1,
    publicationDate: "c1980",
    language: "English",
  },
  {
    id: 2,
    title: "Afrique Spherodiale",
    slug: "afrique-spherodiale",
    creatorId: 2,
    typeId: 5,
    publicationDate: "1860",
    language: "French",
  },
  {
    id: 3,
    title: "The Age of Einstein",
    slug: "the-age-of-einstein",
    creatorId: 2,
    typeId: 7,
    publicationDate: "2003",
    language: "English",
  },
  {
    id: 4,
    title: "Cultura cubana (La provincia de Matanzas y su evolución)",
    slug: "cultura-cubana-la-provincia-de-matanzas-y-su-evolución",
    creatorId: 4,
    typeId: 12,
    publicationDate: "1919",
    language: "Spanish",
  },
  {
    id: 5,
    title: "Acupuncture for Small Animal Neurologic Disorders",
    slug: "acupuncture-for-small-animal-neurologic-disorders",
    creatorId: 5,
    typeId: 21,
    publicationDate: "2018-01-31",
    language: "English",
  },
  {
    id: 6,
    title: "The African American heritage of Florida",
    slug: "the-african-american-heritage-of-florida",
    creatorId: 6,
    typeId: 31,
    publicationDate: "2017",
    language: "English",
  },
];

const partners = [
  {
    id: 1,
    abbrName: "ADABI",
    slug: "adabi",
    fullName: "Apoyo al Desarrollo de Archivos y Bibliotecas de Mexico",
    about:
      "Apoyo al Desarrollo de Archivos y Bibliotecas de Mexico (ADABI de Mexico, A.C) is an institution devoted to the recovery of historic archives and rare books in Mexico. As a result of this work, ADABI has published inventories, catalogs, restoration reports, and other types of publications. ADABI’s publications are in electronic format and they are open access. We count with titles that deal with the Mexican Caribbean, which includes the states of Campeche, Yucatan, and Quintana Roo. This material enriches the knowledge of the Mexican Caribbean by embracing a diversity of content, such as music, cartography, journalism, industrialization, daily life, and the processes of restoracion of the cultural heritage of the area.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IADABI/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iadabi/images/banners/LogoAdabix3.jpg",
    partnerUrl: "https://www.adabi.org.mx/",
    notes: "",
  },
  {
    id: 2,
    abbrName: "Afro-Antillean Museum",
    slug: "afro-antillean-museum",
    fullName:
      "Museo Afro Antillano de Panama (Afro-Antillean Museum of Panama)",
    about:
      "The Museo Afro Antillano de Panama (Afro-Antillean Museum of Panama, through SAMAAP) arranged for the digitization of the Letters from Isthmian Canal construction workers for inclusion in the Digital Library of the Caribbean (dLOC) for access and preservation. Letters from Isthmian Canal construction workers is featured in the Panama Silver, Asian Gold university course taught at three institutions in Fall 2013.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IAFROANTILLEAN/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iafroantillean/images/banners/coll.jpg",
    partnerUrl: "https://samaap.com/",
    notes:
      "For more about the Museum, see the website for SAMAAP (Sociedad de Amigos del Museo Afro Antilleano de Panamá; Society of Friends of the West Indian Museum):  http://stjonesenterprises.com/samaap/?page_id=772",
  },
  {
    id: 3,
    abbrName: "Agrupación Católica Universitaria",
    slug: "agrupacion-catolica-universitaria",
    fullName: "Agrupación Católica Universitaria",
    about: "Agrupación Católica Universitaria",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IACU/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iacu/images/banners/ACU_Banner.jpg",
    partnerUrl: "",
    notes:
      "To edit this, log on as the aggregation admin and hover over this text to edit it.",
  },
  {
    id: 4,
    abbrName: "Alachua County Public Library",
    slug: "alachua-county-public-library",
    fullName: "Alachua County District Library",
    about:
      "The Alachua County District Library contributed to the Florida Ephemera Collection.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IACDL/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iacdl/images/banners/coll.jpg",
    partnerUrl: "https://www.aclib.us/",
    notes: "",
  },
  {
    id: 5,
    abbrName: "Archives Nationales d' Haïti",
    slug: "archives-nationales-d-haiti",
    fullName: "Archives Nationales d'Haïti",
    about:
      "The Alachua County District Library contributed to the Florida Ephemera Collection.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IANH/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ianh/images/banners/coll.jpg",
    partnerUrl: "http://archivesnationales.gouv.ht/fr/index.php",
    notes: "",
  },
  {
    id: 6,
    abbrName: "Association for Cultural Equity",
    slug: "association-for-cultural-equity",
    fullName: "Association for Cultural Equity (ACE)",
    about:
      "The Association for Cultural Equity (ACE), housed at the Fine Arts Campus of New York City's Hunter College, was chartered as a charitable organization in the State of New York in 1983. It was founded by Alan Lomax to explore and preserve the world's expressive traditions with humanistic commitment and scientific engagement. Alan Lomax was a musicologist, writer and producer who spent his life capturing in sound, photographs, video and research what today is termed our 'intangible heritage.' The central value of his career was the promotion of cultural equity as the need for every culture to express and develop its distinctive heritage, believing it should be recognized as a fundamental human right. His 'Appeal for Cultural Equity' anticipated by decades UNESCO's 2003 declaration to safeguard intangible oral heritage.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IACE/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iace/images/banners/coll.jpg",
    partnerUrl: "http://www.culturalequity.org/",
    notes: "",
  },
  {
    id: 7,
    abbrName: "Ball State University",
    slug: "ball-state-university",
    fullName: "Ball State University",
    about:
      "Ball State University is participating in the French Pamphlets Project.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBSU/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibsu/images/banners/coll.jpg",
    partnerUrl: "https://www.bsu.edu/",
    notes: "",
  },
  {
    id: 8,
    abbrName: "Barbados Archives Department",
    slug: "barbados-archives-department",
    fullName: "Barbados Archives Department",
    about:
      "The Barbados Archives Department’s role is to ensure organizational efficiency and accountability, identify, collect, process and preserve public and private records of Barbados that are of permanent and enduring legal, cultural and historical value and to make information from them available within legal limits and so support the understanding of Barbadian life.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBARBADOSARCHDEPT/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibarbadosarchdept/images/banners/ArchivesDptBanner1.jpg",
    partnerUrl:
      "https://barbados.org/barbados-national-archives.htm#.X41tLNBKiUk",
    notes:
      "READING ROOM RULES: All visitors to the Reading Room are required to sign a visitor’s book on a daily basis. First time visitors are required to read and complete a Researcher Registration Form, read the Reading Room Rules and must also agree to abide by them before consulting any materials. All materials are used on site. Researchers must use pencils only. The use of electronic devices (except scanners) is allowed. ",
  },
  {
    id: 9,
    abbrName: "Barbados Museum and Historical Society Library",
    slug: "barbados-museum-and-historical-society-library",
    fullName: "Barbados Museum and Historical Society",
    about:
      "The Barbados Museum and Historical Society is contributing to the Law Library Microform Center's Haiti Legal Patrimony Project, with all digitized materials from the project available in the Digital Library of the Caribbean (dLOC).",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBMHSL/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibmhsl/images/banners/coll.jpg",
    partnerUrl: "https://ufdc.ufl.edu/dloc1",
    notes: "",
  },
  {
    id: 10,
    abbrName: "Barbados Synagogue Restoration Project (BSRP)",
    slug: "barbados-synagogue-restoration-project-(BSRP)",
    fullName: "Barbados Synagogue Restoration Project (BSRP)",
    about:
      "The Barbados Synagogue Restoration Project (BSRP) Collection contains records related to the activities and functions of BSRP, a charity established in 1984 in Bridgetown, Barbados. These records have been processed and digitized, and partially put online. To fully understand the collection, please see its finding aid.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBSRP/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibsrp/images/banners/Banner6.jpg",
    partnerUrl: "https://www.aclib.us/",
    notes:
      "If you would like to enrich this collection, by contributing pertinent records or information on any aspect, please contact us.",
  },
  {
    id: 11,
    abbrName: "Barry University",
    slug: "barry-university",
    fullName: "Barry University",
    about:
      "Founded in 1940 by the Adrian Dominican Sisters, Barry University's growth throughout the years has been shaped by their core values. Originally founded as Barry College for Women, Barry has grown into a coeducational university that is one of the leading centers for education in South Florida.Grounded in the liberal arts tradition, Barry University is a scholarly community committed to the highest academic standards in undergraduate, graduate and professional education.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBARRY_UNIVERSITY/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibarry_university/images/banners/barry-university-900x100.jpg",
    partnerUrl: "https://www.barry.edu/",
    notes:
      "Acknowledgement: Optical Character Recognition of this collection has been funded under the provisions of the Library Cooperative Grant program, administered by the Florida Department of State's Division of Library and Information Services.",
  },
  {
    id: 12,
    abbrName: "Belize National Library Service and Information System",
    slug: "belize-national-library-service-and-information-system",
    fullName: "Belize National Library Service and Information System (BNLSIS)",
    about:
      "The Belize National Library Service and Information System (BNLSIS), through its National Heritage Library, will contribute to the Digital Library of the Caribbean project from its small but diverse collection, including maps, postcards, rare books, newspapers and stamps.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/INLSBZE/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/inlsbze/images/banners/coll.jpg",
    partnerUrl: "https://bnlsis.org/",
    notes:
      "Subscribe to the RSS feed for the Belize National Library Service and Information System (BNLSIS) newest items in dLOC.",
  },
  {
    id: 13,
    abbrName:
      "Biblioteca del Patronato de la Casa de la Comunidad Hebrea de Cuba",
    slug: "biblioteca-del-patronato-de-la-casa-de-la-comunidad-hebrea-de-cuba",
    fullName:
      "Biblioteca del Patronato de la Casa de la Comunidad Hebrea de Cuba",
    about: "",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/ITEMPLEBETHSHALOM/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/itemplebethshalom/images/banners/coll.jpg",
    partnerUrl:
      "https://www.facebook.com/PatronatodelaCasaComunidadHebreadeCuba/",
    notes: "",
  },
  {
    id: 14,
    abbrName: "Cape Coral Historical Society",
    slug: "cape-coral-historical-society",
    fullName: "Cape Coral Historical Society and Museum Collection",
    about:
      "The Cape Coral Historical Society and Museum Collection is a digital photo-album documenting the Cape Coral Historical Society and Museum of Cape Coral, Florida. The Museum was established by The Cape Coral Historical Society to preserve the history of Cape Coral and Southwest Florida. Originally, the building was the clubhouse at The Cape Coral Country Club. Then, in 1977, it was moved to Four Freedoms Park on Tarpon Court and used as a multi-functional facility. Finally, in 1983, the Historical Society moved the building to Cape Coral's Cultural Park for the establishment of the Museum. This photo-album was produced by the Cape Coral Historical Society and Museum's staff in collaboration with the Southwest Florida Library Network (SWFLN) in a project funded by the State of Florida's Library Services and Technology Act (LSTA) grants program. Additional assistance was provided by the Digital Library Center at the University of Florida and the Florida Center for Library Automation.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/ICCHS/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/icchs/images/banners/coll.jpg",
    partnerUrl: "https://www.capecoralhistoricalmuseum.org/",
    notes:
      "Cape Coral Historical Society and Museum Collection will also be available as subcollection of the PALMM Florida Heritage Collection.",
  },
  {
    id: 15,
    abbrName: "Center for Research Libraries",
    slug: "center-for-research-libraries",
    fullName: "Center for Research Libraries (CRL)",
    about:
      "The Center for Research Libraries (CRL) is contributing to the Law Library Microform Center's Haiti Legal Patrimony Project, with all digitized materials from the project available in the Digital Library of the Caribbean (dLOC). CRL previously collaborated with the University of Florida on the digitization of Latin American and Caribbean newspapers and the digital files resulting from that collaboration also in dLOC.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/ICRL/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/icrl/images/banners/coll.jpg",
    partnerUrl: "",
    notes: "",
  },
  {
    id: 16,
    abbrName: "City of St. Augustine's Archaeology Program",
    slug: "city-of-st-augustine-archaeology-program",
    fullName: "City of St. Augustine's Archaeology Program",
    about:
      "The City of St. Augustine's Archaeology Program preserves St. Augustine's archaeological heritage, which is unparalleled in the quantity and diversity of remains buried beneath its buildings, streets, and backyards. These deposits not only reflect the City's European origins since 1565, but also a rich and varied Native American heritage that has been in existence for thousands of years. The intent of the City's archaeology program is not to stop or limit development, as St. Augustine is a vibrant and evolving urban community, but to preserve the information of those buried remains subject to potential destruction through documentation.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/ICITYSTAUG/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/icitystaug/images/banners/coll.jpg",
    partnerUrl: "https://www.aclib.us/",
    notes:
      "The City of St. Augustine's Archaeology Program is contributing materials to the Unearthing St. Augustine's Colonial Heritage Digital Collection.",
  },
  {
    id: 17,
    abbrName: "Diaspora Vibe Cultural Arts Incubator",
    slug: "diaspora-vibe-cultural-arts-incubator",
    fullName: "Diaspora Vibe Cultural Arts Incubator",
    about:
      "Diaspora Vibe Cultural Arts Incubator commitment to artists of Caribbean and diverse cultures ensures they receive validation, visibility and professional opportunities. Our artists break boundaries of traditional forms and work outside of institutionalized systems, they often must create new systems and infrastructures to sustain their practice. We promote, nurture and exhibit the diverse talents of emerging artists from the Latin and Caribbean Diasporas through an artist-in-residence program, international exchanges, community arts events and a dynamic exhibition program collaborating with art spaces and inhabiting the virtual landscape.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IDVCAI/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/idvcai/images/banners/coll.jpg",
    partnerUrl: "http://dvcai.org/",
    notes: "Email: info@dvcai.org | Phone: (305) 757- 2018",
  },
  {
    id: 18,
    abbrName: "Duke University Libraries",
    slug: "duke-university-libraries",
    fullName: " Duke University Libraries",
    about:
      "The Duke University Libraries are contributing materials from their holdings to the Digital Library of the Caribbean (dLOC), including materials from the Haiti Sun newspaper, published 1950-1962 by Bernard Diederich, which served as a forum for dialogue among the English speaking community in Haiti. The Duke University Libraries acquired the most complete known collection of the paper in 2011 and, in partnership with the Digital Library of the Caribbean, began digitizing it in 2013. The collection should be completely digitized in 2014.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IDUKE/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iduke/images/banners/coll.jpg",
    partnerUrl: "http://www.culturalequity.org/",
    notes: "",
  },
  {
    id: 19,
    abbrName: "ADABI",
    slug: "adabi",
    fullName: "Apoyo al Desarrollo de Archivos y Bibliotecas de Mexico",
    about:
      "Apoyo al Desarrollo de Archivos y Bibliotecas de Mexico (ADABI de Mexico, A.C) is an institution devoted to the recovery of historic archives and rare books in Mexico. As a result of this work, ADABI has published inventories, catalogs, restoration reports, and other types of publications. ADABI’s publications are in electronic format and they are open access. We count with titles that deal with the Mexican Caribbean, which includes the states of Campeche, Yucatan, and Quintana Roo. This material enriches the knowledge of the Mexican Caribbean by embracing a diversity of content, such as music, cartography, journalism, industrialization, daily life, and the processes of restoracion of the cultural heritage of the area.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IADABI/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iadabi/images/banners/LogoAdabix3.jpg",
    partnerUrl: "https://www.adabi.org.mx/",
    notes: "",
  },
  {
    id: 20,
    abbrName: "Afro-Antillean Museum",
    slug: "afro-antillean-museum",
    fullName:
      "Museo Afro Antillano de Panama (Afro-Antillean Museum of Panama)",
    about:
      "The Museo Afro Antillano de Panama (Afro-Antillean Museum of Panama, through SAMAAP) arranged for the digitization of the Letters from Isthmian Canal construction workers for inclusion in the Digital Library of the Caribbean (dLOC) for access and preservation. Letters from Isthmian Canal construction workers is featured in the Panama Silver, Asian Gold university course taught at three institutions in Fall 2013.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IAFROANTILLEAN/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iafroantillean/images/banners/coll.jpg",
    partnerUrl: "https://samaap.com/",
    notes:
      "For more about the Museum, see the website for SAMAAP (Sociedad de Amigos del Museo Afro Antilleano de Panamá; Society of Friends of the West Indian Museum):  http://stjonesenterprises.com/samaap/?page_id=772",
  },
  {
    id: 21,
    abbrName: "Agrupacion Católica Universitaria",
    slug: "agrupacion-catolica-universitaria",
    fullName: "Agrupación Católica Universitaria",
    about: "Agrupación Católica Universitaria",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IACU/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iacu/images/banners/ACU_Banner.jpg",
    partnerUrl: "",
    notes:
      "To edit this, log on as the aggregation admin and hover over this text to edit it.",
  },
  {
    id: 22,
    abbrName: "Alachua County Public Library",
    slug: "alachua-county-public-library",
    fullName: "Alachua County District Library",
    about:
      "The Alachua County District Library contributed to the Florida Ephemera Collection.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IACDL/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iacdl/images/banners/coll.jpg",
    partnerUrl: "https://www.aclib.us/",
    notes: "",
  },
  {
    id: 23,
    abbrName: "Archives Nationales d' Haïti",
    slug: "archives-nationales-d-haiti",
    fullName: "Archives Nationales d'Haïti",
    about:
      "The Alachua County District Library contributed to the Florida Ephemera Collection.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IANH/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ianh/images/banners/coll.jpg",
    partnerUrl: "http://archivesnationales.gouv.ht/fr/index.php",
    notes: "",
  },
  {
    id: 24,
    abbrName: "Association for Cultural Equity",
    slug: "association-for-cultural-equity",
    fullName: "Association for Cultural Equity (ACE)",
    about:
      "The Association for Cultural Equity (ACE), housed at the Fine Arts Campus of New York City's Hunter College, was chartered as a charitable organization in the State of New York in 1983. It was founded by Alan Lomax to explore and preserve the world's expressive traditions with humanistic commitment and scientific engagement. Alan Lomax was a musicologist, writer and producer who spent his life capturing in sound, photographs, video and research what today is termed our 'intangible heritage.' The central value of his career was the promotion of cultural equity as the need for every culture to express and develop its distinctive heritage, believing it should be recognized as a fundamental human right. His 'Appeal for Cultural Equity' anticipated by decades UNESCO's 2003 declaration to safeguard intangible oral heritage.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IACE/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iace/images/banners/coll.jpg",
    partnerUrl: "http://www.culturalequity.org/",
    notes: "",
  },
  {
    id: 25,
    abbrName: "Ball State University",
    slug: "ball-state-university",
    fullName: "Ball State University",
    about:
      "Ball State University is participating in the French Pamphlets Project.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBSU/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibsu/images/banners/coll.jpg",
    partnerUrl: "https://www.bsu.edu/",
    notes: "",
  },
  {
    id: 26,
    abbrName: "Barbados Archives Department",
    slug: "barbados-archives-department",
    fullName: "Barbados Archives Department",
    about:
      "The Barbados Archives Department’s role is to ensure organizational efficiency and accountability, identify, collect, process and preserve public and private records of Barbados that are of permanent and enduring legal, cultural and historical value and to make information from them available within legal limits and so support the understanding of Barbadian life.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBARBADOSARCHDEPT/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibarbadosarchdept/images/banners/ArchivesDptBanner1.jpg",
    partnerUrl:
      "https://barbados.org/barbados-national-archives.htm#.X41tLNBKiUk",
    notes:
      "READING ROOM RULES: All visitors to the Reading Room are required to sign a visitor’s book on a daily basis. First time visitors are required to read and complete a Researcher Registration Form, read the Reading Room Rules and must also agree to abide by them before consulting any materials. All materials are used on site. Researchers must use pencils only. The use of electronic devices (except scanners) is allowed. ",
  },
  {
    id: 27,
    abbrName: "Barbados Museum and Historical Society Library",
    slug: "barbados-museum-and-historical-society-library",
    fullName: "Barbados Museum and Historical Society",
    about:
      "The Barbados Museum and Historical Society is contributing to the Law Library Microform Center's Haiti Legal Patrimony Project, with all digitized materials from the project available in the Digital Library of the Caribbean (dLOC).",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBMHSL/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibmhsl/images/banners/coll.jpg",
    partnerUrl: "https://ufdc.ufl.edu/dloc1",
    notes: "",
  },
  {
    id: 28,
    abbrName: "Barbados Synagogue Restoration Project (BSRP)",
    slug: "barbados-synagogue-restoration-project-(BSRP)",
    fullName: "Barbados Synagogue Restoration Project (BSRP)",
    about:
      "The Barbados Synagogue Restoration Project (BSRP) Collection contains records related to the activities and functions of BSRP, a charity established in 1984 in Bridgetown, Barbados. These records have been processed and digitized, and partially put online. To fully understand the collection, please see its finding aid.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBSRP/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibsrp/images/banners/Banner6.jpg",
    partnerUrl: "https://www.aclib.us/",
    notes:
      "If you would like to enrich this collection, by contributing pertinent records or information on any aspect, please contact us.",
  },
  {
    id: 29,
    abbrName: "Barry University",
    slug: "barry-university",
    fullName: "Barry University",
    about:
      "Founded in 1940 by the Adrian Dominican Sisters, Barry University's growth throughout the years has been shaped by their core values. Originally founded as Barry College for Women, Barry has grown into a coeducational university that is one of the leading centers for education in South Florida.Grounded in the liberal arts tradition, Barry University is a scholarly community committed to the highest academic standards in undergraduate, graduate and professional education.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBARRY_UNIVERSITY/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibarry_university/images/banners/barry-university-900x100.jpg",
    partnerUrl: "https://www.barry.edu/",
    notes:
      "Acknowledgement: Optical Character Recognition of this collection has been funded under the provisions of the Library Cooperative Grant program, administered by the Florida Department of State's Division of Library and Information Services.",
  },
  {
    id: 30,
    abbrName: "Belize National Library Service and Information System",
    slug: "belize-national-library-service-and-information-system",
    fullName: "Belize National Library Service and Information System (BNLSIS)",
    about:
      "The Belize National Library Service and Information System (BNLSIS), through its National Heritage Library, will contribute to the Digital Library of the Caribbean project from its small but diverse collection, including maps, postcards, rare books, newspapers and stamps.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/INLSBZE/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/inlsbze/images/banners/coll.jpg",
    partnerUrl: "https://bnlsis.org/",
    notes:
      "Subscribe to the RSS feed for the Belize National Library Service and Information System (BNLSIS) newest items in dLOC.",
  },
  {
    id: 31,
    abbrName:
      "Biblioteca del Patronato de la Casa de la Comunidad Hebrea de Cuba",
    slug: "biblioteca-del-patronato-de-la-casa-de-la-comunidad-hebrea-de-cuba",
    fullName:
      "Biblioteca del Patronato de la Casa de la Comunidad Hebrea de Cuba",
    about: "",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/ITEMPLEBETHSHALOM/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/itemplebethshalom/images/banners/coll.jpg",
    partnerUrl:
      "https://www.facebook.com/PatronatodelaCasaComunidadHebreadeCuba/",
    notes: "",
  },
  {
    id: 32,
    abbrName: "Cape Coral Historical Society",
    slug: "cape-coral-historical-society",
    fullName: "Cape Coral Historical Society and Museum Collection",
    about:
      "The Cape Coral Historical Society and Museum Collection is a digital photo-album documenting the Cape Coral Historical Society and Museum of Cape Coral, Florida. The Museum was established by The Cape Coral Historical Society to preserve the history of Cape Coral and Southwest Florida. Originally, the building was the clubhouse at The Cape Coral Country Club. Then, in 1977, it was moved to Four Freedoms Park on Tarpon Court and used as a multi-functional facility. Finally, in 1983, the Historical Society moved the building to Cape Coral's Cultural Park for the establishment of the Museum. This photo-album was produced by the Cape Coral Historical Society and Museum's staff in collaboration with the Southwest Florida Library Network (SWFLN) in a project funded by the State of Florida's Library Services and Technology Act (LSTA) grants program. Additional assistance was provided by the Digital Library Center at the University of Florida and the Florida Center for Library Automation.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/ICCHS/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/icchs/images/banners/coll.jpg",
    partnerUrl: "https://www.capecoralhistoricalmuseum.org/",
    notes:
      "Cape Coral Historical Society and Museum Collection will also be available as subcollection of the PALMM Florida Heritage Collection.",
  },
  {
    id: 33,
    abbrName: "Center for Research Libraries",
    slug: "center-for-research-libraries",
    fullName: "Center for Research Libraries (CRL)",
    about:
      "The Center for Research Libraries (CRL) is contributing to the Law Library Microform Center's Haiti Legal Patrimony Project, with all digitized materials from the project available in the Digital Library of the Caribbean (dLOC). CRL previously collaborated with the University of Florida on the digitization of Latin American and Caribbean newspapers and the digital files resulting from that collaboration also in dLOC.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/ICRL/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/icrl/images/banners/coll.jpg",
    partnerUrl: "",
    notes: "",
  },
  {
    id: 34,
    abbrName: "City of St. Augustine's Archaeology Program",
    slug: "city-of-st-augustine-archaeology-program",
    fullName: "City of St. Augustine's Archaeology Program",
    about:
      "The City of St. Augustine's Archaeology Program preserves St. Augustine's archaeological heritage, which is unparalleled in the quantity and diversity of remains buried beneath its buildings, streets, and backyards. These deposits not only reflect the City's European origins since 1565, but also a rich and varied Native American heritage that has been in existence for thousands of years. The intent of the City's archaeology program is not to stop or limit development, as St. Augustine is a vibrant and evolving urban community, but to preserve the information of those buried remains subject to potential destruction through documentation.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/ICITYSTAUG/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/icitystaug/images/banners/coll.jpg",
    partnerUrl: "https://www.aclib.us/",
    notes:
      "The City of St. Augustine's Archaeology Program is contributing materials to the Unearthing St. Augustine's Colonial Heritage Digital Collection.",
  },
  {
    id: 35,
    abbrName: "Diaspora Vibe Cultural Arts Incubator",
    slug: "diaspora-vibe-cultural-arts-incubator",
    fullName: "Diaspora Vibe Cultural Arts Incubator",
    about:
      "Diaspora Vibe Cultural Arts Incubator commitment to artists of Caribbean and diverse cultures ensures they receive validation, visibility and professional opportunities. Our artists break boundaries of traditional forms and work outside of institutionalized systems, they often must create new systems and infrastructures to sustain their practice. We promote, nurture and exhibit the diverse talents of emerging artists from the Latin and Caribbean Diasporas through an artist-in-residence program, international exchanges, community arts events and a dynamic exhibition program collaborating with art spaces and inhabiting the virtual landscape.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IDVCAI/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/idvcai/images/banners/coll.jpg",
    partnerUrl: "http://dvcai.org/",
    notes: "Email: info@dvcai.org | Phone: (305) 757- 2018",
  },
  {
    id: 36,
    abbrName: "Duke University Libraries",
    slug: "duke-university-libraries",
    fullName: " Duke University Libraries",
    about:
      "The Duke University Libraries are contributing materials from their holdings to the Digital Library of the Caribbean (dLOC), including materials from the Haiti Sun newspaper, published 1950-1962 by Bernard Diederich, which served as a forum for dialogue among the English speaking community in Haiti. The Duke University Libraries acquired the most complete known collection of the paper in 2011 and, in partnership with the Digital Library of the Caribbean, began digitizing it in 2013. The collection should be completely digitized in 2014.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IDUKE/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iduke/images/banners/coll.jpg",
    partnerUrl: "http://www.culturalequity.org/",
    notes: "",
  },
  {
    id: 37,
    abbrName: "ADABI",
    slug: "adabi",
    fullName: "Apoyo al Desarrollo de Archivos y Bibliotecas de Mexico",
    about:
      "Apoyo al Desarrollo de Archivos y Bibliotecas de Mexico (ADABI de Mexico, A.C) is an institution devoted to the recovery of historic archives and rare books in Mexico. As a result of this work, ADABI has published inventories, catalogs, restoration reports, and other types of publications. ADABI’s publications are in electronic format and they are open access. We count with titles that deal with the Mexican Caribbean, which includes the states of Campeche, Yucatan, and Quintana Roo. This material enriches the knowledge of the Mexican Caribbean by embracing a diversity of content, such as music, cartography, journalism, industrialization, daily life, and the processes of restoracion of the cultural heritage of the area.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IADABI/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iadabi/images/banners/LogoAdabix3.jpg",
    partnerUrl: "https://www.adabi.org.mx/",
    notes: "",
  },
  {
    id: 38,
    abbrName: "Afro-Antillean Museum",
    slug: "afro-antillean-museum",
    fullName:
      "Museo Afro Antillano de Panama (Afro-Antillean Museum of Panama)",
    about:
      "The Museo Afro Antillano de Panama (Afro-Antillean Museum of Panama, through SAMAAP) arranged for the digitization of the Letters from Isthmian Canal construction workers for inclusion in the Digital Library of the Caribbean (dLOC) for access and preservation. Letters from Isthmian Canal construction workers is featured in the Panama Silver, Asian Gold university course taught at three institutions in Fall 2013.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IAFROANTILLEAN/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iafroantillean/images/banners/coll.jpg",
    partnerUrl: "https://samaap.com/",
    notes:
      "For more about the Museum, see the website for SAMAAP (Sociedad de Amigos del Museo Afro Antilleano de Panamá; Society of Friends of the West Indian Museum):  http://stjonesenterprises.com/samaap/?page_id=772",
  },
  {
    id: 39,
    abbrName: "Agrupación Católica Universitaria",
    slug: "agrupacion-catolica-universitaria",
    fullName: "Agrupación Católica Universitaria",
    about: "Agrupación Católica Universitaria",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IACU/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iacu/images/banners/ACU_Banner.jpg",
    partnerUrl: "",
    notes:
      "To edit this, log on as the aggregation admin and hover over this text to edit it.",
  },
  {
    id: 40,
    abbrName: "Alachua County Public Library",
    slug: "alachua-county-public-library",
    fullName: "Alachua County District Library",
    about:
      "The Alachua County District Library contributed to the Florida Ephemera Collection.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IACDL/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iacdl/images/banners/coll.jpg",
    partnerUrl: "https://www.aclib.us/",
    notes: "",
  },
  {
    id: 41,
    abbrName: "Archives Nationales d' Haïti",
    slug: "archives-nationales-d-haiti",
    fullName: "Archives Nationales d'Haïti",
    about:
      "The Alachua County District Library contributed to the Florida Ephemera Collection.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IANH/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ianh/images/banners/coll.jpg",
    partnerUrl: "http://archivesnationales.gouv.ht/fr/index.php",
    notes: "",
  },
  {
    id: 42,
    abbrName: "Association for Cultural Equity",
    slug: "association-for-cultural-equity",
    fullName: "Association for Cultural Equity (ACE)",
    about:
      "The Association for Cultural Equity (ACE), housed at the Fine Arts Campus of New York City's Hunter College, was chartered as a charitable organization in the State of New York in 1983. It was founded by Alan Lomax to explore and preserve the world's expressive traditions with humanistic commitment and scientific engagement. Alan Lomax was a musicologist, writer and producer who spent his life capturing in sound, photographs, video and research what today is termed our 'intangible heritage.' The central value of his career was the promotion of cultural equity as the need for every culture to express and develop its distinctive heritage, believing it should be recognized as a fundamental human right. His 'Appeal for Cultural Equity' anticipated by decades UNESCO's 2003 declaration to safeguard intangible oral heritage.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IACE/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iace/images/banners/coll.jpg",
    partnerUrl: "http://www.culturalequity.org/",
    notes: "",
  },
  {
    id: 43,
    abbrName: "Ball State University",
    slug: "ball-state-university",
    fullName: "Ball State University",
    about:
      "Ball State University is participating in the French Pamphlets Project.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBSU/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibsu/images/banners/coll.jpg",
    partnerUrl: "https://www.bsu.edu/",
    notes: "",
  },
  {
    id: 44,
    abbrName: "Barbados Archives Department",
    slug: "barbados-archives-department",
    fullName: "Barbados Archives Department",
    about:
      "The Barbados Archives Department’s role is to ensure organizational efficiency and accountability, identify, collect, process and preserve public and private records of Barbados that are of permanent and enduring legal, cultural and historical value and to make information from them available within legal limits and so support the understanding of Barbadian life.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBARBADOSARCHDEPT/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibarbadosarchdept/images/banners/ArchivesDptBanner1.jpg",
    partnerUrl:
      "https://barbados.org/barbados-national-archives.htm#.X41tLNBKiUk",
    notes:
      "READING ROOM RULES: All visitors to the Reading Room are required to sign a visitor’s book on a daily basis. First time visitors are required to read and complete a Researcher Registration Form, read the Reading Room Rules and must also agree to abide by them before consulting any materials. All materials are used on site. Researchers must use pencils only. The use of electronic devices (except scanners) is allowed. ",
  },
  {
    id: 45,
    abbrName: "Barbados Museum and Historical Society Library",
    slug: "barbados-museum-and-historical-society-library",
    fullName: "Barbados Museum and Historical Society",
    about:
      "The Barbados Museum and Historical Society is contributing to the Law Library Microform Center's Haiti Legal Patrimony Project, with all digitized materials from the project available in the Digital Library of the Caribbean (dLOC).",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBMHSL/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibmhsl/images/banners/coll.jpg",
    partnerUrl: "https://ufdc.ufl.edu/dloc1",
    notes: "",
  },
  {
    id: 46,
    abbrName: "Barbados Synagogue Restoration Project (BSRP)",
    slug: "barbados-synagogue-restoration-project-(BSRP)",
    fullName: "Barbados Synagogue Restoration Project (BSRP)",
    about:
      "The Barbados Synagogue Restoration Project (BSRP) Collection contains records related to the activities and functions of BSRP, a charity established in 1984 in Bridgetown, Barbados. These records have been processed and digitized, and partially put online. To fully understand the collection, please see its finding aid.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBSRP/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibsrp/images/banners/Banner6.jpg",
    partnerUrl: "https://www.aclib.us/",
    notes:
      "If you would like to enrich this collection, by contributing pertinent records or information on any aspect, please contact us.",
  },
  {
    id: 47,
    abbrName: "Barry University",
    slug: "barry-university",
    fullName: "Barry University",
    about:
      "Founded in 1940 by the Adrian Dominican Sisters, Barry University's growth throughout the years has been shaped by their core values. Originally founded as Barry College for Women, Barry has grown into a coeducational university that is one of the leading centers for education in South Florida.Grounded in the liberal arts tradition, Barry University is a scholarly community committed to the highest academic standards in undergraduate, graduate and professional education.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBARRY_UNIVERSITY/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibarry_university/images/banners/barry-university-900x100.jpg",
    partnerUrl: "https://www.barry.edu/",
    notes:
      "Acknowledgement: Optical Character Recognition of this collection has been funded under the provisions of the Library Cooperative Grant program, administered by the Florida Department of State's Division of Library and Information Services.",
  },
  {
    id: 48,
    abbrName: "Belize National Library Service and Information System",
    slug: "belize-national-library-service-and-information-system",
    fullName: "Belize National Library Service and Information System (BNLSIS)",
    about:
      "The Belize National Library Service and Information System (BNLSIS), through its National Heritage Library, will contribute to the Digital Library of the Caribbean project from its small but diverse collection, including maps, postcards, rare books, newspapers and stamps.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/INLSBZE/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/inlsbze/images/banners/coll.jpg",
    partnerUrl: "https://bnlsis.org/",
    notes:
      "Subscribe to the RSS feed for the Belize National Library Service and Information System (BNLSIS) newest items in dLOC.",
  },
  {
    id: 49,
    abbrName:
      "Biblioteca del Patronato de la Casa de la Comunidad Hebrea de Cuba",
    slug: "biblioteca-del-patronato-de-la-casa-de-la-comunidad-hebrea-de-cuba",
    fullName:
      "Biblioteca del Patronato de la Casa de la Comunidad Hebrea de Cuba",
    about: "",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/ITEMPLEBETHSHALOM/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/itemplebethshalom/images/banners/coll.jpg",
    partnerUrl:
      "https://www.facebook.com/PatronatodelaCasaComunidadHebreadeCuba/",
    notes: "",
  },
  {
    id: 50,
    abbrName: "Cape Coral Historical Society",
    slug: "cape-coral-historical-society",
    fullName: "Cape Coral Historical Society and Museum Collection",
    about:
      "The Cape Coral Historical Society and Museum Collection is a digital photo-album documenting the Cape Coral Historical Society and Museum of Cape Coral, Florida. The Museum was established by The Cape Coral Historical Society to preserve the history of Cape Coral and Southwest Florida. Originally, the building was the clubhouse at The Cape Coral Country Club. Then, in 1977, it was moved to Four Freedoms Park on Tarpon Court and used as a multi-functional facility. Finally, in 1983, the Historical Society moved the building to Cape Coral's Cultural Park for the establishment of the Museum. This photo-album was produced by the Cape Coral Historical Society and Museum's staff in collaboration with the Southwest Florida Library Network (SWFLN) in a project funded by the State of Florida's Library Services and Technology Act (LSTA) grants program. Additional assistance was provided by the Digital Library Center at the University of Florida and the Florida Center for Library Automation.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/ICCHS/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/icchs/images/banners/coll.jpg",
    partnerUrl: "https://www.capecoralhistoricalmuseum.org/",
    notes:
      "Cape Coral Historical Society and Museum Collection will also be available as subcollection of the PALMM Florida Heritage Collection.",
  },
  {
    id: 51,
    abbrName: "Center for Research Libraries",
    slug: "center-for-research-libraries",
    fullName: "Center for Research Libraries (CRL)",
    about:
      "The Center for Research Libraries (CRL) is contributing to the Law Library Microform Center's Haiti Legal Patrimony Project, with all digitized materials from the project available in the Digital Library of the Caribbean (dLOC). CRL previously collaborated with the University of Florida on the digitization of Latin American and Caribbean newspapers and the digital files resulting from that collaboration also in dLOC.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/ICRL/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/icrl/images/banners/coll.jpg",
    partnerUrl: "",
    notes: "",
  },
  {
    id: 52,
    abbrName: "City of St. Augustine's Archaeology Program",
    slug: "city-of-st-augustine-archaeology-program",
    fullName: "City of St. Augustine's Archaeology Program",
    about:
      "The City of St. Augustine's Archaeology Program preserves St. Augustine's archaeological heritage, which is unparalleled in the quantity and diversity of remains buried beneath its buildings, streets, and backyards. These deposits not only reflect the City's European origins since 1565, but also a rich and varied Native American heritage that has been in existence for thousands of years. The intent of the City's archaeology program is not to stop or limit development, as St. Augustine is a vibrant and evolving urban community, but to preserve the information of those buried remains subject to potential destruction through documentation.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/ICITYSTAUG/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/icitystaug/images/banners/coll.jpg",
    partnerUrl: "https://www.aclib.us/",
    notes:
      "The City of St. Augustine's Archaeology Program is contributing materials to the Unearthing St. Augustine's Colonial Heritage Digital Collection.",
  },
  {
    id: 53,
    abbrName: "Diaspora Vibe Cultural Arts Incubator",
    slug: "diaspora-vibe-cultural-arts-incubator",
    fullName: "Diaspora Vibe Cultural Arts Incubator",
    about:
      "Diaspora Vibe Cultural Arts Incubator commitment to artists of Caribbean and diverse cultures ensures they receive validation, visibility and professional opportunities. Our artists break boundaries of traditional forms and work outside of institutionalized systems, they often must create new systems and infrastructures to sustain their practice. We promote, nurture and exhibit the diverse talents of emerging artists from the Latin and Caribbean Diasporas through an artist-in-residence program, international exchanges, community arts events and a dynamic exhibition program collaborating with art spaces and inhabiting the virtual landscape.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IDVCAI/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/idvcai/images/banners/coll.jpg",
    partnerUrl: "http://dvcai.org/",
    notes: "Email: info@dvcai.org | Phone: (305) 757- 2018",
  },
  {
    id: 54,
    abbrName: "Duke University Libraries",
    slug: "duke-university-libraries",
    fullName: " Duke University Libraries",
    about:
      "The Duke University Libraries are contributing materials from their holdings to the Digital Library of the Caribbean (dLOC), including materials from the Haiti Sun newspaper, published 1950-1962 by Bernard Diederich, which served as a forum for dialogue among the English speaking community in Haiti. The Duke University Libraries acquired the most complete known collection of the paper in 2011 and, in partnership with the Digital Library of the Caribbean, began digitizing it in 2013. The collection should be completely digitized in 2014.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IDUKE/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iduke/images/banners/coll.jpg",
    partnerUrl: "http://www.culturalequity.org/",
    notes: "",
  },
  {
    id: 55,
    abbrName: "ADABI",
    slug: "adabi",
    fullName: "Apoyo al Desarrollo de Archivos y Bibliotecas de Mexico",
    about:
      "Apoyo al Desarrollo de Archivos y Bibliotecas de Mexico (ADABI de Mexico, A.C) is an institution devoted to the recovery of historic archives and rare books in Mexico. As a result of this work, ADABI has published inventories, catalogs, restoration reports, and other types of publications. ADABI’s publications are in electronic format and they are open access. We count with titles that deal with the Mexican Caribbean, which includes the states of Campeche, Yucatan, and Quintana Roo. This material enriches the knowledge of the Mexican Caribbean by embracing a diversity of content, such as music, cartography, journalism, industrialization, daily life, and the processes of restoracion of the cultural heritage of the area.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IADABI/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iadabi/images/banners/LogoAdabix3.jpg",
    partnerUrl: "https://www.adabi.org.mx/",
    notes: "",
  },
  {
    id: 56,
    abbrName: "Afro-Antillean Museum",
    slug: "afro-antillean-museum",
    fullName:
      "Museo Afro Antillano de Panama (Afro-Antillean Museum of Panama)",
    about:
      "The Museo Afro Antillano de Panama (Afro-Antillean Museum of Panama, through SAMAAP) arranged for the digitization of the Letters from Isthmian Canal construction workers for inclusion in the Digital Library of the Caribbean (dLOC) for access and preservation. Letters from Isthmian Canal construction workers is featured in the Panama Silver, Asian Gold university course taught at three institutions in Fall 2013.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IAFROANTILLEAN/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iafroantillean/images/banners/coll.jpg",
    partnerUrl: "https://samaap.com/",
    notes:
      "For more about the Museum, see the website for SAMAAP (Sociedad de Amigos del Museo Afro Antilleano de Panamá; Society of Friends of the West Indian Museum):  http://stjonesenterprises.com/samaap/?page_id=772",
  },
  {
    id: 57,
    abbrName: "Agrupacion Católica Universitaria",
    slug: "agrupacion-catolica-universitaria",
    fullName: "Agrupación Católica Universitaria",
    about: "Agrupación Católica Universitaria",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IACU/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iacu/images/banners/ACU_Banner.jpg",
    partnerUrl: "",
    notes:
      "To edit this, log on as the aggregation admin and hover over this text to edit it.",
  },
  {
    id: 58,
    abbrName: "Alachua County Public Library",
    slug: "alachua-county-public-library",
    fullName: "Alachua County District Library",
    about:
      "The Alachua County District Library contributed to the Florida Ephemera Collection.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IACDL/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iacdl/images/banners/coll.jpg",
    partnerUrl: "https://www.aclib.us/",
    notes: "",
  },
  {
    id: 59,
    abbrName: "Archives Nationales d' Haïti",
    slug: "archives-nationales-d-haiti",
    fullName: "Archives Nationales d'Haïti",
    about:
      "The Alachua County District Library contributed to the Florida Ephemera Collection.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IANH/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ianh/images/banners/coll.jpg",
    partnerUrl: "http://archivesnationales.gouv.ht/fr/index.php",
    notes: "",
  },
  {
    id: 60,
    abbrName: "Association for Cultural Equity",
    slug: "association-for-cultural-equity",
    fullName: "Association for Cultural Equity (ACE)",
    about:
      "The Association for Cultural Equity (ACE), housed at the Fine Arts Campus of New York City's Hunter College, was chartered as a charitable organization in the State of New York in 1983. It was founded by Alan Lomax to explore and preserve the world's expressive traditions with humanistic commitment and scientific engagement. Alan Lomax was a musicologist, writer and producer who spent his life capturing in sound, photographs, video and research what today is termed our 'intangible heritage.' The central value of his career was the promotion of cultural equity as the need for every culture to express and develop its distinctive heritage, believing it should be recognized as a fundamental human right. His 'Appeal for Cultural Equity' anticipated by decades UNESCO's 2003 declaration to safeguard intangible oral heritage.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IACE/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iace/images/banners/coll.jpg",
    partnerUrl: "http://www.culturalequity.org/",
    notes: "",
  },
  {
    id: 61,
    abbrName: "Ball State University",
    slug: "ball-state-university",
    fullName: "Ball State University",
    about:
      "Ball State University is participating in the French Pamphlets Project.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBSU/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibsu/images/banners/coll.jpg",
    partnerUrl: "https://www.bsu.edu/",
    notes: "",
  },
  {
    id: 62,
    abbrName: "Barbados Archives Department",
    slug: "barbados-archives-department",
    fullName: "Barbados Archives Department",
    about:
      "The Barbados Archives Department’s role is to ensure organizational efficiency and accountability, identify, collect, process and preserve public and private records of Barbados that are of permanent and enduring legal, cultural and historical value and to make information from them available within legal limits and so support the understanding of Barbadian life.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBARBADOSARCHDEPT/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibarbadosarchdept/images/banners/ArchivesDptBanner1.jpg",
    partnerUrl:
      "https://barbados.org/barbados-national-archives.htm#.X41tLNBKiUk",
    notes:
      "READING ROOM RULES: All visitors to the Reading Room are required to sign a visitor’s book on a daily basis. First time visitors are required to read and complete a Researcher Registration Form, read the Reading Room Rules and must also agree to abide by them before consulting any materials. All materials are used on site. Researchers must use pencils only. The use of electronic devices (except scanners) is allowed. ",
  },
  {
    id: 63,
    abbrName: "Barbados Museum and Historical Society Library",
    slug: "barbados-museum-and-historical-society-library",
    fullName: "Barbados Museum and Historical Society",
    about:
      "The Barbados Museum and Historical Society is contributing to the Law Library Microform Center's Haiti Legal Patrimony Project, with all digitized materials from the project available in the Digital Library of the Caribbean (dLOC).",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBMHSL/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibmhsl/images/banners/coll.jpg",
    partnerUrl: "https://ufdc.ufl.edu/dloc1",
    notes: "",
  },
  {
    id: 64,
    abbrName: "Barbados Synagogue Restoration Project (BSRP)",
    slug: "barbados-synagogue-restoration-project-(BSRP)",
    fullName: "Barbados Synagogue Restoration Project (BSRP)",
    about:
      "The Barbados Synagogue Restoration Project (BSRP) Collection contains records related to the activities and functions of BSRP, a charity established in 1984 in Bridgetown, Barbados. These records have been processed and digitized, and partially put online. To fully understand the collection, please see its finding aid.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBSRP/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibsrp/images/banners/Banner6.jpg",
    partnerUrl: "https://www.aclib.us/",
    notes:
      "If you would like to enrich this collection, by contributing pertinent records or information on any aspect, please contact us.",
  },
  {
    id: 65,
    abbrName: "Barry University",
    slug: "barry-university",
    fullName: "Barry University",
    about:
      "Founded in 1940 by the Adrian Dominican Sisters, Barry University's growth throughout the years has been shaped by their core values. Originally founded as Barry College for Women, Barry has grown into a coeducational university that is one of the leading centers for education in South Florida.Grounded in the liberal arts tradition, Barry University is a scholarly community committed to the highest academic standards in undergraduate, graduate and professional education.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBARRY_UNIVERSITY/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibarry_university/images/banners/barry-university-900x100.jpg",
    partnerUrl: "https://www.barry.edu/",
    notes:
      "Acknowledgement: Optical Character Recognition of this collection has been funded under the provisions of the Library Cooperative Grant program, administered by the Florida Department of State's Division of Library and Information Services.",
  },
  {
    id: 66,
    abbrName: "Belize National Library Service and Information System",
    slug: "belize-national-library-service-and-information-system",
    fullName: "Belize National Library Service and Information System (BNLSIS)",
    about:
      "The Belize National Library Service and Information System (BNLSIS), through its National Heritage Library, will contribute to the Digital Library of the Caribbean project from its small but diverse collection, including maps, postcards, rare books, newspapers and stamps.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/INLSBZE/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/inlsbze/images/banners/coll.jpg",
    partnerUrl: "https://bnlsis.org/",
    notes:
      "Subscribe to the RSS feed for the Belize National Library Service and Information System (BNLSIS) newest items in dLOC.",
  },
  {
    id: 67,
    abbrName:
      "Biblioteca del Patronato de la Casa de la Comunidad Hebrea de Cuba",
    slug: "biblioteca-del-patronato-de-la-casa-de-la-comunidad-hebrea-de-cuba",
    fullName:
      "Biblioteca del Patronato de la Casa de la Comunidad Hebrea de Cuba",
    about: "",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/ITEMPLEBETHSHALOM/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/itemplebethshalom/images/banners/coll.jpg",
    partnerUrl:
      "https://www.facebook.com/PatronatodelaCasaComunidadHebreadeCuba/",
    notes: "",
  },
  {
    id: 68,
    abbrName: "Cape Coral Historical Society",
    slug: "cape-coral-historical-society",
    fullName: "Cape Coral Historical Society and Museum Collection",
    about:
      "The Cape Coral Historical Society and Museum Collection is a digital photo-album documenting the Cape Coral Historical Society and Museum of Cape Coral, Florida. The Museum was established by The Cape Coral Historical Society to preserve the history of Cape Coral and Southwest Florida. Originally, the building was the clubhouse at The Cape Coral Country Club. Then, in 1977, it was moved to Four Freedoms Park on Tarpon Court and used as a multi-functional facility. Finally, in 1983, the Historical Society moved the building to Cape Coral's Cultural Park for the establishment of the Museum. This photo-album was produced by the Cape Coral Historical Society and Museum's staff in collaboration with the Southwest Florida Library Network (SWFLN) in a project funded by the State of Florida's Library Services and Technology Act (LSTA) grants program. Additional assistance was provided by the Digital Library Center at the University of Florida and the Florida Center for Library Automation.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/ICCHS/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/icchs/images/banners/coll.jpg",
    partnerUrl: "https://www.capecoralhistoricalmuseum.org/",
    notes:
      "Cape Coral Historical Society and Museum Collection will also be available as subcollection of the PALMM Florida Heritage Collection.",
  },
  {
    id: 69,
    abbrName: "Center for Research Libraries",
    slug: "center-for-research-libraries",
    fullName: "Center for Research Libraries (CRL)",
    about:
      "The Center for Research Libraries (CRL) is contributing to the Law Library Microform Center's Haiti Legal Patrimony Project, with all digitized materials from the project available in the Digital Library of the Caribbean (dLOC). CRL previously collaborated with the University of Florida on the digitization of Latin American and Caribbean newspapers and the digital files resulting from that collaboration also in dLOC.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/ICRL/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/icrl/images/banners/coll.jpg",
    partnerUrl: "",
    notes: "",
  },
  {
    id: 70,
    abbrName: "City of St. Augustine's Archaeology Program",
    slug: "city-of-st-augustine-archaeology-program",
    fullName: "City of St. Augustine's Archaeology Program",
    about:
      "The City of St. Augustine's Archaeology Program preserves St. Augustine's archaeological heritage, which is unparalleled in the quantity and diversity of remains buried beneath its buildings, streets, and backyards. These deposits not only reflect the City's European origins since 1565, but also a rich and varied Native American heritage that has been in existence for thousands of years. The intent of the City's archaeology program is not to stop or limit development, as St. Augustine is a vibrant and evolving urban community, but to preserve the information of those buried remains subject to potential destruction through documentation.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/ICITYSTAUG/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/icitystaug/images/banners/coll.jpg",
    partnerUrl: "https://www.aclib.us/",
    notes:
      "The City of St. Augustine's Archaeology Program is contributing materials to the Unearthing St. Augustine's Colonial Heritage Digital Collection.",
  },
  {
    id: 71,
    abbrName: "Diaspora Vibe Cultural Arts Incubator",
    slug: "diaspora-vibe-cultural-arts-incubator",
    fullName: "Diaspora Vibe Cultural Arts Incubator",
    about:
      "Diaspora Vibe Cultural Arts Incubator commitment to artists of Caribbean and diverse cultures ensures they receive validation, visibility and professional opportunities. Our artists break boundaries of traditional forms and work outside of institutionalized systems, they often must create new systems and infrastructures to sustain their practice. We promote, nurture and exhibit the diverse talents of emerging artists from the Latin and Caribbean Diasporas through an artist-in-residence program, international exchanges, community arts events and a dynamic exhibition program collaborating with art spaces and inhabiting the virtual landscape.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IDVCAI/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/idvcai/images/banners/coll.jpg",
    partnerUrl: "http://dvcai.org/",
    notes: "Email: info@dvcai.org | Phone: (305) 757- 2018",
  },
  {
    id: 72,
    abbrName: "Duke University Libraries",
    slug: "duke-university-libraries",
    fullName: " Duke University Libraries",
    about:
      "The Duke University Libraries are contributing materials from their holdings to the Digital Library of the Caribbean (dLOC), including materials from the Haiti Sun newspaper, published 1950-1962 by Bernard Diederich, which served as a forum for dialogue among the English speaking community in Haiti. The Duke University Libraries acquired the most complete known collection of the paper in 2011 and, in partnership with the Digital Library of the Caribbean, began digitizing it in 2013. The collection should be completely digitized in 2014.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IDUKE/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iduke/images/banners/coll.jpg",
    partnerUrl: "http://www.culturalequity.org/",
    notes: "",
  },
  {
    id: 73,
    abbrName:
      "Biblioteca del Patronato de la Casa de la Comunidad Hebrea de Cuba",
    slug: "biblioteca-del-patronato-de-la-casa-de-la-comunidad-hebrea-de-cuba",
    fullName:
      "Biblioteca del Patronato de la Casa de la Comunidad Hebrea de Cuba",
    about: "",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/ITEMPLEBETHSHALOM/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/itemplebethshalom/images/banners/coll.jpg",
    partnerUrl:
      "https://www.facebook.com/PatronatodelaCasaComunidadHebreadeCuba/",
    notes: "",
  },
  {
    id: 74,
    abbrName: "Cape Coral Historical Society",
    slug: "cape-coral-historical-society",
    fullName: "Cape Coral Historical Society and Museum Collection",
    about:
      "The Cape Coral Historical Society and Museum Collection is a digital photo-album documenting the Cape Coral Historical Society and Museum of Cape Coral, Florida. The Museum was established by The Cape Coral Historical Society to preserve the history of Cape Coral and Southwest Florida. Originally, the building was the clubhouse at The Cape Coral Country Club. Then, in 1977, it was moved to Four Freedoms Park on Tarpon Court and used as a multi-functional facility. Finally, in 1983, the Historical Society moved the building to Cape Coral's Cultural Park for the establishment of the Museum. This photo-album was produced by the Cape Coral Historical Society and Museum's staff in collaboration with the Southwest Florida Library Network (SWFLN) in a project funded by the State of Florida's Library Services and Technology Act (LSTA) grants program. Additional assistance was provided by the Digital Library Center at the University of Florida and the Florida Center for Library Automation.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/ICCHS/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/icchs/images/banners/coll.jpg",
    partnerUrl: "https://www.capecoralhistoricalmuseum.org/",
    notes:
      "Cape Coral Historical Society and Museum Collection will also be available as subcollection of the PALMM Florida Heritage Collection.",
  },
  {
    id: 75,
    abbrName: "Center for Research Libraries",
    slug: "center-for-research-libraries",
    fullName: "Center for Research Libraries (CRL)",
    about:
      "The Center for Research Libraries (CRL) is contributing to the Law Library Microform Center's Haiti Legal Patrimony Project, with all digitized materials from the project available in the Digital Library of the Caribbean (dLOC). CRL previously collaborated with the University of Florida on the digitization of Latin American and Caribbean newspapers and the digital files resulting from that collaboration also in dLOC.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/ICRL/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/icrl/images/banners/coll.jpg",
    partnerUrl: "",
    notes: "",
  },
  {
    id: 76,
    abbrName: "City of St. Augustine's Archaeology Program",
    slug: "city-of-st-augustine-archaeology-program",
    fullName: "City of St. Augustine's Archaeology Program",
    about:
      "The City of St. Augustine's Archaeology Program preserves St. Augustine's archaeological heritage, which is unparalleled in the quantity and diversity of remains buried beneath its buildings, streets, and backyards. These deposits not only reflect the City's European origins since 1565, but also a rich and varied Native American heritage that has been in existence for thousands of years. The intent of the City's archaeology program is not to stop or limit development, as St. Augustine is a vibrant and evolving urban community, but to preserve the information of those buried remains subject to potential destruction through documentation.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/ICITYSTAUG/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/icitystaug/images/banners/coll.jpg",
    partnerUrl: "https://www.aclib.us/",
    notes:
      "The City of St. Augustine's Archaeology Program is contributing materials to the Unearthing St. Augustine's Colonial Heritage Digital Collection.",
  },
  {
    id: 77,
    abbrName: "Diaspora Vibe Cultural Arts Incubator",
    slug: "diaspora-vibe-cultural-arts-incubator",
    fullName: "Diaspora Vibe Cultural Arts Incubator",
    about:
      "Diaspora Vibe Cultural Arts Incubator commitment to artists of Caribbean and diverse cultures ensures they receive validation, visibility and professional opportunities. Our artists break boundaries of traditional forms and work outside of institutionalized systems, they often must create new systems and infrastructures to sustain their practice. We promote, nurture and exhibit the diverse talents of emerging artists from the Latin and Caribbean Diasporas through an artist-in-residence program, international exchanges, community arts events and a dynamic exhibition program collaborating with art spaces and inhabiting the virtual landscape.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IDVCAI/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/idvcai/images/banners/coll.jpg",
    partnerUrl: "http://dvcai.org/",
    notes: "Email: info@dvcai.org | Phone: (305) 757- 2018",
  },
  {
    id: 78,
    abbrName: "Duke University Libraries",
    slug: "duke-university-libraries",
    fullName: " Duke University Libraries",
    about:
      "The Duke University Libraries are contributing materials from their holdings to the Digital Library of the Caribbean (dLOC), including materials from the Haiti Sun newspaper, published 1950-1962 by Bernard Diederich, which served as a forum for dialogue among the English speaking community in Haiti. The Duke University Libraries acquired the most complete known collection of the paper in 2011 and, in partnership with the Digital Library of the Caribbean, began digitizing it in 2013. The collection should be completely digitized in 2014.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IDUKE/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iduke/images/banners/coll.jpg",
    partnerUrl: "http://www.culturalequity.org/",
    notes: "",
  },
  {
    id: 79,
    abbrName: "ADABI",
    slug: "adabi",
    fullName: "Apoyo al Desarrollo de Archivos y Bibliotecas de Mexico",
    about:
      "Apoyo al Desarrollo de Archivos y Bibliotecas de Mexico (ADABI de Mexico, A.C) is an institution devoted to the recovery of historic archives and rare books in Mexico. As a result of this work, ADABI has published inventories, catalogs, restoration reports, and other types of publications. ADABI’s publications are in electronic format and they are open access. We count with titles that deal with the Mexican Caribbean, which includes the states of Campeche, Yucatan, and Quintana Roo. This material enriches the knowledge of the Mexican Caribbean by embracing a diversity of content, such as music, cartography, journalism, industrialization, daily life, and the processes of restoracion of the cultural heritage of the area.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IADABI/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iadabi/images/banners/LogoAdabix3.jpg",
    partnerUrl: "https://www.adabi.org.mx/",
    notes: "",
  },
  {
    id: 80,
    abbrName: "Afro-Antillean Museum",
    slug: "afro-antillean-museum",
    fullName:
      "Museo Afro Antillano de Panama (Afro-Antillean Museum of Panama)",
    about:
      "The Museo Afro Antillano de Panama (Afro-Antillean Museum of Panama, through SAMAAP) arranged for the digitization of the Letters from Isthmian Canal construction workers for inclusion in the Digital Library of the Caribbean (dLOC) for access and preservation. Letters from Isthmian Canal construction workers is featured in the Panama Silver, Asian Gold university course taught at three institutions in Fall 2013.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IAFROANTILLEAN/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iafroantillean/images/banners/coll.jpg",
    partnerUrl: "https://samaap.com/",
    notes:
      "For more about the Museum, see the website for SAMAAP (Sociedad de Amigos del Museo Afro Antilleano de Panamá; Society of Friends of the West Indian Museum):  http://stjonesenterprises.com/samaap/?page_id=772",
  },
  {
    id: 81,
    abbrName: "Agrupacion Católica Universitaria",
    slug: "agrupacion-catolica-universitaria",
    fullName: "Agrupación Católica Universitaria",
    about: "Agrupación Católica Universitaria",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IACU/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iacu/images/banners/ACU_Banner.jpg",
    partnerUrl: "",
    notes:
      "To edit this, log on as the aggregation admin and hover over this text to edit it.",
  },
  {
    id: 82,
    abbrName: "Alachua County Public Library",
    slug: "alachua-county-public-library",
    fullName: "Alachua County District Library",
    about:
      "The Alachua County District Library contributed to the Florida Ephemera Collection.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IACDL/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iacdl/images/banners/coll.jpg",
    partnerUrl: "https://www.aclib.us/",
    notes: "",
  },
  {
    id: 83,
    abbrName: "Archives Nationales d' Haïti",
    slug: "archives-nationales-d-haiti",
    fullName: "Archives Nationales d'Haïti",
    about:
      "The Alachua County District Library contributed to the Florida Ephemera Collection.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IANH/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ianh/images/banners/coll.jpg",
    partnerUrl: "http://archivesnationales.gouv.ht/fr/index.php",
    notes: "",
  },
  {
    id: 84,
    abbrName: "Association for Cultural Equity",
    slug: "association-for-cultural-equity",
    fullName: "Association for Cultural Equity (ACE)",
    about:
      "The Association for Cultural Equity (ACE), housed at the Fine Arts Campus of New York City's Hunter College, was chartered as a charitable organization in the State of New York in 1983. It was founded by Alan Lomax to explore and preserve the world's expressive traditions with humanistic commitment and scientific engagement. Alan Lomax was a musicologist, writer and producer who spent his life capturing in sound, photographs, video and research what today is termed our 'intangible heritage.' The central value of his career was the promotion of cultural equity as the need for every culture to express and develop its distinctive heritage, believing it should be recognized as a fundamental human right. His 'Appeal for Cultural Equity' anticipated by decades UNESCO's 2003 declaration to safeguard intangible oral heritage.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IACE/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iace/images/banners/coll.jpg",
    partnerUrl: "http://www.culturalequity.org/",
    notes: "",
  },
  {
    id: 85,
    abbrName: "Ball State University",
    slug: "ball-state-university",
    fullName: "Ball State University",
    about:
      "Ball State University is participating in the French Pamphlets Project.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBSU/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibsu/images/banners/coll.jpg",
    partnerUrl: "https://www.bsu.edu/",
    notes: "",
  },
  {
    id: 86,
    abbrName: "Barbados Archives Department",
    slug: "barbados-archives-department",
    fullName: "Barbados Archives Department",
    about:
      "The Barbados Archives Department’s role is to ensure organizational efficiency and accountability, identify, collect, process and preserve public and private records of Barbados that are of permanent and enduring legal, cultural and historical value and to make information from them available within legal limits and so support the understanding of Barbadian life.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBARBADOSARCHDEPT/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibarbadosarchdept/images/banners/ArchivesDptBanner1.jpg",
    partnerUrl:
      "https://barbados.org/barbados-national-archives.htm#.X41tLNBKiUk",
    notes:
      "READING ROOM RULES: All visitors to the Reading Room are required to sign a visitor’s book on a daily basis. First time visitors are required to read and complete a Researcher Registration Form, read the Reading Room Rules and must also agree to abide by them before consulting any materials. All materials are used on site. Researchers must use pencils only. The use of electronic devices (except scanners) is allowed. ",
  },
  {
    id: 87,
    abbrName: "Barbados Museum and Historical Society Library",
    slug: "barbados-museum-and-historical-society-library",
    fullName: "Barbados Museum and Historical Society",
    about:
      "The Barbados Museum and Historical Society is contributing to the Law Library Microform Center's Haiti Legal Patrimony Project, with all digitized materials from the project available in the Digital Library of the Caribbean (dLOC).",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBMHSL/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibmhsl/images/banners/coll.jpg",
    partnerUrl: "https://ufdc.ufl.edu/dloc1",
    notes: "",
  },
  {
    id: 88,
    abbrName: "Barbados Synagogue Restoration Project (BSRP)",
    slug: "barbados-synagogue-restoration-project-(BSRP)",
    fullName: "Barbados Synagogue Restoration Project (BSRP)",
    about:
      "The Barbados Synagogue Restoration Project (BSRP) Collection contains records related to the activities and functions of BSRP, a charity established in 1984 in Bridgetown, Barbados. These records have been processed and digitized, and partially put online. To fully understand the collection, please see its finding aid.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBSRP/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibsrp/images/banners/Banner6.jpg",
    partnerUrl: "https://www.aclib.us/",
    notes:
      "If you would like to enrich this collection, by contributing pertinent records or information on any aspect, please contact us.",
  },
  {
    id: 89,
    abbrName: "Barry University",
    slug: "barry-university",
    fullName: "Barry University",
    about:
      "Founded in 1940 by the Adrian Dominican Sisters, Barry University's growth throughout the years has been shaped by their core values. Originally founded as Barry College for Women, Barry has grown into a coeducational university that is one of the leading centers for education in South Florida.Grounded in the liberal arts tradition, Barry University is a scholarly community committed to the highest academic standards in undergraduate, graduate and professional education.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBARRY_UNIVERSITY/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibarry_university/images/banners/barry-university-900x100.jpg",
    partnerUrl: "https://www.barry.edu/",
    notes:
      "Acknowledgement: Optical Character Recognition of this collection has been funded under the provisions of the Library Cooperative Grant program, administered by the Florida Department of State's Division of Library and Information Services.",
  },
  {
    id: 90,
    abbrName: "Afro-Antillean Museum",
    slug: "afro-antillean-museum",
    fullName:
      "Museo Afro Antillano de Panama (Afro-Antillean Museum of Panama)",
    about:
      "The Museo Afro Antillano de Panama (Afro-Antillean Museum of Panama, through SAMAAP) arranged for the digitization of the Letters from Isthmian Canal construction workers for inclusion in the Digital Library of the Caribbean (dLOC) for access and preservation. Letters from Isthmian Canal construction workers is featured in the Panama Silver, Asian Gold university course taught at three institutions in Fall 2013.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IAFROANTILLEAN/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iafroantillean/images/banners/coll.jpg",
    partnerUrl: "https://samaap.com/",
    notes:
      "For more about the Museum, see the website for SAMAAP (Sociedad de Amigos del Museo Afro Antilleano de Panamá; Society of Friends of the West Indian Museum):  http://stjonesenterprises.com/samaap/?page_id=772",
  },
  {
    id: 91,
    abbrName: "Agrupacion Católica Universitaria",
    slug: "agrupacion-catolica-universitaria",
    fullName: "Agrupación Católica Universitaria",
    about: "Agrupación Católica Universitaria",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IACU/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iacu/images/banners/ACU_Banner.jpg",
    partnerUrl: "",
    notes:
      "To edit this, log on as the aggregation admin and hover over this text to edit it.",
  },
  {
    id: 92,
    abbrName: "Alachua County Public Library",
    slug: "alachua-county-public-library",
    fullName: "Alachua County District Library",
    about:
      "The Alachua County District Library contributed to the Florida Ephemera Collection.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IACDL/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iacdl/images/banners/coll.jpg",
    partnerUrl: "https://www.aclib.us/",
    notes: "",
  },
  {
    id: 93,
    abbrName: "Archives Nationales d' Haïti",
    slug: "archives-nationales-d-haiti",
    fullName: "Archives Nationales d'Haïti",
    about:
      "The Alachua County District Library contributed to the Florida Ephemera Collection.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IANH/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ianh/images/banners/coll.jpg",
    partnerUrl: "http://archivesnationales.gouv.ht/fr/index.php",
    notes: "",
  },
  {
    id: 94,
    abbrName: "Association for Cultural Equity",
    slug: "association-for-cultural-equity",
    fullName: "Association for Cultural Equity (ACE)",
    about:
      "The Association for Cultural Equity (ACE), housed at the Fine Arts Campus of New York City's Hunter College, was chartered as a charitable organization in the State of New York in 1983. It was founded by Alan Lomax to explore and preserve the world's expressive traditions with humanistic commitment and scientific engagement. Alan Lomax was a musicologist, writer and producer who spent his life capturing in sound, photographs, video and research what today is termed our 'intangible heritage.' The central value of his career was the promotion of cultural equity as the need for every culture to express and develop its distinctive heritage, believing it should be recognized as a fundamental human right. His 'Appeal for Cultural Equity' anticipated by decades UNESCO's 2003 declaration to safeguard intangible oral heritage.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IACE/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/iace/images/banners/coll.jpg",
    partnerUrl: "http://www.culturalequity.org/",
    notes: "",
  },
  {
    id: 95,
    abbrName: "Ball State University",
    slug: "ball-state-university",
    fullName: "Ball State University",
    about:
      "Ball State University is participating in the French Pamphlets Project.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBSU/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibsu/images/banners/coll.jpg",
    partnerUrl: "https://www.bsu.edu/",
    notes: "",
  },
  {
    id: 96,
    abbrName: "Barbados Archives Department",
    slug: "barbados-archives-department",
    fullName: "Barbados Archives Department",
    about:
      "The Barbados Archives Department’s role is to ensure organizational efficiency and accountability, identify, collect, process and preserve public and private records of Barbados that are of permanent and enduring legal, cultural and historical value and to make information from them available within legal limits and so support the understanding of Barbadian life.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBARBADOSARCHDEPT/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibarbadosarchdept/images/banners/ArchivesDptBanner1.jpg",
    partnerUrl:
      "https://barbados.org/barbados-national-archives.htm#.X41tLNBKiUk",
    notes:
      "READING ROOM RULES: All visitors to the Reading Room are required to sign a visitor’s book on a daily basis. First time visitors are required to read and complete a Researcher Registration Form, read the Reading Room Rules and must also agree to abide by them before consulting any materials. All materials are used on site. Researchers must use pencils only. The use of electronic devices (except scanners) is allowed. ",
  },
  {
    id: 97,
    abbrName: "Barbados Museum and Historical Society Library",
    slug: "barbados-museum-and-historical-society-library",
    fullName: "Barbados Museum and Historical Society",
    about:
      "The Barbados Museum and Historical Society is contributing to the Law Library Microform Center's Haiti Legal Patrimony Project, with all digitized materials from the project available in the Digital Library of the Caribbean (dLOC).",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBMHSL/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibmhsl/images/banners/coll.jpg",
    partnerUrl: "https://ufdc.ufl.edu/dloc1",
    notes: "",
  },
  {
    id: 98,
    abbrName: "Barbados Synagogue Restoration Project (BSRP)",
    slug: "barbados-synagogue-restoration-project-(BSRP)",
    fullName: "Barbados Synagogue Restoration Project (BSRP)",
    about:
      "The Barbados Synagogue Restoration Project (BSRP) Collection contains records related to the activities and functions of BSRP, a charity established in 1984 in Bridgetown, Barbados. These records have been processed and digitized, and partially put online. To fully understand the collection, please see its finding aid.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBSRP/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibsrp/images/banners/Banner6.jpg",
    partnerUrl: "https://www.aclib.us/",
    notes:
      "If you would like to enrich this collection, by contributing pertinent records or information on any aspect, please contact us.",
  },
  {
    id: 99,
    abbrName: "Barry University",
    slug: "barry-university",
    fullName: "Barry University",
    about:
      "Founded in 1940 by the Adrian Dominican Sisters, Barry University's growth throughout the years has been shaped by their core values. Originally founded as Barry College for Women, Barry has grown into a coeducational university that is one of the leading centers for education in South Florida.Grounded in the liberal arts tradition, Barry University is a scholarly community committed to the highest academic standards in undergraduate, graduate and professional education.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBARRY_UNIVERSITY/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibarry_university/images/banners/barry-university-900x100.jpg",
    partnerUrl: "https://www.barry.edu/",
    notes:
      "Acknowledgement: Optical Character Recognition of this collection has been funded under the provisions of the Library Cooperative Grant program, administered by the Florida Department of State's Division of Library and Information Services.",
  },
  {
    id: 100,
    abbrName: "Barry University",
    slug: "barry-university",
    fullName: "Barry University",
    about:
      "Founded in 1940 by the Adrian Dominican Sisters, Barry University's growth throughout the years has been shaped by their core values. Originally founded as Barry College for Women, Barry has grown into a coeducational university that is one of the leading centers for education in South Florida.Grounded in the liberal arts tradition, Barry University is a scholarly community committed to the highest academic standards in undergraduate, graduate and professional education.",
    logoUrl:
      "https://ufdc.ufl.edu/design/aggregations/IBARRY_UNIVERSITY/images/buttons/coll.gif",
    bannerUrl:
      "https://ufdc.ufl.edu/design/aggregations/ibarry_university/images/banners/barry-university-900x100.jpg",
    partnerUrl: "https://www.barry.edu/",
    notes:
      "Acknowledgement: Optical Character Recognition of this collection has been funded under the provisions of the Library Cooperative Grant program, administered by the Florida Department of State's Division of Library and Information Services.",
  },
];

const creators = [
  { id: 1, name: "McLoughlin Bros., inc ( Publisher )" },
  { id: 2, name: "Garnier, F. A., 1803-1863" },
  { id: 3, name: "Firk, Frank W. K." },
  { id: 4, name: "Dollero, Adolfo" },
  { id: 5, name: "Xie, Huisheng" },
  { id: 6, name: "Colburn, David R." },
];

const types = [
  { id: 1, name: "Theses and Dissertations" },
  { id: 2, name: "Repports" },
  { id: 3, name: "Photos, Maps, and other images" },
  { id: 4, name: "Sound Recordings" },
  { id: 5, name: "Articles" },
  { id: 3, name: "Artworks" },
  { id: 6, name: "Books" },
  { id: 7, name: "Book Chapters" },
  { id: 8, name: "Clippings" },
  { id: 9, name: "Collections" },
  { id: 10, name: "Datasets" },
  { id: 11, name: "Images" },
  { id: 12, name: "Interactive Resources" },
  { id: 13, name: "Journal/Magazines/Newsletters" },
  { id: 14, name: "Legal Documents" },
  { id: 15, name: "Legislative Documents" },
  { id: 16, name: "Letters" },
  { id: 17, name: "Maps" },
  { id: 18, name: "Musical Score/Notations" },
  { id: 19, name: "Newspapers" },
  { id: 20, name: "Pamphlets" },
  { id: 21, name: "Papers" },
  { id: 22, name: "Patents" },
  { id: 23, name: "Photographs" },
  { id: 24, name: "Physical Objects" },
  { id: 25, name: "Poems" },
  { id: 26, name: "Postcards" },
  { id: 27, name: "Posters" },
  { id: 28, name: "Presentations" },
  { id: 29, name: "Reports" },
  { id: 30, name: "Reviews" },
  { id: 31, name: "Scripts" },
  { id: 32, name: "Sounds" },
  { id: 33, name: "Speciments" },
  { id: 34, name: "Technical Drawings" },
  { id: 35, name: "Texts" },
  { id: 36, name: "Videos" },
  { id: 37, name: "Websites" },
  { id: 38, name: "Yearbooks" },
];

const result = [
  {
    bibId: "UF00078891_00001",
    title: "The 3 little kittens",
    coverImage: "00000.jpg",
    type: "Book",
    creators: "McLoughlin Bros",
    subjects: ["Juvenile poetry", "Cats", "Kittens"],
    publisher: "McLoughlin Bros",
    pageCount: "30",
    language: "English",
  },
  {
    bibId: "AA00040539_00001",
    title: "Models of information, trading and volatility for stock returns",
    coverImage: "modelsofinformat00zhum_0000.jpg",
    type: "Book",
    creators: "Zhu, Min",
    subjects: ["Breedingreeding", "Crops"],
    publisher: "John Smith",
    pageCount: "30",
    language: "English",
  },
  {
    bibId: "AA00040538_00001",
    title:
      "A study of the development of community college distance education policies",
    coverImage: "studyofdevelopme00hodg_0000.jpg",
    type: "Book",
    creators: "Hodge, Elizabeth Marie",
    subjects: ["Diameters", "Diseases"],
    publisher: "John Smith",
    pageCount: "30",
    language: "English",
  },
  {
    bibId: "AA00040537_00001",
    title: "Public school indebtedness in Florida",
    coverImage: "publicschoolinde00cope_0000.jpg",
    type: "Book",
    creators: "Copeland, Richard Watson",
    subjects: ["Genotypes", "Heritability"],
    publisher: "John Smith",
    pageCount: "30",
    language: "English",
  },
  {
    bibId: "AA00040548_00001",
    title: "Photochemical probes for intramolecular electron transfer",
    coverImage: "photochemicalpro00wang_0000.jpg",
    type: "Book",
    creators: "Wang, Yingsheng",
    subjects: ["Leaves", "Lesions"],
    publisher: "John Smith",
    pageCount: "30",
    language: "English",
  },
  {
    bibId: "AA00040547_00001",
    title:
      "Theoretical and experimental studies of the 2-dimensional grating coupled structures for III-V quantum well infrared photodetectors",
    coverImage: "theoreticalexper00wang_0000.jpg",
    type: "Book",
    creators: "Wang, Yeong-Cheng",
    subjects: ["Peanuts", "Sporulation"],
    publisher: "John Smith",
    pageCount: "30",
    language: "English",
  },
  {
    bibId: "AA00040546_00001",
    title: "PSL(3,q) as a totally irregular collineation group",
    coverImage: "psl3qastotallyir00rada_0000.jpg",
    type: "Book",
    creators: "Radas, Sonja",
    subjects: ["Agronomy", "thesis"],
    publisher: "John Smith",
    pageCount: "30",
    language: "English",
  },
  {
    bibId: "AA00040545_00001",
    title: "Business response to natural disaster",
    coverImage: "businessresponse00ange_0000.jpg",
    type: "Book",
    creators: "Angelheart, Ann",
    subjects: ["Cercospora", "College admission", "Counties"],
    publisher: "John Smith",
    pageCount: "30",
    language: "English",
  },
  {
    bibId: "AA00040544_00001",
    title:
      "A descriptive analysis of the uses and functions of sarcasm in the classroom discourse of higher education",
    coverImage: "descriptiveanaly00nelm_0000.jpg",
    type: "Book",
    creators: "Nelms, Jodi Lynn",
    subjects: ["Law schools", "Legislature"],
    publisher: "John Smith",
    pageCount: "30",
    language: "English",
  },
  {
    bibId: "AA00040543_00001",
    title:
      "The influence of prejudice on the formation of stereotypes about the outgroup",
    coverImage: "influenceofpreju00boni_0000.jpg",
    type: "Book",
    creators: "Boniecki, Kurt Allen",
    subjects: ["Public schools", "Refunding"],
    publisher: "John Smith",
    pageCount: "30",
    language: "English",
  },
  {
    bibId: "AA00040542_00001",
    title:
      "The neuroanatomic correlates of emotional prosody in verbal expression",
    coverImage: "neuroanatomiccor00ande_0000.jpg",
    type: "Book",
    creators: "Anderson, Jeffrey M",
    subjects: ["School districts", "Schools"],
    publisher: "John Smith",
    pageCount: "30",
    language: "English",
  },
  {
    bibId: "AA00040541_00001",
    title:
      "Inheritance of some components of resistance to early leaf spot caused by Cercospora arachidicola Hori. in peanut (Arachis hypogaea L.)",
    coverImage: "inheritanceofsom00chit_0000.jpg",
    type: "Book",
    creators: "Chiteka, Zwenhamo Albert",
    subjects: ["Taxes", "Voting"],
    publisher: "John Smith",
    pageCount: "30",
    language: "English",
  },
  {
    bibId: "AA00040540_00001",
    title:
      "The effect of nonanalytic and analytic thinking in new product forecasting",
    coverImage: "effectofnonanaly00bolt_0000.jpg",
    type: "Book",
    creators: "Lisa E",
    subjects: ["Cattle", "Florida"],
    publisher: "John Smith",
    pageCount: "30",
    language: "English",
  },
  {
    bibId: "AA00071212_00001",
    title: "Lame 17 septanm 1988, temwayaj yon sòlda (2)",
    coverImage: "multimediathm.jpg",
    type: "Archive",
    creators: "Marvel",
    subjects: ["Periodicals", "Cattle trade"],
    publisher: "John Smith",
    pageCount: "30",
    language: "English",
  },
  {
    bibId: "AA00031313_00001",
    title: "Citizens handbook : Virgin Islands water law",
    coverImage: "0000-front.jpg",
    type: "Book",
    creators: "Janov, Gwenellen|V.I. Water Resources Research Center",
    subjects: ["Horses", "Adverse selection"],
    publisher: "John Smith",
    pageCount: "30",
    language: "English",
  },
  {
    bibId: "AA00060606_00001",
    title:
      "The Cultural Transition of Second Generation Indian-Americans:  Bridging the Gap between Continents and Generations.",
    coverImage: "fib1112-Completed_Real_Thesisthm.jpg",
    type: "Book",
    creators: "Aneja, Geeta",
    subjects: ["Kurtosis", "Market value"],
    publisher: "John Smith",
    pageCount: "30",
    language: "English",
  },
  {
    bibId: "AA00000001_00001",
    title: "Our Own Gayful Rest - A Postcolonial Archive",
    coverImage: "OurOwnGayfulRestAPostcolonialArchiveFIXED_Page_01.jpg",
    type: "Unknwn",
    creators: "Kanika Batra",
    subjects: ["Maximum likelihood estimations", "Prices"],
    publisher: "John Smith",
    pageCount: "30",
    language: "English",
  },
  {
    bibId: "AA00062223_00001",
    title: "The Florida cattleman and dairy journal",
    coverImage: "00001.jpg",
    type: "Journal",
    creators:
      "University of Florida. Institute of Food and Agricultural Sciences.",
    subjects: ["Public information", "Skewed distribution"],
    publisher: "John Smith",
    pageCount: "30",
    language: "English",
  },
  {
    bibId: "AA00062223_00002",
    title: "The Florida cattleman and dairy journal",
    coverImage: "00001.jpg",
    type: "Journal",
    creators:
      "University of Florida. Institute of Food and Agricultural Sciences.",
    subjects: ["Statistical discrepancies", "Stock prices"],
    publisher: "John Smith",
    pageCount: "30",
    language: "English",
  },
  {
    bibId: "AA00062223_00003",
    title: "The Florida cattleman and dairy journal",
    coverImage: "00001.jpg",
    type: "Journal",
    creators:
      "University of Florida. Institute of Food and Agricultural Sciences.",
    subjects: ["Trade volume", "Geometric lines"],
    publisher: "John Smith",
    pageCount: "30",
    language: "English",
  },
  {
    bibId: "AA00062223_00004",
    title: "The Florida cattleman and dairy journal",
    coverImage: "00001.jpg",
    type: "Journal",
    creators:
      "University of Florida. Institute of Food and Agricultural Sciences.",
    subjects: ["Geometric planes", "Geometry"],
    publisher: "John Smith",
    pageCount: "30",
    language: "English",
  },
  {
    bibId: "AA00062223_00005",
    title: "The Florida cattleman and dairy journal",
    coverImage: "00001.jpg",
    type: "Journal",
    creators:
      "University of Florida. Institute of Food and Agricultural Sciences.",
    subjects: ["Graduate schools", "Integers"],
    publisher: "John Smith",
    pageCount: "30",
    language: "English",
  },
  {
    bibId: "UF00075779_00001",
    title: "Cattle and forage field day",
    coverImage: "00001.jpg",
    type: "Journal",
    subjects: [
      "Joy",
      "Mathematical theorems",
      "Mathematics",
      "Prime numbers",
      "Property lines",
    ],
    publisher: "John Smith",
    pageCount: "30",
    language: "English",
  },
];

const citation = [
  {
    genr: [
      {
        _authority: "lcsh",
        __text: "Juvenile poetry",
      },
      {
        _authority: "rbgenr",
        __text: "Nursery rhymes",
      },
      {
        _authority: "lcsh",
        __text: "Children's poetry",
      },
      {
        _authority: "marcgt",
        __text: "poetry",
      },
    ],
    identifier: [
      {
        _type: "aleph",
        __text: "002250935",
      },
      {
        _type: "notis",
        __text: "ALK2695",
      },
      {
        _type: "oclc",
        __text: "07762422",
      },
    ],
    issuedate: "c1890",
    lang: [
      {
        _type: "text",
        _authority: "None",
        __text: "English",
      },
      {
        _type: "code",
        _authority: "iso639-2b",
        __text: "eng",
      },
    ],
    langcat: [
      {
        _type: "text",
        _authority: "None",
        __text: "English",
      },
      {
        _type: "code",
        _authority: "iso639-2b",
        __text: "eng",
      },
    ],
    note: [
      {
        _type: "None",
        __text: "Cover title.",
      },
      {
        _type: "None",
        __text: "Caption title: Three little kittens.",
      },
      {
        _type: "None",
        __text: "In verse.",
      },
    ],
    physloc: "UF",
    publisher: "McLoughlin Bros.",
    smd_agg: ["ALL", "LITERATURE", "JUV", "IUF"],
    source: ["University of Florida", "UIU", "OCLCQ", "FUG"],
    target: {
      _authority: "marctarget",
      __text: "juvenile",
    },
    title: [
      {
        _type: "None",
        _name: "The 3 little kittens",
        _display_label: "None",
      },
      {
        _type: "uniform",
        _name: "Three little kittens",
        _display_label: "None",
      },
    ],
    agent: [
      {
        _name: "UF,University of Florida",
        _role: "CREATOR",
        _type: "None",
        _othertype: "None",
      },
      {
        _name: "UFDC Metadata Template",
        _role: "CREATOR",
        _type: "SOFTWARE",
        _othertype: "None",
      },
      {
        _name: "MarkAdminSull",
        _role: "CREATOR",
        _type: "None",
        _othertype: "None",
      },
    ],
    related: [
      {
        _type: "original",
      },
      {
        reltitle: "Pleasewell series",
        _type: "series",
      },
    ],
    subject: [
      {
        subgenre: "Juvenile poetry",
        subtopic: "Cats",
        _authority: "lcsh",
        _xml_id: "SUBJ650_1",
      },
      {
        subgenre: "Juvenile poetry",
        subtopic: "Kittens",
        _authority: "lcsh",
        _xml_id: "SUBJ650_2",
      },
      {
        subgenre: "Juvenile poetry",
        subtopic: "Parent and child",
        _authority: "lcsh",
        _xml_id: "SUBJ650_3",
      },
      {
        subgenre: "Juvenile poetry",
        subtopic: "Weddings",
        _authority: "lcsh",
        _xml_id: "SUBJ650_4",
      },
      {
        subtopic: "Nursery rhymes",
        _authority: "lcsh",
        _xml_id: "SUBJ650_5",
      },
      {
        subtopic: "Children's poetry",
        _authority: "lcsh",
        _xml_id: "SUBJ650_6",
      },
      {
        subgenre: "Nursery rhymes",
        subtemporal: "1890",
        _authority: "rbgenr",
        _xml_id: "SUBJ655_7",
      },
      {
        subgenre: "Children's poetry",
        subtemporal: "1890",
        _authority: "lcsh",
        _xml_id: "SUBJ655_8",
      },
      {
        subtemporal: "1890",
        subtopic: "Bldn",
        _authority: "None",
        _xml_id: "SUBJ690_9",
      },
      {
        subhigeo: {
          _extra: "None",
          _country: "United States",
          _continent: "None",
          _region: "None",
          _state: "New York",
          _territory: "None",
          _county: "None",
          _city: "New York",
          _citysec: "None",
          _island: "None",
          _area: "None",
        },
        _authority: "None",
        _xml_id: "SUBJ752",
      },
    ],
    modsname: {
      namepart: "McLoughlin Bros., inc",
      roleterm: [
        {
          _type: "code",
          __text: "pbl",
        },
        {
          _type: "text",
          __text: "Publisher",
        },
      ],
      _type: "personal",
    },
    _bib: "UF00078891",
    _vid: "00001",
    _visibility: "None",
    _smd_stmt_code: "UF",
    _smd_stmt: "University of Florida",
    _edition: "None",
    _thumbnail: "00000thm.jpg",
    _type: "text",
    _item_pdf: "UF00078891_00001.pdf",
    _copyright_date: "None",
    _physical_description: "[12] p. : col. ill. ; 20 cm.",
    _date_created: "None",
    _date_updated: "None",
    _embedded_video: "None",
  },
];

const details = [
  {
    UFID: "UF00078891_00001",
    title: "The 3 little kittens",
    coverImage: "0000.jpg",
    type: "Book",
    publisher: "McLoughlin Bros",
    pageCount: "102",
    language: "English",
    mapCoordinates: {
      x: [
        { lat: 23.2333333333333, lng: -84.9833333333333 },
        { lat: 21.7, lng: -84.9833333333333 },
        { lat: 21.7, lng: -81.0666666666667 },
        { lat: 23.2333333333333, lng: -81.0666666666667 },
      ],
    },

    imageSrcUrl: [
      {
        title: "Front Cover",
        src: "00000.jpg",
      },
      {
        title: "Page 1",
        src: "00001.jpg",
      },
      {
        title: "Page 2",
        src: "00002.jpg",
      },
      {
        title: "Page 3",
        src: "00003.jpg",
      },
      {
        title: "Page 4",
        src: "00004.jpg",
      },
      {
        title: "Page 5",
        src: "00005.jpg",
      },
      {
        title: "Page 6",
        src: "00006.jpg",
      },
      {
        title: "Page 7",
        src: "00007.jpg",
      },
      {
        title: "Page 8",
        src: "00008.jpg",
      },
      {
        title: "Page 9",
        src: "00009.jpg",
      },
      {
        title: "Page 10",
        src: "00010.jpg",
      },
      {
        title: "Page 11",
        src: "00001.jpg",
      },
      {
        title: "Page 12",
        src: "00002.jpg",
      },
      {
        title: "Page 13",
        src: "00003.jpg",
      },
      {
        title: "Page 14",
        src: "00004.jpg",
      },
      {
        title: "Page 15",
        src: "00005.jpg",
      },
      {
        title: "Page 16",
        src: "00006.jpg",
      },
      {
        title: "Page 17",
        src: "00007.jpg",
      },

      {
        title: "Page 18",
        src: "00008.jpg",
      },
      {
        title: "Page 19",
        src: "00009.jpg",
      },
      {
        title: "Page 20",
        src: "00010.jpg",
      },
      {
        title: "Page 21",
        src: "00001.jpg",
      },
      {
        title: "Page 22",
        src: "00002.jpg",
      },
      {
        title: "Page 23",
        src: "00003.jpg",
      },
      {
        title: "Page 24",
        src: "00004.jpg",
      },
      {
        title: "Page 25",
        src: "00005.jpg",
      },
      {
        title: "Page 26",
        src: "00006.jpg",
      },
      {
        title: "Page 27",
        src: "00007.jpg",
      },
      {
        title: "Page 28",
        src: "00008.jpg",
      },
      {
        title: "Page 29",
        src: "00009.jpg",
      },
      {
        title: "Page 30",
        src: "00010.jpg",
      },
      {
        title: "Page 31",
        src: "00001.jpg",
      },
      {
        title: "Page 32",
        src: "00002.jpg",
      },
      {
        title: "Page 33",
        src: "00003.jpg",
      },

      {
        title: "Page 34",
        src: "00004.jpg",
      },
      {
        title: "Page 35",
        src: "00005.jpg",
      },
      {
        title: "Page 36",
        src: "00006.jpg",
      },
      {
        title: "Page 37",
        src: "00007.jpg",
      },
      {
        title: "Page 38",
        src: "00008.jpg",
      },
      {
        title: "Page 39",
        src: "00009.jpg",
      },
      {
        title: "Page 40",
        src: "00010.jpg",
      },
      {
        title: "Page 41",
        src: "00001.jpg",
      },
      {
        title: "Page 42",
        src: "00002.jpg",
      },
      {
        title: "Page 43",
        src: "00003.jpg",
      },
      {
        title: "Page 44",
        src: "00004.jpg",
      },
      {
        title: "Page 45",
        src: "00005.jpg",
      },
      {
        title: "Page 46",
        src: "00006.jpg",
      },
      {
        title: "Page 47",
        src: "00007.jpg",
      },
      {
        title: "Page 48",
        src: "00008.jpg",
      },
      {
        title: "Page 49",
        src: "00009.jpg",
      },
      {
        title: "Page 50",
        src: "00010.jpg",
      },
      {
        title: "Page 51",
        src: "00001.jpg",
      },
      {
        title: "Page 52",
        src: "00002.jpg",
      },
      {
        title: "Page 53",
        src: "00003.jpg",
      },
      {
        title: "Page 54",
        src: "00004.jpg",
      },
      {
        title: "Page 55",
        src: "00005.jpg",
      },
      {
        title: "Page 56",
        src: "00006.jpg",
      },
      {
        title: "Page 57",
        src: "00007.jpg",
      },
      {
        title: "Page 58",
        src: "00008.jpg",
      },
      {
        title: "Page 59",
        src: "00009.jpg",
      },
      {
        title: "Page 60",
        src: "00010.jpg",
      },
      {
        title: "Page 61",
        src: "00001.jpg",
      },
      {
        title: "Page 62",
        src: "00002.jpg",
      },
      {
        title: "Page 63",
        src: "00003.jpg",
      },
      {
        title: "Page 64",
        src: "00004.jpg",
      },
      {
        title: "Page 65",
        src: "00005.jpg",
      },
      {
        title: "Page 66",
        src: "00006.jpg",
      },
      {
        title: "Page 67",
        src: "00007.jpg",
      },
      {
        title: "Page 68",
        src: "00008.jpg",
      },
      {
        title: "Page 69",
        src: "00009.jpg",
      },
      {
        title: "Page 70",
        src: "00010.jpg",
      },
      {
        title: "Page 71",
        src: "00001.jpg",
      },
      {
        title: "Page 72",
        src: "00002.jpg",
      },
      {
        title: "Page 73",
        src: "00003.jpg",
      },
      {
        title: "Page 74",
        src: "00004.jpg",
      },
      {
        title: "Page 75",
        src: "00005.jpg",
      },
      {
        title: "Page 76",
        src: "00006.jpg",
      },
      {
        title: "Page 77",
        src: "00007.jpg",
      },
      {
        title: "Page 78",
        src: "00008.jpg",
      },
      {
        title: "Page 79",
        src: "00009.jpg",
      },
      {
        title: "Page 80",
        src: "00010.jpg",
      },
      {
        title: "Page 81",
        src: "00001.jpg",
      },
      {
        title: "Page 82",
        src: "00002.jpg",
      },
      {
        title: "Page 83",
        src: "00003.jpg",
      },
      {
        title: "Page 84",
        src: "00004.jpg",
      },
      {
        title: "Page 85",
        src: "00005.jpg",
      },
      {
        title: "Page 86",
        src: "00006.jpg",
      },
      {
        title: "Page 87",
        src: "00007.jpg",
      },
      {
        title: "Page 88",
        src: "00008.jpg",
      },
      {
        title: "Page 89",
        src: "00009.jpg",
      },
      {
        title: "Page 90",
        src: "00010.jpg",
      },
      {
        title: "Page 91",
        src: "00001.jpg",
      },
      {
        title: "Page 92",
        src: "00002.jpg",
      },
      {
        title: "Page 93",
        src: "00003.jpg",
      },
      {
        title: "Page 94",
        src: "00004.jpg",
      },
      {
        title: "Page 95",
        src: "00005.jpg",
      },
      {
        title: "Page 96",
        src: "00006.jpg",
      },
      {
        title: "Page 97",
        src: "00007.jpg",
      },
      {
        title: "Page 98",
        src: "00008.jpg",
      },
      {
        title: "Page 99",
        src: "00009.jpg",
      },
      {
        title: "Page 100",
        src: "00010.jpg",
      },
      {
        title: "Back Cover",
        src: "00011.jpg",
      },
    ],
  },
];

const newCollection = {
  id: null,
  title: "",
  creatorId: null,
  typeId: null,
  publicationDate: "",
  language: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCollection,
  collections,
  partners,
  creators,
  types,
  citation,
  result,
  details,
};
