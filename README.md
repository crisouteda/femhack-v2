# [Femhack v2](https://nuwe.io/dev/competitions/femhack-hackathon-vol_II/frontend-femhack-challenge)

### Frontend for internet usage data display.

The application retrieves data from the server and displays the data in multiple charts.

## 💻 Development

These instructions will allow you to get a working copy of the project on your local machine for development and testing purposes.

### 📋 Prerequisites

You need to have installed Node JS (Developed on v17.9.3).

### 🔧 Installation

1. Download this repository as zip or clone the repository on your device
2. Open a terminal in the root directory of the repository.
3. Install the necessary dependencies by running:

```
npm install
```

or

```
yarn
```

### 🏁 Starting the project

To serve the app locally run:

```
npm run start
```

or

```
yarn start
```

## 🛠️ Tools

- [React.js](https://reactjs.org/) framework (version ^17.0.0)
- [Typescript](https://www.typescriptlang.org/): Typed programming language built on Javascript
- [Axios](https://axios-http.com/docs/intro): Http Client for node

- [Ant Design](https://ant.design/): provides multiple common functional components with fine design and UX (version ^5.6.3)
- [Ant Desing Charts](https://charts.ant.design/en/): provides different well designed chats with animations (version ^1.4.2)
- [React Simple Maps](https://www.react-simple-maps.io/): allows to create beautiful SVG maps in react using a declarative api.

- [D3](https://d3js.org/): requested by react simple maps to generate random colors in a range

- [Tailwind](https://tailwindcss.com/): style framework

## Description:

The project connects with backend, and displays different charts about the usage of internet. The available charts are:

- Total number of internet users in the works by year
- Chart where is possible to select the countries and the year range. The data is displayed both in relative and absolute values.

### Analysis of results

- The user experience is good but not great. It is confortable to find the needed data, however the page itself is not pleasant.

- The display of the data is efective but not very creative.

- The page works well in laptop and desktop but the responsiveness has not been challenges in smaller screens.

- The responsiveness of the map is not good. As it is imported as a svg it is not easy to adjust in size. Also the ux is not geat. It would be ideal so see the name of the country on hover as well as the number reflected

### 📝 Next steps and Following improvements

- Refactor the style. In the project there are 3 ways of adding style: antd, tailwind and css. Tailwind and css together make no sense since both of them cover a similar task. As a todo I would avoid the problem by substituting tailwind and css with a css preprocessor such as scss.

- Unused code: There some functions in the /Store that are not used at the moment. If the introduced endpoints are no used, it should be removed.

- Some endpoints are needed. It is not a good practive to call an endpoint in a for loop, which is done in the project in two different situations. However, it was the only way possible with the current endpoints. It would be ideal to have the option of fetching in batch.

- The state of the backend request (loading/error) is handled in store however is not implemented in the react functional components. It was not prioritized since the project will no be deployed and the obvious errors (year range from 1980-2020 & available countries) are avoided in the ui.

- Improvements in user experience. Ensure optimal view in every screen size and improve themes and general design

- Add tests

## Decisions

### Frameworks and packages

- React: It is a personal preference since it is the main framework I use to develop. Any other framework (vue, angular) would do a similar job. It is open-source and free

- Typescript: Having a properly typed repository speeds up the development process and avoids some obvious bugs, specially as the repository scales. It is open-source and free

- Axios: It shouldn't be necessary since the built-in Fetch in javascript should work in a similar way. However, there were found difficulties during the development process:

  - With Fetch, the requests returned a 200 from the backend but the response was always empty. To be researched.

- Ant Design: Using a component library is generally convenient for a quick project such as this one. Ant desing has a clean and elegant design which enhances the UX. Also, AntD has a great documentation and large community of users. It is open-source and free

- Ant Design Charts: It has a great documentation with multiple examples of usage. Also, since it is member of the antd familty, It is expected that both packages will work well together without colliding in instalation configuration or css classes. The main problem with the package is that it doesn't support axis labels so the numbers don't have units. It is not terrible since the card shows on hover the chart with the units but still not ideal. It is open-source and free. First time using it.

- React Simple Maps: Has a great documentation and easy instalation. Also it has typescript support and multiple examples of usage. However, it is not obvious how to interact with the map. There are probably better decissions. It is open-source and free. First time using it.

- D3: Suggested by React Simple Maps to generate colors in range. To be researched, seems like a powerful tool for data visualization. It is open-source and free. First time using it.

- Tailwind: It was aded to speed up some easy css development. However it was not a good decision since both css and tailwind are doing the same work but css cannot be removed. Maybe a preprocesor suce as Scss would have been a better choice because it would speed the style process and at the same time would be able to over-write antd classes. It is open-source and free.

### Tasks

#### Task 1: Displaying charts:

- Connection with backend

Initially, my intention was to handle the HTTP requests with the javacript Fetch, however some difficultis explained above were found and Axios solved it.

The requests reponses to backend were handled in the /Store with React Context because of a personal preference of handling the external data with a singleton pattern. The personal preference comes from the data being hold in one place only being the source of truth of the whole application which helps to keep consistency as the project scales.

- Users x Year chart

My personal interpretation is that it refers to the total number of users in the world per year.

- Users x Year x Country Chart

Instead of changing axis, which felt messy and hard to inderstand visually, I opted for a User x Year chat in which all the selected countries would be displayed at the same time. It allows to compare easily countries. Also, both options (absolute & relative ) for the y axis are available. I find this particularly important since the absolute numbers might mean very little in the comparison since the difference in countries population can be of orders of magnitude.

- Top 10 Countries per Year Chart

The choice made is an interactive accumulated columns chart in which the top 10 countries each year are shown. There are probably better charts since there is too much data together, however, the time is limited.

Many request have to be done in loop so the implementation of this chart slows down the page very much in the first print. It would be ideal to do a batch fetch request.

#### Task 2: Animating website:

- Chart animations

It is handled mostly by AntD Charts. The animations are displayed when the range of years change. Also when a new country is added in the chart 2.

- Page animations

The animation between charts is handled in a Carousel. There are two ways to swap between charts: by dragging and by clicking on the animated buttons in both sides of the white card.

#### Task 3: World Map data visualization:

- The map

A heat map is displayed together with a input number component to see how the usage increated with the years. The UX could easily improve by allowing to click in the country and see the name and the usage. Maybe a different package would allow a simple addition of the feature.

- The year input

Both a slider and a input field were added so it is easy to set a concrete year is wished (with the input field) or fastly see the change (with the slider) for exploration purposes.

## Results

To be delivered
