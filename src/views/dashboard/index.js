import { Container, Typography } from "@mui/material";
import React from "react";

function DashboardView () {
    return (
        <Container maxWidth='xs' style={{ paddingTop: '5.5rem' }}>
            <Typography variant="h5" align="center">
                You are here!
            </Typography>
            <Typography variant="subtitle1" align="center">
                The firebase configuration works perfectly fine. Still working on this section!
            </Typography>
        </Container>
    )
}

export default DashboardView;