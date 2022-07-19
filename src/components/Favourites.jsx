import React from 'react'
import { UseAppContext } from './context/Context'
import {Stack,Button,Typography,Grid} from '@mui/material' 

function Favourites() {
  const { favourites, addTofavourites, removeFromFavourites } = UseAppContext();
  const favouritesChecker = (id) => {
    const boolean = favourites.some((book) => id === book.id);
    return boolean;}

  return (
    <div style={{minHeight:'80vh'}}>
      <Grid
        spacing={5}
        mt={2}
        container
        justifyContent="center"
        alignItems="center"
        sx={{ xs: "12", md: "6" }}
      >
        {favourites.length>0? favourites.map((book) => {
          return (
            <Grid
              item
              alignItems="center"
              justifyContent="center"
              key={book.id}
            >
              <Stack
                border={"1px solid blue"}
                padding="10px"
                spacing={2}
                direction={"column"}
              >
                <Typography maxWidth="300px" textAlign={"center"} variant="h6">
                  {book.title}
                </Typography>
                <img
                  alt="bookImage"
                  className="bookIMages"
                  src={book.image_url}
                />

                {favouritesChecker(book.id) ? (
                  <Button onClick={() => removeFromFavourites(book.id)}>
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
        }):<h4>You dont have any favourite books yet!</h4>}
      </Grid>
  
    </div>
  )
}

export default Favourites