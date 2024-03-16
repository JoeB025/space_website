const format = require("pg-format");
const db = require("../connection");


// Define the seed function
const seed = ({
  galaxiesData,
  milkyWayBlackHolesData,
  milkyWayStarsData,
  astronomicalInfoData,
  planetsData,
  planetNamesData,
  topicsData,
  usersData,
  articleData,
  commentData,
}) => {
  return (
    db
      // Drop existing tables if they exist
      .query("DROP TABLE IF EXISTS comments;")
      .then(() => {
        return db.query("DROP TABLE IF EXISTS articles;");
      })
      .then(() => {
        return db.query("DROP TABLE IF EXISTS users;");
      })
      .then(() => {
        return db.query("DROP TABLE IF EXISTS topics;");
      })
      .then(() => {
        return db.query("DROP TABLE IF EXISTS planet_names;");
      })
      .then(() => {
        return db.query("DROP TABLE IF EXISTS planets;");
      })
      .then(() => {
        return db.query("DROP TABLE IF EXISTS astronomical_info;");
      })
      .then(() => {
        return db.query("DROP TABLE IF EXISTS milky_way_stars;");
      })
      .then(() => {
        return db.query("DROP TABLE IF EXISTS milky_way_black_holes;");
      })
      .then(() => {
        return db.query("DROP TABLE IF EXISTS galaxies;");
      })

      // Create tables
      .then(() => {
        // Create topics table
        const topicsTablePromise = db.query(`
      CREATE TABLE topics (
        slug VARCHAR PRIMARY KEY,
        description VARCHAR
      );`);

        // Create users table
        const usersTablePromise = db.query(`
      CREATE TABLE users (
        username VARCHAR PRIMARY KEY,
        name VARCHAR NOT NULL,
        avatar_url VARCHAR
      );`);

        return Promise.all([topicsTablePromise, usersTablePromise]);
      })

      .then(() => {
        return db.query(`
  CREATE TABLE articles (
    article_id SERIAL PRIMARY KEY,
    topic VARCHAR NOT NULL REFERENCES topics(slug),
    title VARCHAR NOT NULL,
    author VARCHAR NOT NULL REFERENCES users(username),
    body TEXT NOT NULL,
    votes INT DEFAULT 0 NOT NULL,
    journal_reference TEXT [],
    published VARCHAR NOT NULL,
    article_img_url VARCHAR DEFAULT 'https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg?w=700&h=700'
  );`);
      })
      .then(() => {
        // Create comments table
        return db.query(`
CREATE TABLE comments (
  comment_id SERIAL PRIMARY KEY,
  body TEXT NOT NULL,
  article_id INT REFERENCES articles(article_id) NOT NULL,
  author VARCHAR REFERENCES users(username) NOT NULL,
  votes INT DEFAULT 0 NOT NULL,
  posted VARCHAR NOT NULL 
);`);
      })
      .then(() => {
        // Create planetNames table
        return db.query(`
  CREATE TABLE planet_names (
    planet_name_id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    order_from_sun INTEGER NOT NULL
  );`);
      })
      .then(() => {
        // Create planets table
        return db.query(`
  CREATE TABLE planets (
    planets_id SERIAL PRIMARY Key,
    name VARCHAR NOT null,
    id VARCHAR NOT NULL,
    topic VARCHAR NOT NULL,
    average_temperature INTEGER NOT NULL,
    hottest_recorded_temperature INTEGER NOT NULL,
    lowest_recorded_temperature INTEGER NOT NULL,
    body_type VARCHAR NOT NULL,
    density FLOAT NOT NULL,
    dimension VARCHAR NOT NULL,
    distance_from_sun FLOAT NOT NULL,
    gravity FLOAT NOT NULL,
    mass_value FLOAT NOT NULL,
    mass_exponent INTEGER NOT NULL,
    mean_radius FLOAT NOT NULL,
    number_of_moons INTEGER NOT NULL,
    names_of_moons TEXT[],
    moon_data JSONB[],
    time_to_orbit_sun FLOAT NOT NULL,
    img_of_planet VARCHAR DEFAULT 'https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg?w=700&h=700',
    planet_description TEXT NOT NULL, 
  );`);
      })
      .then(() => {
        return db.query(`
  CREATE TABLE galaxies (
    galaxies_id SERIAL PRIMARY KEY,
    galaxy_name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    distance_from_earth VARCHAR NOT NULL,
    number_of_stars VARCHAR NOT NULL,
    visible_galactic_center BOOLEAN NOT NULL,
    constellation VARCHAR NOT NULL,
    general_info TEXT NOT NULL,
    observation_history TEXT,
    timeline TEXT,
  );`);
      })
      .then(() => {
        return db.query(`
  CREATE TABLE milky_way_black_holes (
    milky_way_black_holes_id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    mass VARCHAR NOT NULL,
    diameter VARCHAR NOT NULL,
    distance VARCHAR NOT NULL,
    description TEXT NOT NULL
);`);
      })
      .then(() => {
        return db.query(`
  CREATE TABLE milky_way_stars (
    milky_way_stars_id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    mass VARCHAR NOT NULL,
    radius VARCHAR NOT NULL,
    temperature VARCHAR NOT NULL,
    luminosity VARCHAR NOT NULL,
    age VARCHAR NOT NULL,
    description TEXT NOT NULL,
    size_comparison VARCHAR NOT NULL
    );`);
      })
      .then(() => {
        return db.query(`
CREATE TABLE astronomical_info (
  astronomical_info SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  description TEXT NOT NULL
);`);
      })

      .then(() => {
        // Insert data into the topics table
        const insertTopicsQueryStr = format(
          "INSERT INTO topics (slug, description) VALUES %L;",
          topicData.map(({ slug, description }) => [slug, description])
        );
        const topicsPromise = db.query(insertTopicsQueryStr);

        // Insert data into the users table
        const insertUsersQueryStr = format(
          "INSERT INTO users ( username, name, avatar_url) VALUES %L;",
          userData.map(({ username, name, avatar_url }) => [
            username,
            name,
            avatar_url,
          ])
        );
        const usersPromise = db.query(insertUsersQueryStr);

        return Promise.all([topicsPromise, usersPromise]);
      })

      .then(() => {
        // Insert data into the planetName table
        const insertPlanetNameData = formatPlanetNameData(planetNameObj);

        const insertPlanetName = format(
          `
    INSERT into planetName
    (name, description)
    VALUES
    %L
    RETURNING *;
    `,
          insertPlanetNameData
        );

        return db.query(insertPlanetName);
      })

      .then((planetNameResult) => {
        console.log("Inserted planet names:", planetNameResult.rows);

        // Insert data into the planets table
        const insertPlanetsData = formatPlanetsData(planets);
        const insertPlanets = format(
          `
    INSERT into planets
    (
      name, 
      id, 
      topic, 
      average_temperature, 
      hottest_recorded_temperature, 
      lowest_recorded_temperature, 
      body_type, 
      density, 
      dimension, 
      distance_from_sun, 
      gravity, 
      mass_value, 
      mass_exponent, 
      mean_radius, 
      number_of_moons, 
      names_of_moons, 
      moon_data, 
      time_to_orbit_sun, 
      img_of_planet, 
      planet_description
    )
    VALUES
    %L
    RETURNING *;
    `,
          insertPlanetsData
        );

        return db.query(insertPlanets);
      })
      .then((planetsResult) => {
        console.log("Inserted planets:", planetsResult.rows);

        const insertGalaxiesData = formatGalaxiesData(galaxiesObj);

        const insertGalaxies = format(
          `
  INSERT into galaxies
  (
    galaxy_name,
    type,
    size,
    distance_from_earth,
    number_of_stars,
    visible_galactic_center,
    constellation,
    generalInfo,
    observation_history,
    timeline
  )
  VALUES
  %L
  RETURNING *;
  `,
          insertGalaxiesData
        );

        return db.query(insertGalaxies);
      })

      .then((galaxiesResult) => {
        console.log("Inserted Galaxies:", galaxiesResult.rows);

        const insertMilkyWayBlackHolesData =
          formatMilkyWayBlackHolesData(blackHoles);
        const insertMilkyWayBlackHoles = format(
          ` 
    INSERT into milkyWayBlackHoles
    (
      name,
      type,
      mass,
      diameter,
      distance,
      description
    )
    VALUES
    %L
    RETURNING *;
    `,
          insertMilkyWayBlackHolesData
        );
        return db.query(insertMilkyWayBlackHoles);
      })
      .then((blackHoleResult) => {
        console.log("Inserted Milky Way Black Holes", blackHoleResult.rows);

        const insertMilkyWayStarsData = formatMilkyWayStarsData(stars);
        const insertMilkyWayStars = format(
          ` 
    INSERT into milkyWayStars
    (
      name,
      type,
      mass,
      radius,
      temperature,
      luminosity,
      age,
      description,
      size_comparison
    )
    VALUES
    %L
    RETURNING *;
    `,
          insertMilkyWayStarsData
        );
        return db.query(insertMilkyWayStars);
      })
      .then((starsResult) => {
        console.log("Inserted Milky Way Stars", starsResult);

        const insertAstronomyData = formatAstronomyData(astronomy);
        const insertAstronomy = format(
          ` 
    INSERT into astronomicalInfo
    (
    topic,
    description
    )
    VALUES
    %L
    RETURNING *;
    `,
          insertAstronomyData
        );
        return db.query(insertAstronomy);
      })
      .then((astronomyResult) => {
        console.log("Inserted Astronomy", astronomyResult.rows);

        const insertArticlesData = formatArticles(articles);
        const insertArticles = format(
          ` 
    INSERT into articles
    (
      topic,
      title,
      author,
      body,
      votes,
      journal_reference,
      published,
      article_img_url
      ) 
      VALUES 
      %L 
      RETURNING *;
      `,
          insertArticlesData
        );
        return db.query(insertArticles);
      })
      .then((articleResults) => {
        console.log("Inserted Articles", articleResults.rows);

        const insertCommentsData = formatComments(comments);
        const insertComments = format(
          ` 
    INSERT into comments
    (
      body,
      votes,
      author,
      article_id,
      posted
    ) 
    VALUES 
    %L 
    RETURNING *;
    `,
          insertCommentsData
        );
        return db.query(insertComments);
      })
  );
};

const formatPlanetNameData = (planetNameObj) => {
  const formattedPlanetNames = planetNameObj.map((planetName) => [
    planetName.name,
    planetName.description,
  ]);
  return formattedPlanetNames;
};
// console.log("Planets Data", planetsData)
const formatPlanetsData = (planets) => {
  const formattedPlanets = planets.map((planet) => [
    planet.name,
    planet.id,
    planet.topic,
    planet.average_temperature,
    planet.hottest_recorded_temperature,
    planet.lowest_recorded_temperature,
    planet.body_type,
    planet.density,
    planet.dimension,
    planet.distance_from_sun,
    planet.gravity,
    planet.mass_value,
    planet.mass_exponent,
    planet.mean_radius,
    planet.number_of_moons,
    planet.names_of_moons,
    planet.moon_data,
    planet.time_to_orbit_sun,
    planet.img_of_planet,
    planet.planet_description,
  ]);
  return formattedPlanets;
};

const formatGalaxiesData = (galaxy) => {
  const formattedGalaxies = galaxy.map((galaxy) => [
    galaxy.galaxy_name,
    galaxy.type,
    galaxy.size,
    galaxy.distance_from_earth,
    galaxy.number_of_stars,
    galaxy.visible_galactic_center,
    galaxy.constellation,
    galaxy.general_info,
    galaxy.observation_history,
    galaxy.timeline,
  ]);
  return formattedGalaxies;
};

const formatMilkyWayBlackHolesData = (blackHoles) => {
  const formattedBlackHoles = blackHoles.map((blackHole) => [
    blackHole.name,
    blackHole.type,
    blackHole.mass,
    blackHole.diameter,
    blackHole.distance,
    blackHole.description,
  ]);
  return formattedBlackHoles;
};

const formatMilkyWayStarsData = (stars) => {
  const formattedStars = stars.map((star) => [
    star.name,
    star.type,
    star.mass,
    star.radius,
    star.temperature,
    star.luminosity,
    star.age,
    star.description,
    star.size_comparison,
  ]);
  return formattedStars;
};

const formatAstronomyData = (astronomy) => {
  const formattedAstronomy = astronomy.map((astronomy) => [
    astronomy.topic,
    astronomy.description,
  ]);
  return formattedAstronomy;
};

const formatArticles = (articles) => {
  const formattedArticles = articles.map((article) => [
    article.topic,
    article.title,
    article.author,
    article.body,
    article.votes,
    article.journal_reference,
    article.posted,
    article.article_img_url,
  ]);
  return formattedArticles;
};

const formatComments = (comments) => {
  const formattedComments = comments.map((comment) => [
    comment.body,
    comment.votes,
    comment.author,
    comment.article_id,
    comment.posted,
  ]);
  return formattedComments;
};


module.exports = seed;
