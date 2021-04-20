import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import AlbumsList from "./components/AlbumsList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const albumsInfo = [
  {
    id: 1,
    name: "...Baby One More Time",
    release: "January 12, 1999",
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/..._Baby_One_More_Time_%28album%29.png/220px-..._Baby_One_More_Time_%28album%29.png",
    length: "42:20",
  },
  {
    id: 2,
    name: "Oops!... I Did It Again",
    release: "May 16, 2000",
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Britney_Spears_-_Oops%21..._I_Did_It_Again.png/220px-Britney_Spears_-_Oops%21..._I_Did_It_Again.png",
    length: "44:37",
  },
  {
    id: 3,
    name: "Britney",
    release: "October 31, 2001",
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Britney_Spears_-_Britney.png/220px-Britney_Spears_-_Britney.png",
    length: "39:47",
  },
  {
    id: 4,
    name: "In the Zone",
    release: "November 12, 2003",
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/In_the_Zone.png/220px-In_the_Zone.png",
    length: "50:02",
  },
  {
    id: 5,
    name: "Blackout",
    release: "October 25, 2007",
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Britney_Spears_-_Blackout.png/220px-Britney_Spears_-_Blackout.png",
    length: "43:37",
  },
  {
    id: 6,
    name: "Circus",
    release: "December 2, 2008",
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Circus-_Album.png/220px-Circus-_Album.png",
    length: "46:15",
  },
  {
    id: 7,
    name: "Femme Fatale",
    release: "March 25, 2011",
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Britney_Spears_-_Femme_Fatale.png/220px-Britney_Spears_-_Femme_Fatale.png",
    length: "44:00",
  },
  {
    id: 8,
    name: "Britney Jean",
    release: "December 3, 2013",
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Britney_Jean.png/220px-Britney_Jean.png",
    length: "36:04",
  },
  {
    id: 9,
    name: "Glory",
    release: "August 26, 2016",
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Britney_Spears_-_Glory_%28Official_Album_Cover%29.png/220px-Britney_Spears_-_Glory_%28Official_Album_Cover%29.png",
    length: "41:27",
  },
];

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route
          path='/albums'
          render={() => <AlbumsList albums={albumsInfo} />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
