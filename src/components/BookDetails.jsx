import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL, BOOK_DETAILS_URL } from "../Api";
import { Grid, Stack, Typography, Box } from "@mui/material";

function BookDetails() {
  const [BookDetails, setBookDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios.get(`${BOOK_DETAILS_URL}/${id}`).then((res) => {
      setBookDetails(res.data);
    });
  }, []);
  return (
    <div >
      <Typography
        marginTop={2}
        marginBottom={2}
        fontWeight="600"
        textAlign={"center"}
        variant="h4"
      >
        {BookDetails.title}
      </Typography>
      <Grid container justifyContent={"center"} spacing={4}>
        <Grid item mt={1}>
          <img
            style={{
              width: "300px",
              height: "300px",
              border: "1px solid black",
              borderRadius: "10px",
            }}
            src={BookDetails?.image_url}
          />
        </Grid>
        <Grid item>
          <Typography variant="h6" mt={2} fontWeight="700" color="primary">
            Authors: {BookDetails?.authors}
          </Typography>
          <Typography variant="h6" mb={2}>
            Rating: {BookDetails?.rating}
          </Typography>
          <Typography color="secondary" variant="h6">
            Description
          </Typography>

          <Typography maxWidth={"700px"} paragraph>
          
            {BookDetails?.description}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default BookDetails;
