import React, { useContext, useEffect, useState } from "react";
import { API_URL } from "../../Api";
import "./Home.css";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { Stack, Typography, Button } from "@mui/material";
import { UseAppContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const { favourites, addTofavourites, removeFromFavourites } = UseAppContext();
  const favouritesChecker = (id) => {
    const boolean = favourites.some((book) => id === book.id);
    return boolean;
  };
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="homePageDiv">
      {books.length>0?
      <Grid
        spacing={5}
        mt={2}
        container
        justifyContent="center"
        alignItems="center"
        sx={{ xs: "12", md: "6" }}
      >
        {books.map((book) => {
          return (
            <Grid
              item
              alignItems="center"
              justifyContent="center"
              key={book.id}
            >
              <Stack
                border={"15px solid black"}
                padding="10px"
                spacing={2}
                direction={"column"}
              >
                <Typography 
                maxWidth="300px"
                 textAlign={"center"} 
                 variant="h6">
                  {book.title}
                </Typography>
                <img
                  onClick={() => {
                    navigate(`book/${book.id}`);
                  }}
                  alt="bookImage"
                  className="bookIMages"
                  src={book.image_url}
                />

                {favouritesChecker(book.id) ? (
                  <Button
                  variant='outlined'
                  
                  onClick={() => removeFromFavourites(book.id)}>
                    Remove From Favourites
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      addTofavourites(book);
                    }}
                    variant="contained"
                  >
                    Add To Favourites
                  </Button>
                )}
              </Stack>
            </Grid>
          );
        })}
      </Grid>
      :<div class="loader"></div>}
      {console.log(favourites)}
    </div>
  );
}

export default Home;
