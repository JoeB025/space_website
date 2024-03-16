module.exports = [
  {
    name: "Mercury",
    id: "mercury",
    topic: 'planet',
    average_temperature: 332, // Fahrenheit
    hottest_recorded_temperature: 800, // Fahrenheit
    lowest_recorded_temperature: -290, // Fahrenheit
    body_type: "planet",
    density: 5.427, // g/cm^3
    dimension: "4879.4 km",
    distance_from_sun: 57.91, // million km
    gravity: 3.7, // m/s^2
    mass_value: 0.33011, // × 10^24 kg
    mass_exponent: 24,
    mean_radius: 2439.7, // km
    number_of_moons: 0,
    moon_data: [
      {
        name: "Mercury has no moons",
        distance_from_planet: null, // km
        gravity: null, // m/s^2
        mass_value: null, // × 10^22 kg
        mass_exponent: null,
        mean_radius: null // km
      }
    ],
    names_of_moons: ["Mercury has no moons"], 
    img_of_planet: "place_image_url_here",
    time_to_orbit_sun: 0.24, // Earth years
    planet_description: 
    `Mercury, named after the swift messenger of the gods 
    in Roman mythology, is the smallest and innermost planet 
    in our solar system. It's also the closest planet to the Sun, 
    orbiting it at an average distance of about 36 million miles (58 million kilometers). 
    Due to its proximity to the Sun, Mercury experiences extreme temperature variations, 
    with surface temperatures ranging from scorching hot to freezing cold.

    Mercury has a relatively thin atmosphere, primarily composed of oxygen, sodium, 
    hydrogen, helium, and potassium. Its surface is heavily cratered, resembling Earth's 
    Moon, with expansive plains and tall, towering cliffs formed by intense geological 
    activity in its early history.
    
    One of the most notable features of Mercury is its eccentric orbit, which causes it 
    to exhibit a phenomenon known as "resonant rotation." This means that Mercury completes 
    three rotations on its axis for every two orbits around the Sun, resulting in a unique 
    pattern of movement.
    
    Despite its small size, Mercury has been the subject of extensive study and exploration. 
    NASA's MESSENGER spacecraft provided valuable insights into the planet's composition, 
    geology, and magnetic field during its mission from 2004 to 2015. Mercury continues to 
    intrigue scientists and astronomers as they seek to uncover more about its history 
    and evolution.`
  },
  {
    name: "Venus",
    id: "venus",
    topic: 'planet',
    average_temperature: 867, // Fahrenheit
    hottest_recorded_temperature: 900, // Fahrenheit
    lowest_recorded_temperature: 870, // Fahrenheit
    body_type: "planet",
    density: 5.243, // g/cm^3
    dimension: "12,104 km",
    distance_from_sun: 108.2, // million km
    gravity: 8.87, // m/s^2
    mass_value: 4.8675, // × 10^24 kg
    mass_exponent: 24,
    mean_radius: 6051.8, // km
    number_of_moons: 0,
    moon_data: [
      {
        name: "Venus has no moons",
        distance_from_planet: null, // km
        gravity: null, // m/s^2
        mass_value: null, // × 10^22 kg
        mass_exponent: null,
        mean_radius: null // km
      }
    ],
    names_of_moons: ["Venus has no moons"],
    img_of_planet: "place_image_url_here",
    time_to_orbit_sun: 0.62, // Earth years
    planet_description: `Venus, named after the Roman goddess of love and beauty, 
    is often referred to as Earth's "sister planet" due to its similar size and composition. 
    It is the second planet from the Sun and is sometimes visible as the brightest object 
    in the night sky after the Moon.

    Venus has a thick atmosphere primarily composed of carbon dioxide, with clouds of 
    sulfuric acid that reflect sunlight, causing it to appear bright in the sky. This 
    dense atmosphere creates a runaway greenhouse effect, resulting in surface temperatures 
    hot enough to melt lead, making Venus the hottest planet in our solar system.
    
    Despite its proximity to Earth, Venus has a harsh environment with high atmospheric 
    pressure and acidic conditions. Its surface is rocky and heavily cratered, with vast 
    plains and mountains, but it lacks the presence of water due to its extreme temperatures.
    
    Venus rotates on its axis very slowly and in the opposite direction to most other planets, 
    a phenomenon known as retrograde rotation. This means that the Sun rises in the west and 
    sets in the east on Venus.
    
    Exploration of Venus has been challenging due to its hostile conditions, but spacecraft 
    like NASA's Magellan and the Soviet Venera probes have provided valuable data about its 
    surface and atmosphere, enhancing our understanding of planetary evolution and climate 
    processes.`
    
  },
  {
    name: "Earth",
    id: "earth",
    topic: 'planet',
    average_temperature: 59, // Fahrenheit
    hottest_recorded_temperature: 136, // Fahrenheit
    lowest_recorded_temperature: -129, // Fahrenheit
    body_type: "planet",
    density: 5.514, // g/cm^3
    dimension: "12,742 km",
    distance_from_sun: 149.6, // million km
    gravity: 9.81, // m/s^2
    mass_value: 5.97237, // × 10^24 kg
    mass_exponent: 24,
    mean_radius: 6371, // km
    number_of_moons: 1,
    moon_data: [
      {
        name: "Moon",
        distance_from_planet: 384400, // km
        gravity: 1.62, // m/s^2
        mass_value: 7.342, // × 10^22 kg
        mass_exponent: 22,
        mean_radius: 1737.5 // km
      }
    ],
    names_of_moons: ['The moon'],
    img_of_planet: "place_image_url_here",
    time_to_orbit_sun: 1, // Earth year
    planet_description: `Earth is the third planet from the Sun and the only known planet to support life. 
    It is home to a diverse array of ecosystems, ranging from oceans and forests to deserts and 
    grasslands, making it a unique and vibrant planet in our solar system.

    With a diameter of about 12,742 kilometers (7,918 miles), Earth is the largest of the 
    terrestrial planets and has a relatively thin atmosphere composed mainly of nitrogen and 
    oxygen, essential for supporting life. The presence of liquid water on its surface is 
    a key factor in Earth's ability to sustain life as we know it.
    
    Earth's surface is dynamic and ever-changing, with tectonic activity shaping its 
    continents and creating mountains, valleys, and ocean basins. The planet's rotation 
    on its axis causes the cycle of day and night, while its orbit around the Sun gives 
    rise to the changing seasons.
    
    Human civilization has flourished on Earth, harnessing its resources and adapting to 
    its diverse environments. However, human activities have also had significant impacts 
    on the planet's ecosystems, leading to environmental challenges such as climate 
    change, pollution, and loss of biodiversity.
    
    Despite these challenges, Earth remains a precious and beautiful planet, worthy 
    of protection and preservation for future generations to enjoy.`
  },
  {
    name: "Mars",
    id: "mars",
    topic: 'planet',
    average_temperature: -81, // Fahrenheit
    hottest_recorded_temperature: 70, // Fahrenheit
    lowest_recorded_temperature: -195, // Fahrenheit
    body_type: "planet",
    density: 3.9335, // g/cm^3
    dimension: "6,779 km", // Equatorial diameter
    distance_from_sun: 227.9, // million km
    gravity: 3.721, // m/s^2
    mass_value: 0.64171, // × 10^24 kg
    mass_exponent: 24,
    mean_radius: 3389.5, // km
    number_of_moons: 2, // As of current knowledge
    moon_data: [  {
      name: "Phobos",
      distance_from_planet: 9378, // km
      gravity: 0.0057, // m/s^2
      mass_value: 1.0659, // × 10^16 kg
      mass_exponent: 16,
      mean_radius: 11.1 // km
    },
    {
      name: "Deimos",
      distance_from_planet: 23460, // km
      gravity: 0.003, // m/s^2
      mass_value: 1.4762, // × 10^15 kg
      mass_exponent: 15,
      mean_radius: 6.2 // km
    }
  ],
    names_of_moons: ['Phobos', 'Deimos'],
    img_of_planet: null,
    time_to_orbit_sun: 1.88, // Earth years
    planet_description: `Mars, often called the "Red Planet" due to its rusty-red appearance, is the fourth planet from the Sun in our solar system. It is a terrestrial planet with a thin atmosphere, consisting mainly of carbon dioxide.

    With a diameter of about 6,779 kilometers (4,212 miles), Mars is smaller than Earth, but it shares some similarities with our planet. Like Earth, Mars has distinct seasons, polar ice caps, and surface features such as valleys, deserts, and polar ice caps.
    
    One of the most striking features of Mars is Olympus Mons, the largest volcano in the solar system, which rises about 21 kilometers (13 miles) high. Mars also has the deepest canyon in the solar system, Valles Marineris, which stretches for over 4,000 kilometers (2,500 miles).
    
    For centuries, Mars has captured the imagination of scientists and writers alike as a potential abode for life. Although liquid water is not present on the surface today, evidence suggests that Mars may have had liquid water in the past, raising the possibility of ancient life forms.
    
    Exploration of Mars has been ongoing, with numerous spacecraft and rovers sent to study the planet's surface, atmosphere, and geology. These missions have provided valuable insights into Mars' history and evolution and continue to pave the way for future human exploration.`
    
  },
  {
    name: "Jupiter",
    id: "jupiter",
    topic: 'planet',
    average_temperature: -145, // Fahrenheit
    hottest_recorded_temperature: -108, // Fahrenheit
    lowest_recorded_temperature: -166, // Fahrenheit
    body_type: "planet",
    density: 1.3262, // g/cm^3
    dimension: "139,820 km",
    distance_from_sun: 778.5, // million km
    gravity: 24.79, // m/s^2
    mass_value: 1.89819, // × 10^24 kg
    mass_exponent: 27,
    mean_radius: 69911, // km
    number_of_moons: 79,
    moon_data: [
      {
        name: "Io",
        distance_from_planet: 421800, // km
        gravity: 1.796, // m/s^2
        mass_value: 8.9319, // × 10^22 kg
        mass_exponent: 22,
        mean_radius: 1821.6 // km
      },
      {
        name: "Europa",
        distance_from_planet: 671100, // km
        gravity: 1.314, // m/s^2
        mass_value: 4.7998, // × 10^22 kg
        mass_exponent: 22,
        mean_radius: 1560.8 // km
      },
      {
        name: "Ganymede",
        distance_from_planet: 1070412, // km
        gravity: 1.428, // m/s^2
        mass_value: 1.48, // × 10^23 kg
        mass_exponent: 23,
        mean_radius: 2631.2 // km
      },
      {
        name: "Callisto",
        distance_from_planet: 1882709, // km
        gravity: 1.235, // m/s^2
        mass_value: 1.08, // × 10^23 kg
        mass_exponent: 23,
        mean_radius: 2410.3 // km
      },
      {
        name: "Amalthea",
        distance_from_planet: 181365, // km
        gravity: 0.274, // m/s^2
        mass_value: 2.08, // × 10^18 kg
        mass_exponent: 18,
        mean_radius: 83.45 // km
      },
      {
        name: "Himalia",
        distance_from_planet: 11480000, // km
        gravity: 0.123, // m/s^2
        mass_value: 9.56, // × 10^18 kg
        mass_exponent: 18,
        mean_radius: 67.5 // km
      },
      {
        name: "Elara",
        distance_from_planet: 11741000, // km
        gravity: 0.113, // m/s^2
        mass_value: 8.7, // × 10^18 kg
        mass_exponent: 18,
        mean_radius: 43 // km
      },
      {
        name: "Metis",
        distance_from_planet: 127690, // km
        gravity: 0.021, // m/s^2
        mass_value: 1.23, // × 10^17 kg
        mass_exponent: 17,
        mean_radius: 21 // km
      },
      {
        name: "Adrastea",
        distance_from_planet: 128690, // km
        gravity: 0.020, // m/s^2
        mass_value: 1.31, // × 10^17 kg
        mass_exponent: 17,
        mean_radius: 10 // km
      },
      {
        name: "Thebe",
        distance_from_planet: 221900, // km
        gravity: 0.065, // m/s^2
        mass_value: 4.3, // × 10^17 kg
        mass_exponent: 17,
        mean_radius: 49.3 // km
      },
      {
        name: "Leda",
        distance_from_planet: 11094000, // km
        gravity: 0.074, // m/s^2
        mass_value: 4.4, // × 10^16 kg
        mass_exponent: 16,
        mean_radius: 10 // km
      },
      {
        name: "Harpalyke",
        distance_from_planet: 21043000, // km
        gravity: 0.051, // m/s^2
        mass_value: 2.6, // × 10^16 kg
        mass_exponent: 16,
        mean_radius: 2.5 // km
      },
      {
        name: "Dia",
        distance_from_planet: 12568000, // km
        gravity: 0.074, // m/s^2
        mass_value: 4.6, // × 10^16 kg
        mass_exponent: 16,
        mean_radius: 4 // km
      },
    ],
    names_of_moons : [
      "Io", "Europa", "Ganymede", "Callisto", "Amalthea", 
      "Himalia", "Elara", "Pasiphae", "Sinope", "Lysithea", 
      "Carme", "Ananke", "Leda", "Thebe", "Adrastea", "Metis", 
      "Callirrhoe", "Themisto", "Megaclite", "Taygete", "Chaldene", 
      "Harpalyke", "Kalyke", "Iocaste", "Erinome", "Isonoe", 
      "Praxidike", "Autonoe", "Thyone", "Hermippe", "Aitne", 
      "Eurydome", "Euanthe", "Euporie", "Orthosie", "Sponde", 
      "Kale", "Pasithee", "Hegemone", "Mneme", "Aoede", 
      "Thelxinoe", "Arche", "Kallichore", "Helike", "Carpo", 
      "Eukelade", "Cyllene", "Kore", "Herse", "Jupiter LI (S/2003 J 18)", 
      "Jupiter LII (S/2003 J 19)", "Jupiter LIII (S/2003 J 2)", 
      "Jupiter LIV (S/2003 J 12)", "Jupiter LV (S/2003 J 16)", 
      "Jupiter LVI (S/2003 J 23)", "Jupiter LVII (S/2003 J 9)", 
      "Jupiter LVIII (S/2003 J 15)", "Jupiter LIX (S/2003 J 10)", 
      "Jupiter LX (S/2003 J 21)", "Jupiter LXI (S/2003 J 3)", 
      "Jupiter LXII (S/2003 J 4)", "Jupiter LXIII (S/2003 J 5)", 
      "Jupiter LXIV (S/2003 J 14)", "Jupiter LXV (S/2003 J 17)", 
      "Jupiter LXVI (S/2003 J 1)", "Jupiter LXVII (S/2003 J 6)", 
      "Jupiter LXVIII (S/2003 J 7)", "Jupiter LXIX (S/2003 J 11)", 
      "Jupiter LXX (S/2003 J 13)", "Jupiter LXXI (S/2003 J 8)", 
      "Jupiter LXXII (S/2011 J 1)", "Jupiter LXXIII (S/2010 J 2)", 
      "Jupiter LXXIV (S/2010 J 1)", "Jupiter LXXV (S/2017 J 1)", 
      "Jupiter LXXVI (S/2016 J 1)", "Jupiter LXXVII (S/2016 J 2)", 
      "Jupiter LXXVIII (S/2017 J 2)", "Jupiter LXXIX (S/2017 J 3)"
    ],
    img_of_planet: "place_image_url_here",
    time_to_orbit_sun: 11.86, // Earth years
    planet_description: `Jupiter, named after the king of the Roman gods, is the largest planet in our solar system. It is a gas giant, composed mainly of hydrogen and helium, with no solid surface.

    With a diameter of about 139,822 kilometers (86,881 miles), Jupiter is more than 11 times wider than Earth. Its massive size contributes to its powerful gravitational pull, making it the dominant gravitational force in the solar system after the Sun.
    
    Jupiter is known for its distinctive bands of clouds and the Great Red Spot, a massive storm system that has been raging for centuries. The planet has a rapid rotation, completing a day in just under 10 hours, which causes its clouds to form bands parallel to its equator.
    
    Jupiter has a diverse system of moons, with at least 79 known natural satellites orbiting the planet. The four largest moons, known as the Galilean moons (Io, Europa, Ganymede, and Callisto), were discovered by the astronomer Galileo Galilei in 1610.
    
    Exploration of Jupiter began with flyby missions in the 1970s, and subsequent spacecraft have provided detailed observations of the planet and its moons. NASA's Juno spacecraft, launched in 2011, is currently studying Jupiter's atmosphere, magnetosphere, and interior structure, providing new insights into this giant world.`
    
  },
  {
    name: "Saturn",
    id: "saturn",
    topic: 'planet',
    average_temperature: -288, // Fahrenheit
    hottest_recorded_temperature: null, // Fahrenheit
    lowest_recorded_temperature: null, // Fahrenheit
    body_type: "planet",
    density: 0.687, // g/cm^3
    dimension: "116,464 km", // Equatorial diameter
    distance_from_sun: 888.2, // million km
    gravity: 10.44, // m/s^2
    mass_value: 5.6834, // × 10^26 kg
    mass_exponent: 26,
    mean_radius: 58232, // km
    number_of_moons: 146, // As of current knowledge
    moon_data: "place array of moon objects here",
    names_of_moons: [
      "Mimas", "Enceladus", "Tethys", "Dione", "Rhea", 
      "Titan", "Hyperion", "Iapetus", "Phoebe", "Janus", 
      "Epimetheus", "Helene", "Telesto", "Calypso", "Atlas", 
      "Prometheus", "Pandora", "Pan", "Ymir", "Paaliaq", 
      "Tarvos", "Ijiraq", "Suttungr", "Kiviuq", "Mundilfari", 
      "Albiorix", "Skathi", "Siarnaq", "Thrymr", "Narvi", 
      "Methone", "Pallene", "Daphnis", "Aegir", "Bebhionn", 
      "Bergelmir", "Bestla", "Farbauti", "Fenrir", "Fornjot", 
      "Greip", "Hati", "Hyrrokkin", "Jarnsaxa", "Kari", 
      "Loge", "Skoll", "Surtur", "Anthe", "Aegaeon"
    ],
    img_of_planet: "place image url here",
    time_to_orbit_sun: 29.46, // Earth years
    planet_description: `Saturn, named after the Roman god of agriculture, is the sixth planet from the Sun and the second-largest planet in our solar system, after Jupiter. It is known for its distinctive rings, which are made up of ice, dust, and rock particles.

    Saturn has a diameter of about 116,460 kilometers (72,366 miles) and is primarily composed of hydrogen and helium, similar to Jupiter. Its rings extend thousands of kilometers from its surface but are only about 10 meters thick.
    
    The planet's rings are divided into several main groups, with gaps known as "cassini divisions" between them. These divisions are caused by the gravitational influence of Saturn's moons, particularly the moon Mimas.
    
    Saturn has a complex system of moons, with at least 82 known natural satellites orbiting the planet. The largest moon, Titan, is larger than the planet Mercury and has a dense atmosphere, making it unique among the moons of the solar system.
    
    Saturn's atmosphere is characterized by bands of clouds and strong winds, with a prominent hexagonal-shaped jet stream at its north pole. The planet's interior is thought to consist of a rocky core surrounded by layers of liquid metallic hydrogen and helium.
    
    NASA's Cassini spacecraft, which orbited Saturn from 2004 to 2017, provided valuable data and observations of the planet and its moons, revolutionizing our understanding of this fascinating world.`
    
  },
  {
    name: "Uranus",
    id: "uranus",
    topic: 'planet',
    average_temperature: -357, // Fahrenheit
    hottest_recorded_temperature: null, // Fahrenheit
    lowest_recorded_temperature: null, // Fahrenheit
    body_type: "planet",
    density: 1.27, // g/cm^3
    dimension: "50,724 km", // Equatorial diameter
    distance_from_sun: 1784, // million km
    gravity: 8.69, // m/s^2
    mass_value: 8.6810, // × 10^25 kg
    mass_exponent: 25,
    mean_radius: 25559, // km
    number_of_moons: 27, // As of current knowledge
    moon_data: [
    {
      name: "Miranda",
      distance_from_planet: 129900, // km
      gravity: 0.079, // m/s^2
      mass_value: 6.59, // × 10^19 kg
      mass_exponent: 19,
      mean_radius: 235.8 // km
    },
    {
      name: "Ariel",
      distance_from_planet: 191240, // km
      gravity: 0.270, // m/s^2
      mass_value: 1.35, // × 10^21 kg
      mass_exponent: 21,
      mean_radius: 578.9 // km
    },
    {
      name: "Umbriel",
      distance_from_planet: 266300, // km
      gravity: 0.234, // m/s^2
      mass_value: 1.27, // × 10^21 kg
      mass_exponent: 21,
      mean_radius: 584.7 // km
    },
    {
      name: "Titania",
      distance_from_planet: 435840, // km
      gravity: 0.379, // m/s^2
      mass_value: 3.41, // × 10^21 kg
      mass_exponent: 21,
      mean_radius: 788.9 // km
    },
    {
      name: "Oberon",
      distance_from_planet: 583520, // km
      gravity: 0.346, // m/s^2
      mass_value: 3.01, // × 10^21 kg
      mass_exponent: 21,
      mean_radius: 761.4 // km
    },
    {
      name: "Caliban",
      distance_from_planet: 723370, // km
      gravity: 0.038, // m/s^2
      mass_value: 3.6, // × 10^18 kg
      mass_exponent: 18,
      mean_radius: 72.5 // km
    },
    {
      name: "Sycorax",
      distance_from_planet: 1217940, // km
      gravity: 0.014, // m/s^2
      mass_value: 2.3, // × 10^17 kg
      mass_exponent: 17,
      mean_radius: 98 // km
    },
    {
      name: "Margaret",
      distance_from_planet: 1481000, // km
      gravity: 0.007, // m/s^2
      mass_value: 1.0, // × 10^17 kg
      mass_exponent: 17,
      mean_radius: 10 // km
    },
    {
      name: "Prospero",
      distance_from_planet: 1668100, // km
      gravity: 0.005, // m/s^2
      mass_value: 5.0, // × 10^16 kg
      mass_exponent: 16,
      mean_radius: 25 // km
    },
    {
      name: "Setebos",
      distance_from_planet: 1753100, // km
      gravity: 0.005, // m/s^2
      mass_value: 4.0, // × 10^16 kg
      mass_exponent: 16,
      mean_radius: 20 // km
    },
    {
      name: "Cordelia",
      distance_from_planet: 49750, // km
      gravity: 0.015, // m/s^2
      mass_value: 5.0, // × 10^17 kg
      mass_exponent: 17,
      mean_radius: 21 // km
    },
    {
      name: "Ophelia",
      distance_from_planet: 53800, // km
      gravity: 0.017, // m/s^2
      mass_value: 5.0, // × 10^17 kg
      mass_exponent: 17,
      mean_radius: 23 // km
    },
    {
      name: "Bianca",
      distance_from_planet: 59200, // km
      gravity: 0.024, // m/s^2
      mass_value: 2.5, // × 10^17 kg
      mass_exponent: 17,
      mean_radius: 27 // km
    },
    {
      name: "Cressida",
      distance_from_planet: 61700, // km
      gravity: 0.029, // m/s^2
      mass_value: 2.5, // × 10^17 kg
      mass_exponent: 17,
      mean_radius: 41 // km
    },
    {
      name: "Desdemona",
      distance_from_planet: 62700, // km
      gravity: 0.029, // m/s^2
      mass_value: 2.5, // × 10^17 kg
      mass_exponent: 17,
      mean_radius: 34 // km
    },
    {
      name: "Portia",
      distance_from_planet: 66180, // km
      gravity: 0.038, // m/s^2
      mass_value: 3.5, // × 10^17 kg
      mass_exponent: 17,
      mean_radius: 70 // km
    },
    {
      name: "Rosalind",
      distance_from_planet: 69900, // km
      gravity: 0.032, // m/s^2
      mass_value: 3.0, // × 10^17 kg
      mass_exponent: 17,
      mean_radius: 27 // km
    },
    {
      name: "Belinda",
      distance_from_planet: 75200, // km
      gravity: 0.036, // m/s^2
      mass_value: 4.0, // × 10^17 kg
      mass_exponent: 17,
      mean_radius: 40 // km
    },
    {
      name: "Juliet",
      distance_from_planet: 64350, // km
      gravity: 0.028, // m/s^2
      mass_value: 2.0, // × 10^17 kg
      mass_exponent: 17,
      mean_radius: 53 // km
    },
    {
      name: "Desdemona",
      distance_from_planet: 62700, // km
      gravity: 0.029, // m/s^2
      mass_value: 2.5, // × 10^17 kg
      mass_exponent: 17,
      mean_radius: 34 // km
    }

  ],
    names_of_moons: [
      "Miranda", "Ariel", "Umbriel", "Titania", "Oberon", 
      "Caliban", "Stephano", "Trinculo", "Sycorax", "Margaret", 
      "Prospero", "Setebos", "Ferdinand", "Francisco", "Perdita", 
      "Mab", "Cupid", "Portia", "Rosalind", "Belinda", 
      "Cressida", "Desdemona", "Juliet", "Ophelia", "Bianca", 
      "Cordelia", "Puck"
    ],
    img_of_planet: "place image url here",
    time_to_orbit_sun: 84, // Earth years
    planet_description: `Uranus, named after the Greek god of the sky, is the seventh planet from the Sun and the third-largest planet in our solar system. It is unique among the planets because it rotates on its side, with its axis tilted almost perpendicular to its orbit.

    Uranus has a diameter of about 50,724 kilometers (31,518 miles) and is primarily composed of ice and rock. Its atmosphere is mostly hydrogen and helium, with traces of methane that give it a blue-green color.
    
    The planet's unusual rotation causes extreme seasons, with each pole experiencing 42 years of continuous sunlight followed by 42 years of darkness. This long seasonal cycle is due to Uranus' axial tilt, which is about 98 degrees.
    
    Uranus has a system of faint rings and a diverse collection of moons, with at least 27 known natural satellites. The five largest moons are Miranda, Ariel, Umbriel, Titania, and Oberon, named after characters from the works of William Shakespeare and Alexander Pope.
    
    NASA's Voyager 2 spacecraft, which flew past Uranus in 1986, provided the most detailed images and data of the planet to date. However, much about Uranus remains a mystery, and further exploration is needed to unlock its secrets.`
    
  },
  {
    name: "Neptune",
    id: "neptune",
    topic: 'planet',
    average_temperature: -353, // Fahrenheit
    hottest_recorded_temperature: null, // Fahrenheit
    lowest_recorded_temperature: null, // Fahrenheit
    body_type: "planet",
    density: 1.64, // g/cm^3
    dimension: "49,244 km", // Equatorial diameter
    distance_from_sun: 4495, // million km
    gravity: 11.15, // m/s^2
    mass_value: 1.02413, // × 10^26 kg
    mass_exponent: 26,
    mean_radius: 24622, // km
    number_of_moons: 14, // As of current knowledge
    moon_data: [
      {
        name: "Triton",
        distance_from_planet: 354, // km
        gravity: 0.78, // m/s^2
        mass_value: 2.14, // × 10^22 kg
        mass_exponent: 22,
        mean_radius: 1353 // km
      },
      {
        name: "Nereid",
        distance_from_planet: 5513, // km
        gravity: 0.29, // m/s^2
        mass_value: 0.03, // × 10^22 kg
        mass_exponent: 22,
        mean_radius: 170 // km
      },
      {
        name: "Naiad",
        distance_from_planet: 48282, // km
        gravity: 0.006, // m/s^2
        mass_value: 0.005, // × 10^22 kg
        mass_exponent: 22,
        mean_radius: 33 // km
      },
      {
        name: "Thalassa",
        distance_from_planet: 50074, // km
        gravity: 0.008, // m/s^2
        mass_value: 0.009, // × 10^22 kg
        mass_exponent: 22,
        mean_radius: 41 // km
      },
      {
        name: "Despina",
        distance_from_planet: 52526, // km
        gravity: 0.013, // m/s^2
        mass_value: 0.03, // × 10^22 kg
        mass_exponent: 22,
        mean_radius: 75 // km
      },
      {
        name: "Galatea",
        distance_from_planet: 61953, // km
        gravity: 0.02, // m/s^2
        mass_value: 0.037, // × 10^22 kg
        mass_exponent: 22,
        mean_radius: 79 // km
      },
      {
        name: "Larissa",
        distance_from_planet: 73548, // km
        gravity: 0.046, // m/s^2
        mass_value: 0.052, // × 10^22 kg
        mass_exponent: 22,
        mean_radius: 97 // km
      },
      {
        name: "Proteus",
        distance_from_planet: 117647, // km
        gravity: 0.075, // m/s^2
        mass_value: 0.5, // × 10^22 kg
        mass_exponent: 22,
        mean_radius: 210 // km
      }
    ],
    names_of_moons: ["Triton", "Nereid", "Naiad", "Thalassa", "Despina", "Galatea", "Larissa", "Proteus"],
    img_of_planet: "place image url here",
    time_to_orbit_sun: 165, // Earth years
    planet_description: `Neptune, named after the Roman god of the sea, is the eighth and farthest planet from the Sun in our solar system. It is one of the four gas giants, along with Jupiter, Saturn, and Uranus, and is composed mainly of hydrogen, helium, and methane.

    With a diameter of about 49,244 kilometers (30,598 miles), Neptune is slightly smaller than Uranus but significantly more massive. Its atmosphere is characterized by swirling clouds and high-speed winds, with wind speeds reaching up to 2,100 kilometers per hour (1,300 miles per hour) – the fastest in the solar system.
    
    Neptune's most prominent feature is its Great Dark Spot, a massive storm system similar to Jupiter's Great Red Spot, although it has since disappeared. The planet also has a system of faint rings and 14 known moons, the largest of which is Triton.
    
    Triton is particularly interesting because it orbits Neptune in a retrograde direction, opposite to the planet's rotation. This suggests that Triton may have been captured by Neptune's gravity and is not native to the planet.
    
    Neptune's deep blue color is due to the presence of methane in its atmosphere, which absorbs red light and reflects blue light. Despite its distant location, Neptune has been visited by only one spacecraft – NASA's Voyager 2 probe, which flew past the planet in 1989 and provided valuable data and images of this distant world.`
  }
]; 



// node planets.js in the terminal to see the length of the planets array
// This should be 8 




