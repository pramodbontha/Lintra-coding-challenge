# Lintra Coding Challenge

The general idea of project is to implement a basic auto-complete list which will be updated dynamically while the user types in a search box. The result will be comprised of movie list containing information like title, release date and poster.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Frontend - client
As mentioned above, the frontend is implemented using React with Typescript. 
To start the application, run the following commands:
```
npm install
npm start
```

Project structure is as follows
```
├── public
├── src
│   ├── components
│   │   ├── AutoComplete
│   │   |   ├── AutoCompleteListItem
│   │   ├── Header
│   │   ├── SearchInput
│   ├── services
│   │   ├── movies
│   ├── pages
│   │   ├── AutoCompletionPage
```
### Components
**Header**- Displays title for the project. 

**AutoComplete**- Takes movies list as input props to display them using **AutoCompleteListItem** styled component.

**AutoCompleteListItem**- Styled list component to displau movies poster, title and release date with a highlighted text and highlighted background when active.

**SearchInput**- Displays the search input field and button. Fetches the movie list based on the input.


### Pages

**products** - This pages displays components Header, AutoComplete and SearchInput. Manages the states for the components.

### services

**movies** - It has **FETCH_MOVIES()** to return movie list data using the "the MovieDB" api.
